import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormInput from '../../components/FormInput';


function AddressDataEdit({ navigation }) {
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
        <FormInput name="Calle"></FormInput>
        <FormInput name="Número"></FormInput>
        <FormInput name="Colonia"></FormInput>
        <FormInput name="Código Postal"></FormInput>
        <FormInput name="Ciudad"></FormInput>
        <FormInput name="Estado"></FormInput>
        <FormInput name="Número de Teléfono"></FormInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 10
  },
  navtouch: {
    padding: 10
  }
});

export default AddressDataEdit;
