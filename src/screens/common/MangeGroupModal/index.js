import React, { Component } from 'react';
import { View, Text, Modal, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Card from '../../../components/common/Card';

class ManageGroupModal extends Component {
    state = {
        password: "",
        validity: false,
        submitted: false
    }

    onPasswordChange = (password) => {
        const validity = password.length >= 8;
        this.setState({ password, validity });
    }

    onSubmit = () => {
        if (this.state.validity) {
            const params = {
                password: this.state.password,
                username: this.props.username
            }
            this.props.onConfirmHandler(params);
        }
        else {
            this.setState({ submitted: true });
        }
    }
    render() {
        return (
            <Modal
                animationType='slide'
                transparent={true}
                visible={this.props.openModal}
                onRequestClose={this.props.closeModal}
            >
                <Card style={styles.centeredView}>
                    <View style={{}}>
                        <View style={{ alignSelf: 'center' }}>
                            <Image
                                style={{ width: 61, height: 61, borderRadius: 61 / 2 }}
                                source={this.props.user.profilePic}
                            />
                        </View>
                        <View style={{ alignSelf: 'center', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ color: '#212121', fontSize: 15, fontWeight: '600' }}>Do you want to {this.props.isRemoveMember ? 'remove':'delete the group'} </Text>
                                {this.props.isRemoveMember ? <Text style={{ color: '#005082', fontSize: 15, fontWeight: '600', }}>{this.props.user.name.split(' ')[0]}</Text>:null}
                            </View>
                            <View style={{}}>
                                <Text style={{ marginTop: 10, color: '#212121', fontSize: 15, fontWeight: '600', textAlign: 'center' }}>from the {this.props.isRemoveMember ? 'group ?':'from TAAR'}</Text>
                            </View>
                        </View>
                        <View style={{ }}>
                            <View style={{alignItems:'center',marginVertical:20}}>
                                <TouchableOpacity
                                    // onPress={this.props.closeModal}
                                    style={{justifyContent:'center',alignItems:'center',width:'80%',borderRadius:10,height:48,backgroundColor:'#D53B3B'  }}>
                                    <Text style={{color:'#fff',fontSize:14,fontWeight:'bold'}}>YES, {this.props.isRemoveMember ? 'REMOVE':'DELETE'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{alignItems:'center'}}>
                                    <Text 
                                    onPress={this.props.closeModal}
                                    style={{color:'#005082',fontSize:14,fontWeight:'bold'}}>NO, {this.props.isRemoveMember ? "DON'T REMOVE":'CANCEL IT'}</Text>

                            </View>
                        </View>
                    </View>
                </Card>
            </Modal>



        );
    }
}

export default ManageGroupModal;

const styles = StyleSheet.create({
    centeredView: {
        paddingBottom:20,
        marginHorizontal: 10,
        marginTop: 100,
    },
});