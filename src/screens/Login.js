import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import patternImage from '../../assets/BGFM.png'
import logoImage from '../../assets/Logo.png'
import React, { useState } from 'react'
import { head1, head2, formgroup, label, input, link, link2, errorMsg } from '../common/formcss'
import { button1 } from '../common/button'


const Login = ({navigation}) => {
  const [errmsg, setErrorMsg] = useState(null)


  const [fdata, setFormData] = useState({
    email:'',
    password:''
  })
  const sendToBack = ()=>{
    if(fdata.email == '' ||
    fdata.password == ''){
      setErrorMsg('All Fields Are Required!...')
    }else{
      const userData = {email:fdata.email, password:fdata.email}

      fetch('https://server.powerad.online/api/users/login',{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(fdata)
      }).then(res=>res.json()).then(data=>{
        console.log(data)
        alert('Logged In Successfully!...')
        navigation.navigate('EnglishAds')
      })
    }
  }
  return (
    <View style={styles.containter}>
        <Image style={styles.patternbg} source={patternImage} />
        <View style={styles.container1}>
            <View style={styles.s1}>
            <Image style={styles.logo}  source={logoImage}/>
                <Text style={styles.h1} >Classified Ads</Text>
                <Text style={styles.small1} >We are serving since 2017</Text>
            </View>
            <View style={styles.s2}>
                <Text style={head1}>Login</Text>
                <Text style={head2}>Sign in to continue</Text>
                <View style={formgroup}>
                  {errmsg ? <Text style={errorMsg}>{errmsg}</Text>:null}
                </View>
                <View style={formgroup}>
                    <Text style={label}>Email</Text>
                    <TextInput style={input} placeholder='enter your email'
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, email:text})}/>
                </View>
                <View style={formgroup}>
                    <Text style={label} >Password</Text>
                    <TextInput style={input} placeholder='Enter Your Password'secureTextEntry={true}
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, password:text})}/>
                    </View>
                <View style={styles.fp}>
                    <Text style={link}>Forgot Password?</Text>
                </View>
                <Text style={button1}
                onPress={()=>{sendToBack()}}>LOGIN</Text>
                <Text style={link2}>Don't have account? <Text style={link}
                onPress={()=> navigation.navigate('SignUp')}>Create Account</Text></Text>
            </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  containter:{
    // marginTop:50,
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
  },
  logo:{
    height:'50%',
    resizeMode:'contain'
  }
})