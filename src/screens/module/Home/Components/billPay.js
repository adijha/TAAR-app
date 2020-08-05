import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {
  senderMsg,
  recieverMsg,
  groupCreate,
  sendGroupChatMsg,
} from '../../../../network';
import firebase from '../../../../firebase/config';

const billPays = (props) => {
  const [message, setMessages] = useState([]);
  const createGroup = () => {
    groupCreate();
  };
  const sendGroupMsg = () => {
    sendGroupChatMsg();
    // updateMessageList();
  };
  const updateMessageList = () => {
    try {
      firebase
        .database()
        .ref('groupMessages')
        .child(groupId)
        // .child(guestUserId)
        .on('value', (dataSnapshot) => {
          let msgs = [];
          dataSnapshot.forEach((child) => {
            msgs.push({
              sendBy: child.val().userId,
              // recievedBy: child.val().messege.reciever,
              msg: child.val().message,
              timestamp: child.val().timestamp,
            });
          });
          console.log(msgs);
          setMessages(msgs.reverse());
        });
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    const groupId = 'LkbdGDK7bJ';
    try {
      firebase
        .database()
        .ref('groupMessages')
        .child(groupId)
        // .child(guestUserId)
        .on('value', (dataSnapshot) => {
          let msgs = [];
          dataSnapshot.forEach((child) => {
            msgs.push({
              sendBy: child.val().userId,
              // recievedBy: child.val().messege.reciever,
              msg: child.val().message,
              timestamp: child.val().timestamp,
            });
          });
          console.log(msgs);
          setMessages(msgs.reverse());
        });
    } catch (error) {
      alert(error);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../images/49.png')}
        style={{
          width: 300,
          resizeMode: 'contain',
          marginTop: '25%',
        }}
      />
      {/* <TouchableOpacity onPress={createGroup}>
        <Text>creategroupChat</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={sendGroupMsg}>
        <Text>sendgroupmsg</Text>
      </TouchableOpacity> */}
      <Text style={styles.registerText}>
        Services will be back soon stay tuned
      </Text>
    </View>
  );
};
export default billPays;
const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
  },
  registerText: {
    width: '70%',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -30,
  },
});
