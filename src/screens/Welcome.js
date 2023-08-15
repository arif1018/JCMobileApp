import { StyleSheet, Text, View, Image } from 'react-native'
import patternImage from '../../assets/BGFM.png'
import logoImage from '../../assets/Logo.png'
import React from 'react'
import { button1 } from '../common/button'

const Welcome = ({navigation}) => {
  return (
    <View style={styles.containter}>
      <Image style={styles.patternbg} source={patternImage} />
      <View style={styles.container1}>
        <Image style={styles.logo}  source={logoImage}/>
      <Text style={button1} 
      onPress={() => navigation.navigate('Login')}>Login</Text>
      <Text style={button1} 
      onPress={() => navigation.navigate('SignUp')}>Sign</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  containter:{
    // marginTop:100,
    width:'100%',
    height:'100%'
  },
  patternbg:{
    position:'absolute',
    top:0,
    width:'100%',
    height:'100%',
    zIndex:-1
  },
  head:{
    marginTop:20,
    fontFamily:'Times New Roman',
    marginLeft:20,
    fontSize:30,
    color:'#fff'
  },
  container1:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
  },
  logo:{
    height:'20%',
    resizeMode:'contain'
  }
})