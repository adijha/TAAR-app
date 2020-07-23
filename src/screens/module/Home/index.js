import React, { useState } from 'react';
import { View, Text, Image, Platform, TouchableOpacity, StyleSheet } from 'react-native';
import Chats from './Components/chats';
import Calls from './Components/calls';
import BillPay from './Components/billPay';
const Home = (props) => {
    const [activeTab,setTab] = useState('Chats');
    return (
        <View>
            <View style={{  backgroundColor: '#005082', height: 119, paddingTop: Platform.OS === 'ios' ? 40 : 10,  }}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row',paddingHorizontal: 20 }}>
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
                </View>

                <View style={{marginTop:Platform.OS==='ios'? 28:55,flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity
                    onPress={()=>setTab('Chats')}
                    style={styles.buttonStyle}
                    >
                        <View style={[styles.buttonViewStyle,{borderBottomColor:activeTab==='Chats' ? '#f8f8f8':'#005082'}]}>
                            <Text
                            style={[styles.buttonText,{color:activeTab==='Chats' ? '#f8f8f8':'grey',}]}
                            >Chats</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setTab('Calls')}
                    style={styles.buttonStyle}>
                        <View style={[styles.buttonViewStyle,{borderBottomColor:activeTab==='Calls' ? '#f8f8f8':'#005082'}]}>
                            <Text
                            style={[styles.buttonText,{color:activeTab==='Calls' ? '#f8f8f8':'grey',}]}
                            >Calls</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={()=>setTab('BillPay')}
                    style={styles.buttonStyle}>
                        <View style={[styles.buttonViewStyle,{borderBottomColor:activeTab==='BillPay' ? '#f8f8f8':'#005082'}]}>
                            <Text
                            style={[styles.buttonText,{color:activeTab==='BillPay' ? '#f8f8f8':'grey',}]}
                            >Bill Pay</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingTop:100}}>
            {
                activeTab ==='Chats'?
                <Chats/>
                :
                activeTab ==='Calls'?
                <Calls/>:
                <BillPay/>
            }
        </View>
        </View>
        
    )
}
export default Home;

const styles = StyleSheet.create({
    buttonViewStyle: {
        borderBottomWidth: 2,
        alignItems:'center'
    },
    buttonStyle:{
        width:'33%',
    },
    buttonText:{
       fontSize:16,
       fontWeight:'500',
       letterSpacing:0.91,
       
    }

})

const settingIcon = require('../../../images/45.png');
const searchIcon = require('../../../images/46.png');
const dummyPic = require('../../../images/44.png');
