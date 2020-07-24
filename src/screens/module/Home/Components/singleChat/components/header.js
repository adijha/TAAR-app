import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = (props) => {
    return (
        <View style={{ backgroundColor: '#005082', paddingTop: '10%', }}>
            <View style={{ paddingTop: 20, paddingBottom: 10, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                    onPress={()=>props.navigation.goBack()}
                    >
                        <Image
                            style={{ height: 12, width: 16, }}
                            source={longBackArrow}
                        />
                    </TouchableOpacity>

                    <Image
                        style={{ height: 37, width: 37, marginHorizontal: 12 }}
                        source={dummyPic}
                    />
                    <Text style={{ marginLeft: 0, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 2.5 }}>Marie Watson</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        style={{ height: 20, width: 20 }}
                        source={callIcon}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <View
                            style={{ backgroundColor: '#fff', width: 6, height: 6, borderRadius: 3 }}
                        />
                        <View
                            style={{ backgroundColor: '#fff', width: 6, height: 6, borderRadius: 3, marginVertical: 3 }}
                        />
                        <View
                            style={{ backgroundColor: '#fff', width: 6, height: 6, borderRadius: 3 }}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Header;
const longBackArrow = require('../../../../../../images/52.png');
const settingIcon = require('../../../../../../images/45.png');
const callIcon = require('../../../../../../images/55.png');
const dummyPic = require('../../../../../../images/44.png');
const styles = StyleSheet.create({

})