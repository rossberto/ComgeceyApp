import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ProfessionalData({ navigation }) {
  return (
    <View style={styles.section}>
      <View>
        <View style={styles.header}>
          <Text style={styles.sectionheader}>Profesional</Text>
          <Icon style={styles.icon} name="edit" size={30} color="black" onPress={() => navigation.navigate('Profesional', { name: 'Profesional' })} />
        </View>
        <View style={styles.subsection}>
            <Text style={styles.subsectionheader}>Licenciatura</Text>

            <Text style={styles.field}>Escuela donde estudió la licenciatura:</Text>
            <Text>Instituto Tecnológico de Mérida</Text>
            <Text>Del 02-01-2001 al 06-09-2007</Text>

            <Text style={styles.field}>Título de la tesis:</Text>
            <Text>Codificadores iLBC y Speex</Text>

            <Text style={styles.field}>Tipo de examen (Oral y/o Escrito):</Text>
            <Text>Oral y Escrito</Text>

            <Text style={styles.field}>Cédula Profesional:</Text>
            <Text>1234535</Text>

            <Text style={styles.field}>Fecha de Expedición de Cédula:</Text>
            <Text>06-06-2007</Text>

            <Text style={styles.field}>Libro, Fojas y Número:</Text>
            <Text>Libro 34 fojas 123-234</Text>
        </View>

        <View style={styles.subsection}>
            <Text style={styles.subsectionheader}>Internado y Servicio Social</Text>

            <Text style={styles.field}>Sitio donde realizó el internado:</Text>
            <Text>Hospital Juárez</Text>
            <Text>Del 02-01-2001 al 06-09-2007</Text>

            <Text style={styles.field}>Lugar donde realizó el servicios social:</Text>
            <Text>Catmis</Text>
            <Text>Del 02-01-2001 al 06-09-2007</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    paddingVertical: 10
  },
  sectionheader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  subsection: {
    marginBottom: 5
  },
  subsectionheader: {
    fontWeight: 'bold'
  },
  field: {
    color: '#7a6800'
  }
});

export default ProfessionalData;
