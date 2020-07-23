import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const startGroup = ()=>{
    return(
        <View style={styles.container}>
            <Text>this is start group</Text>
        </View>
    )
}

export default startGroup;
const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
})