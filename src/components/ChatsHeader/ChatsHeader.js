import { View, Text, StyleSheet, Pressable, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";

export default ChatRoomItem = (props) => {
  const { width } = useWindowDimensions();

  return(
    <View style={{ 
      flexDirection: "row",
      justifyContent: "space-between",
      // marginLeft: 25,
      width: width - 10,
      padding: 3,
      alignItems: "center",
    }}>
      <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80' }}
        style={{ width: 30, height: 30, borderRadius: 30}}
      />
      <Pressable style={{ flex: 1, textAlign:'center' , marginLeft: 30}}>
        <Text style={{ fontWeight: "bold", textAlign:'center' }}>
          {props.children}
        </Text>
      </Pressable>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
    </View>
  )
}