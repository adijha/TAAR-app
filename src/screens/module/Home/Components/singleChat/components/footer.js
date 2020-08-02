import React,{useState} from 'react';
import { View, Text, StyleSheet, TextInput, Platform,TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';
import ImagePicker from "react-native-image-picker";
import { senderMsg, recieverMsg } from "../../../../../../network";

const Footer = ({currentUserId,guestUserId}) => {
    const [msgValue, setMsgValue] = useState("");
    const handleSend = () => {
        setMsgValue("");
        if (msgValue) {
            senderMsg(msgValue, currentUserId, guestUserId, "")
                .then(() => { })
                .catch((err) => alert(err));

            // * guest user

            recieverMsg(msgValue, currentUserId, guestUserId, "")
                .then(() => { })
                .catch((err) => alert(err));
        }
    };

    const handleCamera = () => {
        const option = {
            storageOptions: {
                skipBackup: true,
            },
        };

        ImagePicker.showImagePicker(option, (response) => {
            if (response.didCancel) {
                console.log("User cancel image picker");
            } else if (response.error) {
                console.log(" image picker error", response.error);
            } else {
                // Base 64
                let source = "data:image/jpeg;base64," + response.data;

                senderMsg(msgValue, currentUserId, guestUserId, source)
                    .then(() => { })
                    .catch((err) => alert(err));

                // * guest user

                recieverMsg(msgValue, currentUserId, guestUserId, source)
                    .then(() => { })
                    .catch((err) => alert(err));
            }
        });
    };

    const handleOnChange = (text) => {
        setMsgValue(text);
    };
    return (
        <KeyboardAvoidingView style={{ marginBottom: Platform.OS === 'ios' ? 10 : 0 }} behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
                <View style={styles.container}>
                    <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                        <TextInput
                            placeholder={'Type a message...'}
                            placeholderTextColor={'#999999'}
                            style={styles.textInput}
                            value={msgValue}
                            onChangeText={(text) => handleOnChange(text)}
                        />
                        <View style={{}}>
                            <TouchableOpacity
                             onPress={handleSend}
                            >
                                 <Image
                                style={{ width: 20, height: 17 }}
                                source={sendIcon}
                            />
                            </TouchableOpacity>
                           
                        </View>

                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
                        <Image
                            style={{ width: 23, height: 23, marginRight: 15 }}
                            source={smileIcon}
                        />
                        <Image
                            style={{ width: 23, height: 20, marginRight: 15 }}
                            source={cameraIcon}
                        />
                        <TouchableOpacity
                            onPress={() => handleCamera()}
                        
                        >
                        <Image
                            style={{ width: 23, height: 23, marginRight: 15 }}
                            source={photoIcon}
                        />
                        </TouchableOpacity>
                        
                        <Image
                            style={{ width: 20, height: 23, marginRight: 15 }}
                            source={micIcon}
                        />
                        <Image
                            style={{ width: 20, height: 23 }}
                            source={attachmentIcon}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView> 
    )
}
export default Footer;
const sendIcon = require('../../../../../../images/56.png');
const photoIcon = require('../../../../../../images/57.png');
const cameraIcon = require('../../../../../../images/58.png');
const micIcon = require('../../../../../../images/59.png');
const smileIcon = require('../../../../../../images/60.png');
const attachmentIcon = require('../../../../../../images/61.png');

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        borderBottomWidth: Platform.OS === 'ios' ? 0 : 1,
        // marginBottom: Platform.OS === 'ios' ? '5%' : 0,
        paddingHorizontal: 12
    },
    textInput: {
        width: '85%',
        height: 40,
        fontSize: 16,
        backgroundColor: '#fff',
        // borderWidth:1
    }
})