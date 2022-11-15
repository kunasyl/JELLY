import { Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../styles/colors'

import { NativeBaseProvider, Text, Box, Heading, Spacer, Avatar, FlatList, HStack, VStack, Input,
Container, Header, Title, Button, Left, Right, Body, Icon, Center} from "native-base";

const postMessage = (message, author) => {
  fetch('http://146.185.154.90:8000/messages', {
        method: 'POST',
        body: new URLSearchParams({
            message: message,
            author: author
        })
    }).then(res => {
        return res.json();
    });
};


const ChatScreen = async () => {
  const [messages, setMessages] = useState([]);
  const [submitState, setSubmitState] = useState(false);

  const [valueAuthor] = useState('JELLY');
  const [valueMessage, setValueMessage] = useState('');
  
  const changeMessage = (event) => {
    setValueMessage(event.target.value);
  };

  const SendMessage = () => {};


  return (
    <NativeBaseProvider>
      <Center mx="2">
          <VStack w="100%" justifyContent="space-between">
            <Box maxH="90%" minH="80%">
              <ScrollView>
                {/* <FlatList data={messages} renderItem={({item}) => 
                <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50"}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]}py="2">
                  <HStack space={[2, 3]} justifyContent="space-between">
                    <Avatar size="48px" source={{uri: 'https://picsum.photos/id/237/200/300'}} />
                    <VStack>
                      <Text _dark={{color: "warmGray.50"}} color={COLORS.dark} bold>
                        {item.author}
                      </Text>
                      <Text color={COLORS.dark} _dark={{color: "warmGray.200"}}>
                        {item.message}
                      </Text>
                    </VStack>
                    <Spacer ccolor={COLORS.dark} />
                    <Text fontSize="xs" _dark={{color: "warmGray.50"}} color={COLORS.purple} alignSelf="flex-start">
                      {item.datetime}
                    </Text>
                  </HStack>
                </Box>} keyExtractor={item => item._id} />  */}
                
              </ScrollView>
            </Box> 
            <Box>
              {/* <Input style={{backgroundColor: COLORS.grey}} py="0" px="5" my="5" InputRightElement={
                <Button  size="sm" rounded="50" w="1/5" style={{backgroundColor: COLORS.purple}} onPress={SendMessage}> Send </Button>}
              placeholder="message" variant="rounded" value={valueMessage} onPress={changeMessage}/> */}
            </Box>
          </VStack>
      </Center>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({

  });

export default ChatScreen