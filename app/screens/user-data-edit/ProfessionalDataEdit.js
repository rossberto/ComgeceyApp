import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import FormInput from '../../components/FormInput';
import FormDateInput from '../../components/FormDateInput';
import { apiUrl } from '../../apiUrl';
import AppContext from '../../../AppContext';

const baseUrl = apiUrl + 'users/';

const fields = [
  {
    id: 'school',
    name:'Escuela donde estudió la licenciatura'
  },
  {
    id: 'start_date',
    name: 'Fecha de inicio de la licenciatura',
    date: true
  },
  {
    id: 'finish_date',
    name: 'Fecha de término de la licenciatura',
    date: true
  },
  {
    id: 'tesis',
    name: 'Título de la tesis'
  },
  {
    id: 'exam_type',
    name: 'Tipo de examen (oral/escrito)'
  },
  {
    id: 'professional_id',
    name: 'Cédula profesional'
  },
  {
    id: 'professional_id_date',
    name: 'Fecha de expedición de la cédula',
    date: true
  },
  {
    id: 'book',
    name: 'Libro, fojas y número'
  },
  {
    id: 'intership',
    name: 'Sitio donde realizó el internado'
  },
  {
    id: 'start_date_internship',
    name: 'Fecha de inicio del internado',
    date: true
  },
  {
    id: 'finish_date_internship',
    name: 'Fecha de término del internado',
    date: true
  },
  {
    id: 'social_service',
    name: 'Lugar donde realizó el servicio social'
  },
  {
    id: 'start_date_social',
    name: 'Fecha de inicio del servicio social',
    date: true
  },
  {
    id: 'finish_date_social',
    name: 'Fecha de término del servicio social',
    date: true
  }
];

function ProfessionalDataEdit({ route, navigation }) {
  const { professional } = route.params;
  const { userId, setProfessional } = useContext(AppContext);
  const [editInfo, setEditInfo] = useState(professional);
  const [pressed, setPressed] = useState(false);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setPressed(true)} style={styles.navtouch}>
          <Icon style={styles.icon} name="save" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    function handleSave(e) {
      const url = baseUrl + userId + '/professional';

      axios.put(url, editInfo).then(response => {
        setProfessional(editInfo);
        navigation.goBack();
      });
    }

    if(pressed) {
      handleSave();
    }
  }, [pressed]);

  function handleUserDataChange(id, val) {
    setEditInfo({...editInfo, [id]:val});
  }

  return (
    <ScrollView style={styles.section}>
      {
        fields.map((field) => field.date ?
            <FormDateInput
              key={field.id}
              id={field.id}
              name={field.name}
              value={editInfo[field.id]}
              handleValueChange={handleUserDataChange}
            /> :
            <FormInput
              key={field.id}
              id={field.id}
              name={field.name}
              value={editInfo[field.id]}
              handleValueChange={handleUserDataChange}
            />
        )
      }

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
