import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Image, Dimensions } from 'react-native';
import Card from '../../../../components/common/Card'
import dummyChat from './dummy-data-chat';
import { connect } from 'react-redux';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
import firebase from "../../../../firebase/config";
import { token,userId } from "../../../../utils/constants";

class Chats extends React.Component {
    // state = {
    //     allUserData =[],
    //     showAddButton: false
    // }
    constructor() {
        super();
        this.firestoreRef = firebase.firestore().collection('users');
        this.state = {
            isLoading: true,
            userArr: [],
            showAddButton: false
        };
    }
    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    getCollection = (querySnapshot) => {
        const userArr = [];
        querySnapshot.forEach((res) => {
            const { id, firstname, lastname,photo,gender,phoneno } = res.data();
            if (userId !== id) {
                userArr.push({
                    id: id,
                        firstname,
                        lastname,
                        photo,
                        gender,
                        phoneno,
                });
            }
           console.log(userArr)
        });
        this.setState({
            userArr,
            isLoading: false,
        });
    }

    nameTap = (profileImg, name, guestUserId) => {
        if (!profileImg) {
          this.props.navigation.navigate("SingleChat", {
            name,
            imgText: name.charAt(0),
            guestUserId,
            currentUserId: userId,
          });
        } else {
          this.props.navigation.navigate("SingleChat", {
            name,
            img: profileImg,
            guestUserId,
            currentUserId: userId,
          });
        }
      };
    render() {
        return (
            <View style={{ flex: 1, }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.userArr}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity onPress={() =>  this.nameTap(item.photo,item.firstname,item.id)}>
                            <View
                                style={styles.singleChatContainer}>
                                <View style={{ borderRadius: 20 }}>
                                    <Image
                                    defaultSource={dummyPic}
                                        style={styles.profileImage}
                                        source={{ uri: item.photo&&item.photo }}
                                    />
                                </View>
                                <View style={styles.chatTextContainer}>
                                    <Text style={{ marginVertical: 5, fontWeight: 'bold', letterSpacing: 0.8 }}>{item.firstname}</Text>
                                    {/* <Text numberOfLines={1} style={{ width: '80%', letterSpacing: 0.8 }}>{item.message}</Text> */}
                                </View>
                                <View style={{ alignItems: 'flex-end', }}>
                                    {/* <Text>{item.timeStamp}</Text> */}
                                    {/* {!item.read ? <View style={styles.newMessageIcon} /> : null} */}
                                </View>
                            </View>
                        </TouchableOpacity>

                    )}
                />

                <View style={{ marginLeft: '80%', position: 'absolute', marginTop: deviceHeight * (Platform.OS === 'ios' ? this.state.showAddButton ? 0.45 : 0.20 : 0.50) }}>
                    <View style={[styles.addButton, { borderRadius: 35, marginTop: !this.state.showAddButton ? (deviceHeight * (Platform.OS === 'ios' ? 0.46 : 0.19)) : (deviceHeight * (Platform.OS === 'ios' ? 0.0 : -0.06)) }]}>
                        {
                            this.state.showAddButton ?
                                <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('StartGroup')}>
                                        <View style={[styles.messageIconBackground, { marginTop: 5 }]}>
                                            <ImageBackground
                                                style={styles.messageImage}
                                                source={messageIcon}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>+</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('StartChat')}>
                                        <View style={[styles.messageIconBackground, { marginTop: 20 }]}>
                                            <ImageBackground
                                                style={styles.messageImage}
                                                source={messageIcon}>
                                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>+</Text>
                                            </ImageBackground>
                                        </View>
                                    </TouchableOpacity>

                                </View> : null
                        }
                        <TouchableOpacity onPress={() => this.setState({ showAddButton: !this.state.showAddButton })}>
                            <View style={[styles.messageIconBackground, { marginTop: this.state.showAddButton ? 20 : 0 }]}>
                                <ImageBackground
                                    style={styles.messageImage}
                                    source={messageIcon}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>+</Text>
                                </ImageBackground>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default connect(
    (state) => ({
        homeReducer: state.homeReducer
    })
)(Chats);
const messageIcon = require('../../../../images/50.png');
const dummyPic = require('../../../../images/dummy-user.png');

const styles = StyleSheet.create({
    messageIconBackground: {
        backgroundColor: '#005082',
        height: 70,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 35,
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius:45/2
    },
    singleChatContainer: {
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 12,
        flexDirection: 'row'
    },
    messageImage: {
        width: 30,
        height: 30,
        alignItems: 'center',
        paddingVertical: '3%'
        // justifyContent:'center'
    },
    chatTextContainer: {
        marginLeft: 10,
        flex: 1
    },
    newMessageIcon: {
        marginTop: 10,
        backgroundColor: '#005082',
        width: 9,
        height: 9,
        borderRadius: 5
    },
    addButton: {
        borderRadius: 2,
        elevation: 3,
        backgroundColor: '#fff',
        // marginTop: 25,
        width: '89%',
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 7,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        // alignSelf: 'center',
    }
})