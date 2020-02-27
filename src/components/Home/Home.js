import React, { Component } from "react";
import {Alert, Modal, View, Image, Text, Button,TextInput, TouchableOpacity, StyleSheet,FormLabel, FormInput, FormValidationMessage } from "react-native";
import img1 from '../../assets/img1.jpg';
import DatePicker from 'react-native-datepicker'




class Home extends Component {
 constructor(props){
  super(props)
  this.state={
    textInputHealth:null,
    textInputLife:null,
    textInputGoal:null,
    start_date:'27-02-2020',
    end_date:'27-03-2020',
    
    todo:'',
    todos:[],

    textValid:'',
    errText:'',
   

    tmpArray : [
      { name: "Siva", age: 10, class: "M.C.A" },
      { name: "raju", age: 11, class: "B.C.A" },
    ]
  }
 }

 componentDidMount(){
    console.log("todos", this.state.todoInputText)
 }

 addInput = (text) => {
  if(text === 'health'){
     if(this.state.textInputHealth===null){
      this.setState({
        textInputHealth:true
      })
    }else{
      this.setState({
        textInputHealth:null
      })
    }
  }
  if(text === 'life'){
     if(this.state.textInputLife===null){
      this.setState({
        textInputLife:true
      })
    }else{
      this.setState({
        textInputLife:null
      })
    }
  }

  if(text === 'goal'){
       if(this.state.textInputGoal===null){
        this.setState({
          textInputGoal:true
        })
      }else{
        this.setState({
          textInputGoal:null
        })
      }
    }
 }

 closeInput = () => {
  this.setState({
    textInputHealth:null
  })
 }

 // Onchange goal text set to state
 setTodo = (text,type) => {

  if(type==="Health"){  
    this.setState({
      todo:text
    })
  }
  console.log(this.state.todo)
 }

 saveGoal = () => {

  if(this.state.todo.trim() === ""){
    this.setState({
      textValid:true,
      errText:'Please Enter Text'
    })
    return;
  }

  console.log(this.state.todo, this.state.start_date, this.state.end_date)
  let todo_lists = this.state.todos;

   todo_lists.push({todo:this.state.todo, start_date:this.state.start_date, end_date:this.state.end_date})
  
  this.setState({
    todo_lists,
    textInputHealth:null

  });
  console.log(this.state.todos)
 }
 
 render(){
  return (
      <View >
        <View style={{backgroundColor:'#368778',padding:20, flexDirection:'row', justifyContent:'space-around'}}>
          <Text style={{color:'#fff',fontSize:25}}>Goals</Text><Button title="Profile" style={styles.button} onPress={this.props.Profile}/>
          <Image style={{height:20,width:10,paddingTop:20}}source={{uri: 'https://cdn1.iconfinder.com/data/icons/pikku-ui/16/dots_vertical-512.png'}} />
        </View>

        <View style={styles.categoryContainer}>
          <TextInput
            placeholder="Add new category"
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
            style={styles.categoryInput}
          />
          <Button
            title="Add"
            style={styles.categoryButton}
            onPress={this.placeSubmitHandler}
          />
        </View>
         
        <View style={styles.bodyContainer}>
          <View style={styles.Categorylist}>
            <Text style={{ fontSize: 16, color: "black"}}>Health{this.state.todos}</Text>
            <TouchableOpacity onPress={() => this.addInput('health')}>
              <Image  style={{height:20,width:20,paddingTop:20}}source={{uri: 'https://image.flaticon.com/icons/png/512/189/189689.png'}} />
            </TouchableOpacity>
          </View>

          <View>
           {
            this.state.todos.map((item,key)  => (
              <View style={styles.todo_list}>
                  <Text style={styles.todo}>{item.todo}  {item.start_date} To {item.end_date}</Text>
              </View>
            ))
           }    
          </View>

          {
            this.state.textInputHealth?
            <View>
              <View style={styles.add_input}>
                <TextInput placeholder={"Enter goal"} onChangeText={(text) => this.setTodo(text, 'Health')}/>
              </View>
                <View style={{felx:1, flexDirection:'row', marginBottom:8, marginLeft:30}}>
                  <DatePicker
                    style={{width: 150}}
                    date={this.state.start_date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="27-02-2020"
                    maxDate="01-06-2030"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 45
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({start_date: date})}}
                  />

                   <DatePicker
                    style={{width: 150}}
                    date={this.state.end_date}
                    mode="date"
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    minDate="27-02-2020"
                    maxDate="01-06-2030"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                      },
                      dateInput: {
                        marginLeft: 36
                      }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({end_date: date})}}
                  />
                  </View>
                  <View style={{  marginTop:5,marginBottom:15,marginRight:25,marginLeft:20, felx:1, flexDirection:'row',justifyContent:'flex-end'}}>
                    <Button color='red' title="Close" onPress={this.closeInput}/>
                    <Button color='#00B0FF' onPress={this.saveGoal} title="Save" />
                  </View>
            </View> :null
          }

           
            

          <View style={styles.Categorylist}>
            <Text style={{ fontSize: 16, color: "black"}}>Life</Text>
            <TouchableOpacity onPress={() => this.addInput('life')}>
              <Image style={{height:20,width:20,paddingTop:20}}source={{uri: 'https://image.flaticon.com/icons/png/512/189/189689.png'}} />
            </TouchableOpacity>
          </View>
           {
            this.state.textInputLife?
            <View style={styles.add_input}>
              <TextInput />
            </View> :null
          }
          <View style={styles.Categorylist}>
           
              <Text style={{ fontSize: 16, color: "black"}}>Goal</Text>
               <TouchableOpacity onPress={() => this.addInput('goal')}>
              <Image style={{height:20,width:20,paddingTop:20}}source={{uri: 'https://image.flaticon.com/icons/png/512/189/189689.png'}} />
            </TouchableOpacity>
          </View>
          {
            this.state.textInputGoal?
            <View style={styles.add_input}>
              <TextInput />
            </View> :null
          }
        
           
           

          <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
            <Button title="Logout" onPress={ () => this.props.onUserLogout()} color="green"/>
          </View>

       
        </View>

         


      </View>
    
  );
  }
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
      paddingVertical: 15,
      paddingHorizontal: 30
  },
  categoryInput: {
    width: "90%",
    backgroundColor:'#f2f2f2'
  },
  categoryButton: {
    width: "30%",
    color:"red"
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
  bodyContainer:{
   marginTop:40,
  },
  Categorylist:{
      paddingVertical: 15,
      paddingHorizontal: 30,
      marginHorizontal:10,
      backgroundColor:'#f2f2f2',
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom:15
    //  paddingLeft:30,
    // borderBottomColor: '#dedcd7',
    // borderBottomWidth: 1
  },
  add_input:{
    paddingHorizontal:40,
    marginHorizontal:10,
    marginLeft:40,
    height:45,
    backgroundColor:'#f2f2f2',
    marginBottom:7
  },
  todo_list:{
    marginHorizontal:10,
    marginLeft:40,
    height:45,
    backgroundColor:'#f2f2f2',
    marginBottom:7
  },
  todo:{
    fontSize:15, 
  },

});



export default Home;
