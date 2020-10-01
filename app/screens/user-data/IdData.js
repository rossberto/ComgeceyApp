import React, { useContext } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppContext from '../../../AppContext';

function IdData({ navigation }) {
  const appContext = useContext(AppContext);
  const { userInfo } = appContext.userData;

  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.sectionheader}>Ficha de Identificación</Text>
        <TouchableOpacity style={styles.navtouch} onPress={() => navigation.navigate('Ficha de Identificación', { name: 'Ficha de Identificación' })}>
          <Icon style={styles.icon} name="edit" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{userInfo.name} {userInfo.father_lname} {userInfo.mother_lname}</Text>
        <Text>{userInfo.birthdate}</Text>
        <Text>{userInfo.birth_city}, {userInfo.birth_state}</Text>
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
  navtouch: {
    paddingHorizontal: 10
  }
});

export default IdData;
