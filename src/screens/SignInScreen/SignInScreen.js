import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn('Sign in');
  }

  const onForgotPasswordInPressed = () => {
    console.warn('onForgotPasswordInPressed');
  }

  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  }

  const onSignInGoogle = () => {
    console.warn('onSignInFacebook');
  }

  const onSignInApple = () => {
    console.warn('onSignInApple');
  }

  const onSignUpPressed = () => {
    console.warn('onSignUpPressed');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, {height: height*0.3}]} 
          resizeMode="contain"/>
      
      <CustomInput
          placeholder="Username"
          value={username} 
          setValue={setUsername}
      />
      <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          secureTextEntry={true}
      />

      <CustomButton text="Sign in" onPress={onSignInPressed} />
      
      <CustomButton 
        text="Forgot password?" 
        onPress={onForgotPasswordInPressed}
        type="TERTIARY"
      />

      <CustomButton 
        text="Sign in with Facebook" 
        onPress={onSignInFacebook} 
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton 
        text="Sign in with Google" 
        onPress={onSignInGoogle} 
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton 
        text="Sign in with Apple" 
        onPress={onSignInApple} 
        bgColor="#e3e3e3"  
        fgColor="#363636"
      />

      <CustomButton
        text={"Don't have an account? Create one!"}
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
      
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      paffing: 10,
      backgroundColor: '#84D5B2'
    },
    logo: {
      // width: '100%',
      maxWidth: 300,
      maxHeight: 200,
    },
  });

export default SignInScreen