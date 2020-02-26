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
        <View style={{backgroundColor:'#368778',padding:20, flexDirection:'row', justifyContent:'space-around'}}>
          <Text style={{color:'#fff',fontSize:25}}>Home</Text>
                      <Button title="Logout" style={styles.button} onPress={ () => this.props.onUserLogout()} color="green"/>

        </View>
         
        <View style={styles.buttons}>
        <Text>Welcome to App</Text>
          <Button title="Go To Profile" style={styles.button} onPress={this.props.Profile}/>

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
