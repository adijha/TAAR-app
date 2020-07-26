import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Platform, TouchableOpacity } from 'react-native';
import dummyUserList from './dummy-data-userList';
import Card from '../../../../components/common/Card'

export const dummyUserSelectedgroup = [
    {
        profilePic: require('../../../../images/51.png'),
        name: 'Marie Watson',
        mobile: '+91-9292837283',
    },
    {
        profilePic: require('../../../../images/51.png'),
        name: 'Marie Watson',
        mobile: '+91-9292837283',
    },
    {
        profilePic: require('../../../../images/51.png'),
        name: 'Marie Watson',
        mobile: '+91-9292837283',
    },
    {
        profilePic: require('../../../../images/51.png'),
        name: 'Marie Watson',
        mobile: '+91-9292837283',
    },

]

const startGroup = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#005082', paddingTop: Platform.OS === 'ios' ? 40 : 10, }}>
                <View style={{ paddingTop: 20, paddingBottom: 30, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}>
                                <Image
                                    style={{ height: 15, width: 15 }}
                                    source={longBackArrow}
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>CREATE GROUP</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginLeft: 30,}}>
                            <Text style={[styles.userSelectedText, { fontWeight: dummyUserSelectedgroup.length !== 0 ? 'bold' : '500' }]}>{dummyUserSelectedgroup.length !== 0 ? dummyUserSelectedgroup.length : 'No'}</Text>
                            <Text style={styles.userSelectedText}> users selected</Text>
                        </View>

                    </View>
                    {
                        dummyUserSelectedgroup.length === 0 ?
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
                            </View> :
                            <TouchableOpacity
                                onPress={() => navigation.navigate('CreateGroupProfile')}
                            >
                                <View>
                                    <Text style={{ color: '#F8F8F8', fontSize: 16, letterSpacing: 2.5, fontWeight: '600' }}>NEXT</Text>
                                </View>
                            </TouchableOpacity>

                    }

                </View>
            </View>
            <View style={{ flex: 1 }}>
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
                                style={{ width: 28, height: 28, borderColor: '#707070', borderWidth: 1, borderRadius: 15 }}
                            />
                        </View>
                    )}
                />
            </View>
            {
                dummyUserSelectedgroup.length !== 0 ?
                    <View style={styles.footer}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={dummyUserSelectedgroup}
                            renderItem={({ item, index }) => (
                                <View style={{ marginTop: 3 }}>
                                    <View
                                        style={styles.crossView}
                                    >
                                        <Image
                                            style={{ width: 8, height: 8, }}
                                            source={crossIcon}
                                        />
                                    </View>
                                    <View style={{ alignItems: 'center', marginLeft: 10, }}>
                                        <Image
                                            style={{ width: 30, height: 30, borderRadius: 15 }}
                                            source={item.profilePic}
                                        />
                                        <Text>{item.name.split(" ")[0]}</Text>
                                    </View>

                                </View>

                            )}
                        />
                    </View> :
                    null
            }

        </View>
    )
}

export default startGroup;
const longBackArrow = require('../../../../images/52.png');
const dummyUser = require('../../../../images/53.png');
const plusIcon = require('../../../../images/54.png');
const crossIcon = require('../../../../images/62.png');


const styles = StyleSheet.create({
    container: {
        // justifyContent:'center',
        // alignItems:'center',
        flex: 1
    },
    userSelectedText: {
       
        color: '#CCDCE6',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.92,
        marginTop: 5
    },
    crossView: {
        backgroundColor: '#D53B3B',
        alignSelf: 'flex-end',
        borderWidth: 2,
        borderColor: '#fff',
        zIndex: 1,
        width: 18,
        height: 18,
        position: 'absolute',
        marginTop: -5,
        marginLeft: 5,
        alignItems: 'center',
        borderRadius: 9,
        justifyContent: 'center',
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
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#fff',
        borderTopColor: '#E5E5E5',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: Platform.OS === 'ios' ? 10 : 0
    }
})