import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { Center, NativeBaseProvider } from "native-base"
import React, {useState, useEffect} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { Auth } from "aws-amplify"


const ProfileScreen = ({navigation}) => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const authUser = await Auth.currentAuthenticatedUser();

      console.log(authUser.attributes.name)
      console.log(authUser.attributes.email)

      setName(authUser.attributes.name)
      setEmail(authUser.attributes.email)

      console.log(name)
      console.log(email)
    }
    fetchData()
  }, [])

  const onSignOutPressed = () => {
  Auth.signOut();
  navigation.navigate('SignIn')
  }

  return (
    <View>
      <View style={styles.root}>
        <Text style={styles.font}>Name: {name} </Text>
        <Text style={styles.font}>Email: {email} </Text>
      </View>
      <View style ={styles.myText}>
        <CustomButton
          text="Sign Out" 
          onPress={onSignOutPressed}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  myText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  font:{
    paddingBottom: 10,
    fontSize: 15
  }
  });

export default ProfileScreen