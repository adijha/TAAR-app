import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Header from './components/header';
import ChatArea from './components/chatArea';
import Footer from './components/footer';

const singleChat = () => {
    return (
        <View style={{ flex: 1,}}>
            <StatusBar
                translucent={true}
                backgroundColor="transparent"
                barStyle={'dark-content'
                }
            />
            <Header/>
            <ChatArea/>
            <Footer/>
        </View>
    )
}
export default singleChat;

const styles = StyleSheet.create({

})