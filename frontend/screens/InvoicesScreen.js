import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,

  TouchableOpacity,
} from "react-native";


import { Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function InvoicesScreen() {
  let pdfUrl = "https://www.orimi.com/pdf-test.pdf";
//download pdf

const downloadPdf = () => {
  Linking.openURL(pdfUrl);
};

  return(
    
    <SafeAreaView>

      <View style={styles.container}>
        <Text style={styles.title}>Factures</Text>
        <Text style={styles.text}>Vous pouvez retrouver ici toutes vos factures</Text>
        <TouchableOpacity style={styles.button} onPress={() => downloadPdf()}>
          <Text style={styles.textButton}>Télécharger la facture</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>);
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,

    marginBottom: 20,
  },
  button: {
    backgroundColor: "#F12054",
    width: 200,
    height: 50,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  textButton: {
    color: "white",
    fontSize: 20,
  },
});
