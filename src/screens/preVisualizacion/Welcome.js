import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../../component/footer/Footer'

const Welcome = ({navigation}) => {
    const styles = StyleSheet.create({
      containerInit:{
          flex: 0.9,
      },
      containerEnd:{
          flex: 0.1,
          alignItems: 'center'
    }
      });  
  return (
    <>
    <View style={styles.containerInit}>
        <Text>holas</Text>
    </View>
    <View style={styles.containerEnd}>
        <Footer navigation={navigation}></Footer>
    </View>
    </>
  )
};


export default Welcome;