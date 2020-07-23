import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const billPays = (props) => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../images/49.png')}
                style={{
                    width: 300,
                    height: 175,
                    // alignSelf: 'center',
                    // resizeMode: 'contain',
                    marginTop: 70,
                }}
            />
            <Text style={styles.registerText}>Services will be back soon stay tuned</Text>

        </View>
    )
}
export default billPays;
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1
    },
    registerText: {
        width:'70%',
        textAlign: 'center',
        fontSize: 22,
        fontWeight: 'bold'
    },
})