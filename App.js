import React from 'react';
import AppNavigator from './src/routes/AppNavigator';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <SafeAreaView style={styles.container}>
        <AppNavigator />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
