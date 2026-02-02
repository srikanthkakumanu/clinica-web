import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import DoctorListScreen from './src/screens/DoctorListScreen';
import DoctorFormScreen from './src/screens/DoctorFormScreen';
import ClinicListScreen from './src/screens/ClinicListScreen';
import ClinicFormScreen from './src/screens/ClinicFormScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Doctors" component={DoctorListScreen} />
        <Stack.Screen name="DoctorForm" component={DoctorFormScreen} />
        <Stack.Screen name="Clinics" component={ClinicListScreen} />
        <Stack.Screen name="ClinicForm" component={ClinicFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
