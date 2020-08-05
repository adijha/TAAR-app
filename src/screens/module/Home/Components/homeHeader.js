import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FeatherI from 'react-native-vector-icons/Feather';
const homeHeader = ({navigation, homeReducer}) => {
  const onPressProfile = () => {
    navigation.navigate('MyProfile');
    //Settings
  };
  const {loggedInUser} = homeReducer;
  return (
    <View style={styles.innerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="settings" size={22} color="#fff" />
        <Text style={styles.titleText}>CHAT</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FeatherI name="search" size={21} color="#fff" />
        <TouchableOpacity onPress={onPressProfile}>
          <Image
            defaultSource={'https://adijha.com/profile.jpg'}
            style={styles.profilePic}
            source={{
              uri: loggedInUser.photo
                ? loggedInUser.photo
                : 'https://adijha.com/profile.jpg',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default connect((state) => ({
  homeReducer: state.homeReducer,
}))(homeHeader);
const dummyPic = require('../../../../images/dummy-user.png');
const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: '#005082',
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
  },
  innerContainer: {
    paddingTop: 14,
    paddingBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  titleText: {
    marginLeft: 10,
    color: '#f8f8f8',
    fontSize: 17,
    fontWeight: 'bold',
    letterSpacing: 1.92,
  },
  profilePic: {
    borderRadius: 16,
    height: 32,
    width: 32,
    marginLeft: 20,
  },
});
