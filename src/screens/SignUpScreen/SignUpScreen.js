import { View, Text, Image, StyleSheet, ScrollView, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
// import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'
import SingUpPng from '../../../assets/sign_up.png'
import { Auth } from "aws-amplify"


const SignUpScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [phone_number, setPhone_number] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  // const navigation = useNavigation();

  const onRegisterPressed = async() => {
    try {
      console.log(username, password);
      
      await Auth.signUp({
        username,
        password,
        attributes: {phone_number, name, email},
      });
      navigation.navigate('ConfirmEmail', {username:username})
    } catch(e) {
      Alert.alert('Oops', e.message);
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
          placeholder="Phone number"
          value={phone_number} 
          setValue={setPhone_number}
        />
        <CustomInput
          placeholder="Email"
          value={email} 
          setValue={setEmail}
        />
        <CustomInput
          placeholder="Name"
          value={name} 
          setValue={setName}
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
          rules={{
            validate: value => value === password || 'Password do not match'
          }}
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