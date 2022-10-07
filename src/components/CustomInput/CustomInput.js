import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value = {value}
        onChangeText = {setValue}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={secureTextEntry}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D1E2',
    width: '90%',
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 25,
    marginVertical: 15,
    justifyContent: 'center'
  },
  input: {
    color: '#827878',
  },
})

export default CustomInput