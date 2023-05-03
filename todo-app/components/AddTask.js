import React from "react";
import { 
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    Image,
    StyleSheet
    } from "react-native";

const AddTask = ({handleAddTask,task,setTask})=>{
    return(
        <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput 
          placeholder='enter task' 
          style={styles.taskInput}
          value={task}
          onChangeText={(text)=>setTask(text)}
         />
         <TouchableOpacity onPress={()=>handleAddTask(task)}>
            <Image source={require("../images/add.png")} style={{width:25,height:25}}/>
         </TouchableOpacity>
      </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    writeTaskWrapper:{
        flexDirection:'row',
        justifyContent:"space-between",
        margin:10,
        padding:10,
        fontSize:20,
        borderRadius:10,
        backgroundColor:"#EDEADE"
      }, 
      taskInput:{
        fontSize:18
      }
});
export default AddTask;