import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButtons from '../../components/SocialSignInButtons'
import { useNavigation } from '@react-navigation/native'

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail')
  }

  const onSignInPressed = () => {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
      
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

        <CustomButton text="Register" onPress={onRegisterPressed} />
      
        <SocialSignInButtons/>

        <CustomButton
          text={"Have an account? Sign in"}
          onPress={onSignInPressed}
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
    title: {
      fontSize: 23,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    }
  });

export default SignUpScreen