import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserData from './user-data/UserData';
import UserDocuments from './UserDocuments';
import Convocatories from './Convocatories';
import Menu from './Menu';

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconColor = 'black';
            let iconName = '';

            if (route.name === 'Perfil') {
              iconName = 'person';
              iconColor = focused ? '#7a6800' : 'black';
            } else if (route.name === 'Documentos') {
              iconName = 'folder';
              iconColor = focused ? '#7a6800' : 'black';
            } else if (route.name === 'Convocatorias') {
              iconColor = focused ? '#7a6800' : 'black';
              iconName = 'ballot'
            } else if (route.name === 'Menu') {
              iconColor = focused ? '#7a6800' : 'black';
              iconName = 'menu'
            }

            // You can return any component that you like here!
            return <Icon style={{color: iconColor}} name={iconName} size={30} />;
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
    <Tab.Screen
        name="Menu"
        component={Menu}
        options={{ title: 'Menu' }}
      />
    </Tab.Navigator>
  );
}

export default HomeTabs;
