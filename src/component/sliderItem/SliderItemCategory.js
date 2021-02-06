import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';



const SliderItemCategory = ({windowWidth,windowHeight,onPress,fontSize,item}) => {
    const styles = StyleSheet.create({
        border:{
          borderRadius: 10,
          backgroundColor: '#ffffff',
          width: windowWidth,
          height: windowHeight,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 2,
          marginLeft: 8
        },
        texto:{
          color: 'black',
          fontSize: fontSize, 
        },
        image:{
          width: windowWidth,
          height: windowHeight,
          position: 'absolute',
          borderRadius: 10,
        }
      });  
  return (
    <TouchableOpacity style={styles.border} onPress={onPress}>
    <Image
    source={{uri: 'data:image/png;base64,'+item.imagen}}
    style={styles.image}
    />
    <Text style={styles.texto}>{item.titulo}</Text>
    </TouchableOpacity> 
  )
};

export default SliderItemCategory;