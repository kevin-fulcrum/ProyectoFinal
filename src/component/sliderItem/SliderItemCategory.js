import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';



const SliderItemCategory = ({windowWidth,windowHeight,onPress,fontSize,titulo,item}) => {
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
          fontSize: fontSize, 
        },
        image:{
           width: 20,
           height: 20,  
        }
      });  
  return (
    <TouchableOpacity style={styles.border} onPress={onPress}>
    <Text style={styles.texto}>{item.titulo}</Text>
    <Image
    source={{uri: 'data:image/png;base64,'+item.imagen}}
    style={styles.image}
    />
    </TouchableOpacity> 
  )
};

export default SliderItemCategory;