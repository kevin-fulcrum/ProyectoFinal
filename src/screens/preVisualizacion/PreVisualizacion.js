import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  FlatList,
  View,
} from 'react-native';
import Footer from '../../component/footer/Footer'
import {windowWidth,windowHeight} from '../../resource/Dimensions'
import SliderItemCategory from '../../component/sliderItem/SliderItemCategory'
import axios from 'axios'
import AgregarFlat from '../../component/button/AgregarFlat'

const PreVisualizacion = ({navigation}) => {
    const styles = StyleSheet.create({
      containerInit:{
        flex: 0.10,
        justifyContent: 'center',
        paddingLeft: 10,
        backgroundColor: '#d75971',
      },
      textCategoria:{
        marginLeft: 15,
        fontSize: windowWidth/15,
        fontWeight: 'bold',
      },
      textProductos:{
        marginLeft: 30,
        fontSize: windowWidth/20,
        fontWeight: 'bold',
      },
      productos:{
        backgroundColor: '#d75971',
      },
      containerCategori:{
        flex: 0.25,
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#d75971',
      },
      containerCenter:{
        flex: 0.55,
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        backgroundColor: '#ffffff',
      },
      containerEnd:{
        flex: 0.10,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
      }
      });  

      const [data, setData] = useState({});
      const [visible, setVisible] = useState(false);
      const [visibleProduct, setVisibleProduct] = useState(true);
      const [url, setUrl] = useState('');

      useEffect(()=>{
        axios.post('http://192.168.1.37:8000/api/token/',{
          "username": 'bryan',
          "password": '123456'
          })
          .then(
          (response)=>{
            const auth="Bearer "+response.data.access
            console.warn(auth)
            axios.get('http://192.168.1.37:8000/categorias/',
            {
              headers:{'Authorization ': auth}
            }
            )
            .then(
              (res)=>{
                setData(res.data)
                setVisible(true)
              }
            )
            .catch(
              (res)=>{
                console.warn('Error:', res)
              }
            )
          }
          )
          .catch(
            (response)=>{
              response===404 ? console.warn('lo sientimos no tenemos servicios') :console.warn('Error:' ,response)
            }
          )  
      },[data.length]);

      const [dataCategory, setdataCategory] = useState({});
      
      console.warn('data',dataCategory)
      const botonCategoria=(e)=>{
        setVisibleProduct(false)
        setUrl(e)
        axios.post('http://192.168.1.37:8000/api/token/',{
          "username": 'bryan',
          "password": '123456'
          })
          .then(
          (response)=>{
            const auth="Bearer "+response.data.access
            axios.get('http://192.168.1.37:8000/productos/?search='+e.split('/')[4],
            {
              headers:{'Authorization ': auth}
            }
            )
            .then(
              (res)=>{
                setdataCategory(res.data)
                setVisibleProduct(true)
              }
            )
            .catch(
              (res)=>{
                console.warn('Error:', res)
              }
            )
          }
          )
          .catch(
            (response)=>{
              response===404 ? console.warn('lo sientimos no tenemos servicios') :console.warn('Error:' ,response)
            }
          )  
      }

      const scrollX = new Animated.Value(0);
  return (
    <View style={{flex: 1, backgroundColor: '#d75971',}}>
    <View style={styles.containerInit}>
      <Text style={styles.textCategoria}>Categorias Disponibles</Text>
    </View>
    <View style={styles.containerCategori}> 
    <AgregarFlat windowWidth={windowWidth/4} windowHeight={windowHeight/8} fontSize={windowWidth/8} onPress={() => navigation.navigate('DetallesCartPrincipal')}></AgregarFlat> 
    <FlatList 
    data={data}
    keyExtractor={(item, index) => 'key' + index}
    horizontal
    scrollEnabled
    snapToAlignment="center"
    scrollEventThrottle={16}
    decelerationRate="fast"
    showsHorizontalScrollIndicator={false}
    renderItem={(item) => {
        return <SliderItemCategory windowWidth={windowWidth/4} windowHeight={windowHeight/8} fontSize={windowWidth/24} item={item.item} onPress={()=>botonCategoria(item.item.url)}/>;
    }}
    onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: false}
    )}
    />   
    </View>
    <View style={styles.productos}>
    <Text style={styles.textProductos}>Lista de Productos</Text>
    </View>
    <View style={styles.containerCenter}>
    <AgregarFlat windowWidth={windowWidth/3.5} windowHeight={windowHeight/6} fontSize={80} onPress={() => navigation.navigate('ProductDetalle',url)}></AgregarFlat>
    <FlatList 
    data={dataCategory}
    keyExtractor={(item, index) => 'key' + index}
    horizontal
    scrollEnabled
    snapToAlignment="center"
    scrollEventThrottle={16}
    decelerationRate="fast"
    showsHorizontalScrollIndicator={false}
    renderItem={(item) => {
        return <SliderItemCategory windowWidth={windowWidth/3.8} windowHeight={windowHeight/6.5} fontSize={windowWidth/26} item={item.item} onPress={()=>{navigation.navigate('DetalleProducto',item.item)}}/>;
    }}
    onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: false}
    )}
    /> 
    </View>
    <View style={styles.containerEnd}>
    <Footer navigation={navigation}></Footer>
    </View>
    </View>
  )
};


export default PreVisualizacion;