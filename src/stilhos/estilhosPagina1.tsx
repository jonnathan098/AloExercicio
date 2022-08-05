import React, { useState } from "react" 
import { StyleSheet, } from "react-native"

const styles = StyleSheet.create({
    container:{
        flexGrow:1,
        justifyContent: 'center',
        padding: 32,
        backgroundColor: '#B0E0E6',
        
    },
    Input:{
        fontSize : 24,
        borderWidth:1,
        backgroundColor: '#F5FFFA',
        
    },
    linkNovoUsuario:{
        padding:5,
        alignItems:'center',
    },
    buttonTextLinkeNovoUsuario:{
        color:'#0000FF',
    },
    Button:{
        backgroundColor: '#C0C0C0',
        alignItems:'center',
        borderWidth:1,
        padding:10,
        borderRadius:8
    },
    buttonText:{
        color:'#fff',
        fontSize : 24,
    },
    MansagemDeerror:{
        textTransform:'uppercase',
        alignItems:'center',
       
    },
    MansagemDesucesso:{
        textTransform:'uppercase',
    },
    Image:{
     width:200,
      height:200,
      marginTop:20,
      alignItems:'center',
     },
     container01:{
        fontSize: 24,
        borderWidth:1,
        width:'100%',
        height:'100%',
        backgroundColor:'#3CB371',
        alignItems:'center',
    },
    container00: {
        flex: 1,
        backgroundColor: '#E0FFFF',
        alignItems: 'center',
        justifyContent: 'center',
      },
}) 

export default styles