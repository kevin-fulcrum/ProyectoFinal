import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PreVisualizacion from '../../screens/preVisualizacion/PreVisualizacion'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="PreVisualizacion"
      >
      <Stack.Screen
        name="PreVisualizacion"
        component={PreVisualizacion}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
