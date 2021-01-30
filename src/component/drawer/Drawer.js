import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Acceso from '../../screens/login/Acceso';
import Footer from '../footer/Footer';
import HomeStack from '../navigation/HomeStack';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={'HomeStack'}>
      <Drawer.Screen name="Footer" component={Footer} />
      <Drawer.Screen name="HomeStack" component={HomeStack} />    
    </Drawer.Navigator>



);
}

export default MyDrawer;