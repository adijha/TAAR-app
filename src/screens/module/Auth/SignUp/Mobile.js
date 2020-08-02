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
  ActivityIndicator,
} from 'react-native';
import {widthPercentageToDP,heightPercentageToDP} from 'react-native-responsive-screen';
import Card from '../../../../components/common/Card';
import { getOtp } from './signupAction';
import { connect } from 'react-redux';

const MobileScreen = ({ navigation, getOtp, signupReducer }) => {
  const [mobile, setMobile] = useState('');
  const [space, setSpace] = useState(false);
  const getOtpCode = () => {
    if (mobile.length === 10) {
      const params = {
        mobile: mobile.toString(),
        navigation: navigation,
        isResend:false
      }
      getOtp(params);
      // navigation.navigate('OTP');
    }
  }
  return (
    <View style={styles.container}>
      {space ? (
        <Image
          source={require('../../../../icons/logo.png')}
          style={{
            width: widthPercentageToDP(40),
            alignSelf: 'center',
            resizeMode: 'contain',
            marginTop: heightPercentageToDP(10),
          }}
        />
      ) : (
          <Image
            source={require('../../../../icons/logoBig.png')}
            style={{
              width: widthPercentageToDP(40),
              alignSelf: 'center',
              resizeMode: 'contain',
              marginTop: heightPercentageToDP(10),
            }}
          />
        )}
      <Card
      >
        <Text style={{ color: '#2A2A2A', fontWeight: 'bold', fontSize: widthPercentageToDP(5) }}>
          Your Phone!
        </Text>
        <Text style={{ marginTop: heightPercentageToDP(2), fontSize: widthPercentageToDP(3.5), fontWeight: 'normal' }}>Phone Number</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.9,
            borderColor: '#005082',
            // padding: 5,
            borderRadius: 4,
            marginTop: heightPercentageToDP(2),
            paddingHorizontal: widthPercentageToDP(5),
          }}>
          <Text
            style={{
              color: '#005082',
              fontSize: 14,
              marginRight: 6,
              fontWeight: 'bold',
            }}>
            +91
          </Text>
          <TextInput
            style={styles.phoneTextInput}
            editable={true}
            placeholder="Enter your number"
            maxLength={10}
            keyboardType='numeric'
            value={mobile}
            onChangeText={(text) => setMobile(text)}
            onFocus={() => setSpace(true)}
            onEndEditing={() => setSpace(false)}
          />
        </View>
        <Text style={{ marginRight: 20, marginTop: 25, fontSize: 12 }}>
          {'We will send you '}
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>one time password</Text>
          {'\non this mobile number'}
        </Text>
      </Card>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity
          onPress={getOtpCode}
          style={{
            borderWidth: 1,
            marginHorizontal: 30,
            height: 48,
            width: 272,
            padding: 13,
            backgroundColor: mobile.length === 10 ? '#005082' : '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#2A2A2A',
            borderRadius: 4,
            marginTop: space ? '10%' : '35%',
          }}>
          {signupReducer.isOtpLoading && <ActivityIndicator size='large' color='#fff' />}
          {!signupReducer.isOtpLoading && <Text style={{ color: mobile.length === 10 ? '#fff' : '#2A2A2A', fontSize: 14, fontWeight: 'bold' }}>GET OTP</Text>}
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default connect(
  state => ({
    signupReducer: state.signupReducer,
  }),
  dispatch => ({
    getOtp: (params) => {
      dispatch(getOtp(params));
    },
  }))(MobileScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  phoneTextInput: {
    height: 48,
    width: 271
  },
});
