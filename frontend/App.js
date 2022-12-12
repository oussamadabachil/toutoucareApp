import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DogProfile from './screens/DogProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true}}>
          <Stack.Screen name="profil" component={DogProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );z
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
