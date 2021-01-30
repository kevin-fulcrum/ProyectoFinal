
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Button from './src/component/button/Button'
import Footer from './src/component/footer/Footer'
import Acceso from './src/screens/login/Acceso'
import MyDrawer from './src/component/drawer/Drawer'
import { NavigationContainer } from '@react-navigation/native';

const styles = StyleSheet.create({  
});

const App = () => {
  return (
    //<Button label={'aceptar'}></Button>
    //    <Footer></Footer>
    <View style={{flex:1, justifyContent:'center'}}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </View>

    //<Acceso></Acceso>
  );
  }
export default App;

