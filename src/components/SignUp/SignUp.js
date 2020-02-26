import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,ScrollView
} from 'react-native';
import img1 from '../../assets/img1.jpg';



class signUp extends Component {
 constructor(props){
  super(props);

  this.state={
  	firstname:'',
  	lastname:'',
    mobile:'',
    address:'',
  	email:'',
  	password:'',

    fnameValid:false,
    lnameValid:false,
    mobileValid:false,
    addressValid:false,
    emailValid:false,
    pwdValid:false,

    err_fname:'',
    err_lname:'',
    err_mobile:'',
    err_address:'',
    err_email:'',
    err_pwd:'',
  }
 }


  placeSubmitHandler = () => {
    if (this.state.firstname.trim() === ""){
      this.setState({
        fnameValid:true,
        err_fname:'Please Enter firstname'
      });
     
    }

    if(this.state.lastname.trim()===""){
      this.setState({
        lnameValid:true,
        err_lname:'Please Enter lastname'
      })
     
    }
    if (this.state.mobile.trim() === ""){
      this.setState({
        mobileValid:true,
        err_mobile:'Please Enter Mobile'
      });
      
    } 
    if(this.state.address.trim()===""){
      this.setState({
        addressValid:true,
        err_address:'Please Enter Address'
      })
      
    }

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
      this.props.onUserSignup(this.state.firstname, this.state.lastname,this.state.mobile,this.state.address, this.state.email, this.state.password)
     // this.props.Home();
    }

  };

  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed "+viewId);
  }

    validate = (text,type) => {
    var reg = /^[0-9]{10}$/;
    var char= /^[A-Za-z]+$/;
    var pwd = /^.{6,}$/
    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 

     // firstname validation
    if(type=='firstname'){
      this.setState({
        firstname: text
      })

      if(char.test(text)){
        this.setState({
          fnameValid:false
        })
      }else{
        this.setState({
          fnameValid:true,
          err_fname:'Please Enter valid Name'
        })
      }  
    }
     // Email validation
    if(type=='lastname'){
      this.setState({
        lastname: text
      })

      if(char.test(text)){
        this.setState({
          lnameValid:false
        })
      }else{
        this.setState({
          lnameValid:true,
          err_lname:'Please Enter valid Name'
        })
      }  
    }
     // Email validation
    if(type=='mobile'){
      this.setState({
        mobile: text
      })

      if(reg.test(text)){
        this.setState({
          mobileValid:false
        })
      }else{
        this.setState({
          mobileValid:true,
          err_mobile:'Please Enter valid Mobile'
        })
      }  
    }
     // Email validation
    if(type=='address'){
      this.setState({
        address: text
      })

      if(char.test(text)){
        this.setState({
          addressValid:false
        })
      }else{
        this.setState({
          addressValid:true,
          err_address:'Please Enter valid address'
        })
      }  
    }
    // Email validation
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
    
    // Password validation
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
        <ScrollView>
        <View style={styles.container}>
          <View style={styles.signup_header}>
            <Text style={styles.signup}>SignUp</Text>
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="First name"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'firstname')}/>
          </View>
          <View style={{height:23, marginRight:110, marginBottom:4}}>
              {this.state.fnameValid? <Text style={styles.error}>{this.state.err_fname}</Text> :null}
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/user-icon.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="Last name"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'lastname')}/>
          </View>
           <View style={{height:20, marginRight:110, marginBottom:4}}>
              {this.state.lnameValid? <Text style={styles.error}>{this.state.err_lname}</Text> :null}
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://image.flaticon.com/icons/png/512/65/65680.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="Mobile"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text,'mobile')}/>
          </View>
           <View style={{height:20, marginRight:110, marginBottom:4}}>
              {this.state.mobileValid? <Text style={styles.error}>{this.state.err_mobile}</Text> :null}
          </View>

           <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://pngimage.net/wp-content/uploads/2018/05/address-icon-png-transparent-2.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="address"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text,'address')}/>
          </View>
           <View style={{height:20, marginRight:110, marginBottom:4}}>
              {this.state.addressValid? <Text style={styles.error}>{this.state.err_address}</Text> :null}
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/mail-512.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text, 'email')}/>
          </View>
           <View style={{height:20, marginRight:110, marginBottom:4}}>
              {this.state.emailValid? <Text style={styles.error}>{this.state.err_email}</Text> :null}
          </View>
      
          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://cdn3.iconfinder.com/data/icons/general-icons-set-1/100/21_lock-512.png'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(text) => this.validate(text,'password')}/>
          </View>
           <View style={{height:20, marginRight:110, marginBottom:4}}>
              {this.state.pwdValid? <Text style={styles.error}>{this.state.err_pwd}</Text> :null}
          </View>

          <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]} onPress={this.placeSubmitHandler}>
            <Text style={styles.signupText}>SignUp</Text>
          </TouchableHighlight>

        
          <TouchableHighlight style={styles.buttonContainer} onPress={this.props.OpenLogIn}>
              <Text>Already have an account ?</Text>
          </TouchableHighlight>
        </View>
        </ScrollView>
    
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
 
  signup:{
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
      marginBottom:3,
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
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  signupButton: {
    backgroundColor: "#00b5ec",
  },
  signupText: {
    color: 'white',
  },
    error:{
    color:'red',
    fontSize:11
  }
});



export default signUp;
