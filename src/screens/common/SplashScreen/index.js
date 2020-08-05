import React, {useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  ActivityIndicator,
  Text,
} from 'react-native';
import {getAsyncStorage, keys} from '../../../asyncStorage';
import JwtDecode from 'jwt-decode';
import {setUserId} from '../../../utils/constants';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const redirect = setTimeout(() => {
      getAsyncStorage(keys.access_token)
        .then((token) => {
          if (token) {
            let userData = JwtDecode(token);
            setUserId(userData.id);
            // setUniqueValue(token);
            navigation.replace('HomeStack');
          } else {
            navigation.replace('AuthStack');
          }
        })
        .catch((err) => {
          console.log(err);
          navigation.replace('AuthStack');
        });
    }, 2000);
    return () => clearTimeout(redirect);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../icons/logo.png')}
        style={{
          width: 110,
          height: 110,
          alignSelf: 'center',
          resizeMode: 'contain',
          position: 'absolute',
          top: Dimensions.get('window').height / 3,
        }}
      />
      <View style={{position: 'absolute', bottom: '10%', alignSelf: 'center'}}>
        <Image
          source={require('../../../icons/splashLogo.png')}
          style={{
            width: 110,
            height: 80,
            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginTop: -18,
            textAlign: 'center',
            letterSpacing: 1,
          }}>
          MADE FOR INDIA
        </Text>
      </View>
      <Image
        source={require('./splashIllustration.png')}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          alignSelf: 'center',
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
});

const splashImage = require('../../../images/1.png');
