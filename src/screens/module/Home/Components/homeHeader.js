import React from 'react';
import { View, Text, Image, StyleSheet,TouchableOpacity } from 'react-native';

const homeHeader = ({navigation}) => {
    const onPressProfile = () =>{
        navigation.navigate('MyProfile');
        //Settings
    }
    return (
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
                <TouchableOpacity
                onPress={onPressProfile}
                >
                    <Image
                        style={styles.profilePic}
                        source={dummyPic}
                    />
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default homeHeader;
const settingIcon = require('../../../../images/45.png');
const searchIcon = require('../../../../images/46.png');
const dummyPic = require('../../../../images/44.png');
const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: '#005082',
        paddingTop: Platform.OS === 'ios' ? 40 : 10,
    },
    innerContainer: {
        paddingTop: 20,
        paddingBottom: 30,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    titleText: {
        marginLeft: 12,
        color: '#f8f8f8',
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 1.92
    },
    profilePic: {
        borderRadius: 16,
        height: 32,
        width: 32,
        marginLeft: 20
    }
})