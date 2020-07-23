import React from 'react';
import {StyleSheet,View} from 'react-native';
const Paper = (props) =>{
    return(
    <View
    style={styles.container}
    >{props}</View>
    )
}
export default Paper;

const styles = StyleSheet.create({
    container:{
        padding: 15,
          borderRadius: 2,
          elevation:3,
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
    }
});
