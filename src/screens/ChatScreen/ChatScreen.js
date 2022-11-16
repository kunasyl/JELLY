import { Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../styles/colors'

import { NativeBaseProvider, Text, Box, Heading, Spacer, Avatar, FlatList, HStack, VStack, Input,
Container, Header, Title, Button, Left, Right, Body, Icon, Center, SafeAreaView, TextInput } from "native-base";

const ChatScreen = () => {
  const [text, setText] = useState('');
  const [submitState, setSubmitState] = useState(false);
  const [messages, setMessage] = useState([]);

  const getMessage = async (messages) => {
    const response = await fetch('http://146.185.154.90:8000/messages');
    const data = await response.json();

    messages = data.map(content => {
      const newMessage = {
        id: content._id + Date.now(),
        message: content.message,
        author: content.author,
        date: content.datetime
      };
      return newMessage;
    }).reverse();
    
    setMessage(messages);
  };

  const postMessage = async (message, author) => {
      await fetch('http://146.185.154.90:8000/messages', {
          method: 'POST',
          body: new URLSearchParams({
              message: message,
              author: author
          })
      }).then(res => {
          return res.json();
      });
  };

  const SendMessage = () => {
    setSubmitState(!submitState);
    postMessage(text, 'JELLY');
  };

  useEffect(() => {
    let messagesCopy = [...messages];
    getMessage(messagesCopy);
  }, [submitState]);

  useEffect(() => {
    let messageCopy = [...messages];
    const updateMessage = async (messageObj) => {
      const response = await fetch('http://146.185.154.90:8000/messages');
      const data = await response.json();
      let lastDate = data.slice(-1)[0].datetime;


      const lastResponse = await fetch('http://146.185.154.90:8000/messages?datetime=' + `${lastDate}`);
      const lastData = await lastResponse.json();

      if(lastData.length !== 0) {
        messageObj = lastData.map(content => {
          const newMessage = {
            id: content._id + Date.now(),
            message: content.message,
            author: content.author,
            date: content.datetime
          };
          return newMessage;
        }).reverse();
      };
    };

    setInterval(() => {
      updateMessage(messageCopy);
    }, 10000)
  }, [])


  return (
    <NativeBaseProvider>
      <Center mx="2">
          <VStack w="100%" justifyContent="space-between">
            <Box maxH="90%" minH="80%">
              <ScrollView>
                <FlatList data={messages} renderItem={({item}) => 
                <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50"}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]}py="2">
                  <HStack space={[2, 3]} justifyContent="space-between">
                  <Avatar size="48px" source={{uri: 'https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png'}} />
                    <VStack>
                      <Text _dark={{color: "warmGray.50"}} color={COLORS.dark} bold>
                        {item?.author}
                      </Text>
                      <Text color={COLORS.dark} _dark={{color: "warmGray.200"}}>
                        {item?.message}
                      </Text>
                    </VStack>
                    <Spacer ccolor={COLORS.dark} />
                    <Text fontSize="xs" _dark={{color: "warmGray.50"}} color={COLORS.purple} alignSelf="flex-start">
                      {new Date(Date(item?.datetime)).toLocaleDateString()}
                    </Text>
                  </HStack>
                </Box>} keyExtractor={item => item?._id} />
              </ScrollView>
            </Box> 
            <Box>
              <Input style={{backgroundColor: COLORS.grey}} py="0" px="5" my="5" onChange={setText} InputRightElement={
                <Button  size="sm" rounded="50" w="1/5" style={{backgroundColor: COLORS.purple}} onPress={SendMessage}> Send </Button>}
              placeholder="message" variant="rounded" value={text}/>
            </Box>
          </VStack>
      </Center>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({

  });

export default ChatScreen