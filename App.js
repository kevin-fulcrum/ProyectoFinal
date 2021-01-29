
import React from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import Button from './src/component/button/Button'
import Footer from './src/component/footer/Footer'

const styles = StyleSheet.create({  
});

const App = () => {
  return (
    //<Button label={'aceptar'}></Button>
    <View style={{flex:1, justifyContent:'center'}}>
        <Footer></Footer>
    </View>
  )
};


export default App;
