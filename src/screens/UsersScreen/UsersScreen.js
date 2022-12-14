import { View, StyleSheet, useWindowDimensions, ScrollView, Vibration } from 'react-native'
import React, {useState, useEffect} from 'react'
import { NativeBaseProvider, Text, Image, Avatar, HStack, VStack, FlatList} from "native-base"
import { DataStore } from '@aws-amplify/datastore'
import { UserAuth, UserData } from '../../../src/models'
import {API, graphqlOperation, Auth} from 'aws-amplify'

import UserItem from '../../components/UserItem'
// import users from '../../../assets/example_data/Users'

const UsersScreen = () => {
  const [ users, setUsers ] = useState([]);
  
  useEffect( () => {
    DataStore.query(UserAuth).then(setUsers);
  }, [])

  // useEffect( () => {
  //   // query users
  //   const fetchUsers = async () => {
  //     const fetchedUsers = await DataStore.query(UserAuth);
  //     setUsers(fetchedUsers);
  //   };
  //   fetchUsers();
  // }, [])

  return (
    <NativeBaseProvider>
      <View style={styles.chat__page}>
        <FlatList 
          data ={users}
          renderItem={({item}) => <UserItem user={item}/>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </NativeBaseProvider>
  )
}


const styles = StyleSheet.create({
  chat__page:{
    backgroundColor: 'white',
    flex: '1'
  }
  });

export default UsersScreen