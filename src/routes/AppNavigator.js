import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import EnterCodeScreen from '../screens/EnterCodeScreen';
import VideoCallScreen from '../screens/VideoCallScreen';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EnterCodeScreen">
        <Stack.Screen
          name="EnterCodeScreen"
          component={EnterCodeScreen}
          options={({navigation, route}) => ({
            headerShown: true,
            title: 'Join Call',
          })}
        />
        <Stack.Screen
          name="VideoCallScreen"
          component={VideoCallScreen}
          options={({navigation, route}) => ({
            headerShown: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
