import { TouchableOpacity, View, StyleSheet, Text, LogBox, ScrollView, Pressable} from 'react-native'
import React, {useEffect, useState} from 'react'
import { NativeBaseProvider, FlatList, HStack, Box, VStack, Icon, Image, Button, IconButton, Spacer, Avatar, Input } from "native-base";
import { COLORS } from '../../styles/colors'
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import API, { graphqlOperation } from '@aws-amplify/api';
// import { listMessages } from './graphql/queries';

const Comment = ({navigation, route}) => {

     // Placeholder function for handling changes to our chat bar
    const handleChange = () => {};
  
    // Placeholder function for handling the form submission
    const handleSubmit = () => {};
  
    return(
    <View style={styles.container}>
      <View style={styles.messages}>
        <View style={styles.messages_scroller}>
        </View>
      </View >
      <View style={styles.chat_bar}>
          <Input 
            type="text"
            name="messageBody"
            placeholder="Type your comment here"
            onChange={handleChange}
            value={''}
          />
      </View>
    </View>
    )
    };
  
  
  const styles = StyleSheet.create({
    container: {
        //display: 'flex',
        flexDirection: 'column',
        marginTop: 50,
        background: 'white',
        borderRadius: 16
      },
      
      messages: {
        flex: 1,
        position: 'relative'
      },
      
      messages_scroller: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        // display: flex,
        flexDirection: 'column',
        padding:16,
        // overflow-y: scroll,
      },
      
      message: {
        alignSelf: 'flex-start',
        marginTop: 4,
        padding: [8, 12],
        maxWiidth: 240,
        background: '#f1f0f0',
        borderRadius: 16,
        fontSize: 14,
      },
      
      message_me: {
        alignSelf: 'flex-end',
        background: '#f19e38',
        color: 'white',
      },
      
      chat_bar: {
        height: 64,
        borderTop: 1,
      },
      
      chat_bar_form: {
        height: '100%',
        padding: 16,
      },
      
      chat_bar_form_input: {
        width: '100%',
        height: 32,
        padding: [8, 16],
        border: '1px solid #ddd',
        borderRadius: 16,
        outline: 'none',
      },
  });
  
  export default Comment