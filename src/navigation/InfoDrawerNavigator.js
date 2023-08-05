import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerLayout from './components/DrawerLayout';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export default function InfoDrawerNavigator({navigation}) {
  const drawer = props => <DrawerLayout {...props} />;

  return (
    <Drawer.Navigator
      drawerContent={drawer}
      screenOptions={{
        drawerStyle: {backgroundColor: '#00000000', width: '75%'},
        drawerLabelStyle: {
          color: '#FFF',
          fontFamily: 'Montserrat',
          fontSize: 14,
          fontStyle: 'normal',
          fontWeight: '600',
          lineHeight: 16,
          letterSpacing: 0.2,
        },
        drawerItemStyle: {borderRadius: 25, margin: 0},
        drawerActiveBackgroundColor: '#00000000',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',

        drawerContentContainerStyle: {
          margin: 0,
          borderRadius: 50,
          alignItems: 'center',
        },
        headerShown: false,
      }}>
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: props => (
            <MaterialCommunityIcons name="cog-outline" {...props} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
