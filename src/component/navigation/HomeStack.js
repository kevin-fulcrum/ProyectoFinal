import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Acceso from '../../screens/login/Acceso';
import DatGeneral from '../../screens/inscripcion/DatGeneral';
import PreVisualizacion from '../../screens/preVisuaizacion/PreVisualizacion'

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Acceso"
      >
      <Stack.Screen
        name="Acceso"
        component={Acceso}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="DatGeneral"
        component={DatGeneral}
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
