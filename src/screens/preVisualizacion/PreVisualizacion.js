import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AgregarFlat from '../../component/button/AgregarFlat'
import Footer from '../../component/footer/Footer'
import {windowWidth,windowHeight} from '../../resource/Dimensions'



const PreVisualizacion = ({navigation}) => {
    const styles = StyleSheet.create({
      containerInit:{
        flex: 0.15,
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 5
      },
      containerCategori:{
        flex: 0.35,
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 5
      },
      containerCenter:{
        flex: 0.40,
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 5
      },
      containerEnd:{
        flex: 0.10,
        alignContent: 'center',
        justifyContent: 'center'
      }
      });  
  return (
    <>
    <View style={styles.containerInit}>
    </View>
    <View style={styles.containerCategori}>
    <Text></Text>
    <AgregarFlat windowWidth={windowWidth/4} windowHeight={windowHeight/8} fontSize={windowWidth/8} onPress={() => navigation.navigate('DetallesCartPrincipal')}></AgregarFlat> 
    </View>
    <View style={styles.containerCenter}> 
    <AgregarFlat windowWidth={150} windowHeight={150} fontSize={80}></AgregarFlat> 
    </View>
    <View style={styles.containerEnd}>
    <Footer></Footer>
    </View>
    </>
  )
};


export default PreVisualizacion;