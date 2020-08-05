import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Chats from './Components/chats';
import Calls from './Components/calls';
import BillPay from './Components/billPay';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeHeader from './Components/homeHeader';
const Tab = createMaterialTopTabNavigator();

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#005082',
          paddingTop: Platform.OS === 'ios' ? 40 : 10,
        }}>
        <HomeHeader navigation={navigation} />
        <View style={{flex: 1}}>
          <Tab.Navigator
            tabBarOptions={{
              tabStyle: {
                backgroundColor: '#005082',
                borderBottomWidth: 3,
                borderBottomColor: '#fff',
              },
              activeTintColor: '#fff',
              inactiveTintColor: '#f0f0f0',
              labelStyle: {fontSize: 15, fontWeight: '500'},
              indicatorStyle: {backgroundColor: 'grey'},
            }}>
            <Tab.Screen name="Chats">
              {() => <Chats navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="Calls">
              {() => <Calls navigation={navigation} />}
            </Tab.Screen>
            <Tab.Screen name="Bil Pays">
              {() => <BillPay navigation={navigation} />}
            </Tab.Screen>
          </Tab.Navigator>
        </View>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  buttonViewStyle: {
    borderBottomWidth: 2,
    alignItems: 'center',
  },
  buttonStyle: {
    width: '33%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 0.91,
  },
});

const settingIcon = require('../../../images/45.png');
const searchIcon = require('../../../images/46.png');
const dummyPic = require('../../../images/44.png');
