import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  View,
  Button,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style= {styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to User Profile"
        onPress={() => navigation.navigate("UserProfile")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< Updated upstream
=======
    backgroundColor: "#CFDBD5",
    padding:10,
},
profilNameText: {
  fontFamily:"Bold",

  fontSize: 21,
  fontWeight: 'bold',
  // fontFamily: "Montserrat_600",
  paddingHorizontal : 5,
  color : "#365B58",
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Bold',
    // fontFamily: "Montserrat_600",
    padding : 5,
    color : "#365B58",
    alignSelf: "center",
  },
  photoNameContainer: {
    paddingVertical: 30,
    paddingHorizontal:5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageContainer: {
    position:'relative',
    borderRadius:999,
    overflow:'hidden',
>>>>>>> Stashed changes
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    margin: 10,
  },
  hyperlinkStyle: {
    color: "blue",
  },
<<<<<<< Updated upstream
  titleStyle: {
    fontSize: 20,
    margin: 10,
=======
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    width:250,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    paddingHorizontal:15,
    fontSize:18,
  },
  closeModal:{
    flexDirection:"row",
    alignSelf:"flex-end",
  },
  menuModal:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
  },
  insideContainer :{
    backgroundColor:"white",
    borderWidth: 0.5,
    borderColor: "#365B58",
    borderRadius: 10,
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
    margin:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
  },
  contentText : {

    // fontFamily: "Montserrat_600",
    fontSize: 15,
    fontStyle:"italic",
    paddingHorizontal : 5,
    alignSelf: "center",
    color : "#365B58",
    margin:15,
  },
  button: {
    width: 150 ,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: "#008486",
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontFamily:"Bold",

    fontWeight: "bold",
    fontSize: 18,
  },
  TitleContent : {
    flexDirection:'row',
    fontFamily:"Bold",

    alignItems:'center',
    padding:10,
    justifyContent:"space-between"
>>>>>>> Stashed changes
  },
});
