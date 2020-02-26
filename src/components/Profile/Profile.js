import React, { Component } from "react";
import {Alert, Modal, View, Image, Text, Button,TextInput,TouchableOpacity, TouchableHighlight, StyleSheet, ScrollView, FormLabel, FormInput, FormValidationMessage } from "react-native";
import img1 from '../../assets/img1.jpg';
import profile_img from '../../assets/Profile.png';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import ImagePicker from 'react-native-image-picker';


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      pickedImage: null,
      id:this.props.user.user_id,
      firstname:this.props.user.firstname,
      lastname:this.props.user.lastname,
      mobile:JSON.stringify(this.props.user.mobile),
      address:this.props.user.address,
      email:this.props.user.email,
      image:this.props.user.image,
      
      edit:false,
      mobileValid:false,
      firstnameValid:false,
      lastnameValid:false,
      addressValid:false
    }

  this.validate = this.validate.bind(this)
  }

  componentDidMount (){
    this.setState({
      pickedImage:null
    })
  }
  
  // Edit Image 
  pickImageHandler = () => {
   ImagePicker.showImagePicker({title: "Pick an Image"}, res => {
      if (res.didCancel) {
        console.log("User cancelled!");
      } else if (res.error) {
        console.log("Error", res.error);
      } else {
        this.setState({
          pickedImage: res
        });

      }
    });
  }
  
  // Update User
  userUpdate = () => {
    if(this.state.mobileValid === true || this.state.firstnameValid === true || this.state.lastnameValid === true || this.addressValid === true){
      return alert("Please Enter All fields");
    }
    else{
      let u = this.state;
      if(this.state.pickedImage === null){
        console.log("image", u.image)
        this.props.onUserUpdate(u.id,u.firstname,u.lastname,u.mobile,u.address,u.email,u.password, u.image)
      }
      if(this.state.pickedImage){
        this.props.onUserUpdate(u.id,u.firstname,u.lastname,u.mobile,u.address,u.email,u.password, this.state.pickedImage)
      }
      this.setState({
        edit:false,
          pickedImage:null
      })
    }
  }

  validate = (text,type) => {
    var reg_mobile = /^[0-9]{10}$/;
    var reg_text= /^[A-Za-z]{4,15}$/;

    this.setState({
      edit: true
    })
    // Mobile validation
    if(type=='mobile'){
      this.setState({
        mobile: text
      })

      if(reg_mobile.test(text)){
        this.setState({
          mobileValid:false
        })
      }else{
        this.setState({
          mobileValid:true
        })
      }  
    }
    
    // Name validation
    if(type=='firstname'){
      this.setState({
        firstname: text
      })

      if(reg_text.test(text)){
        this.setState({
          firstnameValid:false
        })
      }else{
        this.setState({
          firstnameValid:true
        })
      }  
    }

    // Name validation
    if(type=='lastname'){
      this.setState({
        lastname: text
      })

      if(reg_text.test(text)){
        this.setState({
          lastnameValid:false
        })
      }else{
        this.setState({
          lastnameValid:true
        })
      }  
    }

     // Address validation
    if(type=='address'){
      this.setState({
        address: text
      })

      if(reg_text.test(text)){
        this.setState({
          addressValid:false
        })
      }else{
        this.setState({
          addressValid:true
        })
      }  
    }
  }

  renderImage = () => {
    var imgSource = this.state.pickedImage? {uri: this.state.pickedImage.uri} : {uri: this.props.user.image};
    return (
      <Image
        style={ styles.avatar }
        source={ imgSource }
        style={styles.avatar}
      />
    );
  }
 
 render(){
  return (
      <ScrollView >
        <View style={styles.header}>
          <Text style={styles.userName}>{this.state.firstname} {this.state.lastname}</Text>
        </View>

        <TouchableOpacity
            onPress={ () => this.pickImageHandler() }
            style={{position:'absolute',alignSelf:'center'}} 
          >
          {this.renderImage()}
        </TouchableOpacity>
        

        <View style={styles.body}>
          <View style={styles.userRow}>
            <TextInput value={this.state.firstname} onChangeText={(text) => this.validate(text, "firstname")}/>
             {this.state.firstnameValid? <Text style={styles.error}>Enter valid firstname</Text> :null}
          </View>

          <View style={styles.userRow}>
            <TextInput value={this.state.lastname} onChangeText={(text) => this.validate(text, "lastname")}/>
              {this.state.lastnameValid? <Text style={styles.error}>Enter valid lastname</Text> :null}
          </View>

          <View style={styles.userRow}>
            <TextInput value={this.state.mobile} maxLength={10} onChangeText={(text) => this.validate(text, "mobile")}/>
              {this.state.mobileValid? <Text style={styles.error}>Enter valid Mobile</Text> :null}
          </View>

          <View style={styles.userRow}>
            <TextInput value={this.state.address} onChangeText={(text) => this.validate(text, "address")}/>
              {this.state.addressValid? <Text style={styles.error}>Enter valid address</Text> :null}
          </View>

          <View style={styles.userRow}>
            <TextInput value={this.state.email}/>
          </View>

          {
            (this.state.edit || this.state.pickedImage)?
            <View style={styles.buttons}>
              <Button onPress={ () => this.userUpdate()} title="Update Profile"/>
            </View> :null
          }
         

          <View style={styles.buttons}>
            <Button title="Home" style={styles.button} onPress={this.props.Home} color="blue"/>

          </View>

        </View>
      </ScrollView>
    
  );
  }
};

const styles = StyleSheet.create({
  header:{
   backgroundColor:'#368778',
   height:150
  },
  userName:{
    color:'white',
    fontSize:25,
    textAlign:'center',
    marginTop:25
  },
  
   avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    marginBottom:10,
    alignSelf:'center',
    marginTop:80,
   
  },
  body:{
   marginTop:50,
  },
  userRow:{
    paddingLeft:20,
    borderBottomColor: '#dedcd7',
    borderBottomWidth: 1
  },
   inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  button: {
    width:40,
    marginLeft:20
  },
  buttons:{
  	marginTop:20,
  	flexDirection:'row',
  	justifyContent:'space-around'
  },
  userImage:{
    height:100,
    width:100
  },
  error:{
    color:'red',
    fontSize:10
  }
});



export default Profile;
