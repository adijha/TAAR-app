import React, { useState } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Chats from './Components/chats';
import Calls from './Components/calls';
import BillPay from './Components/billPay';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeHeader from './Components/homeHeader';

const Tab = createMaterialTopTabNavigator();

const Home = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1,backgroundColor: '#005082',  paddingTop: Platform.OS === 'ios' ? 40 : 10, }}>
            <HomeHeader/>
                
                {/* <View style={{ paddingTop:20,paddingBottom:30,justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 15, width: 15 }}
                            source={settingIcon}
                        />
                        <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>CHAT</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ height: 18, width: 18 }}
                            source={searchIcon}
                        />
                        <Image
                            style={{ borderRadius: 16, height: 32, width: 32, marginLeft: 20 }}
                            source={dummyPic}
                        />
                    </View>
                </View> */}
                <View style={{flex:1,}}>
                    <Tab.Navigator
                        tabBarOptions={{
                            tabStyle:{
                                backgroundColor:'#005082',
                                borderBottomWidth:3,
                                borderBottomColor:'#fff',
                            },
                             activeTintColor: '#F8F8F8',
                            inactiveTintColor: 'grey',
                            labelStyle: { fontSize: 15, fontWeight: '500' }
                        }}>
                        <Tab.Screen name="Chats">{() => <Chats navigation={props.navigation} />}</Tab.Screen>
                        <Tab.Screen name="Calls">{() => <Calls navigation={props.navigation} />}</Tab.Screen>
                        <Tab.Screen name="Bil Pays">{() => <BillPay navigation={props.navigation} />}</Tab.Screen>

                    </Tab.Navigator>
                </View>
            </View>
        </View>

    )
}
export default Home;

const styles = StyleSheet.create({
    buttonViewStyle: {
        borderBottomWidth: 2,
        alignItems: 'center'
    },
    buttonStyle: {
        width: '33%',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        letterSpacing: 0.91,

    }

})

const settingIcon = require('../../../images/45.png');
const searchIcon = require('../../../images/46.png');
const dummyPic = require('../../../images/44.png');
