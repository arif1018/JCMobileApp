import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import WelcomeScreen from './src/screens/Welcome'
import Login from './src/screens/Login'
import SignUp from './src/screens/SignUp'



export default function App() {
  return (
    <View style={styles.container}>
      {/* <WelcomeScreen/> */}
      {/* <Login/> */}
      <SignUp />
    </View>
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
