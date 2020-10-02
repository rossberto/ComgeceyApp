import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity, Button, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import FormInput from '../../components/FormInput';
import FormDateInput from '../../components/FormDateInput';

function IdDataEdit({ navigation }) {
  const [editInfo, setEditInfo] = useState({});

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
    console.log(id);
    console.log(val);
    setEditInfo({...editInfo, [id]:val});
  }

  const [date, setDate] = useState(new Date(1598051730000));
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    console.log(event);
    console.log(selectedDate);
    const currentDate = selectedDate || date;
    //setShow(Platform.OS === 'android');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  return (
    <ScrollView style={styles.section}>
        <FormInput
          id="name"
          name="Nombre"
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="father_lname"
          name="Apellido Paterno"
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="mother_lname"
          name="Apellido Materno"
          handleValueChange={handleUserDataChange}
        />
        <FormDateInput
          id="birthdate"
          name="Fecha de Nacimiento"
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="state"
          name="Estado de Nacimiento"
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="city"
          name="Ciudad de Nacimiento"
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
