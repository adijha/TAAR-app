import React, { useEffect, useState, useRef } from 'react';
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
import Card from '../../../../components/common/Card';


const OTP = ({navigation}) => {
    const [mobile, setMobile] = useState('');
    const [isVerified, setIsVerified] = useState(true);
    const [pin1, setPin1] = useState(null);
    const [pin2, setPin2] = useState(null);
    const [pin3, setPin3] = useState(null);
    const [pin4, setPin4] = useState(null);
    const pin1ref = useRef(null);
    const pin2ref = useRef(null);
    const pin3ref = useRef(null);
    const pin4ref = useRef(null);
    const [space, setSpace] = useState(false);
    const verifyOtp = () => {
        if(pin1 && pin2 && pin3 && pin4){
            console.log(pin1,pin2,pin3,pin4)
            navigation.navigate('VerifiedOTP');
        }
    }
    // const otpValueChange = () =>{
    //     // if(!otpValue){
    //         let newValue = otpValue*
    //     }
    // }
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
            <Card>
                <View style={{ marginHorizontal: 37 }}>
                    <Text style={{ color: '#2a2a2a', fontWeight: 'bold', fontSize: 20 }}>Verification Code</Text>
                    {
                        isVerified ?
                            <Text style={{ marginTop: 24, fontSize: 14, fontWeight: 'normal' }}>Enter the 4 digit Number</Text>
                            :
                            <Text style={{ marginTop: 24, color: "#d53b3b", fontSize: 14, fontWeight: '500' }}>Incorrect OTP</Text>

                    }
                    <View style={{ flexDirection: 'row' }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                borderWidth: 1,
                                width: '20%',
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)' : 'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                            <TextInput
                                ref={pin1ref}
                                style={[styles.otpTextInput, { color: isVerified ? 'rgba(42, 42, 42, 0.8)' : 'rgba(203, 93, 93, 0.5)' }]}
                                editable={true}
                                maxLength={1}
                                onChangeText={(pin1) => {
                                    setPin1(pin1);
                                    if (pin1) {
                                        pin2ref.current.focus()
                                    }

                                }}
                                value={pin1}
                                keyboardType='numeric'
                                // value={mobile}
                                // onChangeText={(text) => setMobile(text)}
                                onFocus={() => setSpace(true)}
                                // onEndEditing={() => setSpace(false)}
                            />

                        </View>
                        <View
                            style={{
                                marginHorizontal: 20,
                                borderWidth: 1,
                                width: '20%',
                                marginRight: 20,
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)' : 'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                            <TextInput
                                ref={pin2ref}
                                onChangeText={(pin2) => {
                                    setPin2(pin2);
                                    if(pin2){
                                        pin3ref.current.focus()
                                    }
                                }}
                                value={pin2}
                                style={[styles.otpTextInput, { color: isVerified ? 'rgba(42, 42, 42, 0.8)' : 'rgba(203, 93, 93, 0.5)' }]}
                                editable={true}
                                maxLength={1}
                                keyboardType='numeric'
                                // value={mobile}
                                // onChangeText={(text) => setMobile(text)}
                                onFocus={() => setSpace(true)}
                                // onEndEditing={() => setSpace(false)}
                            />

                        </View>
                        <View
                            style={{
                                borderWidth: 1,
                                width: '20%',
                                marginRight: 20,
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)' : 'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                            <TextInput
                                ref={pin3ref}
                                onChangeText={(pin3) => {
                                    setPin3(pin3);
                                    if(pin3){
                                        pin4ref.current.focus()
                                    }
                                }}
                                value={pin3}
                                style={[styles.otpTextInput, { color: isVerified ? 'rgba(42, 42, 42, 0.8)' : 'rgba(203, 93, 93, 0.5)' }]}
                                editable={true}
                                maxLength={1}
                                keyboardType='numeric'
                                // value={mobile}
                                // onChangeText={(text) => setMobile(text)}
                                onFocus={() => setSpace(true)}
                                // onEndEditing={() => setSpace(false)}
                            />

                        </View>
                        <View
                            style={{
                                borderWidth: 1,
                                width: '20%',
                                marginRight: 20,
                                borderColor: isVerified ? 'rgba(42, 42, 42, 0.5)' : 'rgba(203, 93, 93, 0.5)',
                                borderRadius: 7,
                                marginTop: 10,
                            }}>
                            <View>
                                <TextInput
                                    ref={pin4ref}
                                    onChangeText={(pin4) => {
                                        setPin4(pin4);
                                        if(pin4){
                                            pin4ref.current.focus(false);
                                            setSpace(false);
                                            Keyboard.dismiss()
                                        }
                                        
                                    }}
                                    value={pin4}
                                    style={[styles.otpTextInput, { color: isVerified ? 'rgba(42, 42, 42, 0.8)' : 'rgba(203, 93, 93, 0.5)' }]}
                                    editable={true}
                                    maxLength={1}
                                    keyboardType='numeric'
                                    // value={mobile}
                                    // onChangeText={(text) => setMobile(text)}
                                    onFocus={() => setSpace(true)}
                                    // onEndEditing={() => setSpace(false)}
                                />
                            </View>

                        </View>
                    </View>

                    <Text style={{ marginRight: 22, marginTop: 25, fontSize: 12 }}>
                        {'Enter the OTP you received to'}
                    </Text>
                    <Text style={{ marginRight: 22, marginTop: 3, fontSize: 12, fontWeight: 'bold' }}>
                        {'+91 XXXXXX1234'}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 21 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#005082' }}>{'RESEND OTP'}</Text>
                    </View>
                </View>

            </Card>
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
                        backgroundColor: isVerified ? '#39b54a' : '#d53b3b',
                        marginTop: space ? '5%' : '35%',
                    }}>
                    <Text style={{ letterSpacing: 2.1, color: '#fff', fontSize: 14, fontWeight: 'bold' }}>{isVerified ? 'VERIFY' : 'TRY AGAIN'}</Text>
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
        fontSize: 32,
        textAlign: 'center',
    },
});
