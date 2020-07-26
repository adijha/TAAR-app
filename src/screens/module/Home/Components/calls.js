import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform, Image, Dimensions } from 'react-native';
import Card from '../../../../components/common/Card'
import dummyChat from './dummy-data-chat';
let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
const calls = ({navigation}) => {
    const [showAddButton, setShowAddButton] = useState(false);
    const onPressNewCall = () => {
        navigation.navigate('StartCall')
    }
    const onPressUserCall = (item) => {
        navigation.navigate('Calling', { user: item });
    }
    // console.log(props);
    return (
        <View style={{ flex: 1, }}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={dummyChat}
                renderItem={({ item, index }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('SingleChat')}>
                        <View
                            style={styles.singleChatContainer}>
                            <View style={{ borderRadius: 20 }}>
                                <Image
                                    style={styles.profileImage}
                                    source={item.profilePic}
                                />
                            </View>
                            <View style={styles.chatTextContainer}>
                                <Text style={{ marginVertical: 5, fontWeight: 'bold', letterSpacing: 0.8 }}>{item.name}</Text>
                                <Text style={{ fontSize: 13, fontWeight: '500', color: '#D53B3B' }}>3 Missed Calls</Text>
                                {/* <Text>{item.timeStamp}</Text> */}

                            </View>
                            <View style={{ alignItems: 'flex-end', }}>
                                <TouchableOpacity
                                    onPress={() => onPressUserCall(item)}
                                >
                                    <Image
                                        style={{ width: 15, height: 15 }}
                                        source={callIconSolidBlue}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
            />

            <View style={{ marginLeft: '80%', position: 'absolute', marginTop: deviceHeight * (Platform.OS === 'ios' ? showAddButton ? 0.45 : 0.20 : 0.50) }}>
                <View style={[styles.addButton, { borderRadius: 35, marginTop: (deviceHeight * (Platform.OS === 'ios' ? 0.46 : 0.19)) }]}>
                    <TouchableOpacity
                        onPress={onPressNewCall}
                    >
                        <View style={[styles.callIconBackground, { marginTop: showAddButton ? 20 : 0 }]}>
                            <Image
                                style={styles.callImage}
                                source={callIconOutline} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
export default calls;
const callIconOutline = require('../../../../images/65.png');
const callIconSolidBlue = require('../../../../images/67.png');


const styles = StyleSheet.create({
    callIconBackground: {
        backgroundColor: '#005082',
        height: 63,
        width: 63,
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
    callImage: {
        width: 21,
        height: 21,
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
        // borderRadius: 2,
        // elevation: 3,
        // backgroundColor: '#fff',
        // // marginTop: 25,
        // width: '89%',
        // shadowColor: '#000',
        // shadowOpacity: 0.3,
        // shadowRadius: 7,
        // shadowOffset: {
        //     width: 2,
        //     height: 2,
        // },
        // alignSelf: 'center',
    }
})