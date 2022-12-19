import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function MessageScreen() {
  return (

    <View>
  
    <Image

    style={StyleSheet.imageMessagerie}
    source={require("../assets/captureDecMessagerie.png")}
    >

    </Image>

    </View>

  


  )
}



const styles = StyleSheet.create({

  imageMessagerie:{
    width:"100%",
    height:"100%"
    
  }



})
