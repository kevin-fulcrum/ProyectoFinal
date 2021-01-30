import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageButton from '../imageButton/ImageButton';



const Footer = ({icon}) => {
    const styles = StyleSheet.create({
        container: {
            flexDirection:'row',
            borderTopWidth: 0.5
        }
    });  
    return (
        <View style={styles.container}>
            <ImageButton icon={'https://cdn.icon-icons.com/icons2/1642/PNG/512/foodmealplaterestaurant_109684.png'}></ImageButton>
            <ImageButton icon={'https://cdn.icon-icons.com/icons2/2098/PNG/512/list_icon_128825.png'}></ImageButton>
            <ImageButton icon={'https://cdn.icon-icons.com/icons2/2098/PNG/512/search_icon_128762.png'}></ImageButton>
            <ImageButton icon={'https://cdn.icon-icons.com/icons2/2098/PNG/512/map_pin_icon_128819.png'}></ImageButton>
        </View>
    )
};


export default Footer;