import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



const AgregarFlat = ({windowWidth,windowHeight,onPress}) => {
    const styles = StyleSheet.create({
        border:{
          borderRadius: 10,
          backgroundColor: '#ffffff',
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2
        },
        texto:{
          color: 'black',
          fontSize: 80, 
        }
      });  
  return (
    <TouchableOpacity style={styles.border} onPress={onPress}>
    <Text style={styles.texto}>+</Text>
    </TouchableOpacity> 
  )
};


export default AgregarFlat;