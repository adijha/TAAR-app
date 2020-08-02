import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import dummyUserList from './dummy-data-userList';
import firebase from "../../../../firebase/config";
import { connect } from 'react-redux';
import { token,userId } from "../../../../utils/constants";


class StartChat extends React.Component {
    constructor() {
        super();
        this.firestoreRef = firebase.firestore().collection('users');
        this.state = {
            isLoading: true,
            userArr: [],
            // showAddButton: false
        };
    }
    componentDidMount() {
        this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
    getCollection = (querySnapshot) => {
        const userArr = [];
        querySnapshot.forEach((res) => {
            const { id, firstname, lastname, photo, gender, phoneno } = res.data();
            console.log(userId,"currentUser");
            if (userId !== id) {
                userArr.push({
                    id: id,
                    firstname,
                    lastname,
                    photo,
                    gender,
                    phoneno,
                });
            }
            console.log(userArr)
        });
        this.setState({
            userArr,
            isLoading: false,
        });
    }
    nameTap = (profileImg, name, guestUserId) => {
        if (!profileImg) {
          this.props.navigation.navigate("SingleChat", {
            name,
            imgText: name.charAt(0),
            guestUserId,
            currentUserId: userId,
          });
        } else {
          this.props.navigation.navigate("SingleChat", {
            name,
            img: profileImg,
            guestUserId,
            currentUserId: userId,
          });
        }
      };
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#005082', paddingTop: Platform.OS === 'ios' ? 40 : 10, }}>
                    <View style={{ paddingTop: 20, paddingBottom: 30, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}>
                                <Image
                                    style={{ height: 15, width: 15 }}
                                    source={longBackArrow}
                                />
                            </TouchableOpacity>
                            <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>START CHAT</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <Image
                                    style={{ height: 15, width: 15, position: 'absolute', marginLeft: 13, marginTop: -8 }}
                                    source={plusIcon}
                                />
                                <Image
                                    style={{ height: 18, width: 18 }}
                                    source={dummyUser}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{flex:1}}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={this.state.userArr}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity onPress={() => this.nameTap(item.photo, item.firstname, item.id)}>
                                <View
                                    style={styles.singleChatContainer}>
                                    <View style={{ borderRadius: 20 }}>
                                        <Image
                                        defaultSource={dummyPic}
                                            style={styles.profileImage}
                                            source={{ uri: item.photo&&item.photo }}
                                        />
                                    </View>
                                    <View style={styles.chatTextContainer}>
                                        <Text style={{ marginVertical: 5, fontWeight: 'bold', letterSpacing: 0.8 }}>{item.firstname}</Text>
                                        {/* <Text numberOfLines={1} style={{ width: '80%', letterSpacing: 0.8 }}>{item.message}</Text> */}
                                    </View>
                                    <View style={{ alignItems: 'flex-end', }}>
                                        {/* <Text>{item.timeStamp}</Text> */}
                                        {/* {!item.read ? <View style={styles.newMessageIcon} /> : null} */}
                                    </View>
                                </View>
                            </TouchableOpacity>

                        )}
                    />
                </View>

            </View>
        )
    }
}
const dummyPic = require('../../../../images/dummy-user.png');


// const startChat = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <View style={{ backgroundColor: '#005082', paddingTop: Platform.OS === 'ios' ? 40 : 10, }}>
//                 <View style={{ paddingTop: 20, paddingBottom: 30, justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <TouchableOpacity
//                             onPress={() => navigation.goBack()}>
//                             <Image
//                                 style={{ height: 15, width: 15 }}
//                                 source={longBackArrow}
//                             />
//                         </TouchableOpacity>
//                         <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>START CHAT</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//                         <View>
//                             <Image
//                                 style={{ height: 15, width: 15, position: 'absolute', marginLeft: 13, marginTop: -8 }}
//                                 source={plusIcon}
//                             />
//                             <Image
//                                 style={{ height: 18, width: 18 }}
//                                 source={dummyUser}
//                             />
//                         </View>
//                     </View>
//                 </View>
//             </View>
//             <View style={{}}>
//                 <FlatList
//                     showsVerticalScrollIndicator={false}
//                     data={dummyUserList}
//                     renderItem={({ item, index }) => (
//                         <View style={styles.singleChatContainer}>
//                             <View style={{ borderRadius: 20 }}>
//                                 <Image
//                                     style={styles.profileImage}
//                                     source={item.profilePic}
//                                 />
//                             </View>
//                             <View style={styles.chatTextContainer}>
//                                 <Text style={{ marginVertical: 5, fontWeight: 'bold', letterSpacing: 0.8 }}>{item.name}</Text>
//                                 <Text numberOfLines={1} style={{ width: '80%', letterSpacing: 0.8 }}>{item.mobile}</Text>
//                             </View>
//                         </View>
//                     )}
//                 />
//             </View>

//         </View>
//     )
// }

export default connect(
    (state) => ({
        homeReducer: state.homeReducer
    })
)(StartChat);
// export default startChat;
const longBackArrow = require('../../../../images/52.png');
const dummyUser = require('../../../../images/53.png');
const plusIcon = require('../../../../images/54.png')

const styles = StyleSheet.create({
    container: {
        // justifyContent:'center',
        // alignItems:'center',
        flex: 1
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius:45/2
    },
    singleChatContainer: {
        flex:1,
        alignItems: 'center',
        marginHorizontal: 20,
        marginVertical: 12,
        flexDirection: 'row'
    },
    chatTextContainer: {
        marginLeft: 10,
        flex: 1
    },
})