import { View, Text, Image, FlatList, StyleSheet, useWindowDimensions, ScrollView, Keyboard } from 'react-native'
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
  const [ selectedItems, setSelectedItems ] = useState([]);

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
    // console.log(data);

    diary = data.map(content => {
      const getDiary = {
        id: content.id,
        title: content.titl,
        // content: content.content,
        // emoji: content.emoji,
        // createdDate: content.createdAt,
        // updatedDate: content.updatedAt
      };
      // console.log(getDiary);
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

  const handleOnPress = (note) => {
    console.log('selectedItems.length:', selectedItems.length);
    if(selectedItems.length) {
      return selectNotes(note)
    }
    // navigation.navigate('NewDiary')
  }

  const selectNotes = (note) => {
    console.log("note id:", note.id);
    if(selectedItems.includes(note.id)) {
      const newListItem = selectedItems.filter((noteId) => noteId !== note.id);
      return setSelectedItems(newListItem);
    }
    setSelectedItems([...selectedItems, note.id])
    console.log('selectedItems', selectedItems); 
  }

  const getSelected = (note) => {
    return selectedItems.includes(note.id);
  }

  const deselectItems = () => setSelectedItems([]);

  const deleteMultipleNotes = async() => {
    if(!selectedItems.length) return;
    console.log('selectedItems', selectedItems);
    // try {
    //   await DataStore.delete(Post, (post) => post.);
    // } catch (e) {
    //     Alert.alert('Oops', e.message);
    // }
    const newDiaries = diaries.filter(n => !selectedItems.includes(n.id));
    setDiaries(newDiaries);
    
    deselectItems();
  }

  const handleOutSidePress = () => {
    Keyboard.dismiss();
    deselectItems();
  }

  return (
    <NativeBaseProvider >
      {/* <Center w="100%"> */}
        {/* <Box safeAreaTop bg="white"/> */}
        {/* <HStack bg="{COLORS.grey}" px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="350"> */}
          {/* <Text fontSize="28" fontWeight="bold">
            Diary
          </Text> */}
          {/* <HStack alignItems="center"> */}
            {/* <IconButton icon={ */}
            {/* <Icon color="gray" as={AntDesign} name="search1" size="lg"/> */}
            {/* } /> */}
            {/* <Menu w="100%" trigger={
              triggerProps => {
              return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                  <Icon color="gray" as={MaterialIcons} name="more-vert" size="xl"/>
                </Pressable>;
            }}>
              <Menu.Item onPress={() => console.log('Select pressed')}>Select</Menu.Item>
              <Menu.Item onPress={() => console.log('Remove pressed')}>Remove</Menu.Item>
            </Menu> */}
          {/* </HStack> */}
        {/* </HStack> */}
      {/* </Center> */}
      <Center flex={1} onPress={handleOutSidePress}>
        <FlatList data={diaries} renderItem={({ item }) =>
          <HStack space={2} justifyContent="center">            
            <DiaryNote 
              title={item?.title||item?.titl}
              content={item?.content}
              onLongPress={() => selectNotes(item)}
              onPress={() => handleOnPress(item)}
              selected={getSelected(item)}
            />
          </HStack>
        } keyExtractor={item => item?.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: 15,
        }}
        />
        {selectedItems.length ? (
          <Fab onPress={deleteMultipleNotes}
            renderInPortal={false} 
            shadow={2} 
            size="md" 
            style={{backgroundColor: COLORS.orange}} 
            icon={<Icon color="white" as={AntDesign} 
                        name="delete" 
                        size="md" />}
          />
          ) : (
            <Fab onPress={onNewNotePressed}
            renderInPortal={false} 
            shadow={2} 
            size="md" 
            style={{backgroundColor: COLORS.purple}} 
            icon={<Icon color="white" as={AntDesign} 
                        name="form" 
                        size="md" />}
          />
          )}
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