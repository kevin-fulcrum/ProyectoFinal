import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AgregarFlat from '../../component/button/AgregarFlat'
import Footer from '../../component/footer/Footer'



const PreVisualizacion = () => {
    const styles = StyleSheet.create({
      containerInit:{
        flex: 0.4,
        justifyContent: 'center'
      },
      containerCenter:{
        flex: 0.4
      },
      containerEnd:{
        flex: 0.2
      }
      });  
  return (
    <>
    <View style={styles.containerInit}>
    <AgregarFlat windowWidth={150} windowHeight={150}></AgregarFlat> 
    </View>
    <View style={styles.containerCenter}> 
    </View>
    <View style={styles.containerEnd}></View>
    <Footer></Footer>
    </>
  )
};


export default PreVisualizacion;