import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import dummyUserList from './dummy-data-userList';
const startGroup = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#005082', paddingTop: Platform.OS === 'ios' ? 40 : 10, }}>
                <View style={{ paddingTop: 20, paddingBottom: 30, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => props.navigation.goBack()}>
                                <Image
                                    style={{ height: 15, width: 15 }}
                                    source={longBackArrow}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>CREATE GROUP</Text>
                            </View>
                        </View>
                        <Text style={{ marginLeft: 30, color: '#CCDCE6', fontSize: 14, fontWeight: '600', letterSpacing: 0.92, marginTop: 5 }}>No user selected</Text>


                    </View>


                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Image
                                style={{ height: 15, width: 15, position: 'absolute', marginLeft: 13, marginTop: -8 }}
                                source={plusIcon}
                            />
                            <Image
                                style={{ height: 18, width: 18 }}
                                source={dummyUser}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flex:1}}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={dummyUserList}
                    renderItem={({ item, index }) => (
                        <View style={styles.singleChatContainer}>
                            <View style={{ borderRadius: 20 }}>
                                <Image
                                    style={styles.profileImage}
                                    source={item.profilePic}
                                />
                            </View>
                            <View style={styles.chatTextContainer}>
                                <Text style={{ marginVertical: 5, fontWeight: 'bold', letterSpacing: 0.8 }}>{item.name}</Text>
                                <Text numberOfLines={1} style={{ width: '80%', letterSpacing: 0.8 }}>{item.mobile}</Text>
                            </View>
                            <View
                                style={{ width: 28, height: 28,borderColor:'#707070', borderWidth: 1, borderRadius: 15 }}
                            />
                        </View>
                    )}
                />
            </View>

        </View>
    )
}

export default startGroup;
const longBackArrow = require('../../../../images/52.png');
const dummyUser = require('../../../../images/53.png');
const plusIcon = require('../../../../images/54.png')

const styles = StyleSheet.create({
    container: {
        // justifyContent:'center',
        // alignItems:'center',
        flex: 1
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
    chatTextContainer: {
        marginLeft: 10,
        flex: 1
    },
})