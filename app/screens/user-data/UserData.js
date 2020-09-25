import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IdData from './IdData';
import AddressData from './AddressData';
import ProfessionalData from './ProfessionalData';

function UserData() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Perfil de Médico</Text>
        <Text style={styles.userlocation}>dev@rross.me</Text>
      </View>

      <View style={styles.divisor} />

      <IdData />

      <View style={styles.divisor} />

      <AddressData />

      <View style={styles.divisor} />

      <ProfessionalData />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  header: {
    marginBottom: 20
  },
  username: {
    alignSelf: 'center',
    fontSize: 25
  },
  userlocation: {
    alignSelf: 'center',
    fontSize: 15
  },
  divisor: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1
  }
});

export default UserData;