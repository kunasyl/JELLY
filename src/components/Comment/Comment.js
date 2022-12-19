import { TouchableOpacity, View, StyleSheet, Text, LogBox, ScrollView, Pressable, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import { NativeBaseProvider, FlatList, HStack, Box, VStack, Icon, Image, Button, IconButton, Spacer, Avatar, Input } from "native-base";
import { COLORS } from '../../styles/colors'
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
//import API, { graphqlOperation } from '@aws-amplify/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
import {API, graphqlOperation} from 'aws-amplify'
import {listComments, commentByBlogID} from '../../graphql/queries'
import {onCreateComment} from '../../graphql/subscriptions'
import { FlashList } from "@shopify/flash-list";


const Comment = ({ blog_iden }) => {

  const [post, setPost] = useState([])
  
  useEffect(() => {

    console.log(blog_iden)

    const fetchData = async () => {
      await API.graphql(graphqlOperation(listComments, {}))
      .then(
        (result) => setPost(result.data?.listComments.items.filter(function (el){return el.blog_id == blog_iden}))
      );

      console.log('POST in fetch data', post)
    }
  
    // call the function
    fetchData()

    console.log('POST in use_ef', post)
    // API.graphql(graphqlOperation(onCreateComment)).subscribe({
    //   next: (value) => {
    //     console.log('step 2')
    //     console.log('New message')
    //     console.log(value)
    //   },
    //   //error: (err) => console.warn(err),
    // })
  }, []);

  console.log('POST in out_ef', post)

  // console.log('step 3')
  // useEffect(() => {
  //   console.log('step 1')
  //   API.graphql(graphqlOperation(onCreateComment)).subscribe({
  //     next: (value) => {
  //       console.log('step 2')
  //       console.log('New message')
  //       console.log(value)
  //     },
  //     //error: (err) => console.warn(err),
  //   })
  // }, []);


  if(!post) {
    return <ActivityIndicator/>;
  }

  //console.log(post.items)

  const ItemView = ({item}) => {
    return(
      <View style={styles.container}>
      <Image
        alt="Alternate Text"
        source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg'}}
        style={styles.image}
      />
      <View style={styles.content}>
        <View style={styles.row}>
          <Text style={styles.name}>{item.author_name}</Text>
          <Text style={styles.subTitle}>{dayjs(item.createdAt).fromNow(true)}</Text>
        </View>
        <Text style={styles.subTitle}>{item.body}</Text>
        {/* <Text style={styles.time}>{dayjs(comment.createdAt).format('DD.MM.YYYY')}</Text> */}
      </View >
    </View>
    )
  }

  return(
    <FlashList
      data={post}
      renderItem={ItemView}
      // inverted
    />
  )
};
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginHorizontal: 10,
      marginVertical: 7,
      // alignItems: 'center'
      // height: 70,
    },
    image:{
      width: 40,
      height: 40,
      borderRadius: 30,
      marginRight: 10,
    },
    content:{
      flex:1,

    },
    row:{
      flexDirection: 'row',
    },
    name:{
      flex: 1,
      fontWeight: 'bold'
    },
    subTitle:{
      color: 'gray',
    },
    time: {
      color: 'gray',
      alignSelf: 'flex-end',
    }
  });
  // const styles = StyleSheet.create({
  //   container: {
  //       //display: 'flex',
  //       flexDirection: 'column',
  //       marginTop: 50,
  //       background: 'white',
  //       borderRadius: 16
  //     },
      
  //     messages: {
  //       flex: 1,
  //       position: 'relative'
  //     },
      
  //     messages_scroller: {
  //       position: 'absolute',
  //       top: 0,
  //       right: 0,
  //       bottom: 0,
  //       left: 0,
  //       // display: flex,
  //       flexDirection: 'column',
  //       padding:16,
  //       // overflow-y: scroll,
  //     },
      
  //     message: {
  //       alignSelf: 'flex-start',
  //       marginTop: 4,
  //       padding: [8, 12],
  //       maxWiidth: 240,
  //       background: '#f1f0f0',
  //       borderRadius: 16,
  //       fontSize: 14,
  //     },
      
  //     message_me: {
  //       alignSelf: 'flex-end',
  //       background: '#f19e38',
  //       color: 'white',
  //     },
      
  //     chat_bar: {
  //       height: 64,
  //       borderTop: 1,
  //     },
      
  //     chat_bar_form: {
  //       height: '100%',
  //       padding: 16,
  //     },
      
  //     chat_bar_form_input: {
  //       width: '100%',
  //       height: 32,
  //       padding: [8, 16],
  //       border: '1px solid #ddd',
  //       borderRadius: 16,
  //       outline: 'none',
  //     },
  // });
  
  export default Comment