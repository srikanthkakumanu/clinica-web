import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { api } from '../services/api';

const DoctorListScreen = ({ navigation }) => {
  const [doctors, setDoctors] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadDoctors();
  }, [page]);

  const loadDoctors = async () => {
    setLoading(true);
    try {
      const data = await api.getDoctors(page, 10);
      setDoctors(data.content || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to load doctors');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    Alert.alert('Confirm', 'Delete this doctor?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: async () => {
          try {
            await api.deleteDoctor(id);
            loadDoctors();
          } catch (error) {
            Alert.alert('Error', 'Failed to delete doctor');
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>
        {item.firstName} {item.lastName}
      </Text>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DoctorForm', { doctor: item })}
        >
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('DoctorForm')}
      >
        <Text style={styles.addButtonText}>Add Doctor</Text>
      </TouchableOpacity>
      <FlatList
        data={doctors}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={loadDoctors}
        refreshing={loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  addButton: {
    backgroundColor: '#28A745',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  addButtonText: { color: 'white', textAlign: 'center' },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
  },
  actions: { flexDirection: 'row' },
  edit: { color: 'blue', marginRight: 10 },
  delete: { color: 'red' },
});

export default DoctorListScreen;
