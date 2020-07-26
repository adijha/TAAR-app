import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';

const settings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: '#005082', paddingTop: Platform.OS === 'ios' ? 40 : 10, }}>
                <View style={{ paddingTop: 20, paddingBottom: 30, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}>
                            <Image
                                style={{ height: 15, width: 15 }}
                                source={longBackArrow}
                            />
                        </TouchableOpacity>
                        <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>SETTINGS</Text>
                    </View>
                </View>
            </View>
            <View style={{ paddingHorizontal: 12, paddingTop: 12,flex:1 }}>
                <View style={[styles.innerContainer, { marginVertical: 10 }]}>
                    <Image
                        style={{ height: 24, width: 24 }}
                        source={inviteIcon}
                    />

                    <Text style={styles.innerText}>Invite Friend's</Text>
                </View>
                <View style={[styles.innerContainer, { marginVertical: 10 }]}>
                    <Image
                        style={{ height: 24, width: 24 }}
                        source={shareIcon}
                    />
                    <Text style={styles.innerText}>Share it</Text>
                </View>
                <View style={[styles.innerContainer, { marginVertical: 10 }]}>
                    <Image
                        style={{ height: 26, width: 15, marginLeft: '2%' }}
                        source={mobileIcon}
                    />
                    <Text style={styles.innerText}>Update Mobile Number</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',paddingBottom:Platform.OS==='ios'?'10%':'5%',paddingHorizontal:12}}>
                    <Image
                        style={{ height: 21, width: 17, }}
                        source={deleteIcon}
                    />
                    <Text style={[styles.innerText,{color:'#D53B3B'}]}>Delete Account</Text>
                </View>
        </View>
    )
}
export default settings;
const longBackArrow = require('../../../../images/52.png');
const mobileIcon = require('../../../../images/71.png');
const deleteIcon = require('../../../../images/72.png');
const inviteIcon = require('../../../../images/73.png');
const shareIcon = require('../../../../images/74.png');


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // justifyContent:'center',
        // alignItems:'center',
    },
    innerText: {
        marginLeft: 10,
        fontWeight: 'normal',
        fontSize: 16,
        color: '#333333',
    },
    innerContainer: {
        alignItems: 'center',
        borderBottomWidth: 1, borderBottomColor: '#707070', width: '100%',
        flexDirection: 'row',
        paddingBottom: 10
    }
})