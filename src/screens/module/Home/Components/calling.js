import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const calling = ({navigation}) => {
  // console.log(props);
  const {user} = props.route.params;
  const onEndCall = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 120 / 2,
            borderWidth: 2,
            borderColor: '#000000',
          }}
          source={user.profilePic}
        />
        <Text style={styles.voiceHdText}>FULL HD VOICE CALL</Text>
        <Text style={styles.nameText}>{user.name}</Text>
        <Text style={styles.callingText}>Calling...</Text>
        <Text style={[styles.timeText]}>05 : 05</Text>

        <View style={{flexDirection: 'row', marginTop: '40%'}}>
          <View style={styles.micSpeakerContainer}>
            <Image source={micIcon} style={styles.micIcon} />
          </View>
          <View style={[styles.micSpeakerContainer, {marginLeft: '5%'}]}>
            <Image source={speakerIcon} style={styles.speakerIcon} />
          </View>
        </View>
        <View style={styles.callEndView}>
          <TouchableOpacity onPress={onEndCall}>
            <Image source={callEndIcon} style={styles.callEndIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const micIcon = require('../../../../images/68.png');
const speakerIcon = require('../../../../images/70.png');
const callEndIcon = require('../../../../images/69.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '30%',
    // justifyContent:'center',
    alignItems: 'center',
  },
  callEndIcon: {
    width: 22,
    height: 22,
  },
  timeText: {
    marginTop: '5%',
    fontSize: 28,
    color: '#888888',
  },
  callEndView: {
    marginTop: '10%',
    width: 62,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 62 / 2,
    backgroundColor: '#EE1340',
  },
  micIcon: {
    width: 20,
    height: 29,
  },
  speakerIcon: {
    width: 31,
    height: 29,
  },
  callingText: {
    fontSize: 16,
    color: '#333333',
    letterSpacing: 1,
    fontWeight: '400',
    marginTop: '10%',
  },
  micSpeakerContainer: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70 / 2,
    borderWidth: 1,
    borderColor: '#707070',
  },
  nameText: {
    fontSize: 25,
    color: '#000',
    fontWeight: '600',
    marginTop: '5%',
  },
  voiceHdText: {
    marginTop: '10%',
    fontSize: 14,
    fontWeight: '400',
    letterSpacing: 1.7,
    color: '#888888',
  },
});

export default calling;
