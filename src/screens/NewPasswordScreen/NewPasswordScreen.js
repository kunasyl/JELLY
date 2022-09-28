import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  }

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
      
        <CustomInput
            placeholder="Code"
            value={code} 
            setValue={setCode}
        />
        
        <CustomInput
            placeholder="Enter your new password"
            value={newPassword} 
            setValue={setNewPassword}
        />

        <CustomButton
          text="Submit"
          onPress={onSubmitPressed}
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

export default NewPasswordScreen