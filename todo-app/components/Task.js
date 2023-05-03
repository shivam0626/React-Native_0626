import React from "react";
import { Keyboard, View,StyleSheet,ScrollView,Text } from "react-native";
import { nanoid } from 'nanoid/non-secure';
import { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

const Task =()=>{
    const [task,setTask] = useState("");
    const [taskItems,setTaskItems] = useState([]);
    const handleAddTask =(task)=>{
        Keyboard.dismiss();
        setTaskItems([...taskItems,
        {
            id: nanoid(),
            title: task,
            status:false
        }
        ]);
        setTask("");
    }
    const handleToggle =(id)=>{
        const updatedItems = taskItems.map((item)=>
            item.id === id ?
            {
                ...item,
                status: !item.status
            }
            : item
        );
        setTaskItems(updatedItems);
    }

    const handleDelete =(id)=>{
      const updatedItems = taskItems.filter((item)=> item.id !== id);
      setTaskItems(updatedItems);
    }

    return(
        <View style={styles.container}>
        <ScrollView contentContainerStyle={{flexGrow:1,}}>
        <Text style={styles.heading}>
          My Todo App
        </Text>
        <View>
            <TaskList 
            data={taskItems.filter((item)=> !item.status)} 
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />
        </View>
        <View>
            {taskItems && <Text style={styles.completeHeading}>Completed Task</Text>}
            <TaskList 
            data={taskItems.filter((item)=> item.status)} 
            handleToggle={handleToggle}
            handleDelete={handleDelete}
            />
        </View>
      </ScrollView>
      <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      marginTop:50
    },
    heading: {
        backgroundColor:"#006400",
        margin:10,
        color: "#ffffff",
        textAlign:"center",
        fontSize:20,
        padding:10,
        fontWeight:'700',
        borderRadius:5
      },
    completeHeading:{
        margin:10,
        textAlign:"center",
        fontSize:18,
        padding:10,
        fontWeight:'700',
       
    }
})

export default Task;