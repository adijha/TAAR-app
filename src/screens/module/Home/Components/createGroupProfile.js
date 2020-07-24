import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const CreateGroupProfile = () =>{
    return(
        <View style={styles.container}>
            <Text>CreateGroupProfile</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})
export default CreateGroupProfile;