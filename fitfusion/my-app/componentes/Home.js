import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground  } from 'react-native';

export default function OpcaoCal({ navigation }) {

  const goToAgeScreen = () => {

    navigation.navigate('Tabela');

  };

  const goToInterestScreen = () => {

    navigation.navigate('IMC');

  };

  return (
  <ImageBackground source={{ uri: '../assets/img2.png' }} resizeMode='cover' style={styles.image} >
    <View style={styles.container}>

      <Text style={styles.title}>Escolha uma das opção abaixo:</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} onPress={goToAgeScreen}>

          <Text style={styles.buttonText}>Tabelas</Text>

        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={goToInterestScreen}>

          <Text style={styles.buttonText}>IMC</Text>

        </TouchableOpacity>

      </View>

    </View>

    </ImageBackground>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#4DA6A8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#d1eea5yarn web',
    marginTop: 5,
    padding: 8,
    height: 40,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
   
  },
  
});