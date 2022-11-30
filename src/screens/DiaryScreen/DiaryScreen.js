import { View, Text, Image, FlatList, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { Menu, HamburgerIcon, Pressable, Box, IconButton, Center, Fab, Icon, NativeBaseProvider, VStack, Heading, Input, HStack, Container } from 'native-base'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from '../../styles/colors'
import DiaryNote from '../../components/DiaryNote/DiaryNote'

import { Diary, UserAuth } from '../../models';
import { Auth, DataStore } from 'aws-amplify';

const DiaryScreen = ({navigation}) => {

  const { height, width } = useWindowDimensions();
  const [ diaries, setDiaries ] = useState([]);

  useEffect(() => { 
    let diaryCopy = [...diaries];
    fetchDiaries(diaryCopy);
  }, []);

  useEffect(() => {
    const subscription = DataStore.observe(Diary).subscribe((d) => {
      if (d.model === Diary && d.opType === "INSERT") {
        setDiaries((existingDiary) => [d.element, ...existingDiary]);
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  
  const fetchDiaries = async(diary) => {
    const authUser = await Auth.currentAuthenticatedUser();
    const data = await DataStore.query(Diary, c => c.userauthID.eq(authUser.attributes.sub));
    console.log(data);

    diary = data.map(content => {
      const getDiary = {
        id: content.id,
        title: content.titl,
        // content: content.content,
        // emoji: content.emoji,
        // createdDate: content.createdAt,
        // updatedDate: content.updatedAt
      };
      console.log(getDiary);
      return getDiary;
    }).reverse();

    setDiaries(diary);
    // if (!diaries) {
    //   console.log("This user doesn't have any diaries yet");
    // } else {
    //   setDiaries(diaries);
    // }
  };

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
            <IconButton icon={
            <Icon color="gray" as={AntDesign} name="search1" size="lg"/>} />
            <Menu w="100%" trigger={
              triggerProps => {
              return (
                <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <Icon color="gray" as={MaterialIcons} name="more-vert" size="xl"/>
                </Pressable>
              )
            }}>
              <Menu.Item>Select</Menu.Item>
              <Menu.Item>Remove</Menu.Item>
            </Menu>
          </HStack>
        </HStack>
      </Center>
      <Center flex={1}>
        <FlatList data={diaries} renderItem={({ item }) =>
          <HStack 
          space={2} justifyContent="center"
          >
            <DiaryNote title={item?.title||item?.titl} />
          </HStack>
        } keyExtractor={item => item?.id}
        numColumns={2}
        />
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