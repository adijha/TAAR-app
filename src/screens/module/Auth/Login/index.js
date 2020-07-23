import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Login = (props) =>{
    return(
        <View style={styles.container}>
            <Text>This is login</Text>
        </View>
    )
}
export default Login;

const styles  = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'red'
    }
})