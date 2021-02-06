import React from 'react'
import {StyleSheet, View, Text, FlatList, Animated, Image} from 'react-native'
import Button from '../../component/button/Button'
import { useSelector } from 'react-redux'
import SliderItemCategory from '../../component/sliderItem/SliderItemCategory'
import Footer from '../../component/footer/Footer'

const styles=StyleSheet.create({
  contanier:{
    flex: 0.75,
   },
  containerEnd: {
    flex: 0.15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  },
  containerEndEnd:{
    flex: 0.1
  } 
})

const Cart=({route,navigation})=>{
  const scrollX = new Animated.Value(0);
  const carData = useSelector((state)=>state.ProductReducer);
  return(
    <>
    <View style={styles.contanier}>
    <FlatList
    data={carData.products}
    keyExtractor={(item, index) => 'key' + index}
    vertical
    scrollEnabled
    snapToAlignment="center"
    scrollEventThrottle={16}
    decelerationRate="fast"
    showsHorizontalScrollIndicator={false}
    renderItem={(item) => {
        return ( 
        <View style={{flexDirection: 'row',flex: 1, borderWidth: 1, marginHorizontal: 20, marginVertical: 15, borderRadius: 20}}>
        <View style={{flex: 0.8, marginLeft: 20}}>
        <SliderItemCategory windowWidth={50} windowHeight={50} styles={styles.cart} item={item.item}></SliderItemCategory>
        </View>
        <View style={{flex: 0.2, alignItems: 'center',justifyContent:'center'}}>
        <Image
          source= {{uri: 'https://cdn.icon-icons.com/icons2/10/PNG/256/check_ok_accept_apply_1582.png'}}
          style={{width: 40, height: 40}}
        ></Image>
        </View>
        </View>
    )
    }}
    onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: false}
    )}
    />
    </View>
    <View style={styles.containerEnd}>
      <View style={{flex: 1, alignItems: 'center',justifyContent:'center'}}>
      <Button label={'Buy Now'} windowWidth={150} windowHeight={50} ></Button>
      </View>
    </View>
    <View style={styles.containerEndEnd}>
      <Footer navigation={navigation}></Footer>
    </View>
    
    </>
  )
};

export default Cart;