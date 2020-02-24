import {SIGNUP_USER,LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER} from "../actions/actionTypes";
import axios from 'axios';


// const initialState = {
//   users: [],
//   user:{},
//   loggedIn:false
// };

const initialState = {
  places: {},
  loggedIn: null,
  user:''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case SIGNUP_USER:
      return {
        ...state,
        users: action.users    
    };

    case LOGIN_USER:
    console.log("Reducer_data", action.user)
      return {
        ...state,
        // user: action.user,
        // loggedIn:true
        places: action.user,
        loggedIn:true,
        user:"Login"  
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
