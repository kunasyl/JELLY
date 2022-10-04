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

      <SocialSignInButtons/>

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
      // backgroundColor: '#84D5B2'
    },
    logo: {
      // width: '100%',
      maxWidth: 300,
      maxHeight: 200,
    },
  });

export default SignInScreen