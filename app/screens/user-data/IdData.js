import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function IdData({ navigation }) {
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.sectionheader}>Ficha de Identificación</Text>
        <TouchableOpacity style={styles.navtouch} onPress={() => navigation.navigate('Ficha de Identificación', { name: 'Ficha de Identificación' })}>
          <Icon style={styles.icon} name="edit" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text>Roberto Ross León</Text>
        <Text>22-06-1982</Text>
        <Text>Mérida, Yucatán</Text>
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
