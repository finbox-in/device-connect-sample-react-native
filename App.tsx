/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  Button,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Platform,
} from 'react-native';

import messaging from '@react-native-firebase/messaging';

import FinBoxRiskSdk from 'react-native-risk-sdk';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import {request, PERMISSIONS} from 'react-native-permissions';

const API_KEY = '';
const CUSTOMER_ID = 'demo_lender_1091215';

function createUser() {
  FinBoxRiskSdk.createUser(
    API_KEY,
    CUSTOMER_ID,
    (errorStatus: any) => {
      // Error Callback
      console.log('Error status -> ', errorStatus);
    },
    (msg: any) => {
      // Success Callback, Call the periodic sync once the user has been created
      console.log('Final message', msg);
      FinBoxRiskSdk.startPeriodicSync(12); //Start the sync periodically after every 12 hour
    },
  );
}

function requestPermissions() {
  const locationPermission = Platform.select({
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
  });
  request(locationPermission).then(result => {
    console.log('Permission granted', result);
    createUser();
  });
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      console.log('A new FCM message!', remoteMessage.data);

      FinBoxRiskSdk.forwardFinBoxNotificationToSDK(remoteMessage.data);
    });

    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>{CUSTOMER_ID}</Text>
          <Button
            onPress={requestPermissions}
            title="Create User"
            color="#007AFF"
            accessibilityLabel="Create User"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
