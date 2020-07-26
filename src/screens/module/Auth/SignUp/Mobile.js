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
import Card from '../../../../components/common/Card';
const MobileScreen = ({navigation}) => {
  const [mobile, setMobile] = useState('');
  const [space, setSpace] = useState(false);
  const getOtp = () =>{
    if(mobile.length===10){
      navigation.navigate('OTP');
    }
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
      <Card
        >
        <Text style={{ color: '#2A2A2A', fontWeight: 'bold', fontSize: 20 }}>
          Your Phone!
        </Text>
        <Text style={{ marginTop: 20, fontSize: 14, fontWeight: 'normal' }}>Phone Number</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 0.9,
            borderColor: '#005082',
            // padding: 5,
            borderRadius: 4,
            marginTop: 10,
            paddingHorizontal: 13,
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
      <View style={{alignItems:'center'}}>
        <TouchableOpacity
        onPress={getOtp}
          style={{
            borderWidth: 1,
            marginHorizontal: 30,
            height: 48,
            width: 272,
            padding: 13,
            backgroundColor:mobile.length===10 ? '#005082':'#fff',
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#2A2A2A',
            borderRadius: 4,
            marginTop: space ? '10%' : '35%',
          }}>
          <Text style={{ color: mobile.length===10 ? '#fff':'#2A2A2A', fontSize: 14 ,fontWeight:'bold'}}>GET OTP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default MobileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  phoneTextInput: {
    height: 48,
    width: 271
  },
  // shadow: {
  //   shadowOffset: { width: 10, height: 10 },
  //   shadowColor: 'black',
  //   shadowOpacity: 1,
  //   elevation: 3,
  //   // background color must be set
  //   backgroundColor : "#0000" // invisible color
  // }
});
