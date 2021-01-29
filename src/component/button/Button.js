
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';



const App = ({label}) => {
    const styles = StyleSheet.create({
        border:{
          borderRadius: 20,
          backgroundColor: 'blue'
        }
      });  
  return (
    <TouchableOpacity style={styles.border}>
    <Text>{label}</Text>
    </TouchableOpacity> 
  )
};


export default App;