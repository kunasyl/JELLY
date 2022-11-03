import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
// import SocialSignInButtons from '../../components/SocialSignInButtons'
// import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'


const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  // const navigation = useNavigation();

  const onSignInPressed = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        navigation.navigate('Home', {email: email})
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
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={[styles.logo, {height: height*0.3}]} 
        resizeMode="contain"/>

      <View style={styles.inputBox}>
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
        <View style={styles.btnFoggotPassword}>
          <CustomButton 
            text="Forgot the password?" 
            onPress={onForgotPasswordInPressed}
            type="TERTIARY"
          />
        </View>
      </View>

      <CustomButton 
        text="Login" 
        onPress={onSignInPressed}
      />
      
      {/* <SocialSignInButtons/> */}

      <CustomButton
        text={"Don’t have an account? Sign Up"}
        onPress={onSignUpPressed}
        type="TERTIARY"
      />
    
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
      justifyContent: 'space-around'
    },
    logo: {
      minWidth: '80%',
      minHeight: 200,
    },
    inputBox:{
      width: '90%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    btnFoggotPassword:{
      width: '90%',
      display: 'flex',
      alignItems: 'flex-end',
      textAlign: 'center',
    }
  });

export default SignInScreen