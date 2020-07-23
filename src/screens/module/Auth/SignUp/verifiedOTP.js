import React, {useEffect,useState} from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  View,
  ActivityIndicator,
} from 'react-native';

const verifiedOTP = (props) => {
    const [wait, setWait] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setWait(false);
      }, 3000);
    }, []);
    useEffect(()=>{
        props.navigation.navigate('CreateAccount');
    },[wait])
  return (
    <View style={styles.container}>
      <Image
        source={verifiedOTPImage}
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

export default verifiedOTP;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
  },
});

const verifiedOTPImage = require('../../../../images/10.png');
