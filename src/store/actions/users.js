import { SIGNUP_USER, LOGIN_USER, LOGIN_SUCCESS, LOGOUT_USER, UPDATE_USER, LOGIN_FAILED, SET_ERR_MSG} from './actionTypes';
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
       dispatch({type: LOGIN_USER, user:res.data});
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
        
        console.log("Login_response", res.data); 
        dispatch({type: LOGIN_FAILED});

      }
      console.log("Login_response", res.data); 
      dispatch({type: LOGIN_USER, user:res.data});

    })
    .catch(error => {
        console.log("Login_response", error); 
        dispatch({type: LOGIN_FAILED});
    })
  }
};


export const logoutUser = () => {
  return dispatch => {
      dispatch({type: LOGOUT_USER});
    }
    
};

export const updateUser = (id,f,l,m,a,e,p,i) => {
  console.log("id", id, JSON.stringify(i.fileName))
  console.log("iddddd", id, JSON.stringify(i.data))

  if(i){
    var image_data = i.data;
    var file_name = i.fileName;
  }else{
    var image_data = "Img_empty";
    var file_name = "Img_empty"
  }
  const data = {
    "firstname" : f,
    "lastname":l,
    "mobile":m,
    "address":a,
    "email":e,
    "password":p,
    "image":image_data,
    "file_name":file_name
  }

  return dispatch => {
    axios.put('http://10.90.90.4:3000/api/v1/users/'+id,data)
    .then(res => {
      if(res.error) {
        throw(res.error);
      }
       dispatch({type: UPDATE_USER, user:res.data});
        console.log("response", res.data.image)
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

export const setErrMsg = () =>{

  return dispatch => {
     dispatch({type:SET_ERR_MSG})
  }
 
}
