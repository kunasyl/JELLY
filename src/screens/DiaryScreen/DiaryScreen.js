import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'

import { Box, Center, Fab, Icon, NativeBaseProvider, VStack, Heading, Input } from 'native-base'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from '../../styles/colors'

const DiaryScreen = () => {

  const { height, width } = useWindowDimensions();

  return (
    // <View style={styles.root}>
    //   <Text style={styles.myText}>This is DiaryScreen page</Text>    
    // </View>
    <NativeBaseProvider >
      <Center>
        {/* w=[200, 300, 400] */}
        <Box
        height={height*0.8} w={width} shadow="2" rounded="lg" 
        //   _dark={{
        //   bg: "coolGray.200:alpha.20"
        // }} _light={{
        //   bg: "coolGray.200:alpha.20"
        // }}
        >

        <VStack w="100%" space={5} alignSelf="center">
        <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" as={<MaterialIcons name="mic" />} />} />
        </VStack>

        <Fab 
        renderInPortal={false} 
        shadow={2} 
        size="md" 
        style={{backgroundColor: COLORS.purple}} 
        icon={<Icon color="white" as={AntDesign} 
        name="plus" 
        size="md" />} />
        </Box>
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