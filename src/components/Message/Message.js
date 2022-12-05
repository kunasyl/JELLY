import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../../styles/colors';

const myId = 'u1';

const Message = ({message}) => {
  
  const isMe = message.user.id === myId


  return (
    <View style={[
      styles.container, 
      isMe ? styles.rightContainer : styles.leftContainer,
    ]}>
      <Text style={{color: isMe ? 'black' : 'white'}}>{message.content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLORS.purple,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    maxWidth: '75%'
  },
  leftContainer: {
    backgroundColor: COLORS.purple,
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    backgroundColor: COLORS.grey,
    marginLeft: "auto",
    marginRight: 10,
    alignItems: "flex-end",
  },
})

export default Message;