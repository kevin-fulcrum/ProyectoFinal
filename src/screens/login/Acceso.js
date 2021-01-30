import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Button from '../../component/button/Button'
import {windowWidth,windowHeight} from '../../resource/Dimensions'
import InputText from '../../component/inputText/InputText'

const styles = StyleSheet.create({
    back:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0ef'
    },
    container:{
        backgroundColor: '#ffffff',
        width: windowWidth/1.12,
        height: windowHeight/1.5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
    },
    circulo:{
        backgroundColor: '#d75971',
        width: 400,
        height: 400,
        position: 'absolute',
        borderTopLeftRadius: 300,
        borderBottomLeftRadius: 300,
        paddingLeft:50,
        top: windowHeight/2,
        left: windowWidth/1.5,
    },
    circuloTop:{
        backgroundColor: '#d75971',
        width: 400,
        height: 400,
        position: 'absolute',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 300,
        paddingLeft:50,
        bottom: windowHeight/1.5,
        right: windowWidth/30,
    },
    separador:{
      marginVertical: 15
    }
});

const Acceso = ({navigation}) => {
  return (
    <View style={styles.back}>
    <View style={styles.circulo}></View> 
    <View style={styles.circuloTop}></View>    
    <View style={styles.container}>
    <View style={styles.separador}>
    <Text>LOGO</Text>
    <View style={styles.separador}>
    </View>
    <InputText label={'Email'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/18)}></InputText>
    </View>
    <View style={styles.separador}>
    <InputText label={'Password'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/18)}></InputText>
    </View>
    <View style={styles.separador}>
    <Button label={'Login'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/18)} onPress={() => navigation.navigate('DatGeneral')}></Button>
    </View>
    </View> 
    </View> 
  )
};

export default Acceso;
