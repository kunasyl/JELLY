import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/logo.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('Home')
  }

  const onForgotPasswordInPressed = () => {
    navigation.navigate('ForgotPassword')
  }

  const onSignUpPressed = () => {
    navigation.navigate('SignUp')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image 
          source={Logo} 
          style={[styles.logo, {height: height*0.3}]} 
          resizeMode="contain"/>

      <CustomInput
        value={username} 
        setValue={setUsername}
        placeholder={"Login"}
      />
      <CustomInput
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
        placeholder={"Password"}
      />

      <CustomButton 
        text="Sign in" 
        onPress={onSignInPressed} 
        style={styles.loginBtn}/>
      
      <CustomButton 
        text="Forgot password?" 
        onPress={onForgotPasswordInPressed}
        type="TERTIARY"
      />

      <SocialSignInButtons/>

      <CustomButton
        text={"Sign Up"}
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
      backgroundColor: '#DEEFF0',
      display: "flex",
      flexDirection: "column"
    },
    logo: {
      marginVertical: 30,
      maxWidth: 300,
      maxHeight: 200,
      boxShadow: 10,
    },
    loginBtn:{
      marginTop: 20,
    }
  });

export default SignInScreen