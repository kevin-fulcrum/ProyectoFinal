import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import GoogleMaps from '../../component/maps/Maps';
import Footer from '../../component/footer/Footer';

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});

const Localitation = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.containerSafeArea}>
        <GoogleMaps />
      </SafeAreaView>
      <Footer navigation={navigation}/>
    </>
  );
};

export default Localitation;