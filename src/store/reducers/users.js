import {SIGNUP_USER,LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER} from "../actions/actionTypes";
import axios from 'axios';

const initialState = {
  user: {},
  loggedIn: null
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
        loggedIn:true
    };

    case LOGIN_SUCCESS:
    console.log("Reducer_data", this.initialState.loggedIn)
      return {
        ...state
    };

    case LOGOUT_USER:
      return {
        ...state,
        loggedIn:null
    };

  
    default:
      return state;
  }
};

export default reducer;
