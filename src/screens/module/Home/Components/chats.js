import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Image, Dimensions } from 'react-native';
import Card from '../../../../components/common/Card'
import dummyChat from './dummy-data-chat';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const chats = (props) => {
    const [showAddButton, setShowAddButton] = useState(false);
    console.log(props)
    return (
        <View style={{ flex: 1, }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dummyChat}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={()=>props.navigation.navigate('SingleChat')}>
                        <View style={styles.singleChatContainer}>
                            <View style={{ borderRadius: 20 }}>
                                <Image
                                    style={styles.profileImage}
                                    source={item.profilePic}
                                />
                            </View>
                            <View style={styles.chatTextContainer}>
                                <Text style={{ marginVertical: 5, fontWeight: 'bold', letterSpacing: 0.8 }}>{item.name}</Text>
                                <Text numberOfLines={1} style={{ width: '80%', letterSpacing: 0.8 }}>{item.message}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', }}>
                                <Text>{item.timeStamp}</Text>
                                {!item.read ? <View style={styles.newMessageIcon} /> : null}
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
            />

            <View style={{ marginLeft: '80%', position: 'absolute', marginTop: deviceHeight * (Platform.OS === 'ios' ? showAddButton ? 0.45 : 0.20 : 0.50) }}>
                <View style={[styles.addButton, { borderRadius: 35, marginTop: !showAddButton ? (deviceHeight * (Platform.OS === 'ios' ? 0.46 : 0.19)) : (deviceHeight * (Platform.OS === 'ios' ? 0.0 : -0.06)) }]}>
                    {
                        showAddButton ?
                            <View>
                                <TouchableOpacity onPress={() => props.navigation.navigate('StartGroup')}>
                                    <View style={[styles.messageIconBackground, { marginTop: 5 }]}>
                                        <ImageBackground
                                            style={styles.messageImage}
                                            source={messageIcon}>
                                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>+</Text>
                                        </ImageBackground>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => props.navigation.navigate('StartChat')}>
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
                    <TouchableOpacity onPress={() => setShowAddButton(!showAddButton)}>
                        <View style={[styles.messageIconBackground, { marginTop: showAddButton ? 20 : 0 }]}>
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
export default chats;
const messageIcon = require('../../../../images/50.png');

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