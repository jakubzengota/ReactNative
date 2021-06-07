import React, { Component } from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
    },
    
    outcomeText:{
      fontSize:25,
      color:'black'
    },
    
    calculation: {
      flex: 1,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems:'flex-end'
    },
    //wynik dzialania/
    calculationText:{
      fontSize: 45,
      color: 'black',
      
    },

    outcome:{
      flex: 2,
      backgroundColor: 'gray',
      justifyContent: 'center',
      alignItems:'flex-end',
    },

    actions:{
      flex: 1,
      backgroundColor: 'gray',
      alignItems:'center',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
    
    fbutton:{
      backgroundColor:'blue',
      width: 120,
      height:120,
      alignItems:'center',
      justifyContent:'center',
    },
    
      
    buttons: {
      flexGrow: 7,
      flexDirection: 'row'
      
    },
  
    numbers: {
      flex: 3,
      backgroundColor: 'gray',
      borderStyle:'solid',
      borderColor:'gray',
      borderTopWidth: 2
    },
    
    numBtn:{
      backgroundColor: 'red',
      width: 120,
      height:120,
      alignItems:'center',
      justifyContent:'center',
    },
  
    row:{
      flex: 1,
      flexDirection: 'row',
      justifyContent:'space-around',
      alignItems:'center',

    },
      
    btn:{
      flex: 1,
      alignItems:'center',
      justifyContent:'center',
    },

    iconStyle: {
      fontSize: 40,
    },
    
    btnText:{
      fontSize: 45,
    },
  
    whiteText:{
      color:'black',
      fontSize: 35,
    },
  })

export default styles