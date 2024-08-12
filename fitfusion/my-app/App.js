import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginForm from './componentes/LoginForm';
import Home from './componentes/Home';
import Tabela from './componentes/Tabela';
import IMC from './componentes/IMC';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginForm"
          component={LoginForm}
          options={{ title: 'Login', headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'FitFusion!', headerShown: false }}
        />
        <Stack.Screen
          name="Tabela"
          component={Tabela}
          options={{ title: 'Tabela', headerShown: false }}
        />
        <Stack.Screen
          name="IMC"
          component={IMC}
          options={{ title: 'IMC', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}