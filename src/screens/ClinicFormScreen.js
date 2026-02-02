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

const ClinicFormScreen = ({ navigation, route }) => {
  const { clinic } = route.params || {};
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
    email: '',
  });

  useEffect(() => {
    if (clinic) {
      setForm({
        name: clinic.name,
        address: clinic.address,
        city: clinic.city,
        pincode: clinic.pincode,
        phone: clinic.phone,
        email: clinic.email,
      });
    }
  }, [clinic]);

  const handleSave = async () => {
    try {
      if (clinic) {
        await api.updateClinic(clinic.id, form);
      } else {
        await api.createClinic(form);
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save clinic');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={form.name}
        onChangeText={(text) => setForm({ ...form, name: text })}
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
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={form.phone}
        onChangeText={(text) => setForm({ ...form, phone: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
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

export default ClinicFormScreen;
