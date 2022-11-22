import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { Auth } from "aws-amplify"


const ConfirmEmailScreen = ({navigation, route}) => {
  const [code, setCode] = useState('');

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  }

  const onResendPressed = () => {
    console.warn('onResendPressed');
  }

  const onConfirmPressed = async() => {
    try {
      const username = route.params?.username
      await Auth.confirmSignUp(username, code);
      navigation.navigate('Home', {username:username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
      
        <CustomInput
            placeholder="Enter your confirmation code"
            value={code} 
            setValue={setCode}
        />

        <CustomButton text="Confirm" onPress={onConfirmPressed} />
      
        <CustomButton
          text={"Resend code"}
          onPress={onResendPressed}
          type="SECONDARY"
        />
        
        <CustomButton
          text={"Back to Sign in"}
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
    //   backgroundColor: '#84D5B2'
    },
    logo: {
      // width: '100%',
      maxWidth: 300,
      maxHeight: 200,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#051C60',
      margin: 10,
    }
  });

export default ConfirmEmailScreen