import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';



const InputText = ({label,windowWidth,windowHeight}) => {
    const styles = StyleSheet.create({
        border:{
          borderRadius: 10,
          backgroundColor: '#ffffff',
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
        },
      });  
  return (
    <TextInput placeholder={label} style={styles.border}></TextInput> 
  )
};


export default InputText;