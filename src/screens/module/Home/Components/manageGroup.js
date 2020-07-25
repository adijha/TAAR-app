import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, FlatList, TouchableOpacity, Image, TextInput, Platform } from 'react-native';
import { dummyUserSelectedgroup } from './startGroup';
const manageGroup = (props) => {
    const [groupName, setGroupName] = useState('Development Team');
    const [isProfilePicAvailable, setIsProfilePicAvailable] = useState(true);
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#005082', paddingTop: Platform.OS === 'ios' ? 40 : 10, }}>
                <View style={styles.innerContainer}>
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
                                <Text style={styles.createGroupText}>MANAGE GROUP</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 26, }}>
                            <Text style={[styles.userSelectedText, { fontWeight: 'bold' }]}>{dummyUserSelectedgroup.length}</Text>
                            <Text style={styles.userSelectedText}> users </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.mainContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        {
                            isProfilePicAvailable ?
                                <View>
                                    <View style={{}}>
                                        <Image
                                            style={{ borderWidth: 3, borderRadius: 45, width: 71, height: 71, borderColor: 'rgba(0, 0, 0, 0.15)' }}
                                            source={dummyPic}
                                        />
                                    </View>
                                    <View style={{ position: 'absolute', top: '60%', left: '70%' }}>
                                        <TouchableOpacity>
                                            <Image
                                                style={{ borderWidth: 3, borderRadius: 15, width: 30, height: 30, borderColor: '#fff' }}
                                                source={cameraRealIcon}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View> :
                                <View style={styles.dummyPic}>
                                    <Image
                                        source={cameraIcon}
                                        style={{ width: 19, height: 17 }}
                                    />
                                </View>
                        }
                    </View>
                    <View>
                        <Text style={styles.deleteText}>DELETE GROUP</Text>
                    </View>

                </View>


                <Text style={{ marginTop: 10, color: '#212121', fontSize: 14, letterSpacing: 1.4 }}>Group Name</Text>
                <View style={{ marginTop: 10 }}>
                    <TextInput
                        style={styles.allTextInput}
                        editable={true}
                        placeholder="Eg. School Team"
                        value={groupName}
                        onChangeText={(text) => setGroupName(text)}
                    // onFocus={() => setSpace(true)}
                    // onEndEditing={() => setSpace(false)}
                    />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('SingleChat')}
                        style={[styles.btn, { borderColor: groupName.length !== 0 ? '#39B54A' : '#000' }]}
                    >
                        <Text style={[styles.btnText, { color: groupName.length !== 0 ? '#39B54A' : '#000' }]}>DONE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerGroupText}>Group Users {dummyUserSelectedgroup.length}</Text>

                    <View style={{}}>
                        <View style={{ marginVertical: 5, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={styles.inviteView}>
                                <Image
                                    style={{ width: 15, height: 15, borderRadius: 15 }}
                                    source={dummyUser}
                                />
                            </View>
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#000" }}>Invite New Users</Text>

                            </View>
                        </View>
                        <FlatList
                            style={{}}
                            showsHorizontalScrollIndicator={false}
                            data={dummyUserSelectedgroup}
                            renderItem={({ item, index }) => (
                                <View style={{ marginVertical: 10 }}>
                                    <View style={{ marginLeft: 0, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Image
                                                style={{ width: 30, height: 30, borderRadius: 15 }}
                                                source={item.profilePic}
                                            />
                                            <View style={{ marginLeft: 10 }}>
                                                <Text style={{ fontSize: 14, fontWeight: '600', color: "#000" }}>{item.name}</Text>
                                                <Text style={{ marginTop: 3, fontSize: 13, fontWeight: 'normal', color: "#666666" }}>{item.mobile}</Text>

                                            </View>
                                        </View>
                                        {
                                            index === 0 ?
                                                <Text style={{ fontSize: 12, fontWeight: 'bold', color: "#005082" }}>Admin</Text>
                                                :
                                                <View style={styles.crossView}>
                                                    <Image
                                                        style={{ width: 11, height: 11, }}
                                                        source={crossIcon}
                                                    />
                                                </View>
                                        }

                                    </View>
                                </View>

                            )}
                        />

                    </View>


                </View>
            </View>
            {/* <KeyboardAvoidingView style={{ marginBottom: Platform.OS === 'ios' ? 10 : 0 }} behavior={Platform.OS === 'android' ? 'height' : 'padding'}> */}

            {/* </KeyboardAvoidingView> */}
        </View>
    )
}
const longBackArrow = require('../../../../images/52.png');
const cameraIcon = require('../../../../images/63.png');
const crossIcon = require('../../../../images/62.png');
const cameraRealIcon = require('../../../../images/43.png');
const dummyUser = require('../../../../images/53.png');
const dummyPic = require('../../../../images/44.png');



const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inviteView: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#005082',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 0,
    },
    allTextInput: {
        width: '100%',
        height: 48,
        backgroundColor: '#f8f8f8',
        paddingLeft: 19,
        color: '#666666',
        fontSize: 14,
        fontWeight: '500',
        borderRadius: 4

    },
    btn: {
        width: '100%',
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#000'
    },
    btnText: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        letterSpacing: 2.1
    },
    dummyPic: {
        height: 76,
        width: 76,
        borderRadius: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#005082',
        backgroundColor: '#F0F0F0'
    },
    userSelectedText: {
        color: '#CCDCE6',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.92,
        marginTop: 5
    },
    createGroupText: {
        marginLeft: 12,
        color: '#f8f8f8',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1.92
    },
    innerContainer: {
        paddingTop: Platform.OS==='ios'?'5%':'15%',
        paddingBottom: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    mainContainer: {
        paddingHorizontal: 15,
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 15
    },
    crossView: {
        backgroundColor: '#D53B3B',
        alignSelf: 'flex-end',
        borderWidth: 2,
        borderColor: '#fff',
        width: 28,
        height: 28,
        // marginTop: -5,
        // marginLeft: 5,
        alignItems: 'center',
        borderRadius: 28 / 2,
        justifyContent: 'center',
    },
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#fff',
        borderTopColor: '#E5E5E5',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: Platform.OS === 'ios' ? 10 : 0
    },
    footerGroupText: {
        color: '#212121',
        marginVertical: 10,
        fontWeight: '700',
        fontSize: 14,
    },
    deleteText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#D53B3B'
    }
})
export default manageGroup;