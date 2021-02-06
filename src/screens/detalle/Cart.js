import React from 'react'
import {StyleSheet, View, Text, FlatList, Animated} from 'react-native'
import Button from '../../component/button/Button'
import { useSelector } from 'react-redux'
import SliderItemCategory from '../../component/sliderItem/SliderItemCategory'

const styles=StyleSheet.create({
  contanier:{
    flex: 0.94
   },
  containerEnd: {
    flex: 0.06,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  } 
})

const Cart=({route})=>{
  const scrollX = new Animated.Value(0);
  const carData = useSelector((state)=>state.ProductReducer);
  console.warn('ESTE ES?',carData)
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
        return <SliderItemCategory styles={styles.cart} item={item.item}></SliderItemCategory>;
    }}
    onScroll={Animated.event([
        {nativeEvent: {contentOffset: {x: scrollX}}}],
        {useNativeDriver: false}
    )}
    />
    </View>
    <View style={styles.containerEnd}>
      <View style={{flex: 0.5, alignItems: 'center'}}>
      <Text>${carData.products[0].precio}</Text>
      </View>
      <View style={{flex: 0.5, alignItems: 'center'}}>
      <Button label={'Buy Now'} windowWidth={150} windowHeight={50} ></Button>
      </View>
    </View>
    </>
  )
};

export default Cart;