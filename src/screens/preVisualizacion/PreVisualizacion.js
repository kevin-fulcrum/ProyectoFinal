import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  Animated,
  FlatList,
  View,
} from 'react-native';
import AgregarFlat from '../../component/button/AgregarFlat'
import Footer from '../../component/footer/Footer'
import {windowWidth,windowHeight} from '../../resource/Dimensions'
import SliderItemCategory from '../../component/sliderItem/SliderItemCategory'
import axios from 'axios'


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

      const [data, setData] = useState({});

      useEffect(()=>{
        axios.post('http://192.168.1.37:8000/api/token/',{
          "username": 'bryan',
          "password": '123456'
          })
          .then(
          (response)=>{
            const auth="Bearer "+response.data.access
            axios.get('http://192.168.1.37:8000/categorias/',
            {
              headers:{'Authorization ': auth}
            }
            )
            .then(
              (res)=>{
                setData(res.data)
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
      },[])

      const scrollX = new Animated.Value(0);
      console.log()
  return (
    <>
    <View style={styles.containerInit}>
    </View>
    <View style={styles.containerCategori}>
    <Text></Text>
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
        return <SliderItemCategory windowWidth={windowWidth/4} windowHeight={windowHeight/8} fontSize={windowWidth/8} item={item.item} onPress={()=>{}}/>;
    }}
    onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: false}
    )}
    />   
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