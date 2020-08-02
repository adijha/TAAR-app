import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    ImageBackground,
    ToastAndroid,
    ActivityIndicator,
    Image, Platform,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    PermissionsAndroid
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import Card from '../../../../components/common/Card';
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { registerProfile, uploadProfile,registerDetails } from './signupAction';
const jwtDecode = require('jwt-decode');
import ImagePicker from 'react-native-image-picker';
import { getAsyncStorage, keys } from "../../../../asyncStorage";
const requestGalleryPermission = async () => {
    if (Platform.OS === 'android') {
        PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ]).then((result) => {
            if (
                result['android.permission.CAMERA'] &&
                result['android.permission.READ_EXTERNAL_STORAGE'] &&
                result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
            ) {
                ToastAndroid.show("Permission Granted!", ToastAndroid.LONG);
            }
            else if (
                result['android.permission.CAMERA'] ||
                result['android.permission.READ_EXTERNAL_STORAGE'] ||
                result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'denied'
            ) {
                ToastAndroid.show('Permissions denied', ToastAndroid.LONG);
            } else if (
                result['android.permission.CAMERA'] ||
                result['android.permission.READ_EXTERNAL_STORAGE'] ||
                result['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                'never_ask_again'
            ) {
                ToastAndroid.show(
                    'Please Go into Settings -> Applications -> TAAR -> Permissions and Allow permissions to continue',
                    ToastAndroid.LONG,
                );
            }
        });
    } //...........................ios
    // else {
    //   ImagePicker.launchImageLibrary(options, (response) => {
    //     // console.log(response);
    //     // console.log("Response = ", response);
    //     if (response.didCancel) {
    //       console.log('User cancelled image picker');
    //     } else if (response.error) {
    //       console.log('ImagePicker Error: ', response.error);
    //     } else if (response.customButton) {
    //       console.log('User tapped custom button: ', response.customButton);
    //     } else {
    //       const source = {uri: response.uri};
    //       console.log(source);
    //     }
    //   });
    // }
};

// export async function requestGalleryPermission() 
// {
//   try {
//     const granted = awaitPermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       ]).then((result)=>{
//         if (
//             result['android.permission.CAMERA'] &&
//             result['android.permission.READ_EXTERNAL_STORAGE'] &&
//             result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted'
//           ){
//             alert("Permission Granted!");
//           }
//           else if (
//             result['android.permission.CAMERA'] ||
//             result['android.permission.READ_EXTERNAL_STORAGE'] ||
//             result['android.permission.WRITE_EXTERNAL_STORAGE'] === 'denied'
//           ) {
//             ToastAndroid.show('Permissions denied', ToastAndroid.LONG);
//           }
//       })
//     // if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//     //   console.log("You can use the gallery")
//     //   alert("You can use the gallery");
//     // } else {
//     //   console.log("location permission denied")
//     //   alert("Location permission denied");
//     // }
//   } catch (err) {
//     console.warn(err)
//   }
// }

class CreateAccount extends React.Component {
    state = {
        userData: null,
        firstName: '',
        lastName: '',
        gender: 'male',
        profilePic: null,
        space: false,
        id: null,
        phoneno: '',
        isLoadingImage: false,
    }
    async componentWillMount() {
        Platform.OS === 'android' ? requestGalleryPermission() : null
    }

    onClickRegister = () => {
        if (this.state.firstName && this.state.lastName && this.state.gender) {
            // navigation.navigate('RegisterSuccess');
            const params = {
                firstname: this.state.firstName,
                lastname: this.state.lastName,
                gender: this.state.gender,
                photo: this.state.profilePic,
                phoneno: this.state.phoneno,
                id: this.state.id,
                navigation: this.props.navigation
            }
            // this.props.registerDetails(params)
            this.props.registerProfile(params)
        }
    }
    onChangePicture = async (type) => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: "Taar Gallery Permission",
                    message:
                        "Taar needs access to your photos ",
                    buttonNeutral: "Ask Me Later",
                    buttonNegative: "Cancel",
                    buttonPositive: "OK"
                }
            );
            this.setState({ isLoadingImage: true })

            if ((granted === PermissionsAndroid.RESULTS.GRANTED) || Platform.OS === 'ios') {
                const options = {
                    storageOptions: {
                        skipBackup: true,
                        path: 'images'
                    }
                } 

                ImagePicker.showImagePicker(options, (response) => {
                    console.log("Response = ", response);
              
                    if (response.didCancel) {
                      console.log("User cancelled photo picker");
                    } else if (response.error) {
                      console.log("ImagePicker Error: ", response.error);
                    } else if (response.customButton) {
                      console.log("User tapped custom button: ", response.customButton);
                    } else {
                      // Base 64 image:
                      let source = "data:image/jpeg;base64," + response.data;
                      this.setState({
                        profilePic: source,
                        isLoadingImage: false
                    })
                    //   dispatchLoaderAction({
                    //     type: LOADING_START,
                    //   });
                    //   UpdateUser(uuid, source)
                    //     .then(() => {
                    //       setUserDetail({
                    //         ...userDetail,
                    //         profileImg: source,
                    //       });
                    //       dispatchLoaderAction({
                    //         type: LOADING_STOP,
                    //       });
                    //     })
                    //     .catch(() => {
                    //       alert(err);
                    //       dispatchLoaderAction({
                    //         type: LOADING_STOP,
                    //       });
                    //     });
                    }
                  });





                // ImagePicker.launchImageLibrary(options, response => {
                //     if (response.uri) {
                //         console.log(response);
                //         const params = {
                //             file: {
                //                 type: response.type,
                //                 name: response.fileName,
                //                 uri: response.uri.replace("file://", "")
                //             },
                //             save_in_db: false,
                //         };
                //         let fileExtension = response.uri.split('.').pop();
                //         params.file.type = 'image/' + fileExtension;
                //         params.file.name = `${type}_${Math.floor(Math.random() * (100 - 1 + 1)) + 1}.${fileExtension};`
                //         console.log(params)
                //         this.setState({
                //             profilePic: params.file.uri,
                //             isLoadingImage: false
                //         })
                //         // this.props.uploadProfile(params)
                //         // if (type === 'Profile') {
                //         //     this.props.uploadCompanyProfileImage(params);
                //         //     this.props.updateCreateCompanyError('companyIdentityInputs', 'avatarImgUrlError', false)
                //         // } else if (type === 'Banner') {
                //         //     this.props.uploadCompanyCoverImage(params);
                //         //     this.props.updateCreateCompanyError('companyIdentityInputs', 'coverImgUrlError', false)
                //         // }
                //     }

                // })
            } else {
                console.log("Camera permission denied");
            }
        } catch (err) {
            console.log(err);
        }
    }
    componentDidMount() {

        getAsyncStorage(keys.access_token)
            .then((access_token) => {
                console.log(access_token);
                let userData = jwtDecode(access_token);
                console.log(userData);

                this.setState(
                    {
                        firstName: userData.data.firstname,
                        lastName: userData.data.lastname,
                        profilePic: userData.data.photo,
                        id: userData.id,
                        phoneno: userData.data.phoneno
                    })
            })
            .catch((err) => {
                console.log(err);
            });

        // AsyncStorage.getItem('access_token').then((token) => {
        //     console.log(token);
        //     let userData = jwtDecode(token);
        //     console.log(userData);

        //     this.setState(
        //         {
        //             firstName: userData.data.firstname,
        //             lastName: userData.data.lastname,
        //             profilePic: userData.data.photo,
        //             id: userData.id,
        //             phoneno: userData.data.phoneno
        //         })
            // this.setState({ 
            //   dataSource: ds.cloneWithRowsAndSections(dataBlob, sectionIds, rowIds)
            // });

        // });
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
                                <View style={{ marginTop: '10%', justifyContent: 'space-between', flexDirection: 'row' }}>

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
                            top: this.state.space ? Platform.OS === 'ios' ? '5%' : '-9%' : '40%',
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
                            this.state.isLoadingImage ?
                                <View>
                                    <ActivityIndicator size='large' color='#000' />
                                </View>
                                :
                                <View>
                                    {
                                        this.state.profilePic ?
                                            <View>
                                                <View style={{ alignItems: 'center' }}>
                                                    <Image
                                                        style={{ resizeMode: 'cover', borderWidth: 3, borderRadius: 45, width: 92, height: 92, borderColor: 'rgba(0, 0, 0, 0.15)' }}
                                                        source={{ uri: this.state.profilePic }}
                                                    />
                                                </View>
                                                <View style={{ position: 'absolute', top: '60%', left: '58%' }}>
                                                    <TouchableOpacity onPress={this.onChangePicture}>
                                                        <Image
                                                            style={{ borderWidth: 3, borderRadius: 15, width: 30, height: 30, borderColor: '#fff' }}
                                                            source={cameraIcon}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            :
                                            <TouchableOpacity
                                                onPress={this.onChangePicture}
                                            >
                                                <View style={{ alignItems: 'center' }}>
                                                    <View style={styles.dummyPic}>
                                                        <Image
                                                            source={cameraIcon}
                                                            style={{ width: 19, height: 17 }}
                                                        />
                                                    </View>
                                                </View>
                                            </TouchableOpacity>


                                    }
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
                                {this.props.isRegisterLoading && <ActivityIndicator size='large' color="#fff" />}
                                {!this.props.isRegisterLoading && <Text style={{ color: '#39b54a', fontSize: 14, fontWeight: 'bold' }}>REGISTER</Text>}
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
        uploadProfile: (params) => {
            dispatch(uploadProfile(params));
        },
        registerDetails:(params)=>{
            dispatch(registerDetails(params))
        }
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
