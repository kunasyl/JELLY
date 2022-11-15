import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput} from 'react-native'
import React, {useState} from 'react'
import Logo from '../../../assets/sign_in.png'
import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { auth, user } from '../../../firebase'
import SingUpPng from "../../../assets/sign_up.png";


const NewDiaryScreen = () => {
  const [diary_title,diaryTitle] =  useState('');
  const [diary_text,diaryText] =  React.useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onNewDiaryPressed = () => {
    console.log('New Diary:', diary_text);
    navigation.navigate('Diary')
  }
  return (
          <View style={styles.root}>
              <View style={styles.diary}>
                  <TextInput
                    style={styles.title}
                    onChangeText={diaryTitle}
                    value={diary_title}
                    setValue={diaryTitle}
                    placeholder={"Title"}
                  />
                  <TextInput
                      style={styles.text}
                      multiline
                      numberOfLines={4}
                      value={diary_text}
                      onChangeText={diaryText}
                      setValue={diaryText}
                      placeholder={"Start typing"}
                  />
              </View>

            <CustomButton
                text="SAVE"
                onPress={onNewDiaryPressed}
                style={styles.btn}
            />

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

export default NewDiaryScreen
