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
    console.log("Reducer_data", action.user)
      return {
        ...state,
        user: action.user,
        loggedIn:true,
        errorMessage:''
    };

    case LOGIN_SUCCESS:
    console.log("Reducer_data", this.initialState.loggedIn)
      return {
        ...state
    };

    case LOGIN_FAILED:
        console.log("Reducer_data", "ddddddddddddddddd")
      return {
        ...state,
        error: true,
        errorMessage:'Incorrect Email or password!'
    };

    case LOGOUT_USER:
      return {
        ...state,
        loggedIn:null
    };

    case UPDATE_USER:
      return {
        ...state,
        loggedIn:true,
        user:action.user
    };

    case SET_ERR_MSG:
      return{
        ...state,
        errorMessage:null
      };

  
    default:
      return state;
  }
};

export default reducer;
