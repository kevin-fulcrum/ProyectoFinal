import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import AgregarFlat from '../../component/button/AgregarFlat'
import Footer from '../../component/footer/Footer'



const PreVisualizacion = ({navigation}) => {
    const styles = StyleSheet.create({
      containerInit:{
        flex: 0.15,
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 5
      },
      containerCategori:{
        flex: 0.25,
        justifyContent: 'center',
        paddingLeft: 10,
        borderWidth: 5
      },
      containerCenter:{
        flex: 0.50,
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
      const scrollX = new Animated.Value(0);
  return (
    <>
    <View style={styles.containerInit}>
    </View>
    <View style={styles.containerCategori}>
    <Text></Text>
    <AgregarFlat windowWidth={70} windowHeight={70} fontSize={30} onPress={() => navigation.navigate('DetallesCartPrincipal')}></AgregarFlat> 
    <FlatList 
    data={Data}
    keyExtractor={(item, index) => 'key' + index}
    horizontal
    scrollEnabled
    snapToAlignment="center"
    scrollEventThrottle={16}
    decelerationRate="fast"
    showsHorizontalScrollIndicator={false}
    renderItem={(item) => {
        return <SliderItemCategory  item={item.item} onPress={()=>{}}/>;
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