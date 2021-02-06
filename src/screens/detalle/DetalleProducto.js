import React from 'react'
import {Text, StyleSheet,View,Image} from 'react-native'
import {windowWidth,windowHeight} from '../../resource/Dimensions'
import Button from '../../component/button/Button'
//import {useDispatch} from 'react-redux'
//import Action from '../redux/Action'

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#8cc2d1',
        width: windowWidth,
        height: windowHeight,
        justifyContent: 'flex-end'
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
    },
    image:{
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detalle: {
        flex: 0.5,
        height: windowHeight/2,
        backgroundColor: '#fbfbfb',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    datosDetalle:{
        flex: 0.88
    },
    botones:{
        flex: 0.12,
        alignItems:'center',
        marginBottom:30
    },
    texto:{
        fontSize: 20,
        padding: 20
    },
    textoDetalle:{
        fontSize: 15,
        padding: 20
    }
})

const DettalleProducto=(/*{navigation, route}*/)=>{
  //const dispatch = useDispatch()
  /*const orderFun = async()=>{
    await dispatch(Action.setCartProduct(route.params))
    navigation.navigate('Cart',route.params)
  } */ 
  return(
    <View style={styles.container}>
        <View style={styles.image}>
        <Image
        style={{width:350, height:280}}
        source={{uri: 'https://cdn.dribbble.com/users/3862493/screenshots/14876801/media/1d266532827556906e7ea57c80b62cf8.png?compress=1&resize=1000x750' /*route.params.url*/}}
        />     
        </View>
    <View style={styles.detalle}>
        <View style={styles.datosDetalle}>
        <Text style={styles.texto}>titulo{/*route.params.descripcion*/}                                                       precio</Text>
        <Text style={styles.textoDetalle}>descripcion{/*route.params.detalle*/}</Text>
        </View>
        <View style={styles.botones}>
        <Button label={'Order Now'} windowHeight={50} windowWidth={150} onPress={()=>{}}></Button>
        </View>
    </View>
    </View>
  )
};

export default DettalleProducto;