import {StyleSheet, SafeAreaView} from 'react-native'
import React, {useState, useEffect} from 'react'
import { NativeBaseProvider, Text, Image, Avatar, HStack, VStack, FlatList} from "native-base"

import Message from '../../components/Message'
import chatRoomData from '../../../assets/example_data/Chats'
import MessageInput from '../../components/MessageInput'

const ChatRoomScreen = () => {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.page}>
        <FlatList 
          data={chatRoomData.messages}
          renderItem={({item}) => <Message message={item}/>}
          showsVerticalScrollIndicator={false}
          inverted
        />
        <MessageInput/>
      </SafeAreaView>
    </NativeBaseProvider>
  )
}

const styles = StyleSheet.create({
  page:{
    backgroundColor: 'white',
    flex: '1'
  }
})

export default ChatRoomScreen