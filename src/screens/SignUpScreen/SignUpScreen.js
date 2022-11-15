import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'
import SingUpPng from '../../../assets/sign_up.png'

// import auth from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    if (password === passwordRepeat) {
      auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        // auth.updateProfile(/*auth.currentUser,*/ {
        //   displayName: username
        // })
        // .then(() => {
          navigation.navigate('Home');
          const user = userCredentials.user;
          console.log('Registered with:', user.email);
        // })
      })
      .catch(error => alert(error.message))
    }
    else {
      console.warn('Passwords are not same!');
    }
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <View style={styles.root}>
      <Image 
        source={SingUpPng} 
        style={styles.logo} 
        resizeMode="contain"/>
        
      <View style={styles.inputBox}>
        <CustomInput
          placeholder="Username"
          value={username} 
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Email"
          value={email} 
          setValue={setEmail}
        />
        <CustomInput 
          placeholder="Password" 
          value={password} 
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomInput 
          placeholder="Repeat Password" 
          value={passwordRepeat} 
          setValue={setPasswordRepeat}
          secureTextEntry={true}
        />
      </View>

      <CustomButton 
        text="Sign Up" 
        onPress={onRegisterPressed}
        style={styles.btn}
      />
    
      {/* <SocialSignInButtons/> */}

      <CustomButton
        text={"Do you have an account? Sign in"}
        onPress={onSignInPressed}
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
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    },
    btn: {
      marginTop: 0
    },
    inputBox:{
      width: '90%',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-between',
      // flexWrap: 'wrap'
    }
  });

  export default SignUpScreen