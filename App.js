import * as React from 'react'
import { StyleSheet } from 'react-native';
import WelcomeScreen from './src/screens/Welcome'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import EngLishAds from './src/screens/EnglishAds'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={WelcomeScreen}  />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="EnglishAds" component={EngLishAds} />
      </Stack.Navigator>
    </NavigationContainer>
        );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
  },
});
