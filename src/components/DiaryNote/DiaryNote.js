import React from 'react'
import { StyleSheet, TouchableOpacity, View, Text, Dimensions, useWindowDimensions } from 'react-native'
import { Box } from 'native-base'
import { COLORS } from '../../styles/colors'

const DiaryNote = ({ item, selected, title, content, onLongPress, onPress }) => {
    console.log(item);

    // const width = Dimensions.get('window').width;
    const { height, width } = useWindowDimensions();
    
    return (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        // style={styles.container}
        >
          {/* <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text numberOfLines={3}>{content}</Text> */}
        <Box
        maxW={width*0.5}
        margin="1"
        _dark={{
            borderColor: "coolGray.600",
          }} _web={{
            shadow: 2,
            borderWidth: 0
          }} _light={{
            backgroundColor: COLORS.purple
          }}

        bg={[COLORS.darkGrey]} 
        p="12" 
        rounded="xl" 
        _text={{
            // fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            textAlign: 'center'
            }}>
              { title }
        </Box>
        {selected && <View style={styles.overlay}/>}
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: COLORS.purple,
    // width: width / 2 - 10,
    // padding: 8,
    // borderRadius: 10,
    // overflow: 'hidden',
  },
  input: {
    color: '#827878',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: COLORS.whiteGrey,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    top: 0,
    left: 0,
  },
})

export default DiaryNote