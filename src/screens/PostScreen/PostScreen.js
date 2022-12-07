import { View, StyleSheet, Text, ImageBackground, ScrollView} from 'react-native'
//import React, {useEffect, useState} from 'react'
import { NativeBaseProvider} from "native-base";
import { COLORS } from '../../styles/colors'
import Comment from '../../components/Comment/Comment'

const PostScreen = ({navigation, route}) => {

const image = { uri: route.params.img}

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
          <ImageBackground style={styles.imgStyle} source={image}/>
          <View>
            <Text style={styles.baseText}>{route.params.body}</Text>
          </View>
          <Comment></Comment>
        </ScrollView>
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
    }
  
  });
  

export default PostScreen