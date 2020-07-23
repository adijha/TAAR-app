import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthStack from './stacks/AuthStack';
import HomeStack from './stacks/HomeStack';
const Stack = createStackNavigator();
const AppNavigator = (navigation) => {
    return (
      <Stack.Navigator headerMode={'screen'} >
        <Stack.Screen name="AuthStack" component={AuthStack} navigation={navigation} options={{headerShown:false}}/>
        <Stack.Screen name="HomeStack" component={HomeStack} navigation={navigation} options={{ headerShown: false,gestureEnabled:false }} />
      </Stack.Navigator>
    )
  }

const MainNavigator = () =>{
    return(
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    )
}
export default MainNavigator;