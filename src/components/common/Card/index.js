import React from 'react';
import { StyleSheet, View } from 'react-native';
const Card = (props) => {
  return (
    <View
      style={[styles.container,{width:props.width?props.width:'92%',padding:props.padding?props.padding:15}]}
    >{props.children}</View>
  )
}
//props.children
export default Card;

const styles = StyleSheet.create({
  container: {
    // padding: 15,
    borderRadius: 2,
    elevation: 5,
    backgroundColor: '#fff',
    marginTop: 25,
    // width: '92%',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 7,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    alignSelf: 'center',
  }
});
