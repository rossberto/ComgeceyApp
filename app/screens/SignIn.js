/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useContext } from 'react';
import axios from 'axios';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import FormInput from '../components/FormInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppContext from '../../AppContext';
import { apiUrl } from '../apiUrl';
import { API_SECRET } from "@env";

const baseUrl = apiUrl + 'auth/';

const addressInfo = {
  street: '',
  number: '',
  town: '',
  city: '',
  state: '',
  zip_code: '',
  phone: ''
}

const professionalInfo = {
  school: '',
  start_date: '',
  finish_date: '',
  intership: '',
  start_date_internship: '',
  finish_date_internship: '',
  social_service: '',
  start_date_social: '',
  finish_date_social: '',
  exam_date: '',
  exam_type: '',
  tesis: '',
  professional_id: '',
  professional_id_date: '',
  book: '',
  ssa: ''
}

function SignIn({ navigation }) {
  const appContext = useContext(AppContext);
  const { setSigned, userData, setUserData, setToken, setUserId, setIsAdmin } = appContext;
  const [fetched, setFetched] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    setFetched(false);

    axios.post(baseUrl, {email: 'dev@rross.me', password: '1234'}).then(response => {
      if (response.status === 201) {
        console.log('yeah, nos aceptaron');

        // Later will be setted as persistent data using sqlite3
        setIsAdmin(response.data.user.is_admin);
        setUserId(response.data.user.id);
        setToken(response.data.access_token + ':' + API_SECRET);

        response.data.user.birthdate = response.data.user.birthdate.slice(0,10);
        setUserData({
          userInfo: response.data.user,
          address: addressInfo,
          mail: addressInfo,
          professional: professionalInfo
        });
        setSigned(true);

        setFetched(true);
      } else {
        console.log('Usuario y/o contraseña incorrectos');
        //alert('Usuario y/o contraseña incorrectos');
        setFetched(true);
      }
    }).catch(err => {
      console.log(err);
      console.log('Usuario no ha confirmado correo o le falta completar su información de registro.');
      //alert('Usuario no ha confirmado correo o le falta completar su información de registro.');
      setFetched(true);
    });
  }

  function handleEmailChange(id, text) {
    setEmail(text);
  }

  function handlePasswordChange(id, text) {
    setPassword(text);
  }

  return(
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./comgecey-02lr2.png')}
      />
      <Icon style={styles.icon} name="lock-outline" size={20} color="white" />
      <Text style={styles.header}>Ingreso</Text>
      <FormInput name="Correo Electrónico" id="email" handleValueChange={handleEmailChange} />
      <FormInput name="Contraseña" id="password" handleValueChange={handlePasswordChange} />
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
