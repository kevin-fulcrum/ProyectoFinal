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
import SkeletonShimer from '../../component/skeleton/SkeletonShimer'


const PreVisualizacion = ({navigation}) => {
    const styles = StyleSheet.create({
      containerInit:{
        flex: 0.15,
        justifyContent: 'center',
        paddingLeft: 10,
      },
      containerCategori:{
        flex: 0.20,
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center'
      },
      containerCenter:{
        flex: 0.55,
        justifyContent: 'center',
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
      },
      containerEnd:{
        flex: 0.10,
        alignContent: 'center',
        justifyContent: 'center'
      }
      });  

      const [data, setData] = useState({});
      const [visible, setVisible] = useState(false);
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
    <>
    <View style={styles.containerInit}>
    </View>
    <View style={styles.containerCategori}>
    <View style={{}}>
      <SkeletonShimer visible={visible}/>
    </View>    
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
    <View style={styles.containerCenter}> 
    <View style={{flexDirection: 'column', justifyContent:'center',}}>
      <SkeletonShimer visible={visible}/>
      <SkeletonShimer visible={visible}/>
    </View> 
    <FlatList 
    data={dataCategory}
    keyExtractor={(item, index) => 'key' + index}
    vertical
    numColumns={3}
    scrollEnabled
    snapToAlignment="center"
    scrollEventThrottle={16}
    decelerationRate="fast"
    showsHorizontalScrollIndicator={false}
    renderItem={(item) => {
        return <SliderItemCategory windowWidth={windowWidth/3.5} windowHeight={windowHeight/6} fontSize={windowWidth/26} item={item.item} onPress={()=>{}}/>;
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
    </>
  )
};


export default PreVisualizacion;