import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import patternImage from '../../assets/BGFM.png'
import React from 'react'
import { head1, head2, formgroup, label, input, link, link2 } from '../common/formcss'
import { button1 } from '../common/button'

const Login = () => {
  return (
    <View style={styles.containter}>
        <Image style={styles.patternbg} source={patternImage} />
        <View style={styles.container1}>
            <View style={styles.s1}>
                <Text style={styles.h1} >Silver Rags Private Limited</Text>
                <Text style={styles.small1} >We are serving since 2017</Text>
            </View>
            <View style={styles.s2}>
                <Text style={head1}>Login</Text>
                <Text style={head2}>Sign in to continue</Text>
                <View style={formgroup}>
                    <Text style={label}>Email</Text>
                    <TextInput style={input} placeholder='enter your email'/>
                </View>
                <View style={formgroup}>
                    <Text style={label}>Password</Text>
                    <TextInput style={input} placeholder='Enter Your Password'/>
                </View>
                <View style={styles.fp}>
                    <Text style={link}>Forgot Password?</Text>
                </View>
                <Text style={button1}>LOGIN</Text>
                <Text style={link2}>Don't have account? <Text style={link}>Create Account</Text></Text>
            </View>
        </View>
    </View>
  )
}

export default Login

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
  container1:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    height:'100%'
  },
  s1:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    height:'40%',
  },
  h1:{
    color:'#fff',
    fontSize:28,

  },
  small1:{
    color:'#fff',
    fontSize:15,
  },
  s2:{
    display:'flex',
    backgroundColor:'#fff',
    width:'100%',
    height:'60%',
    borderRadius:20,
    padding:20
  },
  fp:{
    display:'flex',
    alignItems:'flex-end',
    marginHorizontal:10,
    marginVertical:5,
  }
})