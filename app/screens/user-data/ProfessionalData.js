import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { apiUrl } from '../../apiUrl';
import AppContext from '../../../AppContext';

const baseUrl = apiUrl + 'users/';

function ProfessionalData({ navigation }) {
  const { userId } = useContext(AppContext);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const url = baseUrl + userId + '/professional';

    axios.get(url).then(response => {
      const professionalData = Object.assign({}, response.data.professional);

      const dates = ['start_date', 'finish_date', 'start_date_internship', 'finish_date_internship', 'start_date_social', 'finish_date_social', 'exam_date', 'professional_id_date']
      dates.forEach(date => {
        professionalData[date] = professionalData[date].slice(0, 10);
      });

      setInfo(professionalData);

      //setFetched(true);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <View style={styles.section}>
      <View>
        <View style={styles.header}>
          <Text style={styles.sectionheader}>Profesional</Text>
          <TouchableOpacity style={styles.navtouch} onPress={() => navigation.navigate('Profesional', { info })}>
            <Icon style={styles.icon} name="edit" size={30} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.subsection}>
            <Text style={styles.subsectionheader}>Licenciatura</Text>

            <Text style={styles.field}>Escuela donde estudió la licenciatura:</Text>
            <Text>{info.school}</Text>
            <Text>Del {info.start_date} al {info.finish_date}</Text>

            <Text style={styles.field}>Título de la tesis:</Text>
            <Text>{info.tesis}</Text>

            <Text style={styles.field}>Tipo de examen (Oral y/o Escrito):</Text>
            <Text>{info.exam_type}</Text>

            <Text style={styles.field}>Cédula Profesional:</Text>
            <Text>{info.professional_id}</Text>

            <Text style={styles.field}>Fecha de Expedición de Cédula:</Text>
            <Text>{info.professional_id_date}</Text>

            <Text style={styles.field}>Libro, Fojas y Número:</Text>
            <Text>{info.book}</Text>
        </View>

        <View style={styles.subsection}>
            <Text style={styles.subsectionheader}>Internado y Servicio Social</Text>

            <Text style={styles.field}>Sitio donde realizó el internado:</Text>
            <Text>{info.intership}</Text>
            <Text>Del {info.start_date_internship} al {info.finish_date_internship}</Text>

            <Text style={styles.field}>Lugar donde realizó el servicios social:</Text>
            <Text>{info.social_service}</Text>
            <Text>Del {info.start_date_social} al {info.finish_date_social}</Text>
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
  },
  navtouch: {
    paddingHorizontal: 10
  }
});

export default ProfessionalData;
