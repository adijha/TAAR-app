import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator,Image,FlatList } from 'react-native';
import dummySingleChat from '../dummy-data-singleChat';
import Card from '../../../../../../components/common/Card';
const ChatArea = () => {
    let myId = 100;
    return (
        <View style={{ flex: 1, }}>
            {
                false ?
                    <View style={{}}>
                        <View style={{ marginTop: 0, alignItems: 'center', }}>
                            <View style={[styles.messageLoadingView, { marginBottom: 5, borderRadius: 5 }]}>
                                <Text style={{ fontSize: 18, fontWeight: '400' }} >Loading messages</Text>
                            </View>
                            <ActivityIndicator size='large' />
                        </View>
                    </View> :
                    <View style={{marginHorizontal:12,}}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            inverted={true}
                            // initialNumToRender={10}
                            data={dummySingleChat.reverse()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{}}>
                                        <View >
                                            {
                                                //my id
                                                item.id !== myId ?
                                                    <View style={[styles.chatWrapper, { justifyContent: item.id !==myId? 'flex-start' : 'flex-end', }]}>
                                                        <View style={{ alignSelf: 'flex-end', marginRight: 10 }}>
                                                            <Image
                                                            source={senderProfilePic}
                                                            style={{width:30,height:30,borderRadius:15}}
                                                            />
                                                        </View>
                                                        <View style={{}}>
                                                            <View style={{ marginTop: 5 }}>
                                                                <View style={[styles.senderView,{ backgroundColor:'#fff',}]}>
                                                                    <Text style={{fontSize:16}} >{item.message ? item.message : null}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                    </View> :
                                                    <View style={[styles.chatWrapper, { justifyContent: item.uid === myId ? 'flex-start' : 'flex-end', }]}>
                                                        <View style={{ marginRight: 10 }}>
                                                            <View style={{ marginTop: 5 }}>
                                                                <View style={[styles.senderView,{ backgroundColor:'#005082',}]}>
                                                                    <Text style={{fontSize:16,color:'#fff'}} >{item.message ? item.message : null}</Text>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        <View style={{ alignSelf: 'flex-end', }}>
                                                        <Image
                                                            source={myProfilePic}
                                                            style={{width:30,height:30,borderRadius:15}}
                                                            />
                                                        </View>
                                                    </View>
                                            }
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
            }
        </View>
    )
}
export default ChatArea;
const senderProfilePic = require('../../../../../../images/51.png');
const myProfilePic = require('../../../../../../images/44.png');

const styles = StyleSheet.create({
    messageLoadingView: {
        padding: 5,
        // padding: 15,
        borderRadius: 2,
        elevation: 3,
        backgroundColor: '#fff',
        marginTop: 25,
        // width: '92%',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 7,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        alignSelf: 'center',
    },
    chatWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    senderView:{
        borderRadius:(Platform.OS === 'android') ? 3 : 4,
        justifyContent:'center',
        paddingHorizontal:12,
        paddingVertical:6
    }
})