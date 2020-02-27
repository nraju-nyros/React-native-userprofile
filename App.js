import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import img1 from './src/assets/img1.jpg';

import {signupUser,loginUser, logoutUser, updateUser, setErrMsg} from "./src/store/actions/index";

// Users
import UserLogin from "./src/components/UserLogin/UserLogin";
import SignUp from "./src/components/SignUp/SignUp";
import Home from "./src/components/Home/Home";
import Profile from "./src/components/Profile/Profile";

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        home:false,
        login:true,
        signUp:false,
        profile:false,
        logged_In:this.props.loggedIn
      }
  }


  componentDidMount(){
    this.setState({
      errorMessage:''
    })  
  }

  componentWillReceiveProps(nextProps){
    console.log("nextProps", nextProps)
    if(nextProps.loggedIn != this.state.logged_In){
      this.setState({
        logged_In:nextProps.loggedIn
      })
    }
  }

  // Users
  Login = () => {
    this.setState({
      home:false,
      login:true,
      signUp:false,
      profile:false,
      logged_In:this.props.loggedIn
    })
  }

  SignUp = () => {
    this.setState({
      home:false,
      login:false,
      signUp:true,
      profile:false
    })
  }

  Home = () => {
    this.setState({
     logged_In:true,
      
      profile:false
    })
  }

  Profile = () => {
    this.setState({
      profile:true,
      logged_In:false
    })
  }

  userSignUp = (f,l,m,a,e,p) => {
    this.props.onSignUp(f,l,m,a,e,p);
  };

  userSignIn = (e,p) => {
    this.props.onSignIn(e,p);
  };

  modalClosedHandler = () => {
    this.props.logOut();
  };

  updateHandler = (id,f,l,m,a,e,p,i) => {
    this.props.onUpdate(id,f,l,m,a,e,p,i)
  }

  errorHandler = () => {
    this.props.setError();
  }

  render() {
    return (
      <View >
        { this.props.loggedIn === null ? 
          <View>
            { this.state.login? 
              <View>
                <UserLogin Home={this.Home}  OpenSignUp={this.SignUp} err_clear={this.errorHandler} error={this.props.errorMessage} Profile={this.Profile} onUserSignIn={this.userSignIn}/> 
              </View> :null
            }

            { this.state.signUp? 
              <View>
                <SignUp Home={this.Home} OpenLogIn={this.Login} onUserSignup={this.userSignUp}/> 
              </View> :null
            }
          </View> :null 
        }

        { this.props.loggedIn? 
          <View>
            { this.state.logged_In?
              <View>
                <Home OpenLogIn={this.Login} onUserLogout={this.modalClosedHandler} OpenSignUp={this.SignUp} Profile={this.Profile}/> 
              </View> :null
            }
        
            { this.state.profile?
              <View>
                <Profile Home={this.Home}  user={this.props.user} onUserUpdate={this.updateHandler}/> 
              </View> :null
            }
          </View> :null
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 26
  }
});

const mapStateToProps = state => {
  return {
    loggedIn: state.users.loggedIn,
    user:state.users.user,
    error: state.users.error,
    errorMessage: state.users.errorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSignUp: (f,l,m,a,e,p) => dispatch(signupUser(f,l,m,a,e,p)),
    onSignIn: (e,p) => dispatch(loginUser(e,p)),
    logOut: () => dispatch(logoutUser()),
    onUpdate: (id,f,l,m,a,e,p,i) => dispatch(updateUser(id,f,l,m,a,e,p,i)),
    setError: () => dispatch(setErrMsg())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
