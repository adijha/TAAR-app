import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const registrationSuccessful = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../icons/logoBig.png')}
                style={{
                    width: 110,
                    alignSelf: 'center',
                    resizeMode: 'contain',
                    marginTop: 70,
                }}
            />
            <Image
                source={require('../../../../images/48.png')}
                style={{
                    width: 300,
                    height: 175,
                    // alignSelf: 'center',
                    // resizeMode: 'contain',
                    marginTop: 70,
                }}
            />
            <Text style={styles.registerText}>Registration successfully completed</Text>
                <TouchableOpacity
                onPress={()=>props.navigation.navigate('HomeStack')}
                    style={styles.buttonChatting}>
                    <Text style={styles.startText}>START CHATTING</Text>
                </TouchableOpacity>

        </View>
    )
}
export default registrationSuccessful;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1
    },
    registerText: {
        textAlign: 'center',
        fontSize: 27,
        fontWeight: 'bold'
    },
    startText: {
        fontSize: 14,
        color: '#F8F8F8',
        fontWeight: 'bold',
        letterSpacing: 2.1,
    },
    buttonChatting: {
        marginTop:30,
        width: '80%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#005082'
    }
})