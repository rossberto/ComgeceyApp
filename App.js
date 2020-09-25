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
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from './app/screens/SignIn';
import MainFrame from './app/screens/MainFrame';
import UserData from './app/screens/user-data/UserData';
import UserDocuments from './app/screens/UserDocuments';
import Convocatories from './app/screens/Convocatories';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let iconColor = 'black';
            let iconBackgroundColor = 'white';

            if (route.name === 'Perfil') {
              iconName = focused
                ? 'person-outline'
                : 'person';
            } else if (route.name === 'Documentos') {
              iconName = focused ? 'folder-open' : 'folder';
            } else if (route.name === 'Convocatorias') {
              iconColor = focused ? 'white' : 'black';
              iconBackgroundColor = focused ? 'black' : 'white';
              iconName = focused ? 'ballot' : 'ballot'
            }

            // You can return any component that you like here!
            return <Icon style={{color: iconColor, backgroundColor: iconBackgroundColor}} name={iconName} size={30} />;
          }
        })}
    tabBarOptions={{
      activeTintColor: '#7a6800',
      inactiveTintColor: 'gray'
    }}
    >
      <Tab.Screen
        name="Perfil"
        component={UserData}
        options={{ title: 'Perfil' }}
      />
    <Tab.Screen
        name="Documentos"
        component={UserDocuments}
        options={{ title: 'Documentos' }}
      />
    <Tab.Screen
        name="Convocatorias"
        component={Convocatories}
        options={{ title: 'Convocatorias' }}
      />
    </Tab.Navigator>
  );
}

function App() {
  const [signed, setSigned] = useState(true);

  return (
    <NavigationContainer>
        {signed ? (
          <MyTabs></MyTabs>
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
