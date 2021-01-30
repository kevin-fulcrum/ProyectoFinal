import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



const Button = ({label,windowWidth,windowHeight}) => {
    const styles = StyleSheet.create({
        border:{
          borderRadius: 10,
          backgroundColor: '#d75971',
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'center',
          alignItems: 'center'
        },
        texto:{
          color: '#fcfaf9',
          fontSize: 16 
        }
      });  
  return (
    <TouchableOpacity style={styles.border}>
    <Text style={styles.texto}>{label}</Text>
    </TouchableOpacity> 
  )
};


export default Button;