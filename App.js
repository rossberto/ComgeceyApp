import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './app/screens/SignIn';
import HomeTabs from './app/screens/HomeTabs';
import IdDataEdit from './app/screens/user-data-edit/IdDataEdit';
import AddressDataEdit from './app/screens/user-data-edit/AddressDataEdit';
import ProfessionalDataEdit from './app/screens/user-data-edit/ProfessionalDataEdit';
import AppContext from './AppContext';

const Stack = createStackNavigator();

function HeaderLeft({ title }) {
  return (
      <Text style={styles.header}>{title}</Text>
  );
}

const screens = [
  {
    title: 'Ficha de Identificación',
    component: IdDataEdit
  },
  {
    title: 'Domicilio',
    component: AddressDataEdit
  },
  {
    title: 'Profesional',
    component: ProfessionalDataEdit
  }
];

function App() {
  const appContext = useContext(AppContext);
  const [signed, setSigned] = useState(false);

  const handleSignIn = () => {
    setSigned(true);
  }

  return (
    <AppContext.Provider
      value={{
        signed,
        setSigned
      }}
    >
    <NavigationContainer>
        {signed ? (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeTabs} options={
              {
                headerShown: false
              }
            }  />

          {screens.map(screen => {
            return (
              <Stack.Screen
                key={screen.title}
                name={screen.title}
                component={screen.component}
                options={({ navigation, route }) => ({
                  headerTitle: props => <HeaderLeft title={screen.title} {...props} />
                })}
              />
            );
          })}

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
    </AppContext.Provider>
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
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  navheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default App;
