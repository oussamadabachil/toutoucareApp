import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import InvoicesScreen from "./screens/InvoicesScreen";
import MessageScreen from "./screens/MessageScreen";
import BookingScreen from "./screens/BookingScreen";
import UserProfile from "./screens/UserProfile";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
//import { persistStore, persistReducer } from 'redux-persist';
//import { PersistGate } from 'redux-persist/integration/react';
//import { combineReducers } from '@reduxjs/toolkit';
//import AsyncStorage from '@react-native-async-storage/async-storage';

const store = configureStore({
  reducer : {user},
});

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//const reducers = combineReducers({ user });

/*const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});*/

//const persistor = persistStore(store);

//const persistConfig = { key: 'toutoucareApp', storage : AsyncStorage, blacklist: ['UserProfile'] };

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "";

          if (route.name === "Home") {
            iconName = "house";
          } else if (route.name === "Invoices") {
            iconName = "fa-regular fa-folder";
          }
          else if 
            (route.name === "Booking") {
              iconName = "fa-solid fa-calendar-minus";
          }
          else if(route.name === "Messages") {
            iconName = "fa-regular fa-comment-dots";
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ec6e5b",
        tabBarInactiveTintColor: "#335561",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Invoices" component={InvoicesScreen} />
      <Tab.Screen name="Booking" component={BookingScreen} />
      <Tab.Screen name="Messages" component={MessageScreen} />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
