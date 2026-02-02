import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { api } from '../services/api';

const DoctorFormScreen = ({ navigation, route }) => {
  const { doctor } = route.params || {};
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    pincode: '',
  });

  useEffect(() => {
    if (doctor) {
      setForm({
        firstName: doctor.firstName,
        lastName: doctor.lastName,
        address: doctor.address,
        city: doctor.city,
        pincode: doctor.pincode,
      });
    }
  }, [doctor]);

  const handleSave = async () => {
    try {
      if (doctor) {
        await api.updateDoctor(doctor.id, form);
      } else {
        await api.createDoctor(form);
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save doctor');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={form.firstName}
        onChangeText={(text) => setForm({ ...form, firstName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={form.lastName}
        onChangeText={(text) => setForm({ ...form, lastName: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={form.address}
        onChangeText={(text) => setForm({ ...form, address: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={form.city}
        onChangeText={(text) => setForm({ ...form, city: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Pincode"
        value={form.pincode}
        onChangeText={(text) => setForm({ ...form, pincode: text })}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { borderWidth: 1, padding: 10, marginVertical: 5 },
  saveButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: { color: 'white', textAlign: 'center' },
});

export default DoctorFormScreen;
