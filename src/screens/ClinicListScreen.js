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

const ClinicListScreen = ({ navigation }) => {
  const [clinics, setClinics] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadClinics();
  }, [page]);

  const loadClinics = async () => {
    setLoading(true);
    try {
      const data = await api.getClinics(page, 10);
      setClinics(data.content || []);
    } catch (error) {
      Alert.alert('Error', 'Failed to load clinics');
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    Alert.alert('Confirm', 'Delete this clinic?', [
      { text: 'Cancel' },
      {
        text: 'Delete',
        onPress: async () => {
          try {
            await api.deleteClinic(id);
            loadClinics();
          } catch (error) {
            Alert.alert('Error', 'Failed to delete clinic');
          }
        },
      },
    ]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.name}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ClinicForm', { clinic: item })}
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
        onPress={() => navigation.navigate('ClinicForm')}
      >
        <Text style={styles.addButtonText}>Add Clinic</Text>
      </TouchableOpacity>
      <FlatList
        data={clinics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        onRefresh={loadClinics}
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

export default ClinicListScreen;
