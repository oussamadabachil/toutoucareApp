import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";


export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to User Profile"
        onPress={() => navigation.navigate("UserProfile")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  titleStyle: {
    fontSize: 20,
    margin: 10,
  },
});
