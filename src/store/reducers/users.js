import {SIGNUP_USER,LOGIN_USER, LOGIN_SUCCESS,LOGIN_FAILED, LOGOUT_USER, UPDATE_USER, SET_ERR_MSG} from "../actions/actionTypes";
import axios from 'axios';

const initialState = {
  user: {},
  loggedIn: null,
  error:false,
  errorMessage:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_USER:
      return {
        ...state,
        user: action.user  
    };

    case LOGIN_USER:
    console.log("Login_image", action.user.image)
      return {
        ...state,
        user: action.user,
        loggedIn:true,
        errorMessage:''
    };

    // case LOGIN_SUCCESS:
    // console.log("Login_image", this.initialState.loggedIn)
    //   return {
    //     ...state
    // };

    case LOGIN_FAILED:
        console.log("Login Failed", "ddddddddddddddddd")
      return {
        ...state,
        error: true,
        errorMessage:'Incorrect Email or password!',
        user:{},
        loggedIn:null
    };

    case LOGOUT_USER:
        // console.log("Local_response_image", this.initialState.user.image)
        
      return {
        ...state,
        loggedIn:null,
        user:{}
    };

    case UPDATE_USER:
     console.log("Update_response_image", action.user.image)
      return {
        ...state,
       
        user:action.user
    };

    case SET_ERR_MSG:
      return{
        ...state,
        errorMessage:''
      };

  
    default:
      return state;
  }
};

export default reducer;
