import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserData from './user-data/UserData';
import UserDocuments from './UserDocuments';
import Convocatories from './Convocatories';

function MainFrame() {
  const screens = [
    <UserData style={styles.userdata} />,
    <UserDocuments style={styles.userdata} />,
    <Convocatories style={styles.userdata} />
  ]
  const [screen, setScreen] = useState(0);

  return (
    <View style={styles.container}>
      {screens[screen]}
      <View style={styles.iconsmenu}>
        <Icon style={styles.icon} name="person" size={30} color="white" onPress={() => setScreen(0)} />
        <Icon style={styles.icon} name="folder-open" size={30} color="white" onPress={() => setScreen(1)} />
        <Icon style={styles.icon} name="ballot" size={30} color="white" onPress={() => setScreen(2)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'lightgray'
  },
  userdata: {
    marginBottom: 5
  },
  iconsmenu: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10
  }
});

export default MainFrame;
