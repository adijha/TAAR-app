import React, {useEffect} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  ActivityIndicator,
} from 'react-native';

const SplashScreen = () => {
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
