import { StyleSheet, Text, View, Image, TextInput, Button, ScrollView } from 'react-native'
import patternImage from '../../assets/BGFM.png'
import React, { useState } from 'react'
import { head1, formgroup, input, link, link2, errorMsg } from '../common/formcss'
import { button1 } from '../common/button'

const SignUp = ({navigation}) => {
  const [fdata, setFormData] = useState({
    first_name:'',
    last_name:'',
    cnic:'',
    mobile_no:'',
    role:'user',
    email:'',
    password:''
  })
  const [errmsg, setErrorMsg] = useState(null)
  const sendToBack = ()=>{
    if(fdata.first_name == '' ||
    fdata.last_name == '' ||
    fdata.cnic == '' ||
    fdata.mobile_no == '' ||
    fdata.email == '' ||
    fdata.password == ''){
      setErrorMsg('All Fields Are Required!...')
    }else{
      fetch('https://server.powerad.online/api/users',{
        method:'post',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(fdata)
      }).then(res=>res.json()).then(data=>{
        alert('User Added Successfully!...')
        navigation.navigate('EnglishAds')
      })
    }
  }
  return (
    <View style={styles.containter}>
        <Image style={styles.patternbg} source={patternImage} />
        <View style={styles.container1}>
            <View style={styles.s1}>
            </View>
            <ScrollView style={styles.s2}>
                <Text style={head1}>Classified Ads</Text>
                <View>
                <View style={formgroup}>
                  {errmsg ? <Text style={errorMsg}>{errmsg}</Text>:null}
                </View>
                <View style={styles.formgroupname}>
                    <TextInput style={styles.input} placeholder='First Name'
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, first_name:text})}/>
                    <TextInput style={styles.input} placeholder='Laste Name'
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, last_name:text})}/>
                </View>
                </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='CNIC'
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, cnic:text})}/>     
                </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='Mobile No'
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, mobile_no:text})}/>
                  </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='Email'
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, email:text})}/>
                </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='Password'
                    onPressIn={()=> setErrorMsg(null)}
                    onChangeText={(text)=> setFormData({...fdata, password:text})}/>
                </View>
                {/* <View style={styles.fp}>
                    <Text style={link}>Forgot Password?</Text>
                </View> */}
                <Text style={button1} onPress={()=>{sendToBack()}}>SIGN UP</Text>
                <Text style={link2}>Already have account? <Text style={link}
                onPress={()=> navigation.navigate('Login')}>Go to Login</Text></Text>
            </ScrollView>
        </View>
    </View>
  )
}

export default SignUp

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
        height:'20%',
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
        height:'90%',
        borderRadius:20,
        padding:20
      },
      fp:{
        display:'flex',
        alignItems:'flex-end',
        marginHorizontal:10,
        marginVertical:5,
      },
      formgroupname:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
      },
      input:{
        backgroundColor:'#939292',
        padding:10,
        borderRadius:20,
        width:'49%',
    },
})