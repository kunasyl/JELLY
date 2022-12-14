import { View, StyleSheet, useWindowDimensions, ScrollView, Vibration } from 'react-native'
import React, {useState, useEffect} from 'react'
import { NativeBaseProvider, FlatList} from "native-base"

import ChatRoomItem from '../../components/ChatRoomItem/ChatRoomItem'
import chatRoomsData from '../../../assets/example_data/ChatRooms'

const ChatRoomsHomeScreen = () => {
  return (
    <NativeBaseProvider>
      <View style={styles.chat__page}>
        <FlatList 
          data ={chatRoomsData}
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