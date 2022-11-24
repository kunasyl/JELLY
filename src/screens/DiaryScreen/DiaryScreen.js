import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'

import { Menu, HamburgerIcon, Pressable, Box, IconButton, Center, Fab, Icon, NativeBaseProvider, VStack, Heading, Input, HStack, Container } from 'native-base'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from '../../styles/colors'
import DiaryNote from '../../components/DiaryNote/DiaryNote'

import { DataStore } from '@aws-amplify/datastore';
import { UserAuth } from '../../models';

const DiaryScreen = ({navigation}) => {

  const { height, width } = useWindowDimensions();
  
  const onNewNotePressed = () => {
    navigation.navigate('NewDiary')
  }

  return (
    <NativeBaseProvider >
      <Center w="100%">
        <Box safeAreaTop bg="white"/>
        <HStack bg="{COLORS.grey}" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350">
            <Text fontSize="28" fontWeight="bold">
              Diary
            </Text>
          <HStack alignItems="center">
            <IconButton icon={<Icon color="gray" as={AntDesign} 
                                    name="search1" 
                                    size="lg"/>} />
            <Menu w="100%" trigger={triggerProps => {
              return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <Icon color="gray" as={MaterialIcons} 
                            name="more-vert" 
                            size="xl"/>
                    </Pressable>;
            }}>
                <Menu.Item>Select</Menu.Item>
                <Menu.Item>Remove</Menu.Item>
            </Menu>
          </HStack>
        </HStack>
      </Center>
      <Center flex={1} mt="5">
        <ScrollView>
          <Box height={height*0.8} w="100%" shadow="2" rounded="lg" >

          <HStack space={2} justifyContent="center">
            <DiaryNote/>
            <DiaryNote/>
          </HStack>
          
          </Box>
        </ScrollView>
        <Fab onPress={onNewNotePressed}
          renderInPortal={false} 
          shadow={2} 
          size="md" 
          style={{backgroundColor: COLORS.purple}} 
          icon={<Icon color="white" as={AntDesign} 
                      name="form" 
                      size="md" />} />
        </Center>
    </NativeBaseProvider >
  )
}

const styles = StyleSheet.create({
  myText: {
    color: 'purple',
    textAlign: 'center'
  }
})

export default DiaryScreen