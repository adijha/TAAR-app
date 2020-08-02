import React,{useState} from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Header from './components/header';
import ChatArea from './components/chatArea';
import Footer from './components/footer';

const singleChat = ({ navigation,route }) => {
    const { params } = route;
    const { name, img, imgText, guestUserId, currentUserId } = params;
    const [msgValue, setMsgValue] = useState("");
    const [messeges, setMesseges] = useState([]);
    return (
        <View style={{ flex: 1, }}>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle={'dark-content'
                }
            />
            <Header navigation={navigation} img={img} imgText={imgText} name={name}/>
            <ChatArea img={img} currentUserId={currentUserId} guestUserId={guestUserId}/>
            <Footer currentUserId={currentUserId} guestUserId={guestUserId}/>
        </View>
    )
}
export default singleChat;

const styles = StyleSheet.create({

})