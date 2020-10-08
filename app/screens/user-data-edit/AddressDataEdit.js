import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import FormInput from '../../components/FormInput';
import { apiUrl } from '../../apiUrl';
import AppContext from '../../../AppContext';

const baseUrl = apiUrl + 'users/';

function AddressDataEdit({ route, navigation }) {
  const { endpoint } = route.params;
  const { userId, userData, setUserData } = useContext(AppContext);
  const [editInfo, setEditInfo] = useState(userData[endpoint]);
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
      const url = baseUrl + userId + '/' + endpoint;
      axios.put(url, editInfo).then(response => {
        setUserData({...userData, [endpoint]:editInfo});
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
        <FormInput
          id="street"
          name="Calle"
          value={userData[endpoint].street}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="number"
          name="Número"
          value={userData[endpoint].number}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="town"
          name="Colonia"
          value={userData[endpoint].town}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="zip_code"
          name="Código Postal"
          value={userData[endpoint].zip_code}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="city"
          name="Ciudad"
          value={userData[endpoint].city}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="state"
          name="Estado"
          value={userData[endpoint].state}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="phone"
          name="Número de Teléfono"
          value={userData[endpoint].phone}
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

export default AddressDataEdit;
