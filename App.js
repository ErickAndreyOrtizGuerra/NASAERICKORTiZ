import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/HomeScreen';
import PhotoDetailScreen from './src/screens/PhotoDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0B1426',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 18,
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: '🚀 Fotos de Marte - Curiosity' }}
          />
          <Stack.Screen 
            name="PhotoDetail" 
            component={PhotoDetailScreen}
            options={{ title: '📸 Detalle de la Foto' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
// Navegación configurada entre pantallas
