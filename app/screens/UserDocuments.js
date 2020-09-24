import React from 'react';
import { StyleSheet, View, ScrollView, Text, FlatList, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DATA = [
  {
    id: '1',
    title: 'SOLICITUD',
    url: 'x'
  },
  {
    id: '2',
    title: 'CURP',
    url: ''
  },
  {
    id: '3',
    title: 'RFC',
    url: 'x'
  },
  {
    id: '4',
    title: 'COMPROBANTE DE DOMICILIO',
    url: 'x'
  },
  {
    id: '5',
    title: 'TITULO PROFESIONAL',
    url: ''
  },
  {
    id: '6',
    title: 'COMPROBANTE DE PAGO',
    url: 'x'
  },
];

const Item = ({ title, url }) => (
  <View style={styles.item}>
    <View>
      <Text style={styles.title}>{title}</Text>
      {url === 'x' ? <Icon style={styles.icon} name="attachment" size={30} color="black"/> :
                     <Icon style={styles.icon} name="add" size={30} color="black"/> }
    </View>
    <Icon style={styles.icon} name="more-vert" size={30} color="black"/>
  </View>
);

function UserDocuments() {
  const renderItem = ({ item }) => (
    <Item title={item.title} url={item.url} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Documentos</Text>

      <View>
        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
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
    padding: 10
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 5,
    borderBottomWidth: 1
  }
});

export default UserDocuments;
