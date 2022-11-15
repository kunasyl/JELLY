import React from 'react'
import { StyleSheet, useWindowDimensions } from 'react-native'
import { Box, Center, Fab, Icon, NativeBaseProvider, VStack, Heading, Input } from 'native-base'
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from '../../styles/colors'

const DiaryNote = ({ value, setValue, placeholder, secureTextEntry}) => {

    const { height, width } = useWindowDimensions();
    
    return (
        <Box 
        // maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" 
        maxW={width*0.5}
        // height="50%"
        margin="1"
        _dark={{
            borderColor: "coolGray.600",
          }} _web={{
            shadow: 2,
            borderWidth: 0
          }} _light={{
            backgroundColor: "gray.50"
          }}

        bg={[COLORS.darkGrey]} 
        p="12" 
        rounded="xl" 
        _text={{
            // fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            textAlign: 'center'
            }}>
                This is my notes from Diary
        </Box>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D1E2',
    width: '90%',
    height: 50,
    borderRadius: 30,
    paddingHorizontal: 25,
    marginVertical: 10,
    justifyContent: 'center'
  },
  input: {
    color: '#827878',
  },
})

export default DiaryNote