import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Button, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormInput from '../../components/FormInput';
import FormDateInput from '../../components/FormDateInput';

function IdDataEdit({ route, navigation }) {
  const { userInfo } = route.params;
  const [editInfo, setEditInfo] = useState(userInfo);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navtouch}>
          <Icon style={styles.icon} name="save" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  useEffect(() => {
    console.log(editInfo);
  }, [editInfo]);

  function handleUserDataChange(id, val) {
    setEditInfo({...editInfo, [id]:val});
  }

  return (
    <ScrollView style={styles.section}>
        <FormInput
          id="name"
          name="Nombre"
          value={editInfo.name}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="father_lname"
          name="Apellido Paterno"
          value={editInfo.father_lname}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="mother_lname"
          name="Apellido Materno"
          value={editInfo.mother_lname}
          handleValueChange={handleUserDataChange}
        />
        <FormDateInput
          id="birthdate"
          name="Fecha de Nacimiento"
          value={editInfo.birthdate}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="birth_state"
          name="Estado de Nacimiento"
          value={editInfo.birth_state}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="birth_city"
          name="Ciudad de Nacimiento"
          value={editInfo.birth_city}
          handleValueChange={handleUserDataChange}
        />
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

export default IdDataEdit;
