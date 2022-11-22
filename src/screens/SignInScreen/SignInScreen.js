import { View, Text, Alert, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
// import SocialSignInButtons from '../../components/SocialSignInButtons'
// import { useNavigation } from '@react-navigation/native'
// import { auth, user } from '../../../firebase'
import { Auth } from "aws-amplify"

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const {height} = useWindowDimensions();

  const onSignInPressed = async() => {
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      const response = await Auth.signIn(username, password);
      console.log(response);
      console.log(Auth.currentAuthenticatedUser())
      navigation.navigate('Home', {username:username})
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

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
          value={username} 
          setValue={setUsername}
          placeholder={"Username"}
          name="username"
        />
        <CustomInput
          value={password} 
          setValue={setPassword}
          secureTextEntry={true}
          placeholder={"Password"}
          name="password"
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