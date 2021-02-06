import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



const Button = ({label,windowWidth,windowHeight,onPress,backgroundColor}) => {
    const styles = StyleSheet.create({
        border:{
          borderRadius: 90,
          backgroundColor: backgroundColor,
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 1,
        },
        texto:{
          color: '#fcfaf9',
          fontSize: 16 
        }
      });  
  return (
    <TouchableOpacity style={styles.border} onPress={onPress}>
    <Text style={styles.texto}>{label}</Text>
    </TouchableOpacity> 
  )
};


export default Button;