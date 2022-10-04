import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{alignSelf: 'center'}}>Welcome to the JELLY app!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
  },
});

export default HomeScreen