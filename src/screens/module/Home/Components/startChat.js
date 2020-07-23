import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const startChat = ()=>{
    return(
        <View style={styles.container}>
            <Text>this is start chat</Text>
        </View>
    )
}

export default startChat;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})