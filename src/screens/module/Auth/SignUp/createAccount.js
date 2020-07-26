import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, ActivityIndicator, Image, Platform, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import Card from '../../../../components/common/Card';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import {registerProfile} from './signupAction';
const jwtDecode = require('jwt-decode');

class CreateAccount extends React.Component {
    state = {
        userData: null,
        firstName: '',
        lastName: '',
        gender: 'male',
        profilePic: '',
        space: false,
        id:null,
    }
    onClickRegister = () => {
        if (this.state.firstName && this.state.lastName && this.state.gender) {
            // navigation.navigate('RegisterSuccess');
            const params = {
                firstname:this.state.firstName,
                lastname:this.state.lastName,
                gender:this.state.gender,
                photo:this.state.photo,
                id:this.state.id,
                navigation:this.props.navigation

            }
            this.props.registerProfile(params)

        }
    }
    componentDidMount() {
        AsyncStorage.getItem('access_token').then((token) => {
            console.log(token);
            let userData = jwtDecode(token);
            console.log(userData);

            this.setState(
                {
                    firstName: userData.data.firstname,
                    lastName: userData.data.lastname,
                    profilePic: userData.data.photo,
                    id:userData.id
                })
            // this.setState({ 
            //   dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
            // });

        });
    }
    render() {
        return (
            <View>
                <View>
                    <ImageBackground source={blueBackGround}
                        style={{ width: '100%', height: 375 }}
                    >
                        {
                            this.state.space ?
                                null :
                                <View style={{ marginTop: '20%', justifyContent: 'space-between', flexDirection: 'row' }}>

                                    <View style={{ marginLeft: 42 }}>
                                        <Image
                                            style={{ width: 34, height: 32 }}
                                            source={logoWhite}
                                        />
                                        <Text style={{ marginTop: 14, color: '#f8f8f8', fontSize: 32, width: '56%', fontWeight: '600' }}>Create Account</Text>
                                    </View>
                                    <View>
                                        <Image
                                            style={{ width: 120, height: 101 }}
                                            source={dotAbstract}
                                        />
                                    </View>

                                    {/* <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View>
                            </View>
                           
                        </View> */}
                                </View>
                        }

                    </ImageBackground>

                    <View
                        style={{
                            position: 'absolute',
                            top: this.state.space ? Platform.OS === 'ios' ? '5%' : '-9%' : '60%',
                            padding: 15,
                            borderRadius: 9,
                            elevation: 3,
                            backgroundColor: '#fff',
                            marginTop: 25,
                            width: '92%',
                            shadowColor: '#000',
                            shadowOpacity: 0.2,
                            shadowRadius: 4,
                            shadowOffset: {
                                // width: 5,
                                height: 5,
                            },
                            alignSelf: 'center',
                            paddingHorizontal: 31
                        }}>
                        {
                            this.state.profilePic ?
                                <View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image
                                            style={{ borderWidth: 3, borderRadius: 45, width: 92, height: 92, borderColor: 'rgba(0, 0, 0, 0.15)' }}
                                            source={dummyPic}
                                        />
                                    </View>
                                    <View style={{ position: 'absolute', top: '18%', left: '65%' }}>
                                        <TouchableOpacity>
                                            <Image
                                                style={{ borderWidth: 3, borderRadius: 15, width: 30, height: 30, borderColor: '#fff' }}
                                                source={cameraIcon}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                </View>
                                :
                                <View style={{alignItems:'center'}}>
                                    <View style={styles.dummyPic}>
                                        <Image
                                            source={cameraIcon}
                                            style={{ width: 19, height: 17 }}
                                        />
                                    </View>
                                </View>

                        }


                        <View style={{ alignItems: 'center', marginTop: 24 }}>
                            <Text style={{ color: '#666666', fontSize: 14, fontWeight: '600', letterSpacing: 0.84 }}>Add Profile Pic</Text>
                        </View>
                        <View style={{ marginTop: 31 }}>
                            <View>
                                <TextInput
                                    style={styles.allTextInput}
                                    editable={true}
                                    placeholder="Enter your First Name"
                                    // maxLength={10}
                                    value={this.state.firstName}
                                    onChangeText={(firstName) => this.setState({ firstName })}
                                    onFocus={() => this.setState({ space: true })}
                                // onEndEditing={() => setSpace(false)}
                                />
                            </View>
                            <View style={{ marginVertical: 25 }}>
                                <TextInput
                                    style={styles.allTextInput}
                                    editable={true}
                                    placeholder="Enter your Last Name"
                                    // maxLength={10}
                                    value={this.state.lastName}
                                    onChangeText={(lastName) => this.setState({ lastName })}
                                    onFocus={() => this.setState({ space: true })}
                                // onEndEditing={() => setSpace(false)}
                                />
                            </View>
                            <View>
                                {/* <DropDownPicker
                                items={[ {label: 'Male', value: 'male'},
                                {label: 'Female', value: 'female'}]}
                                defaultValue={gender}
                                containerStyle={{ height: 40 }}
                                style={{ backgroundColor: '#fafafa' }}
                                itemStyle={{
                                    justifyContent: 'flex-start'
                                }}
                                dropDownStyle={{ backgroundColor: '#fafafa' }}
                                onChangeItem={item => setGender(item.value)}
                            /> */}
                                <TextInput
                                    style={styles.allTextInput}
                                    editable={true}
                                    placeholder="Enter your gender"
                                    // maxLength={10}
                                    value={this.state.gender}
                                    onChangeText={(gender) => this.setState({ gender })}
                                    onFocus={() => this.setState({ space: true })}
                                    onEndEditing={() => this.setState({ space: false })}
                                />
                            </View>
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={this.onClickRegister}
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
                                {this.props.isRegisterLoading&&<ActivityIndicator size='large' color="#fff"/>}
                                {!this.props.isRegisterLoading&&<Text style={{ color: '#39b54a', fontSize: 14, fontWeight: 'bold' }}>REGISTER</Text>}
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
}


export default connect(
    state => ({
        signupReducer: state.signupReducer,
    }),
    dispatch => ({
        registerProfile: (params) => {
          dispatch(registerProfile(params));
        },
      })
)(CreateAccount);
// export default createAccount;

const styles = StyleSheet.create({
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
    dummyPic: {
        height: 76,
        width: 76,
        borderRadius: 38,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#005082',
        backgroundColor: '#F0F0F0'
    },
    // shadow: {
    //   shadowOffset: { width: 10, height: 10 },
    //   shadowColor: 'black',
    //   shadowOpacity: 1,
    //   elevation: 3,
    //   // background color must be set
    //   backgroundColor : "#0000" // invisible color
    // }
});

const logoWhite = require('../../../../images/40.png');
const blueBackGround = require('../../../../images/41.png');
const dotAbstract = require('../../../../images/42.png');
const dummyPic = require('../../../../images/44.png');
const cameraIcon = require('../../../../images/43.png');
