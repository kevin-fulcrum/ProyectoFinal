import React, {useContext} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: -180
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
            style={{backgroundColor:'blue', transform:[{rotate:'270deg'}], marginBottom:150, width:200 }}
            label="Home"
            onPress={() => {
              props.navigation.navigate('Dashboard');
            }}
          />
          <DrawerItem
          style={{backgroundColor:'skyblue', transform:[{rotate:'270deg'}], marginBottom:150, width:200 }}
            label="My Orders"
            onPress={() => {
              props.navigation.navigate('Orders');
            }}
          />
          <DrawerItem
          style={{backgroundColor:'green', transform:[{rotate:'270deg'}], marginBottom:150, width:200 }}
            label="Logout"
          />
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default MenuDrawer;
