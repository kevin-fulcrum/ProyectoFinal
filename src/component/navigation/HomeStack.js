import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../../screens/splash/Splash';
import Welcome from '../../screens/preVisualizacion/Welcome'
import PreVisualizacion from '../../screens/preVisualizacion/PreVisualizacion'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="PreVisualizacion"
        component={PreVisualizacion}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
