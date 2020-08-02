import React, { useState } from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';


const Header = ({navigation,img,imgText,name}) => {
    const [isGroupChat, setIsGroupChat] = useState(false);
    const onPressGroupHeader = () =>{
        isGroupChat ? navigation.navigate('ManageGroup'):null;
    }
    const onPressBackArrow = () =>{
        navigation.goBack()
    }
    return (
        <View style={{ backgroundColor: '#005082', paddingTop: '10%', }}>
            <View style={{ paddingTop: 20, paddingBottom: 10, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={onPressBackArrow}
                    >
                        <Image
                            style={{ height: 12, width: 16, }}
                            source={longBackArrow}
                        />
                    </TouchableOpacity>

                    {
                        img?
                        <Image
                        style={{ height: 37, width: 37, marginHorizontal: 12,borderRadius:37/2 }}
                        source={{uri:img}}
                    />:
                    <View style={{height: 37,justifyContent:'center',alignItems:'center', width: 37, marginHorizontal: 12,backgroundColor:'grey'}}>
                        <Text>imgText</Text>
                    </View>
                    }
                   
                    <TouchableOpacity
                    onPress={onPressGroupHeader}
                    >
                        <View>
                            <Text style={{ marginLeft: 0, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 2.5 }}>{name}</Text>
                            {isGroupChat ?
                                <View style={{ flexDirection: 'row', marginLeft: 0, }}>
                                    <Text style={[styles.userSelectedText, { fontWeight: 'bold' }]}>3</Text>
                                    <Text style={styles.userSelectedText}> users </Text>
                                </View> : null
                            }
                        </View>
                    </TouchableOpacity>



                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {
                        !isGroupChat ?
                            <Image
                                style={{ height: 20, width: 20 }}
                                source={callIcon}
                            /> : null
                    }

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
    userSelectedText: {
        color: '#CCDCE6',
        fontSize: 14,
        fontWeight: '600',
        letterSpacing: 0.92,
        marginTop: 5
    },
})