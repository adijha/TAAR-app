import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../../../screens/module/Auth/Login';
// import SignUp from '../../../screens/module/Auth/SignUp';
import MobileScreen from '../../../screens/module/Auth/SignUp/Mobile';
import OTP from '../../../screens/module/Auth/SignUp/OTP';
import VerifiedOTP from '../../../screens/module/Auth/SignUp/verifiedOTP';
import CreateAccount from '../../../screens/module/Auth/SignUp/createAccount';
import RegisterSuccess from '../../../screens/module/Auth/SignUp/registrationSuccessful';


const Stack = createStackNavigator();
const AuthStack = (props) => {
    return (
      <Stack.Navigator headerMode={'screen'} >
        {/* <Stack.Screen name='Login' component={Login} initialParams={props} options={{ headerShown: false }} /> */}
        <Stack.Screen name='SignupStack' component={SignupStack} initialParams={props} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }
  export default AuthStack;

  const SignupStack = (props) =>{
    return(
      <Stack.Navigator headerMode={'screen'} >
        <Stack.Screen name='MobileScreen' component={MobileScreen} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='OTP' component={OTP} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='VerifiedOTP' component={VerifiedOTP} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='CreateAccount' component={CreateAccount} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='RegisterSuccess' component={RegisterSuccess} initialParams={props} options={{ headerShown: false }} />
      </Stack.Navigator>
    )
  }