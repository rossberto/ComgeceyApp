import React from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormInput from '../../components/FormInput';

function IdDataEdit({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navtouch}>
          <Icon style={styles.icon} name="save" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={styles.section}>
        <FormInput name="Nombre"></FormInput>
        <FormInput name="Apellido Paterno"></FormInput>
        <FormInput name="Apellido Materno"></FormInput>
        <FormInput name="Fecha de Nacimiento"></FormInput>
        <FormInput name="Estado de Nacimiento"></FormInput>
        <FormInput name="Ciudad de Nacimiento"></FormInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    padding: 10
  },
  sectionheader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  navtouch: {
    padding: 10
  }
});

export default IdDataEdit;
