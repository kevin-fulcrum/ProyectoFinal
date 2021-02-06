import React from 'react';
import MyDrawer from './src/component/drawer/Drawer'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    </>
  );
};


export default App;
