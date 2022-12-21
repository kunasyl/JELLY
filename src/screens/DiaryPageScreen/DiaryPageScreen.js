import {View, Text, Alert, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../../components/CustomButton'
import { TabRouter, useNavigation } from '@react-navigation/native'
import { Auth, DataStore } from 'aws-amplify'
import { Diary, UserAuth } from '../../models'


const DiaryPageScreen = ({navigation, route}) => {
  const [diary_title,diaryTitle] =  useState('');
  const [diary_text,diaryText] =  React.useState('');
  const {height} = useWindowDimensions();

  console.log('title', route.params.title);
  console.log('content', route.params.content);

  const onNewDiaryPressed = async () => {
    const authUser = await Auth.currentAuthenticatedUser();
    try {
        await DataStore.save(
            new Diary({
                titl: diary_title,
                content: diary_text,
                emoji: '',
                userauthID: authUser.attributes.sub,
            })
        )
    } catch (e) {
        Alert.alert('Oops', e.message);
    }
    
    navigation.navigate('Diary')
  }

  const onEditDiaryPressed = async() => {
    console.log(route.params.title);
    console.log(route.params.content);
    console.log('onEditDiaryPressed', route.params.id);

  }

  return (
          <View style={styles.root}>
              <View style={styles.diary}>
                  <TextInput
                    style={styles.title}
                    onChangeText={route.params.title || diaryTitle}
                    value={route.params.title || diary_title}
                    setValue={route.params.title || diaryTitle}
                    placeholder={"Title"}
                  />
                  <TextInput
                      style={styles.text}
                      multiline
                      numberOfLines={4}
                      value={route.params.content || diary_text}
                      onChangeText={route.params.content || diaryText}
                      setValue={route.params.content || diaryText}
                      placeholder={"Start typing"}
                  />
              </View>

            {(route.params?.title || route.params?.content) ? (
                    <CustomButton
                    text="SAVE"
                    onPress={onEditDiaryPressed}
                    style={styles.btn}
                    />
                ) : (
                    <CustomButton
                    text="CREATE"
                    onPress={onNewDiaryPressed}
                    style={styles.btn}
                    />
                )
            }

          </View>
  )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
        paddingBottom: 10,
    },
    btn: {
        marginTop: 0,
    },
    diary:{
        width: '100%',
        padding: 20,
        flexDirection: 'column',
        justifyContent: 'space-between',

    },
    title:{
        fontSize: 24,
        height: 40,
    },
    text:{
        fontSize: 16,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});

export default DiaryPageScreen
