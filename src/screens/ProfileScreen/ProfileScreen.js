import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { Center, NativeBaseProvider } from "native-base"
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { Auth } from "aws-amplify"


const ProfileScreen = ({navigation}) => {
  const onSignOutPressed = () => {
    Auth.signOut();
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.root}>
      <Text style={styles.myText}>This is ProfileScreen page</Text> 
      <CustomButton 
        text="Sign Out" 
        onPress={onSignOutPressed}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  myText: {
    color: 'purple',
    textAlign: 'center'
  }
  });

export default ProfileScreen