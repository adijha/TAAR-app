import React, {useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  ActivityIndicator,
} from 'react-native';
import {getAsyncStorage,keys} from '../../../asyncStorage';
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
        source={splashImage}
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
