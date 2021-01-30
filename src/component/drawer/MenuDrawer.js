import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { windowHeight, windowWidth } from '../../resource/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: -217
  },
  contentDrawer: {
    margin: 100,
    justifyContent:'center'
  },
  userInfo: {
    marginLeft: 20,
  },
  image: {
    width: 36,
    height: 36,
  },
});

const MenuDrawer = (props) => {

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.contentDrawer}>
          <DrawerItem
            style={{backgroundColor:'blue', transform:[{rotate:'270deg'}], marginBottom:windowHeight/4.3, width:windowHeight/3.5 }}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
          <DrawerItem
          style={{backgroundColor:'skyblue', transform:[{rotate:'270deg'}], marginBottom:windowHeight/4.3, width:windowHeight/3.5 }}
            label="My Orders"
            onPress={() => {
              props.navigation.navigate('Orders');
            }}
          />
          <DrawerItem
          style={{backgroundColor:'green', transform:[{rotate:'270deg'}], marginBottom:windowHeight/4.3, width:windowHeight/3.5 }}
            label="Logout"
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawer;
