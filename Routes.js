import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import LogIn from './screens/LogIn.js'
import SignUp from './screens/SignUp.js'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {LogIn} title = "LogIn" initial = {true} />
         <Scene key = "about" component = {SignUp} title = "SignUp" />
      </Scene>
   </Router>
)
export default Routes