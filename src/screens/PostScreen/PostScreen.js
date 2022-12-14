import { View, StyleSheet, Text, ImageBackground, ScrollView, TextInput} from 'react-native'
import {useEffect, useState} from 'react'
import { NativeBaseProvider} from "native-base";
import { COLORS } from '../../styles/colors'
import Comment from '../../components/Comment/Comment'
import comments from '../../../assets/example_data/comments.json'
import { FlashList } from "@shopify/flash-list";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {API, graphqlOperation, Auth} from 'aws-amplify'
import {createComment, updateComment} from '../../graphql/mutations'

import {onCreateComment} from '../../graphql/subscriptions'

const PostScreen = ({navigation, route}) => {
  const [newText, setText] = useState('');

  const image = { uri: route.params.img}

  const onSend = async () =>{
    console.warn('Sending a new comment: ', newText)
    // console.log('Sending a new comment: ', newText)

    const authUser = await Auth.currentAuthenticatedUser();


    const newComment ={
      author: authUser.attributes.sub,
      blog_id: route.params.id,
      body: newText,
      author_name: authUser.attributes.name
    }

    await API.graphql(graphqlOperation(
      createComment, {input: newComment}
    ))

    setText('')

    // await API.graphql(graphqlOperation(
    //   updateComment, {input: newComment}
    // ))
  }

    // useEffect(() => {
    //   console.log('step 1')
    //   API.graphql(graphqlOperation(onCreateComment)).subscribe({
    //     next: ({value}) => {
    //       console.log('step 2')
    //       console.log('New message')
    //       console.log(value)
    //     },
    //     error: (err) => console.warn(err),
    //   })
    // }, []);

    // console.log('step 3')
    return(
      <NativeBaseProvider>
        <View style={styles.container}>
          <ScrollView >
            <View style={styles.viewStyle}>
              <Text style={styles.titleText}>{route.params.title}</Text>
            </View>
            <View>
              <Text style={styles.undtitl}>{route.params.published_date.month}{route.params.published_date.day}{route.params.published_date.year}</Text>
              <Text style={styles.undtitl}> By {route.params.author}</Text>
            </View>
            <ImageBackground alt="Alternate Text" style={styles.imgStyle} source={image}/>
            <View>
              <Text style={styles.baseText}>{route.params.body}</Text>
            </View>
            <Comment blog_iden = {route.params.id}></Comment>
        
          </ScrollView>
          <View style={styles.container_input}>
              <TextInput 
                value={newText}
                onChangeText={setText}
                style={styles.input}
                placeholder='type your comment...'/>
              <MaterialIcons onPress={onSend} style={styles.send} name='send' size={16} color='white'/>
            </View>
        </View>
        </NativeBaseProvider>
    )
};

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      //height: '100%'
    },
    viewStyle: {
      //height: '7%',
      flex: 1,
      backgroundColor: COLORS.purple,
      justifyContent: 'center'
    },
    titleText: {
      fontSize: 25,
      fontWeight: "bold",
      color: "white",
      padding: 20
    },
    undtitl:{
      fontSize: 15,
      marginTop: 13,
      paddingLeft: 13,
    },
    baseText: {
      fontSize: 15,
      paddingLeft: 15,
    },
    imgStyle: {
      justifyContent: "center",
      resizeMode: "stretch",
      height: 300,
      width: '100%',
      marginBottom: 10,
      marginTop: 10
    },
    container_input:{
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      padding: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    input:{
      flex: 1,
      backgroundColor: 'white',
      paddingRight: 5,
      marginRight: 10,
      paddingHorizontal: 10,    
      //marginHorizontal: 10,
      borderRadius: 50,
      borderColor: 'lightgray',
      borderWidth: StyleSheet.hairlineWidth,
    },
    send:{
      backgroundColor: 'royalblue',
      padding: 7,
      borderRadius: 15,
      overflow: 'hidden'

    }
  });
  

export default PostScreen