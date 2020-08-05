import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import dummyUserList from './dummy-data-userList';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5I from 'react-native-vector-icons/FontAwesome5';

const startCall = ({navigation}) => {
  const onPressUserCall = (item) => {
    navigation.navigate('Calling', {user: item});
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#005082',
          paddingTop: Platform.OS === 'ios' ? 40 : 10,
        }}>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 30,
            justifyContent: 'space-between',
            flexDirection: 'row',
            paddingHorizontal: 20,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={26} color="#fff" />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 12,
                color: '#f8f8f8',
                fontSize: 16,
                fontWeight: '600',
                letterSpacing: 1.92,
              }}>
              START A CALL
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <FontAwesome5I name="user-plus" size={20} color="#fff" />
            </View>
          </View>
        </View>
      </View>
      <View style={{}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dummyUserList}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => onPressUserCall(item)}>
              <View style={styles.singleChatContainer}>
                <View style={{borderRadius: 20}}>
                  <Image style={styles.profileImage} source={item.profilePic} />
                </View>
                <View style={styles.chatTextContainer}>
                  <Text
                    style={{
                      marginVertical: 5,
                      fontWeight: 'bold',
                      letterSpacing: 0.8,
                    }}>
                    {item.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{width: '80%', letterSpacing: 0.8}}>
                    {item.mobile}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default startCall;
const dummyUser = require('../../../../images/53.png');
const plusIcon = require('../../../../images/54.png');

const styles = StyleSheet.create({
  container: {
    // justifyContent:'center',
    // alignItems:'center',
    flex: 1,
  },
  profileImage: {
    width: 45,
    height: 45,
  },
  singleChatContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 12,
    flexDirection: 'row',
  },
  chatTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
});
