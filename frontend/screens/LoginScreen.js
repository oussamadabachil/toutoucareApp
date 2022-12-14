import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login, logout } from "../reducers/user";
import { Checkbox } from "react-native-paper";
import * as React from "react";

export default function LoginScreen({ navigation }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code_creche, setCode_creche] = useState("");
  const [checked, setChecked] = React.useState(false);

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
    fetch("http://192.168.10.129:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
        code_creche: "1234",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.result) {
          navigation.navigate("TabNavigator", { screen: "Home" });
        }
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Text style={styles.field}>Votre adresse email</Text>

      <TextInput
        onChangeText={(value) => setEmail(value)}
        value={email}
        style={styles.input}
      />

      <Text style={styles.field}>Votre mot de passe</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="newPassword"
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
        value={password}
        enablesReturnKeyAutomatically
        style={styles.input}
      />

      <Text style={styles.field}>Votre code crèche</Text>
      <TextInput
        onChangeText={(value) => setCode_creche(value)}
        value={code_creche}
        style={styles.input}
      />

      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text>Restez connecté</Text>

      <TouchableOpacity
        onPress={() => connexion()}
        style={styles.button}
        activeOpacity={0.8}
      >
        <Text style={styles.textButton}>Se connecter</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "50%",
  },
  title: {
    width: "80%",
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    //width: "80%",
    //marginTop: 25,
    //borderBottomColor: "#ec6e5b",
    //borderBottomWidth: 1,
    //fontSize: 18,
    backgroundColor: "white",
    width: "50%",
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "black",
  },
  button: {
    alignItems: "center",
    paddingTop: 8,
    width: "70%",
    marginTop: 30,
    backgroundColor: "#008486",
    borderRadius: 10,
    marginBottom: 10,
  },
  textButton: {
    color: "#ffffff",
    height: 30,
    fontWeight: "900",
    fontSize: 17,
  },
  field: {
    width: "80%",
    fontSize: 25,
    fontWeight: "600",
  },
});
