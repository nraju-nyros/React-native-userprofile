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
      goalInput:null,

      subgoalInputId:null,
      commentInputId:null,

      subcommentInput:null,

      goal:'',
      comment:'',

      start_date:'27-02-2020',
      end_date:'27-03-2020',
      status:true,
      goals:[],
      textValid:'',
      errText:'',
      errGoal:'',
      errSubGoal:'',
      errComment:'',
      errSubComment:''
    }
  }
 
  // Category setState
  categoryNameChange = (val) => {
    this.setState({
      categoryVal:val,
       errText:''
    })
  }
  
  // Category save
  addCategory = (text) => {
    if(this.state.categoryVal.trim() === ""){
      this.setState({
        errText:"Please Enter Text"
      })
      return;
    }
    else{
      this.setState({
        catgories: this.state.categories.push(this.state.categoryVal),
        categoryVal:'',
        errText:''
      })
    }
  }
 
  // Goal Input open
  goalInput = (category) => {
    if(this.state.goalInput === null){
      this.setState({
        goalInput:category
      })
    }
    else{
      this.setState({
        goalInput:null
      })
    }
  }

  // Onchange Goal text set to state
  setInputValue = (text,type) => {
    if(type==="Health" || "Life" || "Goal"){  
      this.setState({
        goal:text,
        errGoal:''
      })
    }
  }

  // Save data to goals
  saveGoal = (type) => {
    if(this.state.goal.trim() === ""){
      this.setState({
        textValid:true,
        errGoal:'Please Enter Text'
      })
      return;
    }
    let goal_lists = this.state.goals;
    goal_lists.push({id:Math.floor(Math.random() * 100), subGoals:[], comments:[], type:type, goal:this.state.goal, start_date:this.state.start_date, end_date:this.state.end_date, status:this.state.status})
    this.setState({
      goal_lists,
      goalInput:null,
      subgoalInputId:null,
      goal:'',
      errGoal:''
    });
    console.log(this.state.goals)
  }
  
  // Sub goal Input
  subGoalInput = (category,id) => {
    if(this.state.subgoalInputId === null){
      this.setState({
        subgoalInputId:id
      })
    }else{
      this.setState({
        subgoalInputId:null
      })
    }
  }

  // Save data to goals
  saveSubGoal = (type, id) => {
    if(this.state.goal.trim() === ""){
      this.setState({
        textValid:true,
        errSubGoal:'Please Enter Text'
      })
      return;
    }

    var arr = this.state.goals;
    arr.map((item,i) => {
      if(id==item.id){
        item.subGoal=true,
        item.subGoals.push({id:Math.floor(Math.random() * 100), comments:[], subgoal: this.state.goal, status: true, start_date:this.state.start_date, end_date:this.state.end_date})
      }
      if(arr.length-1 === i){
        console.log(arr)
        this.setState({
          goals:arr
        })
      }
    })

    this.setState({
      goals:arr,
      goalInput:null,
      subgoalInputId:null,
      commentInputId:null,
      goal:'',
      comment:'',
      errSubGoal:''
    });
    console.log(this.state.goals)
  }


  commentInput = (category,id) => {
    if(this.state.commentInputId === null){
      this.setState({
        commentInputId:id
      })
    }else{
      this.setState({
        commentInputId:null
      })
    }
  }

  commentSubInput = (category,id,sub_id) => {
    if(this.state.subcommentInput === null){
      this.setState({
        subcommentInput:sub_id
      })
    }else{
      this.setState({
        subcommentInput:null
      })
    }
  }

  // Onchange Goal text set to state
  setCommentValue = (text,type) => {
    if(type==="Health" || "Life" || "Goal"){  
      this.setState({
        comment:text
      })
    }
  }

  // Save data to goals
  saveComment = (type, id) => {
    if(this.state.comment.trim() === ""){
      this.setState({
        textValid:true,
        errComment:'Please Enter Text'
      })
      return;
    }

    var arr = this.state.goals;
    arr.map((item,i) => {
      if(id==item.id){
        item.comments.push({id:Math.floor(Math.random() * 100), status:true, comment: this.state.comment})
      }
      if(arr.length-1 === i){
        console.log(arr)
        this.setState({
          goals:arr
        })
      }
    })

    this.setState({
      goals:arr,
      goalInput:null,
      subgoalInputId:null,
      commentInputId:null,
      goal:'',
      comment:''
    });
    console.log(this.state.goals)
  }


  // Save data to goals
  saveSubComment = (type, id, sub_id) => {
    if(this.state.comment.trim() === ""){
      this.setState({
        textValid:true,
        errSubComment:'Please Enter Text'
      })
      return;
    }

    var arr = this.state.goals;
    arr.map((item,i) => {
      if(id==item.id){
        item.subGoals.map((sub,i) =>{
          if(sub_id==sub.id){
            sub.comments.push({comment:this.state.comment})
          }
        })
      }
      if(arr.length-1 === i){
        console.log(arr)
        this.setState({
          goals:arr
        })
      }
    })
    console.log("subComments", this.state.goals)

    this.setState({
      goals:arr,
      goalInput:null,
      subgoalInputId:null,
      commentInputId:null,
        subcommentInput:null,
      goal:'',
      comment:''
    });
    console.log(this.state.goals)
  }

  // Close Input
  closeInput = () => {
    this.setState({
      goalInput:null,
      subgoalInputId:null,
      commentInputId:null,
      subcommentInput:null,
      comment:'',
      goal:'',
      errGoal:'',
      errSubGoal:''
    });
  }

  // deleteGoal
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

  // Delete Comment for goal 
   deleteComment = (g_id, c_id) => {
    console.log(g_id, c_id)
    var arr = this.state.goals;
    console.log(arr)
    arr.map((item,i) => {
      if(g_id==item.id){
        item.comments.map((comment,i) =>{
          if(c_id==comment.id){
            var index = item.comments.indexOf(comment);
              if(index !== -1){
                item.comments.splice(index,1)
              }
          }
        })
      }
      if(arr.length-1 === i){
        this.setState({
          goals:arr
        })
      }
    })
    console.log(this.state.goals)
  }

  // Delete Comment for Subgoal 
   deleteSubComment = (g_id,s_id, index) => {
    console.log(g_id, s_id, index)
    var arr = this.state.goals;
    console.log(arr)
    arr.map((item,i) => {
      if(g_id==item.id){
        item.subGoals.map((sub_goal,i) =>{
          if(s_id==sub_goal.id){
            if(index !== -1){
              sub_goal.comments.splice(index,1)
            }
          }
        })
      }

      if(arr.length-1 === i){
        this.setState({
          goals:arr
        })
      }
    })
    console.log(this.state.goals)
  }

  // deleteGoal
  deleteSubGoal = (id, sub_id) => {
    var arr = this.state.goals;
    console.log(arr)
    arr.map((item,i) => {
      if(id==item.id){
        item.subGoals.map((sub,i) =>{
          if(sub_id==sub.id){
              sub.status = false
          }
        })
      }
      if(arr.length-1 === i){
        this.setState({
          goals:arr
        })
      }
    })
    console.log(this.state.goals)
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
      <View style={styles.errorContainer}>
        {this.state.errText? <Text style={styles.error}>{this.state.errText}</Text> :null}
      </View>
      <View>
          
      </View>
   
      <View>
        { this.state.categories.map((category,i) => (
          <View>

          <TouchableOpacity onPress={() => this.goalInput(category)}>
            <View style={styles.Categorylist} onPress={() => this.goalInput(category)}>
              <Text style={{ fontSize: 16, color: "black"}}>{i+1}. {category}</Text>
                <TouchableOpacity onPress={() => this.goalInput(category)}>
                  <Image  style={{height:20,width:20,paddingTop:20}} source={{uri: 'https://image.flaticon.com/icons/png/512/189/189689.png'}} />
                </TouchableOpacity>
            </View>
          </TouchableOpacity>
         
            { this.state.goals.map((item,key)  => (
              (item.type === category)?
              <View> 
                <View style={styles.goal_list}>
                  <View style={{flex: 1, flexDirection: 'row',justifyContent: "space-between"}}>
                    <View>
                      <View key={key}>
                        <Text style={item.status? styles.goal_active : styles.goal_delete}>{key + 1}. {item.goal}</Text>
                        <Text style={styles.date}> {item.start_date} To {item.end_date} {JSON.stringify(item.status)}</Text>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row',justifyContent: "space-between"}}>
                        <TouchableOpacity onPress={() => this.commentInput(category,item.id)}>
                            <Text style={styles.Commentbtn}>Add Comment</Text>
                        </TouchableOpacity>
                         {
                          (item.status === false)?
                            <TouchableOpacity onPress={() => this.subGoalInput(category,item.id)}>
                              <Text style={styles.subGoalbtn}>  Add sub Goal</Text>
                            </TouchableOpacity> :null
                          }
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity onPress={() => this.deleteGoal(item.id)}>
                      <Image style={{height:30,width:30,paddingTop:20,paddingRight:30}} source={complete}/>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                
                {
                 (item.comments)?
                  <View>
                    { item.comments.map((s,i) =>

                      <View>

                        <View style={styles.comment_list}>
                          <View key={i}>
                            <Text style={s.status? styles.goal_active : styles.goal_active}>{i+1}. {s.comment}</Text>
                          </View> 
                           <View>
                            <TouchableOpacity onPress={() => this.deleteComment(item.id,s.id)}>
                            <Text style={{color:'red'}}>Delete</Text>
                            </TouchableOpacity>
                          </View> 
                         </View>
                      </View> 

                       
                    )} 
                  </View> :null     
                }

                 { (this.state.commentInputId === item.id)?
                    <View>
                      <View style={styles.sub_input}>
                        <TextInput placeholder={"Enter Comment"} onChangeText={(text) => this.setCommentValue(text, category)}/>
                      </View>
                       <View style={styles.errorContainer}>
                        {(this.state.errComment)? <Text style={styles.error}> {this.state.errComment}</Text> :null}
                      </View>
                        <View style={{  marginTop:5,marginBottom:15,marginRight:25,marginLeft:20, felx:1, flexDirection:'row',justifyContent:'flex-end'}}>
                          <Button color='red' title="Close" onPress={this.closeInput}/>
                          <Button color='#00B0FF' onPress={() => this.saveComment(category, item.id)} title="Save" />
                        </View>
                      </View> :null
                  }      
                {
                 (item.subGoals)?
                  <View>
                    { item.subGoals.map((s,index) => (
                      <View>
                        <View style={styles.sub_goal_list}>
                          <View>
                            <View key={i}>
                              <Text style={s.status? styles.goal_active : styles.goal_delete}>{s.subgoal}</Text>
                              <Text style={styles.date}> {s.start_date} To {s.end_date} {JSON.stringify(s.status)}</Text>
                            </View>
                            <View style={{flex: 1, flexDirection: 'row',justifyContent: "space-between"}}>
                              <TouchableOpacity onPress={() => this.commentSubInput(category,item.id,s.id)}>
                                  <Text style={styles.Commentbtn}>Add Comment</Text>
                              </TouchableOpacity>
                            
                            </View>
                          </View>

                          <View>
                        
                            <TouchableOpacity onPress={() => this.deleteSubGoal(item.id, s.id)}>
                            <Image style={{height:30,width:30,paddingTop:20,paddingRight:30}} source={complete}/>
                            </TouchableOpacity>
                          </View>
                         </View>
                         
                         <View>
                         {
                           (s.comments)?
                            <View>
                              { s.comments.map((data,i) => 
                                <View style={styles.sub_comment_list}>
                                  <View key={i}>
                                    <Text style={s.status? styles.goal_active : styles.goal_active}>{i+1}. {data.comment}</Text>
                                  </View>  
                                   <View>
                                    <TouchableOpacity onPress={() => this.deleteSubComment(item.id,s.id,i)}>
                                    <Text style={{color:'red'}}>Delete</Text>
                                    </TouchableOpacity>
                                  </View> 
                                 </View> 
                              )} 
                            </View> :null     
                          }
                          </View>
                           
                   
                       </View>
                     
                
                       
                      
                      


                    ))
                  } 
                  </View> :null     
                }


                
              

                     
                  { (this.state.subcommentInput != null)?
                    <View>
                      <View style={styles.sub_comment_input}>
                        <TextInput placeholder={"Enter Comment"} onChangeText={(text) => this.setCommentValue(text, category)}/>
                      </View>
                      <View style={styles.errorContainer}>
                        {(this.state.errSubComment)? <Text style={styles.error}> {this.state.errSubComment}</Text> :null}
                      </View>
                        <View style={{  marginTop:5,marginBottom:15,marginRight:25,marginLeft:20, felx:1, flexDirection:'row',justifyContent:'flex-end'}}>
                          <Button color='red' title="Close" onPress={this.closeInput}/>
                          <Button color='#00B0FF' onPress={() => this.saveSubComment(category, item.id, this.state.subcommentInput)} title="Save" />
                        </View>
                      </View> :null
                  }      
               

               

                { 
                  (this.state.subgoalInputId === item.id)?
                  <View>
                    <View style={styles.sub_input}>
                      <TextInput placeholder={"Enter Sub Goal"} onChangeText={(text) => this.setInputValue(text, category)}/>
                    </View>
                      <View style={styles.errorContainer}>
                        {(this.state.errSubGoal)? <Text style={styles.error}> {this.state.errSubGoal}</Text> :null}
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
                        <Button color='#00B0FF' onPress={() => this.saveSubGoal(category, this.state.subgoalInputId)} title="Save" />
                      </View>
                    </View> :null
                  }
                 
                </View> :null
                ))
              }
               
            { (this.state.goalInput === category)?
              <View>
                <View style={styles.add_input}>
                  <TextInput placeholder={"Enter Goal"} onChangeText={(text) => this.setInputValue(text, category)}/>
                </View>
                 <View style={styles.errorContainer}>
                  {(this.state.errGoal)? <Text style={styles.error}> {this.state.errGoal}</Text> :null}
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
    paddingTop:30,
    paddingHorizontal: 30
  },
  errorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 30,
    paddingBottom:20,
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
    sub_input:{
    paddingHorizontal:40,
    marginHorizontal:10,
    marginLeft:70,
    height:45,
    backgroundColor:'#f2f2f2',
    marginBottom:7
  },

   sub_comment_input:{
    paddingHorizontal:40,
    marginHorizontal:21,
    marginLeft:90,
    height:45,
    backgroundColor:'#f2f2f2',
    marginBottom:7
  },
  goal_list:{
    marginHorizontal:10,
    marginLeft:40,
    paddingHorizontal:21,
    paddingVertical:7,
    height:60,
    backgroundColor:'#f2f2f2',
    marginBottom:7,
   
  
  },
   sub_goal_list:{
    marginHorizontal:10,
    marginLeft:70,
    paddingHorizontal:21,
    paddingVertical:7,
    height:60,
    backgroundColor:'#f2f2f2',
    marginBottom:7,
    flexDirection:'row',
    justifyContent: "space-between",
  
  },
   comment_list:{
    marginHorizontal:10,
    marginLeft:50,
    paddingHorizontal:21,
    paddingVertical:7,
    height:40,
    backgroundColor:'#f2f2f2',
    marginBottom:7,
    flexDirection:'row',
    justifyContent: "space-between",
  
  },
   sub_comment_list:{
    marginHorizontal:10,
    marginLeft:90,
    paddingHorizontal:21,
    paddingVertical:7,
    height:40,
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
     paddingRight:40,
    textDecorationLine: 'line-through' 
  },
  date:{
    fontSize:10
  },
  subGoalbtn:{
    fontSize:12,
    color:'blue'
  },
  Commentbtn:{
    fontSize:12,
    color:'green',
    paddingLeft:0,

  },
   error:{
    color:'red',
    fontSize:11
  }
});



export default Home;
