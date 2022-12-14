import { StyleSheet, Text} from 'react-native';
import { useState, useEffect, useLayoutEffect } from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from './src/styles/colors'
import { useFonts } from 'expo-font';

// TabNavigator
import TimerScreen from './src/screens/TimerScreen'
import DiaryScreen from './src/screens/DiaryScreen'
import ChatScreen from './src/screens/ChatScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import ChatRoomsHomeScreen from './src/screens/ChatRoomsHomeScreen'
import UsersScreen from './src/screens/UsersScreen'
//ChatNavigator
import ChatRoomScreen from './src/screens/ChatRoomScreen'
// DiaryNavigator
import DiaryPageScreen from './src/screens/DiaryPageScreen/DiaryPageScreen';
// HomeNavigator
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen'
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen'
import NewPasswordScreen from './src/screens/NewPasswordScreen/NewPasswordScreen'
import HomeScreen from './src/screens/HomeScreen'
import PostScreen from './src/screens/PostScreen';

import ChatsHeader from './src/components/ChatsHeader'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

import { Amplify, Auth } from 'aws-amplify'
import awsconfig from './src/aws-exports'
// import auth from '@react-native-firebase/auth';

Amplify.configure(awsconfig);


export default function App() {

  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/IstokWeb-Bold.ttf'),});

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
      if (routeName==="Articles") {
        navigation.setOptions({tabBarStyle: {display: 'flex'}});
      }
    }, [navigation, route]);
    return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen}/>
        <Stack.Screen name="SignUp" component={SignUpScreen}/>
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
        <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        <Stack.Screen name="Articles" component={HomeScreen}/>
        <Stack.Screen name="Post" component={PostScreen}/>
      </Stack.Navigator>
    )
  }

  const DiaryNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Diary" component={DiaryScreen}/>
        <Stack.Screen name="DiaryPage" component={DiaryPageScreen}/>
      </Stack.Navigator>
    )
  }

  const ChatNavigator = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen 
          name="Chats" 
          component={ChatRoomsHomeScreen}
          options={{
            headerTitle: ChatsHeader,
            headerBackTitleVisible: false
          }}
        />
        <Stack.Screen 
          name="UsersScreen" 
          component={UsersScreen}
          options={{
            title: "Users"
          }}
        />
        <Stack.Screen name="ChatRoom" component={ChatRoomScreen}/>
      </Stack.Navigator>
    )
  }


  return (
    firstLaunch != null && (
      <NavigationContainer>
        <Tab.Navigator        
        screenOptions={{
          labelStyle:{fontSize:12},
          activeTintColor: COLORS.orange,
          inactiveTintColor: COLORS.purple,
          showIcon: true,
        }}>
          <Tab.Screen 
          name="Home" 
          component={HomeNavigator}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="search" size={30} color={props.focused?COLORS.orange:COLORS.purple}/>
            )
          }}
        />
          <Tab.Screen 
          name="Timer" 
          component={TimerScreen}
          options={{
            // headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="timer" size={30} color={props.focused?COLORS.orange:COLORS.purple}/>
            )
          }}
          />
          <Tab.Screen 
          name="Diary" 
          component={DiaryNavigator}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="book" size={30} color={props.focused?COLORS.orange:COLORS.purple}/>
            )
          }}
          />
          <Tab.Screen 
          name="Chat" 
          component={ChatNavigator}
          options={{
            headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="chat-bubble-outline" size={30} color={props.focused?COLORS.orange:COLORS.purple}/>
            )
          }}
          />
          <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            // headerShown: false,
            tabBarIcon: (props) => (
              <MaterialIcons name="person-outline" size={30} color={props.focused?COLORS.orange:COLORS.purple}/>
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
    backgroundColor: '#ffffff',
    fontFamily: 'IstokWeb-Bold'
  },
});