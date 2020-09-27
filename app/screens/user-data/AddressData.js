import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AddressData({ navigation }) {
  const [selected, setSelected] = useState('Particular');

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.sectionheader}>Domicilio</Text>
        <TouchableOpacity style={styles.navtouch} onPress={() => navigation.navigate('Domicilio', { name: 'Domicilio' })} >
          <Icon style={styles.icon} name="edit" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.selector}>
        <Text style={selected === 'Particular' ? styles.selected : {color: '#7a6800'}} onPress={() => setSelected('Particular')}>Particular</Text>
        <Text style={selected === 'Correspondencia' ? styles.selected : {color: '#7a6800'}} onPress={() => setSelected('Correspondencia')}>Correspondencia</Text>
      </View>
      <View>
        <Text>Calle 123 #345, Francisco de Montejo</Text>
        <Text>CP 97123, Mérida, Yucatán</Text>
        <Text>9992255874</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontWeight: 'bold',
    marginBottom: 5
  },
  selected: {
    borderBottomColor: '#7a6800',
    borderBottomWidth: 2,
    fontWeight: 'bold',
    color: '#7a6800'
  },
  section: {
    paddingVertical: 10
  },
  sectionheader: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10
  },
  navtouch: {
    paddingHorizontal: 10
  }
});

export default AddressData;
