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
    width: '80%',
    height: 45,
    color: '#827878',
    borderRadius: 30,

    // borderColor: '#e8e8e8',
    // borderWidth: 1,
    // borderRadius: 5,

    paddingHorizontal: 20,
    marginVertical: 10,
  },
  input: {
    paddingTop: 9
  },
})

export default CustomInput