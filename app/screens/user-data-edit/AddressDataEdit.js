import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FormInput from '../../components/FormInput';


function AddressDataEdit({ route, navigation }) {
  const { info } = route.params;
  const [editInfo, setEditInfo] = useState(info);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.navtouch}>
          <Icon style={styles.icon} name="save" size={30} color="black" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  function handleUserDataChange(id, val) {
    setEditInfo({...editInfo, [id]:val});
  }

  return (
    <ScrollView style={styles.section}>
        <FormInput
          id="street"
          name="Calle"
          value={info.street}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="number"
          name="Número"
          value={info.number}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="town"
          name="Colonia"
          value={info.town}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="zip_code"
          name="Código Postal"
          value={info.zip_code}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="city"
          name="Ciudad"
          value={info.city}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="state"
          name="Estado"
          value={info.state}
          handleValueChange={handleUserDataChange}
        />
        <FormInput
          id="phone"
          name="Número de Teléfono"
          value={info.phone}
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
