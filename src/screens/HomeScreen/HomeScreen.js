import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({navigation, route}) => {
  return (
    <View>
      <Text style={styles.myText}>Welcome to the JELLY app, {route.params?.username}!</Text>
      {/* ДЛЯ ТЕСТА НАВИГАЦИИ ВНУТРИ STACKNAVIGATION */}
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('ConfirmEmail')}>
        <Text styel={styles.ButtonText}>Click me</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  myText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 18
  },
  Button: {
    backgroundColor: 'purple',
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: '50%'
  },
  ButtonText: {
    fontSize: 18
  }
});

export default HomeScreen