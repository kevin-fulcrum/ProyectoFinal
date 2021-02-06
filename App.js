import React from 'react';
import MyDrawer from './src/component/drawer/Drawer'
import { NavigationContainer } from '@react-navigation/native';
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react';
import reduxStore from './src/redux/Store'

const {store,persistor} = reduxStore();

const App = () => {
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <MyDrawer/>
      </NavigationContainer>
    </PersistGate>
    </Provider>
    </>
  );
};


export default App;

