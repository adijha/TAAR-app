import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import Login from '../../../screens/module/Auth/Login';
// import SignUp from '../../../screens/module/Auth/SignUp';
import MobileScreen from '../../../screens/module/Auth/SignUp/Mobile';
import OTP from '../../../screens/module/Auth/SignUp/OTP';
import VerifiedOTP from '../../../screens/module/Auth/SignUp/verifiedOTP';
import CreateAccount from '../../../screens/module/Auth/SignUp/createAccount';
import RegisterSuccess from '../../../screens/module/Auth/SignUp/registrationSuccessful';
import AsyncStorage from '@react-native-community/async-storage';
import { TextInput } from 'react-native-gesture-handler';


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

class SignupStack extends React.Component{
  state={
    token:'',
  }
  // componentDidMount(){ 
  //   AsyncStorage.getItem('access_token').then((token) => {           
  //     console.log(token);
  //     this.setState({token:token})
  //     // this.setState({ 
  //     //   dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
  //     // });
  
  //   });
  // }
  render(){
    console.log('token',this.state.token)
    return(
      <Stack.Navigator headerMode={'screen'}
    // initialRouteName={this.state.token ?'CreateAccount':'MobileScreen'}
    >
      <Stack.Screen name='MobileScreen' component={MobileScreen} initialParams={this.props} options={{ headerShown: false }} />
      <Stack.Screen name='OTP' component={OTP} initialParams={this.props} options={{ headerShown: false }} />
      <Stack.Screen name='VerifiedOTP' component={VerifiedOTP} initialParams={this.props} options={{ headerShown: false }} />
      <Stack.Screen name='CreateAccount' component={CreateAccount} initialParams={this.props} options={{ headerShown: false }} />
      <Stack.Screen name='RegisterSuccess' component={RegisterSuccess} initialParams={this.props} options={{ headerShown: false }} />
    </Stack.Navigator>
    )
  }
}



