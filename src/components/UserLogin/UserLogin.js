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
import { Form, TextValidator } from 'react-native-validator-form';

const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export default class userLogin extends Component {
  constructor(props){
    super(props);
     this.state = {
        email   : '',
        password: '',
        err_email:'',
        err_pwd:''
      }
  }
  componentDidMount(){
      // this.props.setErrorMsg()
  }
   placeSubmitHandler = () => {
    if (this.state.email.trim() === ""){
      this.setState({
        err_email:'Please Enter Email'
      });
    } 
    if(this.state.password.trim()===""){
      this.setState({
        err_pwd:'Please Enter Password'
      })
       return;
    }
    
    this.props.onUserSignIn(this.state.email, this.state.password)
  };
 
 render(){
  return (
        <View style={styles.container}>
          <View style={styles.login_header}><Text style={styles.login}>Login</Text></View>
          <View>
            <Text style={styles.error}>{this.props.error}</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email, err_email:''})}/>
          </View>

          <View>
            <Text style={styles.error_msg}>{this.state.err_email}</Text>
          </View>
        
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                maxLength={6}
                onChangeText={(password) => this.setState({password, err_pwd:''})}/>
          </View>
          <View>
            <Text style={styles.error_msg}>{this.state.err_pwd}</Text>
          </View>

          <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.placeSubmitHandler}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableHighlight>

        
          <TouchableHighlight style={styles.buttonContainer} onPress={this.props.Home}>
              <Text>Create an account ?</Text>
          </TouchableHighlight>
        </View>
 
    
  );
  }
};



const styles = StyleSheet.create({
  container: {
    paddingTop:100,
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
   
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:5,
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
   
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  },
  error:{
    color:'red',
    marginBottom:10,
    fontSize:15
  },
  error_msg:{
    color:'red',
    marginBottom:5,
    fontSize:11
  }
});




