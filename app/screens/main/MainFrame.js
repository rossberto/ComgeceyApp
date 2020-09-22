import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserData from './UserData';

function MainFrame() {
  return (
    <View style={styles.container}>
      <UserData style={styles.userdata} />
      <View style={styles.iconsmenu}>
        <Icon style={styles.icon} name="person" size={30} color="white" />
        <Icon style={styles.icon} name="notifications" size={30} color="white" />
        <Icon style={styles.icon} name="menu" size={30} color="white" />
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
