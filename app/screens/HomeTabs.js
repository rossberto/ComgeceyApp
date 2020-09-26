import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UserData from './user-data/UserData';
import UserDocuments from './UserDocuments';
import Convocatories from './Convocatories';

const Tab = createBottomTabNavigator();

function HomeTabs() {
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

export default HomeTabs;
