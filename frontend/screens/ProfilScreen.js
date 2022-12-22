import React from 'react';
import { StyleSheet, Text, View, Image,ScrollView, SafeAreaView, Pressable,TouchableOpacity, Switch } from 'react-native';
import { useEffect, useState } from 'react';
import UserProfile from './UserProfile';
import DogProfile from './DogProfile';
import * as ImagePicker from 'expo-image-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import UploadImage from './UploadImage';
import { useSelector } from "react-redux";

const BACKEND_ADDRESS = 'http://192.168.10.170';


export default function ProfilScreen({ navigation }) {

  const [image, setImage] = useState(null);
  const userToken = useSelector((state) => state.user.value.data.token)
  const IMAGE_PATH = `https://res.cloudinary.com/dpapzrkqw/image/upload/v1671611852/toutouCare/${userToken}`;
  let imageDeProfil;

  const formData = new FormData();
  let result = false;

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (!permissionResult.granted) {
      alert("Vous avez refusé l'accès à votre librairie")
    } else if (permissionResult.granted) {
        result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.canceled) {
        setImage(result.assets[0].uri);
        formData.append('photoFromFront', {
          uri: result.uri,
          name: 'photo.jpg',
          type: 'image/jpeg',
        });
        fetch(`${BACKEND_ADDRESS}:3000/photos/upload/${userToken}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
          },
          body: formData,
        }).then((response) => response.json())
      }
    }
  }

  if (image) {
    imageDeProfil = <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />
  } else {
    imageDeProfil = <Image source={{ uri: IMAGE_PATH }} style={{ width: 100, height: 100 }} />
  }

    /*Check si le switch est actif ou non*/
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
    };
    const user = useSelector((state) => state.user.value);

  return (
      <SafeAreaView style={styles.background}>
      <ScrollView>
      <View style={styles.main}>
      <View style={styles.close}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.closeModal} activeOpacity={0.8}>
                  <FontAwesomeIcon icon={faCircleXmark} size={35} color="#365B58"/>
                </TouchableOpacity>
              </View>
        <View style={styles.photoNameContainer}>
        <Pressable onPress={pickImage} style={styles.container}>
          {imageDeProfil}
        </Pressable>
            <View style={styles.welcome}>
            <Text style={styles.profilNameText}>Bienvenue</Text>
            <Text style={styles.profilNameText}>{user.data.chien} et {user.data.prenom}</Text>
                       </View>
        </View>
            <View style={styles.switchContainer}>
              <Switch
                trackColor={{ false: "#767577", true: "#008486" }}
                thumbColor={isEnabled ? "#FFC547" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                />
                {isEnabled ? <DogProfile/> : <UserProfile/>}
          </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:"center",
    justifyContent: "center",
    paddingTop: 5,
    paddingBottom: 5,
  },
  header: {
    flex: 0.35,
    backgroundColor: '#008486',
    paddingTop: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  iconProfil: {
    left: '330%',
  },
  main: {
    flex: 1,
    backgroundColor: 'white',
    flex: 4,
    paddingTop: 5,
    paddingBottom: 5, 
  },
  photoNameContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcome:{
    alignSelf: "center",
    justifyContent: "center",
    maxWidth: 200,
  },
  profilNameText: {
    fontSize: 21,
    fontWeight: 'bold',
    right: '10%',
    fontFamily: "Montserrat_600",
    paddingHorizontal : 5,
    color : "#365B58",
    },
  close: {
    flexDirection:"row",
    alignSelf:"flex-end",
  },

  switchContainer: {
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  singleInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  textInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    left: '100%',
    fontSize: 18,
    fontWeight: '400',
  },
  inputStyleEdit: {
    left: '100%',
    fontSize: 18,
    fontWeight: '400',
    padding:5,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  footer: {
    flex: 1,
  },
  boutonContainer: {
    alignItems: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  textButtonPressed: {
    textAlign: 'center',
    color: "#008486",
    fontWeight: "bold",
    fontSize: 20,
  },
  button: {
    width: 200,
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
  buttonPressed: {
    width: 150,
    height: 45,
    alignItems: 'center',
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
  buttonPressed2: {
    width: '50%',
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    backgroundColor: "fff",
    borderRadius: 13,
    paddingVertical: 10,
    paddingHorizontal: 20, 
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#008486',
  },
  superBoutonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 50,
    
  }
})
