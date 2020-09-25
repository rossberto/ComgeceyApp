import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';

const openConvs = [
  {
    name: 'Renovación de certificación',
    state: 'Abierta',
    action: 'Inscribirme'
  },
  {
    name: 'Examen de certificación 10/2020',
    state: 'Abierta',
    action: 'Inscribirme'
  }
];

const myConvs = [
  {
    name: 'Examen de certificación 10/2019',
    state: 'Abierta'
  }
];

function Convocatories() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Convocatorias</Text>

      <View>
        <Text style={styles.subheader}>Convocatorias Abiertas</Text>
        <ScrollView>
          {openConvs.map(conv => {
            return (
              <View key={conv.name} style={styles.convs}>
                <TouchableOpacity>
                  <Text style={styles.convtext}>{conv.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>{conv.state}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.suscribebutton}>
                  <Text>{conv.action}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.divisor} />

      <View>
        <Text style={styles.subheader}>Mis Convocatorias</Text>
        <ScrollView>
          {myConvs.map(conv => {
            return (
              <View key={conv.name} style={styles.convs}>
                <TouchableOpacity>
                  <Text style={styles.convtext}>{conv.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text>{conv.state}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20
  },
  header: {
    fontSize: 25,
    padding: 10,
    alignSelf: 'center'
  },
  subheader: {
    fontSize: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 5,
    borderBottomWidth: 1
  },
  convs: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  suscribebutton: {
    backgroundColor: '#7a6800',
    padding: 6
  },
  convtext: {
    width: 150,
    paddingVertical: 10
  },
  divisor: {
    marginVertical: 20
  }
});

export default Convocatories;
