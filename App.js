import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import MainNavigator from './src/navigation';
import SplashScreen from './src/screens/common/SplashScreen';

const { store } = configureStore()

export default function App() {
  const [splash, setSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 1000);
  }, []);
  return splash ?
    (<View style={styles.container}>
      <SplashScreen />
    </View>) : (
      <View style={styles.container}>
        <Provider store={store}>
          <MainNavigator />
        </Provider>
      </View>
    );
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
