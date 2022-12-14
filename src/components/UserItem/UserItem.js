import React, { useState, useEffect } from "react";
import { COLORS } from '../../styles/colors';
import { StyleSheet, Pressable } from "react-native";
import { NativeBaseProvider, Text, Image, Avatar, HStack, VStack, View } from "native-base";
import { useNavigation } from "@react-navigation/core";
import { Auth, DataStore } from "aws-amplify";
import { ChatRoom, ChatRoomUserAuth, UserAuth } from "../../models";

export default function UserItem({ user }) {  
  const navigation = useNavigation();

  const onPress = async () => {
    const newChatRoom = await DataStore.save(new ChatRoom({newMessages: 1}))
    console.log("on press - newChatRoom")
    console.log(newChatRoom)

    const authUser = await Auth.currentAuthenticatedUser();
    console.log("authUse")
    console.log(authUse)
    const dbUser = await DataStore.query(UserAuth, c => c.email.eq(authUser.attributes.email))
    console.log("dbUser")
    console.log(dbUser)
    await DataStore.save(new ChatRoomUserAuth({
      userAuth: dbUser,
      chatRoom: newChatRoom
    }))

    await DataStore.save(new ChatRoomUserAuth({
      userAuth: user,
      chatRoom: newChatRoom
    }))

    navigation.navigate('ChatRoom', {id: newChatRoom.id})
    console.log("on press - " + dbUser.attributes.email)
  }

  return (
    <Pressable onPress={onPress}>
      <HStack style={styles.conteiner} justifyContent="space-between" mx='3' my='2'>
        <Avatar mr="2"
          style={styles.image}
          source={{uri: user.imageUri}}
        />
        <VStack flex={1} justifyContent='center'>
          <HStack justifyContent='space-between'>
            <Text color={COLORS.dark} bold>{user.name}</Text>
          </HStack>
        </VStack>
      </HStack>
      <View style={styles.chat_item__line} color={COLORS.darkGrey} ml='77'></View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image:{
    height: 60,
    width: 60,
    borderRadius: 30
  },
  chat_item__line:{
    borderBottomWidth: '0.5',
    // borderBottomColor: 'transparent'
  },
  chat_item__badge:{
    backgroundColor: COLORS.purple,
    borderRadius: 50,
    width: 20,
    height: 20,
    color: 'while'
  },
  text: {
    fontSize: 10
  }
  });
