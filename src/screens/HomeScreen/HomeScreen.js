import { TouchableOpacity, View, StyleSheet, Text, useWindowDimensions, ScrollView, Pressable} from 'react-native'
import React, {useEffect, useState} from 'react'
import { NativeBaseProvider, FlatList, HStack, Box, VStack, Icon, Image, Button, IconButton, Spacer, Avatar, Input } from "native-base";
import { COLORS } from '../../styles/colors'
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { FlashList } from "@shopify/flash-list";


const HomeScreen = ({navigation, route}) => {


  const customData = require('../../../assets/example_data/blog.json')
  const [filterdData, setfilterData] = useState([])
  const [masterDara, setmasterData] = useState([])
  const { width } = useWindowDimensions();

  useEffect(() => {
    setfilterData(customData)
    setmasterData(customData)
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
      // console.log('nwdt', newData)
    } else{
      setfilterData(masterDara);
    }
  }

  const ItemView = ({item}) => {
    return(
      <Pressable onPress={() => navigation.navigate('Post', item)}>
        <Box style={{flex: 1, flexDirection: "column", width: width - 10}} 
            borderBottomWidth="0.2" borderColor="muted.500" pl={"5"} pr={"1"} py="5" > 
            <View style={styles.container}>
              <HStack>
                <Image source={{uri: item.img}} size="xl" alt="Alternate Text"/> 
                <VStack  style={{width: '60%'}}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text numberOfLines={4} style = {styles.basicText}>{item.body}</Text>
                </VStack>
              </HStack>
              <VStack>
                {/* <Text color={COLORS.darkGrey} fontSize="13.5" pl='3'>{item.published_date.month} </Text> */}
              </VStack>
              <View alignSelf="flex-end" pt='10' pr='10'>
                <HStack>
                  <View>
                    <IconButton  
                            borderRadius= '14'
                            mr = '2'
                            width={'35'}
                            renderInPortal={false} 
                            size="xs" 
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
                            size="xs" 
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
                            size="xs" 
                            style={{backgroundColor: COLORS.purple}} 
                            icon={<Icon color="white" as={FontAwesome}
                            name="bookmark-o"/>} 
                            text="Button with icon component">
                    </IconButton >
                  </View>
                </HStack>
              </View>
              <Spacer ccolor={COLORS.dark} />
              </View>
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

        <FlashList 
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
    flex:1
  },
  itemStyle: {
    padding: 10,
  },
  titleText:{
    color: '#514F4F',
    fontSize: 15,
    paddingBottom: 2,
    //pl: 1,
    //width: '60%',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  basicText:{
    color: '#514F4F',
    fontSize: 14,
    // paddingBottom: 2,
    //pl: 1,
    //width: '60%',
    marginLeft: 5,
  }

});

export default HomeScreen