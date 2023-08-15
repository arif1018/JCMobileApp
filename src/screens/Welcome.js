import { StyleSheet, Text, View, Image } from 'react-native'
import patternImage from '../../assets/BGFM.png'
import React from 'react'
import { button1 } from '../common/button'

const Welcome = () => {
  return (
    <View style={styles.containter}>
      <Image style={styles.patternbg} source={patternImage} />
      <View style={styles.container1}>
      <Text style={button1} >Login</Text>
      <Text style={button1} >Sign</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  containter:{
    marginTop:100,
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
  }
})