import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/module/Home';
const Stack = createStackNavigator();


const HomeStack = (props) => {
    return (
      <Stack.Navigator headerMode={'screen'} >
        <Stack.Screen name='Home' component={Home} initialParams={props} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
  export default HomeStack;