import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task,setTask] = useState("");
  const [taskItems,setTaskItems] = useState([]);

  const handleAddTask =()=>{
    Keyboard.dismiss();
    if(task){
      setTaskItems([...taskItems,task]);
      setTask(null);
    }
  }
  const completeTask =(index)=>{
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);
  }

  const deleteAll =()=>{
    let itemsCopy = [];
    setTaskItems(itemsCopy);
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1,}}>
        <Text style={styles.heading}>
          My Todo App
        </Text>
        <TouchableOpacity style={styles.removeall } onPress={()=>deleteAll()}>
          <Text style={styles.removeAlltext}>Remove All</Text>
        </TouchableOpacity>
        <View>
          <View style={styles.items}>
            {taskItems.map((item,index)=>(
              <TouchableOpacity key={index} style={styles.todocard}>
                <TouchableOpacity key={index} onPress={()=>completeTask(index)}>
                  <Image source={require("./images/delete.png")}
                    style={{width:25,height:25}} />
                </TouchableOpacity>
                <Task task={item} />
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput 
          placeholder='enter task' 
          style={styles.taskInput}
          value={task}
          onChange={(text)=>{setTask(text)}}
         />
         <TouchableOpacity onPress={()=>handleAddTask()}>
            <Image source={require("./images/add.png")} style={{width:25,height:25}}/>
         </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginTop:40
  },
  heading: {
    backgroundColor:"#0AD6A0",
    margin:10,
    color: "#ffffff",
    textAlign:"center",
    fontSize:20,
    padding:10,
    fontWeight:'700',
    borderRadius:5
  },
  removeall:{
    flex:0,
    justifyContent:'flex-end',
    width:"100%",
    flexDirection:'row',
  },
  removeAlltext:{
    fontSize:17,
    fontWeight:700,
    backgroundColor:"#FF5757",
    color:"#ffffff",
    width:110,
    textAlign:"center",
    padding:5,
    borderRadius:5,
    marginRight:15
  },
  writeTaskWrapper:{
    flexDirection:'row',
    justifyContent:"space-between",
    margin:10,
    padding:10,
    fontSize:20,
    borderRadius:10,
    backgroundColor:"#EDEADE"
  }, 
  
});
