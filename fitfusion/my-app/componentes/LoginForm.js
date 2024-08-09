import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, ImageBackground, Pressable } from 'react-native';
import MaskInput from 'react-native-mask-input';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('screen');

const users = [

  { email: 'user1.com', pass: '123456' },
  { email: 'user2', pass: '56789' }
];

export default function LoginForm({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [viewPassword, setViewPassword] = React.useState(false);

  const validaUsuario = () => {
    const foundUser = users.find(user => user.pass === pass && user.email === email);
    if (foundUser) {
      navigation.navigate("Home");
    }
  };

  return (
    <ImageBackground source={{ uri: '../assets/img.png' }} resizeMode='cover' style={styles.image} >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>Faça seu Login!</Text>
          {/* USERNAME */}
          <MaskInput
            style={styles.textInput}
            onChangeText={(masked, unmasked) => setEmail(masked)}
            value={email}
            placeholder="Username"
          />

          <View style={styles.textInput}>
            <TextInput
              mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
              onChangeText={(masked, unmasked) => setPass(masked)}
              value={pass}
              secureTextEntry={!viewPassword}
              placeholder="Password"
              placeholderTextColor={'#FFFFFF'}
              keyboardType="numeric"
              selectTextOnFocus={false}
              autoFocus={false}
              focusable={false}
              caretHidden={true}
              style={{ color: 'white', width: '100%', height: '100%' }}
            />
            <Pressable onPress={() => setViewPassword(!viewPassword)}>  
              <Icon name={viewPassword ? 'visibility' : 'visibility-off'} size={24} color="#ccc" />  
            </Pressable>
          </View>
          <TouchableOpacity onPress={validaUsuario} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
          {/* SENHA */}
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
    gap: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    backgroundColor: '#transparent',

    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
    fontFamily: 'Poppins-Regular  '
  },
  textInput: {
    padding: 8,
    height: 50,
    width: 250,
    borderColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#FFFFFF',
    borderRadius: 5,
    color: '#FFFFFF',
    placeholder: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderTopWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
    // borderTopWidth: 0,
    // borderLeftWidth: 0,
    // borderRightWidth: 0,
  },
  loginButton: {
    backgroundColor: '#4DA6A8',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#111',
    marginTop: 5,
    padding: 8,
    height: 50,
    width: 250,

  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});