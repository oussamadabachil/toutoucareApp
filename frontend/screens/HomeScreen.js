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
  Modal,
  ScrollView,
  Image,
} from "react-native";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../reducers/user";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPenToSquare, faPowerOff } from '@fortawesome/free-solid-svg-icons/';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export default function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [bookedDates, setBookedDates] = useState("aucune réservation");
  const user = useSelector((state) => state.user.value);
  const dog = useSelector((state) => state.dog.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigation.navigate("Login");
  };

  // useEffect(() => {
  //   if (!user.data.email) {
  //     return;
  //   }
  //   fetch(`${BACKEND_ADDRESS}:3000/bookings`)
  //     .then(response => response.json())
  //     .then(data => {
  //         if (data.result) {setBookedDates(data};
  //     });
  // }, []);

  return (
    <SafeAreaView style= {styles.container}>
      <ScrollView>
      <View style={styles.photoNameContainer}>
        <View>
        <TouchableOpacity onPress={() => setModalVisible(true)} style={{width:'80%'}} activeOpacity={0.8}>
          <Image style={styles.imageContainer} source={require('../assets/oussama1.jpg')}/>
        </TouchableOpacity>

        </View>
          <View style={styles.welcome}>
            <Text style={styles.profilNameText}>Bienvenue </Text>
            <Text style={styles.profilNameText}>{user.data.chien} et {user.data.prenom} !</Text>
          </View>
        <View style={styles.modalPosition}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
          <View style={styles.modalPosition}>
            <View style={styles.modalView}>
              <View style={styles.closeModal}>
                <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeModal} activeOpacity={0.8}>
                  <FontAwesomeIcon icon={faCircleXmark} size={25}  color="#365B58"/>
                </TouchableOpacity>
              </View>
              <View style={styles.menuModal}>
                <FontAwesomeIcon icon={faPenToSquare} size={20} color="#008486" onPress={() => navigation.navigate("Profils")}/>
                <Text style={styles.modalText} onPress={() => navigation.navigate("Profils")}>Notre Profil</Text>
              </View>
              <View style={styles.menuModal}>
                <FontAwesomeIcon icon={faPowerOff} size={20} color="#FF5A5F" onPress={() => handleLogout()}/>
                <Text style={styles.modalText} onPress={() => handleLogout()}>Se déconnecter</Text>
              </View>
            </View>
          </View>
          </Modal>
      </View>
      </View>
      <View style={styles.insideContainer}>
            <Text style={styles.titleStyle}>BOOKINGS</Text>
            <Text> {bookedDates}</Text> 
            <TouchableOpacity onPress={() => navigation.navigate("Calendrier")} style={styles.button} activeOpacity={0.8}>
              <Text style={styles.textButton}>Réserver</Text>
            </TouchableOpacity>
      </View>
      <View style={styles.insideContainer}>
      <View style={styles.TitleContent}>
      <Text style={styles.titleStyle}>ANEC'DOG de la semaine </Text>
      <Image style ={styles.imgAnec} source={require('../assets/bulle-wouaf2.png')}/>
      </View>
           <Text style={styles.contentText}>"La truffe du chien est unique, chacune est différente d'un chien à un autre, c’est un peu comme l’empreinte digitale chez les humains"</Text>
      </View>
      <View style={styles.insideContainer}>
            <Text style={styles.titleStyle}>Votre crèche</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Image style={styles.imgRS} source={require('../assets/fb_preview.jpg')}/>
              <Image style={styles.imgRS} source={require('../assets/insta_preview.jpg')}/>
          </ScrollView>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,

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
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    height:100,
    width:100
  },
  welcome:{
    alignSelf: "center",
    justifyContent: "center",
    maxWidth: 200,
    marginRight:30,
  },
  modalPosition: {
    flex: 1,
    position : "absolute",
    left: 50,
    top: 100,
  },
  titleStyle: {
    fontSize: 20,
    margin: 10,
  },

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
    fontWeight: "bold",
    fontSize: 18,
  },
  TitleContent : {
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    justifyContent:"space-between"
  },
  imgAnec: {
    padding:20,
    width:60,
    height:40,
    alignSelf: "center",
    },
  imgRS:{
    borderWidth:0.5,
    borderColor: "grey",
    width:300,
    height:300,
    alignSelf: "center",
    marginHorizontal:30,
    marginVertical:10,
    },
});
