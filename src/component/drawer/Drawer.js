import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import App from '../../screens/login/Acceso';
import Footer from '../footer/Footer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={'Article'}>
      <Drawer.Screen name="Footer" component={Footer} />
      <Drawer.Screen name="Article" component={App} headerStyle={{transform: { rotate: '90deg'}}} options={{ drawerLabel: 'Home', }}/>
    
    </Drawer.Navigator>



);
}

export default MyDrawer;