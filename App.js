/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import SignIn from './app/screens/SignIn';
import MainFrame from './app/screens/main/MainFrame';

function App() {
  return <MainFrame />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  logo: {
    alignSelf: 'center',
    width: '100%',
    height: 220
  },
  header: {
    marginBottom: 15,
    alignSelf: 'center',
    fontSize: 20
  }
});

export default App;
