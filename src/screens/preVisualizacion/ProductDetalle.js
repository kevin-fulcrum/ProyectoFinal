import React, {useState,useEffect} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import Footer from '../../component/footer/Footer'
import Button from '../../component/button/Button'
import {windowWidth,windowHeight} from '../../resource/Dimensions'
import InputText from '../../component/inputText/InputText'
import AgregarFlat from '../../component/button/AgregarFlat'
import * as ImagePicker from 'react-native-image-picker'
import axios from 'axios'

const ProductDetalle = ({navigation,route}) => {
    const styles = StyleSheet.create({
      containerInit:{
        flex: 0.15,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 10,
        backgroundColor: '#ffffff'
      },
      containerCenter:{
        flex: 0.75,
        paddingLeft: 10,
        alignItems: 'center',
        backgroundColor: '#ffffff'
      },
      containerEnd:{
        flex: 0.10,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
      },
      categoriaNombre:{
        marginVertical: 20,
      },
      titulo:{
        fontSize: windowWidth/20,
        fontWeight: 'bold'
      },
      agregar:{
        fontSize: windowWidth/25,
      }
      });
      
      const [response, setResponse] = useState(null);
      const [titulo, setTitulo] = useState('');
      const [descripcion, setDescripcion] = useState('');
      const [precio, setPrecio] = useState()
      const [imagen, setImagen] = useState('')
      const [cantidad, setCantidad] = useState()

      const select=()=>{
        ImagePicker.launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 200,
            maxWidth: 200,
          },
          (response) => {
            setResponse(response);
            setImagen(response.base64)
          },
        )
      }

      const [datos, setDatos] = useState({
        categoria:"",
        titulo: "",
        descripcion: "",
        precio: "",
        imagen:"",
        cantidad: "",
      })

      useEffect(()=>{
        setDatos({
          categoria: route.params,  
          titulo: titulo,
          descripcion: descripcion,
          precio: precio,
          imagen: imagen,
          cantidad: cantidad,
        })
      },[titulo,descripcion,precio,imagen,cantidad])

      console.warn("data",datos)
      const guardar=()=>{
        axios.post('http://192.168.1.37:8000/api/token/',{
        "username": 'bryan',
        "password": '123456'
      })
      .then(
      (response)=>{  
        const auth="Bearer "+response.data.access
        axios.post('http://192.168.1.37:8000/productos/',
        datos,
        {
          headers:{'Authorization ': auth}
        }
        )
        .then(
          (res)=>{
            navigation.navigate('PreVisualizacion')
          }
        )
        .catch(
          (res)=>{
            console.warn('Error1:' ,res)
          }
        )
      }
      )
      .catch(
        (response)=>{
          console.warn('Error2:' ,response)
        }
      )
      }

  return (
    <>
    <View style={styles.containerInit}>
    <Text style={styles.titulo}>CREAR SUS PRODUCTOS</Text>  
    </View>
    <View style={styles.containerCenter}>
    <View style={styles.categoriaNombre}>
    <InputText label={'Nombre de producto'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/18)} numberOfLines={10} numberOfLines={1} onChangeText={(e) => {setTitulo(e)}}></InputText>
    <InputText label={'Detalle de Producto'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/9)} numberOfLines={10} numberOfLines={3} onChangeText={(e) => {setDescripcion(e)}}></InputText>
    <InputText label={'Precio'} keyboardType={'decimal-pad'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/18)} numberOfLines={10} numberOfLines={1} onChangeText={(e) => {setPrecio(e)}}></InputText>
    <InputText label={'Cantidad'} keyboardType={'number-pad'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/18)} numberOfLines={10} numberOfLines={1} onChangeText={(e) => {setCantidad(e)}}></InputText>
    </View>
    <Text style={styles.agregar}>Agregar una Imagen</Text>
    <View style={styles.categoriaNombre}>
    {response && response.didCancel===undefined?
    <Image
    style={{width: 200, height: 200}}
    source={{uri: response.uri}}
    />:
    <AgregarFlat windowWidth={150} windowHeight={150} fontSize={80} onPress={()=>{select()}}></AgregarFlat>
    }

    </View>
    <Button label={'Agregar'} windowWidth={(windowWidth/1.8)} windowHeight={(windowHeight/18)} onPress={() => guardar()}></Button> 
    </View>
    <View style={styles.containerEnd}>
    <Footer></Footer>
    </View>
    </>
  )
};


export default ProductDetalle;