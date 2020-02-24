import { SIGNUP_USER, LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER} from './actionTypes';
import axios from 'axios';
import ReduxThunk from 'redux-thunk';



export const signupUser = (f,l,m,a,e,p) => {
  const data = {
    "firstname" : f,
    "lastname":l,
    "mobile":m,
    "address":a,
    "email":e,
    "password":p
  }

  return dispatch => {
    axios.post('http://10.90.90.4:3000/api/v1/users',data)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
      dispatch({type: SIGNUP_USER, user:res.data});
      return res.data;
    })
    .catch(error => {
        console.log("error", error)
    })
  }
};

export const loginUser = (e,p) => {
  const data = {
    "email":e,
    "password":p
  }
  console.log("User login params", data)
  return dispatch => {
    axios.post('http://10.90.90.4:3000/api/v1/auth/login',data)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
      console.log("Login_response", res.data); 
      dispatch({type: LOGIN_USER, user:res.data});

    })
    .catch(error => {
        console.log("error", error)
    })
  }
};


export const logoutUser = () => {
  return dispatch => {
      dispatch({type: LOGOUT_USER});
    }
    
};

export const updateUser = (id, placeName) => {
  const data = {
    "name" : placeName
  }

  return dispatch => {
    axios.put('http://localhost:3000/api/v1/todo_lists/'+id,data)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
     
      return res.data;
    })
    .catch(error => {
        console.log("error", error)
    })
  }
};



export const deleteUser = (id) => {
  alert(id)
  return dispatch => {
    axios.delete('http://localhost:3000/api/v1/todo_lists/'+id)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
     
    })
    .catch(error => {
        console.log("error", error)
    })
  }
   
};
