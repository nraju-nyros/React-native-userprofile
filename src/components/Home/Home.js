import React, { Component } from "react";
import {Alert, ScrollView, Modal, View, Image, Text, Button,TextInput, TouchableOpacity, StyleSheet,FormLabel, FormInput, FormValidationMessage } from "react-native";
import img1 from '../../assets/img1.jpg';
import DatePicker from 'react-native-datepicker'
import complete from '../../assets/complete.png';


class Home extends Component {
 constructor(props){
  super(props)
  this.state={
    categoryVal:'',
    categories:['Health', 'Life', 'Goal'],
    textInput:'',
    activeInput:null,
    subInput:'',
    goal:'',
    start_date:'27-02-2020',
    end_date:'27-03-2020',
    status:true,
    goals:[],
    textValid:'',
    errText:'',
  }
 }

 categoryNameChange = (val) => {
  this.setState({
    categoryVal:val
  })
 }
  
  addCategory = (text) => {
    if(this.state.categoryVal.trim() === ""){
      return alert("Enter Category")
    }
    else{
      this.setState({
        catgories: this.state.categories.push(this.state.categoryVal),
        categoryVal:''
      })
    }

  }
 
  openInput = (category) => {
    if(this.state.activeInput === true){
      this.setState({
        textInput:category,
        activeInput:false
      })
    }
    else{
      this.setState({
      textInput:category,
      activeInput:true
    })
    }
    

  }

  addSubgoal = (category) => {
    this.setState({
      subInput:category, 
    })
  }

 closeInput = () => {
  this.setState({
    textInput:null,
    subInput:null,
    goal:''
  });
 }

 // Onchange Goal text set to state
 setInputValue = (text,type) => {
  if(type==="Health" || "Life" || "Goal"){  
    this.setState({
      goal:text
    })
  }
  console.log(this.state.goal)
 }

 // Save data to goals
 saveGoal = (type) => {
  if(this.state.goal.trim() === ""){
    this.setState({
      textValid:true,
      errText:'Please Enter Text'
    })
    return;
  }
  console.log(this.state.goal, this.state.start_date, this.state.end_date);

  let goal_lists = this.state.goals;
  goal_lists.push({id:Math.floor(Math.random() * 100), type:type, goal:this.state.goal, start_date:this.state.start_date, end_date:this.state.end_date, status:this.state.status})
  this.setState({
    goal_lists,
    textInput:null,
    subInput:null,
    goal:''
  });


 }


  deleteGoal = (id) => {
    var arr = this.state.goals;
    arr.map((item,i) => {
      if(id==item.id){
        item.status = false
      }
      if(arr.length-1 === i){
        console.log(arr)
        this.setState({
          goals:arr
        })
      }
    })
  }

  
 
 render(){
  return (
    <ScrollView>
    <View>
      <View style={{backgroundColor:'#368778',padding:20, flexDirection:'row', justifyContent:'space-around'}}>
        <Text style={{color:'#fff',fontSize:25}}>Goals</Text><Button title="Profile" style={styles.button} onPress={this.props.Profile}/>
        <Image style={{height:20,width:10,paddingTop:20}} source={{uri: 'https://cdn1.iconfinder.com/data/icons/pikku-ui/16/dots_vertical-512.png'}} />
      </View>

      <View style={styles.categoryContainer}>
        <TextInput
          placeholder="Add new category"
          onChangeText={(val) => this.categoryNameChange(val)}
          style={styles.categoryInput}
        />
        <Button
          title="Add"
          style={styles.categoryButton}
          onPress={this.addCategory}
        />
      </View>
   
       <View>
         { this.state.categories.map((category,i) => (
            <View>
            <View style={styles.Categorylist}>
              <Text style={{ fontSize: 16, color: "black"}}>{category}</Text>
              <TouchableOpacity onPress={() => this.openInput(category)}>
                <Image  style={{height:20,width:20,paddingTop:20}} source={{uri: 'https://image.flaticon.com/icons/png/512/189/189689.png'}} />
              </TouchableOpacity>
            </View>
         
            {
              this.state.goals.map((item,key)  => (
                item.type === category? 
                  <View style={styles.goal_list}>
                    <View key={key}>
                      <Text style={item.status? styles.goal_active : styles.goal_delete}>{item.goal}</Text>
                      <Text style={styles.date}> {item.start_date} To {item.end_date} {JSON.stringify(item.status)}</Text>
                    </View>
                    {
                      (item.status === false)?
                        <TouchableOpacity onPress={() => this.addSubgoal(category,item.id)}>
                          <Text style={styles.subGoalbtn}>Add sub Goal</Text>
                        </TouchableOpacity> :null
                    }
                    <TouchableOpacity onPress={() => this.deleteGoal(item.id)}>
                    <Image style={{height:30,width:30,paddingTop:20,paddingRight:30}} source={complete}/>
                    </TouchableOpacity>
                  </View> :null
              ))
            } 
            
            { (this.state.textInput === category && this.state.activeInput === true)?
              <View>
                <View style={styles.add_input}>
                  <TextInput placeholder={"Enter Goal"} onChangeText={(text) => this.setInputValue(text, category)}/>
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
                    <Button color='#00B0FF' onPress={() => this.saveGoal(category)} title="Save" />
                  </View>
                </View> :null
            }  

             { this.state.subInput === category?
              <View>
                <View style={styles.add_input}>
                  <TextInput placeholder={"Enter Goal"} onChangeText={(text) => this.setInputValue(text, category)}/>
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
                    <Button color='#00B0FF' onPress={() => this.saveGoal(category)} title="Save" />
                  </View>
                </View> :null
            }    
            </View>

          ))
         }
          </View>
             <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
              <Button title="Logout" onPress={ () => this.props.onUserLogout()} color="green"/>
            </View>
      </View>
    </ScrollView>
    
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
  goal_list:{
    marginHorizontal:10,
    marginLeft:40,
    paddingHorizontal:21,
    paddingVertical:7,
    height:45,
    backgroundColor:'#f2f2f2',
    marginBottom:7,
    flexDirection:'row',
    justifyContent: "space-between",
  
  },
  goal_active:{
    fontSize:15
  },
  goal_delete:{
     fontSize:15,
    textDecorationLine: 'line-through' 
  },
  date:{
    fontSize:10
  },
  subGoalbtn:{
    fontSize:12,
    color:'blue',
    paddingTop:20
  }
});



export default Home;
