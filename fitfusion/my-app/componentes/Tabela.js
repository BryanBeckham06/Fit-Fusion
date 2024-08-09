import React, { useState } from 'react';
import { StatusBar, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  const getGreeting = () => {
    return isDay ? '' : '';
  };

  const getBackgroundColor = () => {
    return isDay ? '#000000' : '#000000';
  };

  const handleButtonClick = () => {
    toggleDayNight(); 
  };

  return (

    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>

      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>

      {/* //botao para trocar imagem sol para lua */}
        <Image 
          source={isDay ? require('../assets/tab.png') : require('../assets/tab2.png')}
          style={styles.icon}
        />

      </TouchableOpacity>

      {/* //botao para modificar de sol para lua */}
      <TouchableOpacity onPress={handleButtonClick} style={styles.toggleButton}>
        <Text style={styles.buttonText}>Tabela</Text> 
      </TouchableOpacity>

      {/* //botao para modificar texto */}
      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  toggleButton: {
    marginBottom: 0,
  },

  buttonText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    top: 150,
    backgroundColor: '#1b98e0',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#1b98e0',
  },
  

  icon: {
    width: 400,
    height: 360,
  },

  greeting: {
    fontSize: 54,
    fontWeight: 'bold',
  },

});