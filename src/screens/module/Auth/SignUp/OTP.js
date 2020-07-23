import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Image,
    Dimensions,
    View,
    Text,
    TextInput,
    Keyboard,
    TouchableOpacity,
} from 'react-native';

const OTP = (props) => {
    const [mobile, setMobile] = useState('');
    const [isVerified,setIsVerified] = useState(false);
    const [space, setSpace] = useState(false);
      const verifyOtp = () =>{
          props.navigation.navigate('VerifiedOTP');
      }
    return (
        <View style={styles.container}>
            {space ? (
                <Image
                    source={require('../../../../icons/logo.png')}
                    style={{
                        width: 110,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                        marginTop: 70,
                    }}
                />
            ) : (
                    <Image
                        source={require('../../../../icons/logoBig.png')}
                        style={{
                            width: 110,
                            alignSelf: 'center',
                            resizeMode: 'contain',
                            marginTop: 70,
                        }}
                    />
                )}
            <View
                style={{
                    padding: 15,
                    borderRadius: 2,
                    elevation: 3,
                    backgroundColor: '#fff',
                    marginTop: 25,
                    width: '92%',
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    shadowRadius: 4,
                    shadowOffset: {
                        height: 5,
                    },
                    alignSelf: 'center',
                }}>
                <View style={{ marginHorizontal: 37 }}>
                    <Text style={{ color: '#2a2a2a', fontWeight: 'bold', fontSize: 20 }}>Verification Code</Text>
                    {
                        isVerified ? 
                    <Text style={{ marginTop: 24, fontSize: 14, fontWeight: 'normal' }}>Enter the 4 digit Number</Text>
:
<Text style={{ marginTop: 24,color:"#d53b3b", fontSize: 14, fontWeight: '500' }}>Incorrect OTP</Text>

                    }
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                width: '20%',
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)':'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                            <TextInput
                                style={[styles.otpTextInput,{color:isVerified ? 'rgba(42, 42, 42, 0.8)':'rgba(203, 93, 93, 0.5)'}]}
                                editable={true}
                                maxLength={1}
                                keyboardType='numeric'
                                value={mobile}
                                onChangeText={(text) => setMobile(text)}
                                onFocus={() => setSpace(true)}
                                onEndEditing={() => setSpace(false)}
                            />

                        </View>
                        <View
                            style={{
                                marginHorizontal:20,
                                borderWidth: 1,
                                width: '20%',
                                marginRight:20,
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)':'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                                <TextInput
                                style={[styles.otpTextInput,{color:isVerified ? 'rgba(42, 42, 42, 0.8)':'rgba(203, 93, 93, 0.5)'}]}
                                    editable={true}
                                    maxLength={1}
                                    keyboardType='numeric'
                                    value={mobile}
                                    onChangeText={(text) => setMobile(text)}
                                    onFocus={() => setSpace(true)}
                                    onEndEditing={() => setSpace(false)}
                                />

                        </View>
                        <View
                            style={{
                                borderWidth: 1,
                                width: '20%',
                                marginRight:20,
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)':'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                                <TextInput
                                style={[styles.otpTextInput,{color:isVerified ? 'rgba(42, 42, 42, 0.8)':'rgba(203, 93, 93, 0.5)'}]}
                                    editable={true}
                                    maxLength={1}
                                    keyboardType='numeric'
                                    value={mobile}
                                    onChangeText={(text) => setMobile(text)}
                                    onFocus={() => setSpace(true)}
                                    onEndEditing={() => setSpace(false)}
                                />

                        </View>
                        <View
                            style={{
                                borderWidth: 1,
                                width: '20%',
                                marginRight:20,
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)':'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                            <View>
                                <TextInput
                                style={[styles.otpTextInput,{color:isVerified ? 'rgba(42, 42, 42, 0.8)':'rgba(203, 93, 93, 0.5)'}]}
                                    editable={true}
                                    maxLength={1}
                                    keyboardType='numeric'
                                    value={mobile}
                                    onChangeText={(text) => setMobile(text)}
                                    onFocus={() => setSpace(true)}
                                    onEndEditing={() => setSpace(false)}
                                />
                            </View>

                        </View>
                    </View>

                    <Text style={{ marginRight: 22, marginTop: 25, fontSize: 12 }}>
                        {'Enter the OTP you received to'}
                    </Text>
                    <Text style={{ marginRight: 22, marginTop: 3, fontSize: 12,fontWeight:'bold' }}>
                        {'+91 XXXXXX1234'}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 21 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#005082' }}>{'RESEND OTP'}</Text>
                    </View>
                </View>

            </View>
            <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={verifyOtp}
                    style={{
                        marginHorizontal: 30,
                        height: 48,
                        width: 272,
                        padding: 13,
                        backgroundColor: mobile.length === 10 ? '#005082' : '#fff',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 4,
                        backgroundColor: isVerified ? '#39b54a':'#d53b3b',
                        marginTop: space ? '5%' : '35%',
                    }}>
                    <Text style={{ letterSpacing: 2.1, color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{isVerified?'VERIFY':'TRY AGAIN'}</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

export default OTP;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    otpTextInput: {
        height: 52,
        width: 52,
        fontSize:32,
        textAlign:'center',
    },
});
