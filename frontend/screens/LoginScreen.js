import { useState, useEffect } from "react";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import RNHTMLtoPDF from "react-native-html-to-pdf";
import { PDFView, PDFDownloadLink } from 'react-native-pdf-lib';


import RNPrint from "react-native-print";
import HTML from "react-native-render-html";

//push
import {
  Alert,
  TouchableHighlight,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useDispatch } from "react-redux";
import { collectData } from "../reducers/user";
import { login, logout } from "../reducers/user";

import * as React from "react";
import { CheckBox } from "react-native-elements";

const BACKEND_ADDRESS = "http://192.168.10.170";
import { useFonts } from "expo-font";

export default function LoginScreen({ navigation }) {


<<<<<<< Updated upstream
const data = {
  name: 'Divyesh Barad',
  email: 'divyesh@gmail.com',
  address: 'Rajkot',
}
=======
const BACKEND_ADDRESS = "http://192.168.10.170";
>>>>>>> Stashed changes


  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [codeCreche, setCode_creche] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [fontsLoaded] = useFonts({
    SemiBold: require("../assets/styles/SemiBold.ttf"),
    Bold: require("../assets/styles/Montserrat-Bold.ttf"),
  });

  const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;

  let textVerifMail;
  console.log("ko");
  if (email.length > 5 && !email.match(regexMail)) {
    textVerifMail = "Votre adresse mail n'est pas valide";
  } else if (email.match(regexMail)) {
    textVerifMail = "";
  }

  // const handleSubmit = () => {
  //   //useEffect(() => {
  //   fetch("http://192.168.10.134:3000/users/signin", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ email, password, code_creche })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         if (data.result) {
  //           navigation.navigate("TabNavigator");
  //           dispatch(
  //             login({
  //               token: data.token,
  //               email: data.email,
  //               password: data.password,
  //               code_creche: data.code_creche,
  //             })
  //           );
  //         }
  //         // console.log(data);
  //       }, []),
  //   });
  // };

  const connexion = () => {
    fetch(`${BACKEND_ADDRESS}:3000/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        codeCreche: codeCreche,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(collectData(data));
        if (data.result) {
          navigation.navigate("TabNavigator", { screen: "Home" });
        } else {
          Alert.alert(data.error);
        }
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <View style={styles.containerInput}>
          <Text style={styles.field}>Votre adresse email</Text>
    
          <TextInput
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
            value={email}
            style={styles.input}
            placeholder="Adresse email"
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.field}>Votre mot de passe</Text>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="newPassword"
            secureTextEntry
            placeholder="Mot de passe"
            onChangeText={(value) => setPassword(value)}
            value={password}
            enablesReturnKeyAutomatically
            style={styles.input}
          />
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.field}>Votre code crèche</Text>
          <TextInput
            onChangeText={(value) => setCode_creche(value)}
            value={codeCreche}
            placeholder="Code crèche"
            style={styles.inputCreche}
          />
        </View>

        <View style={styles.containerCheckbox}>
          <CheckBox></CheckBox>
          <Text style={styles.textSC}>Restez connecté</Text>
        </View>

        <TouchableOpacity
          onPress={() => connexion()}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>
        <Text style={styles.textVerifMail}>{textVerifMail}</Text>
      </View>

      <TouchableHighlight
        onPress={() => {
          generatePdf();
        }}
      >
        <Text>Create PDF</Text>
      </TouchableHighlight>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
<<<<<<< Updated upstream
=======
  container: {
    flex: 1,
    backgroundColor: "#CFDBD5",
    alignItems: "center",
    justifyContent: "center",
    padding:10,
  },
  TitleContent : {
    justifyContent: 'space-between',
    padding: 8,
    flexDirection:'row',
    alignItems:'center'
  },
  title : {
    // fontFamily: "Montserrat_600",
    fontSize: 30,
    fontFamily:"SemiBold",
    paddingHorizontal : 5,
    color : "#365B58",
  },
  contentText : {
    // fontFamily: "Montserrat_600",
    fontSize: 15,
    fontStyle:"italic",
    fontFamily:"SemiBold",

    paddingHorizontal : 5,
    alignSelf: "center",
    color : "#365B58",
  },
  image : {
    padding:5,
    marginRight: 10,
    marginLeft :10,
    width:100,
    height:100,
    alignSelf: "center",
    },
>>>>>>> Stashed changes
  containerCheckbox: {
    justifyContent: "center",
    width: 300,
    flexDirection: "row",
    alignItems: "center",
  },
  checkStyle: {
    alignSelf: "center",

    backgroundColor: "white",

    padding: 122,
    color: "red",
  },

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerInput: {
    width: "90%",
    marginRight: "auto",
    marginLeft: 5,
  },
  image: {
    width: "100%",
    height: "50%",
  },
  textVerifMail: {
    textAlign: "center",
    color: "#F12054",
    
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 20,
  },
  input: {
    marginVertical: 12,
    padding: 12,
    fontSize: 18,
    //width: "80%",
    //marginTop: 25,
    //borderBottomColor: "#ec6e5b",
    //borderBottomWidth: 1,
    //fontSize: 18,
    backgroundColor: "white",
    width: 300,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  inputCreche: {
    marginVertical: 12,
    padding: 12,
    fontSize: 18,
    backgroundColor: "white",
    width: 200,
    height: 50,

    borderRadius: 6,
    borderWidth: 1,
    borderColor: "black",
  },

  button: {
    width: 300,
    marginTop: 20,
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
  },

  // alignItems: "center",
  // paddingTop: 8,
  // width: "70%",
  // marginTop: 30,
  // backgroundColor: "#008486",
  // borderRadius: 10,
  // marginBottom: 10,
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",

    fontSize: 20,
  },
  field: {
    fontFamily: "SemiBold",
    width: "80%",
    fontSize: 25,
  },
  textSC: {
    fontSize: 17,
    fontWeight: "700",
  },
});
