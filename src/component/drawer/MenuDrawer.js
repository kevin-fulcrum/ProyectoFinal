import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import { windowHeight, windowWidth } from '../../resource/Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: windowHeight>800 ? -91 : -65
  },
  contentDrawer: {
    marginTop: windowHeight>800 ? 90 : 60,
    justifyContent:'center',
  },
});

const MenuDrawer = (props) => {
  const mb = windowHeight>800 ? windowHeight/5.5 : windowHeight/7.5
  const w = windowHeight>800 ? windowWidth/2 : windowWidth/2.65
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.contentDrawer}>
          <DrawerItem
            style={{backgroundColor:'blue', transform:[{rotate:'270deg'}], marginBottom:mb, width:w, }}          
            label="Home"
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
          <DrawerItem
          style={{backgroundColor:'skyblue', transform:[{rotate:'270deg'}], marginBottom:mb, width:w }}
            label="My Orders"
            onPress={() => {
              props.navigation.navigate('Orders');
            }}
          />
          <DrawerItem
          style={{backgroundColor:'green', transform:[{rotate:'270deg'}], marginBottom:mb, width:w }}
            label="Logout"
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawer;
