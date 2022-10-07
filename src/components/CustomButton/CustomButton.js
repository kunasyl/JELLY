import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, text, type="PRIMARY", bgColor, fgColor}) => {
  return (
    <Pressable onPress={onPress} 
      style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? {backgroundColor: bgColor} : {}
      ]}>
      <Text 
        style={[
          styles.text, 
          styles[`text_${type}`],
          fgColor ? {color: fgColor} : {}
        ]}
      >
        {text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#77536F',
    borderRadius: 30,
    width: '40%',
    margin: 0
  },

  container_SECONDARY: {
    borderColor: '#77536F',
    borderWidth: 1,
    width: '70%',
  },
  
  container_TERTIARY: {},

  text: {
    color: 'white',
  },

  text_TERTIARY: {
    color: '#77536F',
    textDecoration: 'underline'
  }
});

export default CustomButton