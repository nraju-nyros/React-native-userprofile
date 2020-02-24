import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from 'react-native';
import img1 from '../../assets/img1.jpg';



export default class userLogin extends Component {
 constructor(props){
  super(props);
   this.state = {
      email   : '',
      password: '',
    }
 }
   placeSubmitHandler = () => {
    if (this.state.email.trim() === ""){
      return alert("Please Enter Email");
    }
    this.props.onUserSignIn(this.state.email, this.state.password)
  };
 
 render(){
  return (
        <View style={styles.container}>
          <View style={styles.login_header}><Text style={styles.login}>Login</Text></View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>
        
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
          </View>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.placeSubmitHandler}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

        
          <TouchableHighlight style={styles.buttonContainer} onPress={this.props.Home}>
              <Text>Home</Text>
          </TouchableHighlight>
        </View>
 
    
  );
  }
};



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    height:"100%"
  },
 
  login:{
    fontSize:30,
    marginBottom:20
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});




