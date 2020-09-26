/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './app/screens/SignIn';
import HomeTabs from './app/screens/HomeTabs';

const Stack = createStackNavigator();

function IdEdit() {
  return (
    <View>
      <Text>En edición de Id</Text>
    </View>
  );
}

function App() {
  const [signed, setSigned] = useState(true);

  return (
    <NavigationContainer>
        {signed ? (
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name="Editar Id" component={IdEdit} />
          </Stack.Navigator>
          ):
          <Stack.Navigator headerMode="none">
            <Stack.Screen
              name="Credenciales"
              component={SignIn}
            />
          </Stack.Navigator>
        }
    </NavigationContainer>
  );
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
