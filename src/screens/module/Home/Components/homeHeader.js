import React from 'react';
import { View, Text,Image,StyleSheet } from 'react-native';

const homeHeader = () => {
    return (
        // <View style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 15, width: 15 }}
                        source={settingIcon}
                    />
                    <Text style={styles.titleText}>CHAT</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 18, width: 18 }}
                        source={searchIcon}
                    />
                    <Image
                        style={styles.profilePic}
                        source={dummyPic}
                    />
                </View>
        </View>
    // </View>
    )
}
export default homeHeader;
const settingIcon = require('../../../../images/45.png');
const searchIcon = require('../../../../images/46.png');
const dummyPic = require('../../../../images/44.png');
const styles = StyleSheet.create({
    outerContainer:{
        flex: 1, 
        backgroundColor: '#005082', 
        paddingTop: Platform.OS === 'ios' ? 40 : 10,
    },
    innerContainer:{
        paddingTop: 20, 
        paddingBottom: 30, 
        justifyContent: 'space-between', 
        flexDirection: 'row', 
        paddingHorizontal: 20
    },
    titleText:{
        marginLeft: 12, 
        color: '#f8f8f8', 
        fontSize: 16, 
        fontWeight: '600', 
        letterSpacing: 1.92
    },
    profilePic:{
        borderRadius: 16, 
        height: 32, 
        width: 32, 
        marginLeft: 20
    }
})