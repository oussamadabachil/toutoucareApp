import React from "react";
import { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare';


export default function UserProfile() {


  const [editView, setEditView] = useState(false)
  const [editColor, setEditcolor] = useState('gold')
  const user = useSelector((state) => state.user.value);

  const [userInfos, setUserInfos] = useState([]);
  
    useEffect(() => {

      if (!user.data.nom) {
        return;
      }
      fetch(`http://192.168.10.167:3000/users/all/${user.data.nom}`)
        .then(response => response.json())
        .then(data => {
            if (data.result) {setUserInfos(data.user)};
        });
    }, []);
    console.log(userInfos);

  const handleModifyBouton = () => {
    setEditView(true);
    setEditcolor('black');
  };

  let modifyBouton = (
    <TouchableOpacity
      onPress={() => handleModifyBouton()}
      style={styles.button}
      activeOpacity={0.8}
    >
      <Text>Modifier</Text>
    </TouchableOpacity>
  );

  let infoText =
      <View style={styles.background}>
      <View style={styles.infoModify}>
        <Text style={styles.text}>Nom: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.nom}/>
        < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
      </View>
      <View style={styles.infoModify}>
          <Text style={styles.text}>Prénom: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.prenom}/>
       < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
        </View>
        <View style={styles.infoModify}>
        <Text style={styles.text}>mon Toutou: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.chien}/>
        < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
      </View>
      <View style={styles.infoModify}>
          <Text style={styles.text}>Date de naissance: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.date_de_naissance}/>
       < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
        </View>
        <View style={styles.infoModify}>
          <Text style={styles.text}>Tél: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.telephone}/>
       < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
        </View>
        <View style={styles.infoModify}>
        <Text style={styles.text}>Email: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.email}/>
        < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
      </View>
      <View style={styles.infoModify}>
          <Text style={styles.text}>Mot de passe: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.password} secureTextEntry={true}/>
       < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
        </View>
        <View style={styles.infoModify}>
          <Text style={styles.text}>Adresse: </Text>
        <TextInput style={styles.text} editable={editView} multiline={true} defaultValue={userInfos.rue}/>
         <TextInput style={styles.text} editable={editView} multiline={true} defaultValue={userInfos.code_postal} />
         <TextInput style={styles.text} editable={editView} multiline={true} defaultValue= {userInfos.ville}/>
       < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
        </View>
        <View style={styles.infoModify}>
        <Text style={styles.text}>Profession: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.profession}/>
        < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
      </View>
      <View style={styles.infoModify}>
        <Text style={styles.text}>Personne à contacter en cas d'urgence: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.nom_contact_urgence}/>
        < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
      </View>
      <View style={styles.infoModify}>
        <Text style={styles.text}>Tél: </Text>
        <TextInput style={styles.text} editable={editView} defaultValue={userInfos.tel_contact_urgence}/>
        < FontAwesomeIcon icon={faPenToSquare} color={editColor} onPress={() => handleModifyBouton()}/>
      </View>
      </View>


  if (editView) {
    modifyBouton = (
      <View>
        <TouchableOpacity
          onPress={() => handleAccept()}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text>Accepter</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleCancel()}
          style={styles.button}
          activeOpacity={0.8}
        >
          <Text>Annuler</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handleAccept = () => {
    setEditView(false);
    setEditcolor('gold');
  };

  return (
    <SafeAreaView style={styles.background}>
      {infoText}
      {modifyBouton}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    width: 120,
    height: 50,
    color: "white",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  text: {
    fontSize: 20,
    marginRight: 40,
  },
  infoModify: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  textInput: {
    marginRight: 60,
    fontSize: 20,
  },
});

// export default function UserProfile() {

//   return (
//     <>
//     </>
//   )

// }
