import { useState } from "react";
import {
  Alert,
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
// import { addIduser } from '../reducers/user';

import { useEffect } from "react";
import { login, logout } from "../reducers/user";

import * as React from "react";
import { CheckBox } from 'react-native-elements'

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [codeCreche, setCode_creche] = useState("");
  const [checked, setChecked] = React.useState(false);

  const regexMail = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]{2,}.[a-z]{2,4}$/;

  let textVerifMail= ""
  if(email.match(regexMail)){
  }else{
    
    textVerifMail="Votre adresse mail n'est pas valide"

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

    fetch("http://192.168.10.167:3000/users/signin", {
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
        // console.log(data);
        dispatch(collectData(data))
        if (data.result) {
          // console.log(data)
          // dispatch(addIduser(data.id));
          navigation.navigate("TabNavigator", { screen: "Home" });
        }else{
          Alert.alert(data.error)
        }
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.containerForm}>
      <View style={styles.containerInput}>
        <Text style={styles.field}>Votre adresse email</Text>

    <TextInput
              autoCapitalize="none"

      onChangeText={(value) => setEmail(value)}
      value={email}
      style={styles.input}
      placeholder="Insérer votre adresse-mail"

    />
  </View>
  <View style={styles.containerInput}>
    <Text style={styles.field}>Votre mot de passe</Text>
    <TextInput
      autoCapitalize="none"
      autoCorrect={false}
      textContentType="newPassword"
      secureTextEntry
      placeholder="Insérer votre mot de passe"
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
      placeholder="Insérer votre code crèche"
      style={styles.inputCreche}
    />
  </View>

  <View style={styles.containerCheckbox}>
    <CheckBox
    
    ></CheckBox>
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
</KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  containerCheckbox:{
    justifyContent:"center",
    width:300,
    flexDirection:"row",
    alignItems:"center",

  },
  checkStyle:{
    alignSelf: "center",

backgroundColor:"white",

padding:122,
color:'red'
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
    marginLeft: "auto",
  },
  image: {
    width: "100%",
    height: "50%",
  },
  textVerifMail:{
    textAlign:"center",
    color:"#F12054",
    fontSize:17,
    fontWeight:"bold",
    marginTop:20
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
    //width: "80%",
    //marginTop: 25,
    //borderBottomColor: "#ec6e5b",
    //borderBottomWidth: 1,
    //fontSize: 18,
    backgroundColor: "white",
    width: 300,
    height: 40,
    borderRadius: 6,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black",
  },

  button: {
    width: 300,
    marginTop:20,
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
  }

// alignItems: "center",
// paddingTop: 8,
// width: "70%",
// marginTop: 30,
// backgroundColor: "#008486",
// borderRadius: 10,
// marginBottom: 10,
  ,
  textButton: {
    textAlign:"center",
    color: "#fff",
    fontWeight: "bold",

fontSize: 20,
  },
  field: {
    width: "80%",
    fontSize: 25,
    fontWeight: "600",
  },
  textSC:{
    fontSize:17,
    fontWeight:'700',
  }
});