import React, { Component } from "react";
import {Alert, Modal, View, Image, Text, Button,TextInput, StyleSheet,FormLabel, FormInput, FormValidationMessage } from "react-native";
import img1 from '../../assets/img1.jpg';
import profile_img from '../../assets/Profile.png';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';



class Profile extends Component {
  constructor(props){
    super(props)
  }
 
 render(){
  return (
      <View >
        <View style={styles.header}>
          <Text style={styles.userName}>{this.props.user.firstname} {this.props.user.lastname}</Text>
        </View>

        <Image resizeMode="contain" source={profile_img} style={styles.avatar}/>

        <View style={styles.body}>
          <View style={styles.userRow}>
            <Text>{this.props.user.firstname}</Text>
          </View>

          <View style={styles.userRow}>
            <Text>{this.props.user.lastname}</Text>
          </View>

          <View style={styles.userRow}>
            <Text>{this.props.user.mobile}</Text>
          </View>

          <View style={styles.userRow}>
            <Text>{this.props.user.address}</Text>
          </View>

          <View style={styles.userRow}>
            <Text>{this.props.user.email}</Text>
          </View>

          <View style={styles.buttons}>
            <Button title="Logout" style={styles.button} onPress={this.props.onUserLogout} color="green" Back={() => props.Profile}/>
          </View>
        </View>
      </View>
    
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
    position: 'absolute',
    marginTop:80
  },
  body:{
   marginTop:50,
  },
  userRow:{
    padding:20,
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
  }
});



export default Profile;
