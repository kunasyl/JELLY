import { SafeAreaView, View, StyleSheet, Text, LogBox, ScrollView, Image, TextInput} from 'react-native'
import React, {useEffect, useState} from 'react'
import { NativeBaseProvider, FlatList, HStack, Box, VStack, Icon, Button, IconButton, Spacer, Avatar } from "native-base";
import { COLORS } from '../../styles/colors'
import { AntDesign, Fontisto, FontAwesome } from "@expo/vector-icons";




const HomeScreen = ({navigation, route}) => {

  const [filterdData, setfilterData] = useState([])
  const [masterDara, setmasterData] = useState([])
  const [search, setsearch] = useState('')

  useEffect(() => {
    fetchPosts()
    return () => {
    }
  }, [])

  // const fetchPosts = () => {
  //   Promise.all([
  //     fetch('https://jsonplaceholder.typicode.com/posts'),
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //   ]).then(async([aa, bb]) => {
  //     const a = await aa.json();
  //     const b = await bb.json();
  //     var arr = []
  //     arr.push(a)
  //     arr.push(b)
  //     return arr
  //   })
  //   // .then((responseText) => {
  //   //   console.log(responseText);
  
  //   // })
  //   .then((responseJson) => 
  //     {
  //       setfilterData(responseJson)
  //       setmasterData(responseJson)
  //     })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }

  const fetchPosts = () => {
    //const apiPosts = 'https://jsonplaceholder.typicode.com/posts'
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    //.then((json) => console.log(json))
    .then((responseJson) => 
    {
      setfilterData(responseJson)
      setmasterData(responseJson)
    }).catch(((error) => {
      console.error(error)
    }))
  }

  console.log(filterdData)

  const searchFilter = (text) => {
    if(text){
      const newData = masterDara.filter((item) => {
        const itemData = item.title ? 
                    item.title.toUpperCase()
                    : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setsearch(text);
    } else{
      setfilterData(masterDara);
      setsearch(text);
    }
  }

  const ItemView = ({item}) => {
  //var json = JSON.parse(item);
  //console.log(item[0].body)
    return(
      <Box borderBottomWidth="0.2" borderColor="muted.500" pl={"5"} pr={"5"} py="5" > 
            <HStack>
              {/* <Avatar size="25px" source={{uri: item.users.image}} /> */}
              {/* <Text color={COLORS.dark} fontSize="15" pb={'2'} pl = '1' bold> {item.title} </Text> */}
              {/* <Text color={COLORS.darkGrey} fontSize="13.5" pl='3'> {item.published_dt} </Text> */}
            </HStack>
            <VStack>
              <Text color={COLORS.dark} fontSize="16" bold> {item.title} </Text>
              <Text color={COLORS.dark} fontSize="15"  pt='0.7'> {item.body} </Text>
              <Text color={COLORS.purple} fontSize="15" marginTop={'6'}> See more </Text>
            </VStack>
            <View alignSelf="flex-end" >
              <HStack>
                <View>
                  <IconButton  
                          borderRadius= '14'
                          mr = '2'
                          width={'35'}
                          renderInPortal={false} 
                          size="sm" 
                          style={{backgroundColor: COLORS.purple}} 
                          icon={<Icon color="white" as={AntDesign}
                          name="eyeo"/>}>
                  </IconButton >
                </View>
                <View>
                  <IconButton  
                          borderRadius= '14'
                          mr = '2'
                          width={'35'}
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
                          borderRadius= '14'
                          //mr = '5'
                          width={'35'}
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
          </Box>
    )
  }

  const ItemSeparatorView = () => {
    return(
      <View
        style={{height: 0.5, width: '100%', backgroundColor: 'c8c8c8'}}
      />
    )
  }


  return(
    <NativeBaseProvider style = {{flex: 1}}>
      <View style = {styles.container}>
        <TextInput
          style = {styles.TextInputStyle}
          value = {search}
          placeholder ='search...'
          underlineColorAndroid='transparent'
          onChangeText={(text) => searchFilter(text)}

        />

        <FlatList 
          data={filterdData} 
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent = {ItemSeparatorView}
          renderItem={ItemView}
        />
      </View>
    </NativeBaseProvider>   
  )
// console.log(filterdData[0])

//   return (
//     <NativeBaseProvider style = {{flex: 1}}>
//       <View style = {styles.container}>
//         <FlatList 
//           data={filterdData} 
//           keyExtractor={(item, index) => index.toString()}
//           ItemSeparatorComponent = {ItemSeparatorView}
//           renderItem={({item}) => 
//             <Box borderBottomWidth="0.2" borderColor="muted.500" pl={"5"} pr={"5"} py="5" > 
//             <HStack>
//               {/* <Avatar size="25px" source={{item.users.image}} /> */}
//               <Text color={COLORS.dark} fontSize="15" pb={'2'} pl = '1' bold> {item?.users?.lastName}{' '}{item?.users} </Text>
//               {/* <Text color={COLORS.darkGrey} fontSize="13.5" pl='3'> {item.published_dt} </Text> */}
//             </HStack>
//             <VStack>
//               <Text color={COLORS.dark} fontSize="16" bold> {item.posts} </Text>
//               <Text color={COLORS.dark} fontSize="15" style = {{fontFamily:'IstokWeb-Italic'}} pt='0.7'> {item.posts} </Text>
//               <Text color={COLORS.purple} fontSize="15" marginTop={'6'}> See more </Text>
//             </VStack>
//             <View alignSelf="flex-end" >
//               <HStack>
//                 <View>
//                   <IconButton  
//                           borderRadius= '14'
//                           mr = '2'
//                           width={'35'}
//                           renderInPortal={false} 
//                           size="sm" 
//                           style={{backgroundColor: COLORS.purple}} 
//                           icon={<Icon color="white" as={AntDesign}
//                           name="eyeo"/>}>
//                   </IconButton >
//                 </View>
//                 <View>
//                   <IconButton  
//                           borderRadius= '14'
//                           mr = '2'
//                           width={'35'}
//                           renderInPortal={false} 
//                           size="sm" 
//                           style={{backgroundColor: COLORS.purple}} 
//                           icon={<Icon color="white" as={FontAwesome}
//                           name="comment-o" />
//                         } 
//                           text="Button with icon component">
//                   </IconButton >
//                 </View>
//                 <View>
//                   <IconButton  
//                           borderRadius= '14'
//                           //mr = '5'
//                           width={'35'}
//                           renderInPortal={false} 
//                           size="sm" 
//                           style={{backgroundColor: COLORS.purple}} 
//                           icon={<Icon color="white" as={FontAwesome}
//                           name="bookmark-o"/>} 
//                           text="Button with icon component">
//                   </IconButton >
//                 </View>
//               </HStack>
//             </View>
//             <Spacer ccolor={COLORS.dark} />
//           </Box>
          
//         }
//         /> 
//       </View>
//     </NativeBaseProvider>
//   )
// };
  };


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  }

});

export default HomeScreen