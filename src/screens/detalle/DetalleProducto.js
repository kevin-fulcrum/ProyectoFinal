import React from 'react'
import {Text, StyleSheet,View,Image} from 'react-native'
import {windowWidth,windowHeight} from '../../resource/Dimensions'
import Button from '../../component/button/Button'
import {useDispatch} from 'react-redux'
import Action from '../../redux/Action'

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d75971',
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
    },
    textoPrecio:{
        fontSize: 20,
        padding: 20,
        fontWeight: 'bold'
    }
})

const DettalleProducto=({navigation, route})=>{
  const dispatch = useDispatch()
  const orderFun = async()=>{
    await dispatch(Action.setCartProduct(route.params))
    navigation.navigate('Cart',route.params)
  }  
  console.warn('route',route.params)
  return(
    <View style={styles.container}>
        <View style={styles.image}>
        <Image
        style={{width:350, height:350}}
        source={{uri: 'data:image/png;base64,'+route.params.imagen}}
        />     
        </View>
    <View style={styles.detalle}>
        <View style={styles.datosDetalle}>
        <View style={{flexDirection: 'row'}}>
            <View style={{flex:0.5}}>
            <Text style={styles.texto}>{route.params.titulo}</Text>
            </View>   
            <View style={{flex:0.5}}>
            <Text style={styles.textoPrecio}>Precio: S/. {route.params.precio}</Text>
            </View>
        </View>
        <Text style={styles.textoDetalle}>{route.params.descripcion}</Text>
        </View>
        <View style={styles.botones}>
        <Button label={'Order Now'} windowHeight={50} windowWidth={150} onPress={()=>{orderFun()}}></Button>
        </View>
    </View>
    </View>
  )
};

export default DettalleProducto;