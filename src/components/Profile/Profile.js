import React, { Component } from "react";
import {Alert, Modal, View, Image, Text, Button,TextInput, StyleSheet,FormLabel, FormInput, FormValidationMessage } from "react-native";
import img1 from '../../assets/img1.jpg';



class Profile extends Component {
 constructor(props){
  super(props)
 }
 
 render(){
  return (
      <View >
        <View style={{backgroundColor:'#368778',padding:20}}>
          <Text style={{color:'#fff',fontSize:25}}>Profile</Text>
        </View>

        <View>
          <Text>{this.props.user.firstname}</Text>
          <Text>{this.props.user.lastname}</Text>
          <Text>{this.props.user.email}</Text>
        </View>
         
        <View style={styles.buttons}>
          <Button title="Logout" style={styles.button} onPress={this.props.onUserLogout} color="green" Back={() => props.Profile}/>
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



export default Profile;
