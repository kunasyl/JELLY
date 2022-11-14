//import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Linking,
} from 'react-native';

import { useState, useEffect, useLayoutEffect } from 'react'

// import Navigation from './src/navigation';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
// import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// TabNavigator
import TimerScreen from './src/screens/TimerScreen'
import DiaryScreen from './src/screens/DiaryScreen'
import ChatScreen from './src/screens/ChatScreen'
import ProfileScreen from './src/screens/ProfileScreen'

// HomeNavigator
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen'
import HomeScreen from './src/screens/HomeScreen';

import { NativeBaseProvider, Box } from "native-base";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const customPurple = 'rgb(119,83,111)';
const customOrange = 'rgb(229,133,0)';

export default function App() {
  const [firstLaunch, setFirstLaunch] = useState(null);
  useEffect(() => {
    async function setData() {
      const appData = await AsyncStorage.getItem("appLaunched");
      if (appData == null) {
        setFirstLaunch(true);
        AsyncStorage.setItem("appLaunched", "false");
      } else {
        setFirstLaunch(false);
      }
    }
    setData();
  }, []);

  const HomeNavigator = ({ navigation, route }) => {
    useLayoutEffect(() => {
      navigation.setOptions({tabBarStyle: {display: 'none'}});
      const routeName = getFocusedRouteNameFromRoute(route);
      if (routeName==="Home") {
        navigation.setOptions({tabBarStyle: {display: 'flex'}});
      }
    }, [navigation, route]);
    return (
      <Stack.Navigator>
        <Stack.Screen 
        name="SignIn" 
        component={SignInScreen}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    )
  }

  return (
    firstLaunch != null && (
      <NavigationContainer>
        <Tab.Navigator        
        tabBarOptions={{
          labelStyle:{fontSize:12},
          activeTintColor: customOrange,
          inactiveTintColor: customPurple,
          showIcon: true,
        }}>
          <Tab.Screen 
          name="Home" 
          component={HomeNavigator}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="search" size={30} color={props.focused?customOrange:customPurple}/>
            )
          }}
        />
          <Tab.Screen 
          name="Timer" 
          component={TimerScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="timer" size={30} color={props.focused?customOrange:customPurple}/>
            )
          }}
          />
          <Tab.Screen 
          name="Diary" 
          component={DiaryScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="book" size={30} color={props.focused?customOrange:customPurple}/>
            )
          }}
          />
          <Tab.Screen 
          name="Chat" 
          component={ChatScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="chat-bubble-outline" size={30} color={props.focused?customOrange:customPurple}/>
            )
          }}
          />
          <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="person-outline" size={30} color={props.focused?customOrange:customPurple}/>
            )
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
});