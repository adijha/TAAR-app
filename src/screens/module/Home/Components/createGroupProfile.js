import React, { useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { dummyUserSelectedgroup } from './startGroup';
const CreateGroupProfile = (props) => {
    const [groupName, setGroupName] = useState('');
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
                                <Text style={styles.createGroupText}>CREATE GROUP</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', marginLeft: 30, }}>
                            <Text style={styles.userSelectedText}>Finish details</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.mainContainer}>
                {
                    false ?
                        <View>
                            <View style={{}}>
                                <Image
                                    style={{ borderWidth: 3, borderRadius: 45, width: 71, height: 71, borderColor: 'rgba(0, 0, 0, 0.15)' }}
                                    source={dummyPic}
                                />
                            </View>
                            <View style={{ position: 'absolute', top: '60%', left: '15%' }}>
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
            </View>
            <KeyboardAvoidingView style={{ marginBottom: Platform.OS === 'ios' ? 10 : 0 }} behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <View style={styles.footer}>
                <Text style={styles.footerGroupText}>Group Users {dummyUserSelectedgroup.length}</Text>

                    <View style={{ flexDirection: 'row' }}>
                        <FlatList
                            style={{}}
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
                        <View style={{ marginTop: 3, alignItems: 'center', }}>
                            <View style={styles.inviteView}>
                                <Image
                                    style={{ width: 15, height: 15, borderRadius: 15 }}
                                    source={dummyUser}
                                />
                            </View>
                            <View>
                                <Text>{'Invite'}</Text>
                            </View>
                        </View>
                    </View>


                </View>
            </KeyboardAvoidingView>
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
        paddingTop: 20,
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
    footer: {
        borderTopWidth: 1,
        backgroundColor: '#fff',
        borderTopColor: '#E5E5E5',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
        marginBottom: Platform.OS === 'ios' ? 10 : 0
    },
    footerGroupText:{
        color:'#212121',
        marginLeft:12,
        marginVertical:10,
        fontWeight:'700',
        fontSize:14

    }
})
export default CreateGroupProfile;