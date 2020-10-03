import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import { apiUrl } from '../../apiUrl';
import AppContext from '../../../AppContext';

const baseUrl = apiUrl + 'users/';

function AddressData({ navigation }) {
  const [endpoint, setEndpoint] = useState('/address');
  const { userId } = useContext(AppContext);
  const [info, setInfo] = useState({
    street: '',
    number: '',
    town: '',
    city: '',
    state: '',
    zip_code: '',
    phone: ''
  });

  useEffect(() => {
    const url = baseUrl + userId + endpoint;

    axios.get(url).then(response => {
      if (Object.keys(response.data)[0] === 'address') {
        setInfo(response.data.address);
      } else if (Object.keys(response.data)[0] === 'mail') {
        setInfo(response.data.mail);
      }

      //setFetched(true);
    }).catch(err => {
      console.log(err);
    });
  }, [endpoint]);

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.sectionheader}>Domicilio</Text>
        <TouchableOpacity style={styles.navtouch} onPress={() => navigation.navigate('Domicilio', { info })} >
          <Icon style={styles.icon} name="edit" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.selector}>
        <Text style={endpoint === '/address' ? styles.selected : {color: '#7a6800'}} onPress={() => setEndpoint('/address')}>Particular</Text>
        <Text style={endpoint === '/mail' ? styles.selected : {color: '#7a6800'}} onPress={() => setEndpoint('/mail')}>Correspondencia</Text>
      </View>
      <View>
        <Text>{info.street} #{info.number}, {info.town}</Text>
        <Text>CP {info.zip_code}, {info.city}, {info.state}</Text>
        <Text>{info.phone}</Text>
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
