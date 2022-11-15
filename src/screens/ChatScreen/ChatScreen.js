import { Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../styles/colors'

import { NativeBaseProvider, Text, Box, Heading, Spacer, Avatar, FlatList, HStack, VStack, Input,
Container, Header, Title, Button, Left, Right, Body, Icon, Center} from "native-base";

const ChatScreen = () => {
  const data = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Afreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujita Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Afreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujita Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Afreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujita Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
  },{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    fullName: 'Afreen Khan',
    timeStamp: '12:47 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    fullName: 'Sujita Mathur',
    timeStamp: '11:11 PM',
    recentText: 'Cheer up, there!',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    fullName: 'Anci Barroco',
    timeStamp: '6:22 PM',
    recentText: 'Good Day!',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
  }];
  
  const SendMessage = () => setShow(!show);

  return (
    <NativeBaseProvider>
      <Center mx="2">
          <VStack w="100%" justifyContent="space-between">
            <Box maxH="90%" minH="80%">
              <ScrollView>
                <FlatList data={data} renderItem={({item}) => 
                <Box borderBottomWidth="1" _dark={{ borderColor: "muted.50"}} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]}py="2">
                  <HStack space={[2, 3]} justifyContent="space-between">
                    <Avatar size="48px" source={{uri: item.avatarUrl}} />
                    <VStack>
                      <Text _dark={{color: "warmGray.50"}} color={COLORS.dark} bold>
                        {item.fullName}
                      </Text>
                      <Text color={COLORS.dark} _dark={{color: "warmGray.200"}}>
                        {item.recentText}
                      </Text>
                    </VStack>
                    <Spacer ccolor={COLORS.dark} />
                    <Text fontSize="xs" _dark={{color: "warmGray.50"}} color={COLORS.purple} alignSelf="flex-start">
                      {item.timeStamp}
                    </Text>
                  </HStack>
                </Box>} keyExtractor={item => item.id} /> 
              </ScrollView>
            </Box> 
            <Box>
              <Input style={{backgroundColor: COLORS.grey}} py="0" px="5" my="5" InputRightElement={
                <Button  size="sm" rounded="50" w="1/5" style={{backgroundColor: COLORS.purple}} onPress={SendMessage}> Send </Button>}
              placeholder="message" variant="rounded" value='Hello world'/>
            </Box>
          </VStack>
      </Center>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({

  });

export default ChatScreen