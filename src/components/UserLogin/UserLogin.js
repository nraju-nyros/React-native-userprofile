import React, { Component } from "react";
import {StyleSheet,Text,View,TextInput,Button,TouchableHighlight,Image,Alert,ScrollView} from 'react-native';
import img1 from '../../assets/img1.jpg';
import { Form, TextValidator } from 'react-native-validator-form';



export default class userLogin extends Component {
  constructor(props){
    super(props);
     this.state = {
        email   : '',
        password: '',
        err_email:'',
        err_pwd:'',
        emailValid:false,
        pwdValid:false
      }
  }

  placeSubmitHandler = () => {
    if (this.state.email.trim() === ""){
      this.setState({
        emailValid:true,
        err_email:'Please Enter Email'
      });
    } 
    if(this.state.password.trim()===""){
      this.setState({
        pwdValid:true,
        err_pwd:'Please Enter Password'
      })
      return;
    }
   
    if(this.state.emailValid===false && this.state.pwdValid===false){
      this.props.onUserSignIn(this.state.email, this.state.password)
    }
  };


  validate = (text,type) => {
    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const reg = /^[0-9]{10}$/;
    const char= /^[A-Za-z]{4}$/;
    const pwd = /^.{6,}$/
    
    // Login err response clear
    this.props.err_clear();

    // Email Onchange validation
    if(type=='email'){
      this.setState({
        email: text
      })
      if(validEmailRegex.test(text)){
        this.setState({
          emailValid:false
        })
      }else{
        this.setState({
          emailValid:true,
          err_email:'Please Enter valid Email'
        })
      }  
    }
    
    // Password Onchange validation
    if(type=='password'){
      this.setState({
        password: text
      })

      if(pwd.test(text)){
        this.setState({
          pwdValid:false
        })
      }else{
        this.setState({
          pwdValid:true,
          err_pwd:'Please Enter min 6 characters'
        })
      }  
    } 
  }
 
  render(){
    return (
        <ScrollView >
          <View style={styles.container}>
            <View style={styles.login_header}><Text style={styles.login}>Welcome</Text>

            </View>
            <View style={{height:20}}>
              <Text style={styles.error}>{this.props.error}</Text>
            </View>
            <View style={styles.inputContainer}>
              <Image style={styles.inputIcon} source={{uri: 'https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png'}}/>
              <TextInput style={styles.inputs}
                placeholder="Email"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'email')}/>
            </View>

            <View style={{height:20, marginRight:130}}>
                {this.state.emailValid? <Text style={styles.error}>{this.state.err_email}</Text> :null}
            </View>
          
            <View style={styles.inputContainer}>
                        <Image style={styles.inputIcon} source={{uri: 'https://cdn3.iconfinder.com/data/icons/general-icons-set-1/100/21_lock-512.png'}}/>

              <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'password')}/>
            </View>

            <View style={{height:20, marginRight:110}}>
               {this.state.pwdValid? <Text style={styles.error}>{this.state.err_pwd}</Text> :null}
            </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.placeSubmitHandler}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableHighlight>

          
            <TouchableHighlight style={styles.buttonContainer} onPress={this.props.OpenSignUp}>
              <Text>Create an account ?</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>  
    );
  }
};



const styles = StyleSheet.create({
  container: {
    paddingTop:100,
    alignItems: 'center',
    backgroundColor: '#f7f5f5',
    height:"100%",
    paddingBottom:190
  },
  logoIcon:{
    width:250,
    height:20,
    marginLeft:15,
    justifyContent: 'center'
  },
  login:{
    fontSize:30,
    marginBottom:20
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
      borderRadius:30,
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
    width:20,
    height:20,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
      borderRadius:30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5,
    width:250,
   
  },
  loginButton: {
    backgroundColor: "#00b5ec",
    marginTop:5
  },
  loginText: {
    color: 'white',
  },
  error:{
    color:'red',
    marginBottom:5,
    fontSize:11
  },
  error_msg:{
    color:'red',
    marginBottom:5,
    fontSize:11
  }
});




