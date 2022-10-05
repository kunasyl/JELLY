import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'


const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignInPressed = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        navigation.navigate('Home')
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
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
        value={email} 
        setValue={setEmail}
        placeholder={"Email"}
      />
      <CustomInput
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
        placeholder={"Password"}
      />

      <CustomButton 
        text="Forgot the password?" 
        onPress={onForgotPasswordInPressed}
        type="TERTIARY"
        style={styles.leftBtn}
      />

      <CustomButton 
        text="Login" 
        onPress={onSignInPressed} 
        style={styles.loginBtn}/>
      

      <SocialSignInButtons/>

      <CustomButton
        text={"Don’t have an account? Sign Up"}
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
      
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root: {
      height: '100%',
      alignItems: 'center',
      paffing: 10,
      backgroundColor: '#FFFFFF',
      // position: 'relative'
      // display: "flex",
      // flexDirection: "column"
    },
    logo: {
      marginTop: 60,
      marginBottom: 40,
      maxWidth: 300,
      maxHeight: 200,
      boxShadow: 10,
    },
    loginBtn:{
      marginTop: 20,
    },
    leftBtn: {
      // position: 'absolute',
      // width: '100%',
      textAlign: 'right',
      // marginRight: -20,
    }
  });

export default SignInScreen