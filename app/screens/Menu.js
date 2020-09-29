import React, { useContext } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppContext from '../../AppContext';

function Menu() {
  const appContext = useContext(AppContext);
  const { setSigned } = appContext;

  const handleSignOut = () => {
    setSigned(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textheader}>Menú</Text>

      <TouchableOpacity style={styles.option} onPress={() => Linking.openURL('tel:9992280344')}>
        <Text style={styles.optiontext}>Llamar</Text>
        <Icon style={styles.icon} name="phone" size={35} color="black"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => Linking.openURL('mailto:contacto@comgecey.org')}>
        <Text style={styles.optiontext}>Enviar Correo</Text>
        <Icon style={styles.icon} name="mail" size={35} color="black"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => Linking.openURL('https://app.comgecey.org/signin')}>
        <Text style={styles.optiontext}>Abrir en Navegador Web</Text>
        <Icon style={styles.icon} name="web" size={35} color="black"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optiontext}>Acerca De</Text>
        <Icon style={styles.icon} name="info-outline" size={35} color="black"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={handleSignOut}>
        <Text style={styles.optiontext}>Cerrar Sesión</Text>
        <Icon style={styles.icon} name="logout" size={35} color="black"/>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  textheader: {
    color: 'white',
    backgroundColor: 'black',
    padding: 10,
    fontSize: 25,
    marginBottom: 15
  },
  optiontext: {
    color: 'black',
    fontSize: 20
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 10
  }
});

export default Menu;
