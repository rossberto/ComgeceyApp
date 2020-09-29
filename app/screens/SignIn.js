/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useContext } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppContext from '../../AppContext';

function SignIn({ navigation }) {
  const appContext = useContext(AppContext);
  const { signed, setSigned } = appContext;

  const handleSignIn = () => {
    setSigned(true);
  }

  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./comgecey-02lr2.png')}
      />
      <Icon style={styles.icon} name="lock-outline" size={20} color="white" />
      <Text style={styles.header}>Ingreso</Text>
      <FormInput name="Correo Electrónico" id="email" />
      <FormInput name="Contraseña" id="password"/>
      <TouchableOpacity style={styles.button} onPress={handleSignIn} >
        <Text style={styles.buttonText}>INGRESAR</Text>
      </TouchableOpacity>
      <Text style={styles.forgot} accessibilityRole="button">¿Olvidaste tu contraseña?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  logo: {
    alignSelf: 'center',
    width: '100%',
    height: 220
  },
  header: {
    marginBottom: 5,
    alignSelf: 'center',
    fontSize: 20
  },
  button: {
    marginVertical: 10,
    padding: 15,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold'
  },
  forgot: {
    alignSelf: 'center'
  },
  icon: {
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#7a6800',
    borderRadius: 50,
    padding: 10
  }
});

export default SignIn;
