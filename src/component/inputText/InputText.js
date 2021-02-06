import React from 'react';
import {
  StyleSheet,
  TextInput
} from 'react-native';



const InputText = ({label,windowWidth,windowHeight,numberOfLines,onChangeText}) => {
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
    <TextInput placeholder={label} style={styles.border} numberOfLines={numberOfLines} multiline={true} onChangeText={onChangeText}></TextInput> 
  )
};


export default InputText;