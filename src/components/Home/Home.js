import React, { Component } from "react";
import {Alert, Modal, View, Image, Text, Button,TextInput, StyleSheet,FormLabel, FormInput, FormValidationMessage } from "react-native";
import img1 from '../../assets/img1.jpg';



class Home extends Component {
 constructor(props){
  super(props)
 }
 
 render(){
  return (
      <View >
        
         <View style={{backgroundColor:'#368778',padding:20}}>
          <Text style={{color:'#fff',fontSize:25}}>Home</Text>
        </View>
         
        <View style={styles.buttons}>
          <Button title="Login" style={styles.button} onPress={this.props.OpenLogIn}   Back={() => props.Home}/>
          <Button title="SignUp" style={styles.button} onPress={this.props.OpenSignUp} color="green" Back={() => props.Home}/>
         
    
        </View>
      </View>
    
  );
  }
};

const styles = StyleSheet.create({
  button: {
    width:40,
    marginLeft:20
  },
  buttons:{
  	marginTop:20,
  	flexDirection:'row',
  	justifyContent:'space-around'
  }
});



export default Home;
