import React from 'react';
import { View, Text, StyleSheet, TextInput, Platform, KeyboardAvoidingView, Image } from 'react-native';

const Footer = () => {
    return (
        <KeyboardAvoidingView style={{ marginBottom: Platform.OS === 'ios'?10:0 }} behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
            <View style={styles.container}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                    <TextInput
                        placeholder={'Type a message...'}
                        placeholderTextColor={'#999999'}
                        style={styles.textInput}
                    />
                    <View style={{}}>
                        <Image
                            style={{ width: 20, height: 17 }}
                            source={sendIcon}
                        />
                    </View>

                </View>
                <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                    <Image
                        style={{ width: 23, height: 23, marginRight: 15 }}
                        source={smileIcon}
                    />
                    <Image
                        style={{ width: 23, height: 20, marginRight: 15 }}
                        source={cameraIcon}
                    />
                    <Image
                        style={{ width: 23, height: 23, marginRight: 15 }}
                        source={photoIcon}
                    />
                    <Image
                        style={{ width: 20, height: 23, marginRight: 15 }}
                        source={micIcon}
                    />
                    <Image
                        style={{ width: 20, height: 23 }}
                        source={attachmentIcon}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
export default Footer;
const sendIcon = require('../../../../../../images/56.png');
const photoIcon = require('../../../../../../images/57.png');
const cameraIcon = require('../../../../../../images/58.png');
const micIcon = require('../../../../../../images/59.png');
const smileIcon = require('../../../../../../images/60.png');
const attachmentIcon = require('../../../../../../images/61.png');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#707070',
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