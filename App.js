
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import MyDrawer from './src/component/drawer/Drawer'
import HomeStack from './src/component/navigation/HomeStack'
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({  
});

const App = () => {
  return (
      <NavigationContainer>
          <HomeStack>
             <MyDrawer/>
          </HomeStack>
      </NavigationContainer>
  );
  }
export default App;

