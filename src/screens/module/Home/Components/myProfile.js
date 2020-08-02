import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from 'react-native';
import {connect} from 'react-redux';
class MyProfile extends React.Component {
    state = {
        name: '',
        space: false,
        photo:''
    }
    onClickDone = () => {
        // if (firstName && lastName && gender) {
        // navigation.navigate('RegisterSuccess');
        // }
    }
    componentDidMount(){
        const {firstname,lastname,photo} = this.props.homeReducer.loggedInUser;
        this.setState({
            name:firstname+' '+lastname,
            photo
        })
    }
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
                            <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>MY PROFILE</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    {
                        this.state.photo ?
                            <View style={{ alignItems: 'center' }}>
                                <View style={styles.dummyPic}>
                                    <Image
                                        source={cameraIcon}
                                        style={{ width: 50, height: 50 }}
                                    />
                                </View>
                            </View> :
                            <View>
                                <View style={{ alignItems: 'center' }}>
                                    <Image
                                        style={styles.profileImage}
                                        source={dummyPic}
                                    />
                                </View>
                                <View style={{ position: 'absolute', top: '70%', left: '65%' }}>
                                    <TouchableOpacity>
                                        <Image
                                            style={styles.cameraIcon}
                                            source={cameraIcon}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>
                    }

                    <View style={{ marginTop: 31 }}>
                        <View>
                            <Text style={styles.nameText}>Name</Text>
                            <TextInput
                                style={styles.allTextInput}
                                editable={true}
                                placeholder="Enter your Name"
                                // maxLength={10}
                                value={this.state.name}
                                onChangeText={(name) => this.setState({name})}
                                onFocus={() => this.setState({space:true})}
                                onEndEditing={() => this.setState({space:false})}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={onClickDone}
                            style={{
                                borderWidth: 2,
                                height: 48,
                                width: '100%',
                                borderRadius: 4,
                                padding: 13,
                                backgroundColor: '#fff',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: '#39b54a',
                                borderRadius: 4,
                                marginTop: 25,
                            }}>
                            <Text style={{ color: '#39b54a', fontSize: 14, fontWeight: 'bold' }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

// const myProfile = ({ navigation }) => {
//     const [name, setName] = useState('Shane Watson');
//     // const [lastName, setLastName] = useState('');
//     // const [gender, setGender] = useState('male');
//     const [space, setSpace] = useState(false);

//     const onClickDone = () => {
//         // if (firstName && lastName && gender) {
//         // navigation.navigate('RegisterSuccess');
//         // }
//     }
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
//                         <Text style={{ marginLeft: 12, color: '#f8f8f8', fontSize: 16, fontWeight: '600', letterSpacing: 1.92 }}>MY PROFILE</Text>
//                     </View>
//                 </View>
//             </View>
//             <View style={styles.mainContainer}>
//                 {
//                     false ?
//                         <View style={{ alignItems: 'center' }}>
//                             <View style={styles.dummyPic}>
//                                 <Image
//                                     source={cameraIcon}
//                                     style={{ width: 50, height: 50 }}
//                                 />
//                             </View>
//                         </View> :
//                         <View>
//                             <View style={{ alignItems: 'center' }}>
//                                 <Image
//                                     style={styles.profileImage}
//                                     source={dummyPic}
//                                 />
//                             </View>
//                             <View style={{ position: 'absolute', top: '70%', left: '65%' }}>
//                                 <TouchableOpacity>
//                                     <Image
//                                         style={styles.cameraIcon}
//                                         source={cameraIcon}
//                                     />
//                                 </TouchableOpacity>

//                             </View>
//                         </View>
//                 }

//                 <View style={{ marginTop: 31 }}>
//                     <View>
//                         <Text style={styles.nameText}>Name</Text>
//                         <TextInput
//                             style={styles.allTextInput}
//                             editable={true}
//                             placeholder="Enter your Name"
//                             // maxLength={10}
//                             value={name}
//                             onChangeText={(text) => setName(text)}
//                             onFocus={() => setSpace(true)}
//                             onEndEditing={() => setSpace(false)}
//                         />
//                     </View>
//                 </View>
//                 <View style={{ alignItems: 'center' }}>
//                     <TouchableOpacity
//                         onPress={onClickDone}
//                         style={{
//                             borderWidth: 2,
//                             height: 48,
//                             width: '100%',
//                             borderRadius: 4,
//                             padding: 13,
//                             backgroundColor: '#fff',
//                             justifyContent: 'center',
//                             alignItems: 'center',
//                             borderColor: '#39b54a',
//                             borderRadius: 4,
//                             marginTop: 25,
//                         }}>
//                         <Text style={{ color: '#39b54a', fontSize: 14, fontWeight: 'bold' }}>Done</Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     )
// }

export default connect(
    (state)=>({
        homeReducer:state.homeReducer
    })
)(MyProfile);
const longBackArrow = require('../../../../images/52.png');
const dummyPic = require('../../../../images/44.png');
const cameraIcon = require('../../../../images/43.png');

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 12,
        marginTop: '20%',
    },
    nameText: {
        fontSize: 14,
        color: '#212121',
        fontWeight: 'normal'
    },
    container: {
        // justifyContent:'center',
        // alignItems:'center',
        backgroundColor: '#fff',
        flex: 1,
    },
    allTextInput: {
        width: '100%',
        height: 48,
        backgroundColor: '#f8f8f8',
        paddingLeft: 19,
        color: '#666666',
        fontSize: 14,
        fontWeight: '500',
        borderRadius: 4

    },
    profileImage: {
        borderWidth: 3,
        borderRadius: 200 / 2,
        width: 200,
        height: 200,
        borderColor: 'rgba(0, 0, 0, 0.15)'
    },
    cameraIcon: {
        borderWidth: 5,
        borderRadius: 48 / 2,
        width: 48,
        height: 48,
        borderColor: '#fff'
    },
    dummyPic: {
        borderRadius: 200 / 2,
        width: 200,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#005082',
        backgroundColor: '#F0F0F0'
    },
})