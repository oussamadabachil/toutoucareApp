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

// import FontAwesomeIcon from "@fortawesome/react-native-fontawesome";
// import { faPenToSquare } from "@fortawesome/free-solid-svg-icons/faPenToSquare";

export default function UserProfile() {

  const [name, setName] = useState("Louis");
  const [age, setAge] = useState("23");
  const [gender, setGender] = useState("male");

  const data = 
  fetch(`http://192.168.10.195:3000/users`)
    .then((response) => response.json())
      .then((data) => { console.log(data) })
  


  const [editView, setEditView] = useState(false)
  const user = useSelector((state) => state.user.value);

  // const [name, setName] = useState('Louis');
  // const [age, setAge] = useState('23');
  // const [gender, setGender] = useState('male')

  // const data = 
  // fetch(`http://192.168.10.195:3000/users`)
  //   .then((response) => response.json())
  //     .then((data) => { console.log(data) })

  //   {type: 'Name', info: name, set: setName},
  //   {type: 'Age', info: age, set: setAge},
  //   {type: 'Gender', info: gender, set: setGender}
  // ];

  const [userInfos, setUserInfos] = useState([]);
  
    useEffect(() => {
      if (!user.token) {
        return;
      }
      fetch(`http://192.168.10.195:3000/users/all/${user.nom}`)
        .then(response => response.json())
        .then(data => {
            if (data.result) { setUserInfos(data)}
        });
    }, []);



  let editColor = 'gold';

  const handleModifyBouton = () => {
    setEditView(true);
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

  let infoText = userInfos.map((data, i) => {
    return (
      <View key={i} style={styles.infoModify}>
        <Text style={styles.text}>{data.type}:</Text>
        <TextInput
          style={styles.text}
          editable={editView}
          onChangeText={data.set}
          value={data.info}
        />
        {/* <FontAwesomeIcon
          icon={faPenToSquare}
          color={editColor}
          onPress={() => handleModifier()}
        /> */}
      </View>
    );
  });

  if (editView) {
    editColor = "black";
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
