import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import Acceso from '../../screens/login/Acceso';
import Footer from '../footer/Footer';
import HomeStack from '../navigation/HomeStack';
import MenuDrawer from './MenuDrawer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={'HomeStack'} drawerStyle={{width:40}} drawerContent={(parameters) => <MenuDrawer {...parameters} /> 
    }>
      <Drawer.Screen name="HomeStack" component={HomeStack} />  
      <Drawer.Screen name="Footer" component={Footer} />  
    </Drawer.Navigator>



);
}

export default MyDrawer;