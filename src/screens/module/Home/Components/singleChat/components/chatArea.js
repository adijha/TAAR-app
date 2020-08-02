import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,ActivityIndicator, Image, FlatList, TextInput, Platform, KeyboardAvoidingView } from 'react-native';

import dummySingleChat from '../dummy-data-singleChat';
import dummyGroupSingleChat from '../dummy-data-groupChat';
import ImagePicker from "react-native-image-picker";
import firebase from "../../../../../../firebase/config";
import { senderMsg, recieverMsg } from "../../../../../../network";

import Card from '../../../../../../components/common/Card';
const dimensions = Dimensions.get('window');
const ChatArea = ({ currentUserId, img, guestUserId }) => {
    // const { params } = route;
    // const { name, img, imgText, guestUserId, currentUserId } = params;
    const [msgValue, setMsgValue] = useState("");
    const [messeges, setMesseges] = useState([]);
    let myId = 100;
    const [isGrouChat, setIsGroupChat] = useState(true);
    useEffect(() => {
        try {
            firebase
                .database()
                .ref("messeges")
                .child(currentUserId)
                .child(guestUserId)
                .on("value", (dataSnapshot) => {
                    let msgs = [];
                    dataSnapshot.forEach((child) => {
                        msgs.push({
                            sendBy: child.val().messege.sender,
                            recievedBy: child.val().messege.reciever,
                            msg: child.val().messege.msg,
                            img: child.val().messege.img,
                        });
                    });
                    console.log(msgs)
                    setMesseges(msgs.reverse());
                });
        } catch (error) {
            alert(error);
        }
    }, []);

    const handleSend = () => {
        setMsgValue("");
        if (msgValue) {
            senderMsg(msgValue, currentUserId, guestUserId, "")
                .then(() => { })
                .catch((err) => alert(err));

            // * guest user

            recieverMsg(msgValue, currentUserId, guestUserId, "")
                .then(() => { })
                .catch((err) => alert(err));
        }
    };

    const handleCamera = () => {
        const option = {
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(option, (response) => {
            if (response.didCancel) {
                console.log("User cancel image picker");
            } else if (response.error) {
                console.log(" image picker error", response.error);
            } else {
                // Base 64
                let source = "data:image/jpeg;base64," + response.data;

                senderMsg(msgValue, currentUserId, guestUserId, source)
                    .then(() => { })
                    .catch((err) => alert(err));

                // * guest user

                recieverMsg(msgValue, currentUserId, guestUserId, source)
                    .then(() => { })
                    .catch((err) => alert(err));
            }
        });
    };

    const handleOnChange = (text) => {
        setMsgValue(text);
    };

    return (
        // <View>
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
                    <View style={{ marginHorizontal: 12, }}>
                        <FlatList
                            inverted
                            data={messeges}
                            keyExtractor={(_, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                            // inverted={true}
                            // initialNumToRender={10}
                            // msg={item.msg}
                            // userId={item.sendBy}
                            // img={item.img}
                            // onImgTap={() => imgTap(item.img)}
                            // data={isGrouChat ? dummyGroupSingleChat.reverse() : dummySingleChat.reverse()}
                            renderItem={({ item, index }) => {
                                return (
                                    <View style={{}}>
                                        <View >
                                            {
                                                //my id
                                                item.recievedBy === currentUserId ?
                                                    <View>
                                                        <View style={[styles.chatWrapper, { justifyContent: true ? 'flex-start' : 'flex-end', }]}>
                                                            <View style={{ alignSelf: 'flex-end', marginRight: 10 }}>
                                                                <Image
                                                                    source={{ uri: item.img }}
                                                                    style={{ width: 30, height: 30, borderRadius: 15 }}
                                                                />
                                                            </View>
                                                            <View style={{}}>
                                                                {/* {isGrouChat ? <View style={{}}><Text style={styles.nameText}>{item.name}</Text></View> : null} */}
                                                                <View style={{ marginTop: 5 }}>
                                                                    <View style={[styles.senderView, { backgroundColor: '#fff', }]}>
                                                                        {item.img ?
                                                                            <Image
                                                                                source={{ uri: item.img }}
                                                                                resizeMode="cover"
                                                                                style={{ height: 100, width: 100 }}
                                                                            /> :
                                                                            <Text style={{ fontSize: 16 }} >{item.msg ? item.msg : null}</Text>

                                                                        }
                                                                    </View>
                                                                </View>
                                                                {/* <Text style={[styles.timeStamp, { marginTop: 5 }]}>{item.timeStamp}</Text> */}
                                                            </View>
                                                        </View>
                                                    </View>
                                                    :
                                                    <View>
                                                        <View style={{ alignSelf: 'flex-end', justifyContent: false ? 'flex-start' : 'flex-end', }}>
                                                            <View style={{ marginRight: 10 }}>
                                                                <View style={{ marginTop: 5 }}>
                                                                    {/* {isGrouChat ? <View style={{ alignSelf: item.reciever === currentUserId  ? 'flex-end' : 'flex-start', }}><Text style={styles.nameText}>{'Me'}</Text></View> : null} */}

                                                                    <View style={[styles.senderView, { backgroundColor: '#005082', }]}>
                                                                        {item.img ?
                                                                            <Image
                                                                                source={{ uri: item.img }}
                                                                                resizeMode="cover"
                                                                                style={{ height: 100, width: 100 }}
                                                                            /> :
                                                                            <Text style={{ fontSize: 16, color: '#fff' }} >{item.msg ? item.msg : null}</Text>
                                                                        }
                                                                    </View>

                                                                </View>
                                                            </View>
                                                            <View style={{ alignSelf: 'flex-end', marginRight: 10, marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                                                                <Image
                                                                    source={doubleTick}
                                                                    style={{ width: 17, height: 9, marginRight: 5 }}
                                                                />
                                                                {/* <Text style={styles.timeStamp}>{item.timeStamp}</Text> */}

                                                            </View>
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
const doubleTick = require('../../../../../../images/64.png');

const sendIcon = require('../../../../../../images/56.png');
const photoIcon = require('../../../../../../images/57.png');
const cameraIcon = require('../../../../../../images/58.png');
const micIcon = require('../../../../../../images/59.png');
const smileIcon = require('../../../../../../images/60.png');
const attachmentIcon = require('../../../../../../images/61.png');
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
    timeStamp: {
        fontSize: 13,
        color: '#777777',
        fontWeight: 'normal'
    },
    nameText: {
        fontSize: 13,
        color: '#666666',
        fontWeight: '700',
        marginBottom: 5
    },
    chatWrapper: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    senderView: {
        borderRadius: (Platform.OS === 'android') ? 3 : 4,
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6
    },
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
        // marginBottom: Platform.OS === 'ios' ? '5%' : 0,
        paddingHorizontal: 12
    },
    textInput: {
        width: '85%',
        height: 40,
        fontSize: 16,
        backgroundColor: '#fff',
        // borderWidth:1
    }
})