import { View, StyleSheet, Pressable, Button, TextInput, KeyboardAvoidingView, Platform} from 'react-native'
import { React, useState} from 'react'
import { COLORS } from '../../styles/colors'

import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

// import { useNavigation } from "@react-navigation/core";

const MessageInput = () => {
  const [message, setMessage] = useState("");

  // const navigation = useNavigation();

  const sendMessage = () => {
    alert(message);
    setMessage('');
  }
  const onPlusClicked = () => {
    alert("on plus clicked");
  }

  const onPress = () => {
    if(message){
      sendMessage();
    } else{
      onPlusClicked();
    }
  }



  return (
    <KeyboardAvoidingView 
      style={styles.root}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={110}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons name="emotsmile" size={24} color='grey' style={styles.icon}></SimpleLineIcons>
        <TextInput 
          style={styles.input}
          placeholder="message" 
          value={message}
          onChangeText={setMessage}
        />
        <Feather name='camera' size={24} color='grey' style={styles.icon}/>
        <MaterialCommunityIcons name='microphone-outline' size={24} color='grey' style={styles.icon}/>
      </View>
      <Pressable style={styles.buttonContainer} onPress={onPress} >
        {
          message ? 
          <Ionicons name='send' size={18} color='white'/> :
          <AntDesign name='plus' size={24} color='white'/>
        }
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
    flexDirection: "row",
  },
  inputContainer: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    marginHorizontal: 5,
    borderRadius: 55,
    borderWidth: 1,
    borderColor: "#dedede",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.purple,
    color: "white",
  },
  input: {
    flex: 1,
    marginHorizontal: 10
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 35,
    flex: 1,
    marginRight: 10,
  }
});

export default MessageInput;