import { View, StyleSheet, useWindowDimensions, ScrollView, Vibration } from 'react-native'
import React, {useState, useEffect} from 'react'
import { NativeBaseProvider, Text, Image, Avatar, HStack, VStack, FlatList} from "native-base"

import ChatRoomItem from '../../components/ChatRoomItem/ChatRoomItem'
import ChatRoomsData from '../../../assets/example_data/ChatRooms'

const ChatRoomsHomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.chat__page}>
        <FlatList 
          data ={ChatRoomsData}
          renderItem={({item}) => <ChatRoomItem chatRoom={item}/>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  chat__page:{
    backgroundColor: 'white',
    flex: '1'
  }
  });

export default ChatRoomsHomeScreen