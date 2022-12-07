import { TouchableOpacity, View, StyleSheet, Text, LogBox, ScrollView, Pressable} from 'react-native'
import React, {useEffect, useState} from 'react'
import { NativeBaseProvider, FlatList, HStack, Box, VStack, Icon, Image, Button, IconButton, Spacer, Avatar, Input } from "native-base";
import { COLORS } from '../../styles/colors'
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const HomeScreen = ({navigation, route}) => {

  const customData = require('../../../assets/example_data/blog.json')
  const [filterdData, setfilterData] = useState([])
  const [masterDara, setmasterData] = useState([])

  useEffect(() => {
    setfilterData(customData)
    setmasterData(customData)
    // return () => {
    // }
  }, [])

  const searchFilter = (text) => {
    if(text){
      const newData = masterDara.filter((item) => {
        const itemData = item.title ? 
                    item.title.toUpperCase()
                    : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      console.log('nwdt', newData)
    } else{
      setfilterData(masterDara);
    }
  }

  const onPostPressed = () => {
    console.log('touch')
    navigation.navigate('Post')
  }

  const ItemView = ({item}) => {
    return(
      <Pressable onPress={() => navigation.navigate('Post', item)}>
        <Box style={{flex: 1, flexDirection: "column"}} 
            borderBottomWidth="0.2" borderColor="muted.500" pl={"5"} pr={"5"} py="5" > 
              <HStack>
                <Image source={{uri: item.img}} size="xl" alt="Alternate Text"/> 
                <Text color={COLORS.dark} fontSize="15" pb={'2'} pl = '1' bold> {item.title} </Text>
              </HStack>
              <VStack>
                <Text color={COLORS.darkGrey} fontSize="13.5" pl='3'>{item.published_date.month} </Text>
              </VStack>
              <View alignSelf="flex-end" >
                <HStack>
                  <View>
                    <IconButton  
                            borderRadius= '14'
                            mr = '2'
                            width={'35'}
                            renderInPortal={false} 
                            size="sm" 
                            style={{backgroundColor: COLORS.purple}} 
                            icon={<Icon color="white" as={AntDesign}
                            name="eyeo"/>}>
                    </IconButton >
                  </View>
                  <View>
                    <IconButton  
                            borderRadius= '14'
                            mr = '2'
                            width={'35'}
                            renderInPortal={false} 
                            size="sm" 
                            style={{backgroundColor: COLORS.purple}} 
                            icon={<Icon color="white" as={FontAwesome}
                            name="comment-o" />
                          } 
                            text="Button with icon component">
                    </IconButton >
                  </View>
                  <View>
                    <IconButton  
                            borderRadius= '14'
                            //mr = '5'
                            width={'35'}
                            renderInPortal={false} 
                            size="sm" 
                            style={{backgroundColor: COLORS.purple}} 
                            icon={<Icon color="white" as={FontAwesome}
                            name="bookmark-o"/>} 
                            text="Button with icon component">
                    </IconButton >
                  </View>
                </HStack>
              </View>
              <Spacer ccolor={COLORS.dark} />
            </Box>
            </Pressable>
    )
  }

  const ItemSeparatorView = () => {
    return(
      <View
        style={{height: 0.5, width: '100%', backgroundColor: 'c8c8c8'}}
      />
    )
  }


  return(
    <NativeBaseProvider style = {{flex: 1}}>
      <View style = {styles.container}>
        <Input
          variant="underlined"
          pl={"5"}
          size="lg"
          // style = {styles.TextInputStyle}
          placeholder ='search...'
          //underlineColorAndroid='transparent'
          onChangeText={(text) => searchFilter(text)}

        />

        <FlatList 
          data={filterdData} 
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent = {ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </NativeBaseProvider>   
  )
  };


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  }

});

export default HomeScreen