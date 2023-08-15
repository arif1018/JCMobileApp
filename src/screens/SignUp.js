import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native'
import patternImage from '../../assets/BGFM.png'
import React from 'react'
import { head1, head2, formgroup, label, input, link, link2 } from '../common/formcss'
import { button1 } from '../common/button'

const SignUp = () => {
  return (
    <View style={styles.containter}>
        <Image style={styles.patternbg} source={patternImage} />
        <View style={styles.container1}>
            <View style={styles.s1}>
            </View>
            <View style={styles.s2}>
                <Text style={head1}>Creaet a New Account</Text>
                {/* <Text style={head2}>Sign in to continue</Text> */}
                <View>

                <View style={styles.formgroupname}>
                    <TextInput style={styles.input} placeholder='First Name'/>
                    <TextInput style={styles.input} placeholder='Laste Name'/>
                </View>
                </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='CNIC'/>
                </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='Mobile No'/>
                </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='Email'/>
                </View>
                <View style={formgroup}>
                    <TextInput style={input} placeholder='Password'/>
                </View>
                {/* <View style={styles.fp}>
                    <Text style={link}>Forgot Password?</Text>
                </View> */}
                <Text style={button1}>SIGN UP</Text>
                <Text style={link2}>Already have account? <Text style={link}>Go to Login</Text></Text>
            </View>
        </View>
    </View>
  )
}

export default SignUp

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