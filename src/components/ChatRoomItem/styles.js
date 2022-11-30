import { StyleSheet } from "react-native";
import { COLORS } from '../../styles/colors';
const styles = StyleSheet.create({
  image:{
    height: 60,
    width: 60,
    borderRadius: 30
  },
  chat_item__line:{
    borderBottomWidth: '0.5',
    // borderBottomColor: 'transparent'
  },
  chat_item__badge:{
    backgroundColor: COLORS.purple,
    borderRadius: 50,
    width: 20,
    height: 20,
    color: 'while'
  },
  text: {
    fontSize: 10
  }
  });

  export default styles;