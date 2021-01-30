import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Acceso from '../../screens/login/Acceso';
import Footer from '../footer/Footer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={'Acceso'}>
      <Drawer.Screen name="Footer" component={Footer} />
      <Drawer.Screen name="Acceso" component={Acceso} />
    
    </Drawer.Navigator>



);
}

export default MyDrawer;