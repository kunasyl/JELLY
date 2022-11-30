import React, { useState, useEffect } from "react";
import { COLORS } from '../../styles/colors';
import { StyleSheet, Pressable } from "react-native";
import { NativeBaseProvider, Text, Image, Avatar, HStack, VStack, View } from "native-base";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";

export default function ChatRoomItem({ chatRoom }) {
  const user = chatRoom.users[1];

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ChatRoom', {id: chatRoom.id});
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
            <Text fontSize="xs" color={COLORS.purple}>
              {chatRoom.lastMessage.createdAt}
            </Text>
          </HStack>
          <HStack justifyContent='space-between' alignItems='center'>
            <Text maxW='80%' numberOfLines={1} color={COLORS.dark}>{chatRoom.lastMessage.content}</Text>

            {chatRoom.newMessages && <View style={styles.chat_item__badge} justifyContent='end' mt='2'>
              <Text textAlign='center' justifyContent='center' color="white">{chatRoom.newMessages}</Text>
            </View>}

          </HStack>
        </VStack>
      </HStack>
      <View style={styles.chat_item__line} color={COLORS.darkGrey} ml='77'></View>
    </Pressable>
  );
}

