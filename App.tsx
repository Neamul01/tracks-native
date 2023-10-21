/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from './src/screens/SignInScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailsScreen from './src/screens/TrackDetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      options={{headerShown: false}}
      component={SignInScreen}
    />
    <Stack.Screen
      name="SignUp"
      options={{headerShown: false}}
      component={SignUpScreen}
    />
  </Stack.Navigator>
);

const TrackLIstStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="TrackListScreen" component={TrackListScreen} />
    <Stack.Screen name="TrackDetailsScreen" component={TrackDetailsScreen} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="trackListFlow" component={TrackLIstStack} />
    <Tab.Screen name="AccountScreen" component={AccountScreen} />
    <Tab.Screen name="CreateTrack" component={TrackCreateScreen} />
  </Tab.Navigator>
);

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="loginFlow"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mainFlow"
          component={MainTabs}
          options={{
            headerShown: false,
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({});

export default App;
