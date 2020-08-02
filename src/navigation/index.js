import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {getAsyncStorage,keys} from '../asyncStorage';
import AuthStack from './stacks/AuthStack';
import HomeStack from './stacks/HomeStack';
import SplashScreen from '../screens/common/SplashScreen'; 
import { connect } from 'react-redux';
const Stack = createStackNavigator();
// const AppNavigator = (navigation) => {
//     return (
//       <Stack.Navigator headerMode={'screen'} >
//         <Stack.Screen name="AuthStack" component={AuthStack} navigation={navigation} options={{headerShown:false}}/>
//         <Stack.Screen name="HomeStack" component={HomeStack} navigation={navigation} options={{ headerShown: false,gestureEnabled:false }} />
//       </Stack.Navigator>
//     )
//   }

const MainNavigator = (props) => {

  // const dispatch = useDispatch();
  // const splashScreenLoading = useSelector(
  //   (state) => state.LogReducer.splashScreenLoading,
  // );
  // const loggedIn = useSelector((state) => state.LogReducer.loggedIn);
  // const { loggedInUser } = props.homeReducer;

  // const [token,setToken] = useState('');

  // React.useEffect(()=>{
  //   getAsyncStorage(keys.access_token).
  //   then((token)=>{
  //     setToken(token);
  //     console.log('running');
  //   })
  // })


  // const AppNavigator = (navigation) => {
  //   return (
  //     <Stack.Navigator headerMode={'screen'}>
  //       {
  //         //loggedInUser&&loggedInUser.id
  //         token ?
  //           <Stack.Screen name="HomeStack" component={HomeStack} navigation={navigation} options={{ headerShown: false, gestureEnabled: false }} />
  //           : <Stack.Screen name="AuthStack" component={AuthStack} navigation={navigation} options={{ headerShown: false }} />
  //       }

  //     </Stack.Navigator>
  //   )
  // }

  const AppNavigator = (navigation) => {
    return (
      <Stack.Navigator headerMode={'screen'}>
           <Stack.Screen name="Splash" component={SplashScreen} navigation={navigation} options={{ headerShown: false }} />
           <Stack.Screen name="AuthStack" component={AuthStack} navigation={navigation} options={{ headerShown: false }} />
            <Stack.Screen name="HomeStack" component={HomeStack} navigation={navigation} options={{ headerShown: false, gestureEnabled: false }} />
        

      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}
export default connect(
  (state) => ({
    homeReducer: state.homeReducer
  })
)(MainNavigator);