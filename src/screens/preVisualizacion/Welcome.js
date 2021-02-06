import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../../component/footer/Footer'
import CircleButton from '../../component/button/CircleButton'
import {windowWidth,windowHeight} from '../../resource/Dimensions'

const Welcome = ({navigation}) => {
    const styles = StyleSheet.create({
      containerInit:{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 0.9,
      },
      containerEnd:{
          flex: 0.1,
          alignItems: 'center'
      },
      circle:{
          flexDirection: 'row'
      }
      });  
  return (
    <>
    <View style={styles.containerInit}>
        <CircleButton windowWidth={windowWidth/4} windowHeight={windowHeight/8} backgroundColor={'#E3A877'} label={'Farmacias'} onPress={()=>navigation.navigate('PreVisualizacion')}></CircleButton>
        <View style={styles.circle}>
        <CircleButton windowWidth={windowWidth/4} windowHeight={windowHeight/8} backgroundColor={'#7AA766'} label={'Abarrotes'} onPress={()=>navigation.navigate('PreVisualizacion')}></CircleButton>
        <CircleButton windowWidth={windowWidth/3} windowHeight={windowHeight/6} backgroundColor={'#5B917B'} label={'Varios'} onPress={()=>navigation.navigate('PreVisualizacion')}></CircleButton>
        <CircleButton windowWidth={windowWidth/4} windowHeight={windowHeight/8} backgroundColor={'#6E84A2'} label={'Restaurant`s'} onPress={()=>navigation.navigate('PreVisualizacion')}></CircleButton>
        </View>
        <CircleButton windowWidth={windowWidth/4} windowHeight={windowHeight/8} backgroundColor={'#B069BA'} label={'Cosmeticos'} onPress={()=>navigation.navigate('PreVisualizacion')}></CircleButton>
    </View>
    <View style={styles.containerEnd}>
        <Footer navigation={navigation}></Footer>
    </View>
    </>
  )
};


export default Welcome;