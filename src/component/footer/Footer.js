import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ImageButton from '../imageButton/ImageButton';



const Footer = ({navigation}) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection:'row',
            borderTopWidth: 0.5,
        }
    });  
    return (
        <View style={styles.container}>
            <ImageButton onPress={() => navigation.navigate('Welcome')} icon={'https://cdn.icon-icons.com/icons2/2098/PNG/512/list_icon_128825.png'}></ImageButton>
            <ImageButton onPress={() => navigation.navigate('Cart')} icon={'https://cdn.icon-icons.com/icons2/38/PNG/512/star_favorite_5754.png'}></ImageButton>
            <ImageButton onPress={() => navigation.navigate('Localitation')} icon={'https://cdn.icon-icons.com/icons2/2098/PNG/512/search_icon_128762.png'}></ImageButton>
            <ImageButton onPress={() => navigation.navigate('Localitation')} icon={'https://cdn.icon-icons.com/icons2/2098/PNG/512/map_pin_icon_128819.png'}></ImageButton>
        </View>
    )
};


export default Footer;