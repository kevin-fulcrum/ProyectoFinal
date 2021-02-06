import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import HomeStack from '../navigation/HomeStack';
import MenuDrawer from './MenuDrawer';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName={'HomeStack'} edgeWidth={100} drawerStyle={{width:45}} drawerContent={(parameters) => <MenuDrawer {...parameters} /> }>
      <Drawer.Screen name="HomeStack" component={HomeStack} />  
    </Drawer.Navigator>
);
}

export default MyDrawer;