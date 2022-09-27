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
  useState,
} from 'react-native';

import SignInScreen from './src/screens/SignInScreen';

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
    </SafeAreaView>
  );
}

 const styles = StyleSheet.create({
   root: {
     flex: 1,
     backgroundColor: '#ffffff'
   },
 }); 