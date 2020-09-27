import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormInput from '../../components/FormInput';

function ProfessionalDataEdit({ navigation }) {
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
        <FormInput name="Escuela donde estudió la licenciatura"></FormInput>
        <FormInput name="Fecha de inicio de la licenciatura"></FormInput>
        <FormInput name="Fecha de término de la licenciatura"></FormInput>
        <FormInput name="Título de la tesis"></FormInput>
        <FormInput name="Tipo de examen (oral/escrito)"></FormInput>
        <FormInput name="Cédula profesional"></FormInput>
        <FormInput name="Fecha de expedición de la cédula"></FormInput>
        <FormInput name="Libro, fojas y número"></FormInput>

        <FormInput name="Sitio donde realizó el internado"></FormInput>
        <FormInput name="Fecha de inicio del internado"></FormInput>
        <FormInput name="Fecha de término del internado"></FormInput>

        <FormInput name="Lugar donde realizó el servicio social"></FormInput>
        <FormInput name="Fecha de inicio del servicio social"></FormInput>
        <FormInput name="Fecha de término del servicio social"></FormInput>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  section: {
    padding: 10
  },
  field: {
    color: '#7a6800'
  },
  navtouch: {
    padding: 10
  }
});

export default ProfessionalDataEdit;
