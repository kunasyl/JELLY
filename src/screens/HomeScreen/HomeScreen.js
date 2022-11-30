import { View, StyleSheet, TouchableOpacity, LogBox, ScrollView, Image} from 'react-native'
import React, {useState} from 'react'
import { COLORS } from '../../styles/colors'

import { NativeBaseProvider, Text, Box, Heading, Spacer, Avatar, FlatList, HStack, VStack, Icon, Button, IconButton } from "native-base";

// import Svg, {G, Path} from 'react-native-svg';
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";




LogBox.ignoreAllLogs()


const HomeScreen = ({navigation, route}) => {
  const data = [{
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    username: 'Afreen Khan',
    published_dt: '12:47 PM',
    title_text: 'Good Day!',
    body_text: 'Himenaeos nibh eleifend facilisis vitae suscipit tincidunt vehicula non, porta dolor nec cubilia sagittis dui ultricies rutrum cras, parturient mattis blandit hendrerit justo gravida in. Sagittis nulla torquent odio ut nunc sollicitudin iaculis netus magna, vivamus cras nascetur per montes congue urna.',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
  }, {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    username: 'Sujita Mathur',
    published_dt: '11:11 PM',
    title_text: 'Cheer up, there!',
    body_text: 'Eleifend penatibus accumsan ex tellus dictumst consequat metus semper rhoncus, eget tincidunt bibendum amet curae facilisis mollis lacinia, eros a laoreet senectus nibh pharetra torquent neque. ',
    avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU'
  }, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    username: 'Anci Barroco',
    published_dt: '6:22 PM',
    title_text: 'Good Day!',
    body_text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lacinia non erat, nullam aenean est maximus proin praesent natoque ut hendrerit, malesuada vehicula cubilia pellentesque leo vitae bibendum porta orci.',
    avatarUrl: 'https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
  }];

  return (
    <NativeBaseProvider>
      <View>
        <FlatList data={data} renderItem={({item}) => 
        <Box borderBottomWidth="0.2" borderColor="muted.500" pl={"5"} pr={"5"} py="5" > 
          <HStack>
            <Avatar size="25px" source={{uri: item.avatarUrl}} />
            <Text color={COLORS.dark} fontSize="15" pb={'2'} pl = '1' bold> {item.username} </Text>
            <Text color={COLORS.darkGrey} fontSize="13.5" pl='3'> {item.published_dt} </Text>
          </HStack>
          <VStack>
            <Text color={COLORS.dark} fontSize="16" bold> {item.title_text} </Text>
            <Text color={COLORS.dark} fontSize="15" pt='0.7'> {item.body_text} </Text>
            <Text color={COLORS.purple} fontSize="15" marginTop={'6'}> See more </Text>
          </VStack>
          <View alignSelf="flex-end" >
            <HStack>
              <View>
                <IconButton  
                        borderRadius= '12'
                        renderInPortal={false} 
                        size="sm" 
                        style={{backgroundColor: COLORS.purple}} 
                        icon={<Icon color="white" as={AntDesign}
                        name="eyeo"/>} 
                        text="Button with icon component">
                </IconButton >
              </View>
              <View>
                <IconButton  
                        borderRadius= '12'
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
                        borderRadius= '12'
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
        </Box>} keyExtractor={item => item.id} /> 
      </View>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({

});

export default HomeScreen