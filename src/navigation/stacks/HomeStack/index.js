import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../../screens/module/Home';
import StartChat from '../../../screens/module/Home/Components/startChat';
import StartGroup from '../../../screens/module/Home/Components/startGroup';
import SingleChat from '../../../screens/module/Home/Components/singleChat';
import CreateGroupProfile from '../../../screens/module/Home/Components/createGroupProfile';
import ManageGroup from '../../../screens/module/Home/Components/manageGroup';
import StartCall from '../../../screens/module/Home/Components/startCall';
import Calling from '../../../screens/module/Home/Components/calling';
import MyProfile from '../../../screens/module/Home/Components/myProfile';
import Settings from '../../../screens/module/Home/Components/settings';






const Stack = createStackNavigator();
const HomeStack = (props) => {
    return (
      <Stack.Navigator headerMode={'screen'} >
        <Stack.Screen name='Home' component={Home} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='StartChat' component={StartChat} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='StartGroup' component={StartGroup} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='SingleChat' component={SingleChat} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='CreateGroupProfile' component={CreateGroupProfile} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='ManageGroup' component={ManageGroup} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='StartCall' component={StartCall} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='Calling' component={Calling} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='MyProfile' component={MyProfile} initialParams={props} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings} initialParams={props} options={{ headerShown: false }} />





      </Stack.Navigator>
    )
  }
  export default HomeStack;