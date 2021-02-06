import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
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
          marginLeft: 15, 
          fontWeight: 'bold' 
        },
        image:{
          width: windowWidth,
          height: windowHeight,
          position: 'absolute',
          borderRadius: 10,
        },
        container:{
          marginTop: 20
        }
      });  
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.border} onPress={onPress}>
    <Image
    source={{uri: 'data:image/png;base64,'+item.imagen}}
    style={styles.image}
    />    
    </TouchableOpacity> 
    <Text style={styles.texto}>{item.titulo}</Text>
    </View>
  )
};

export default SliderItemCategory;