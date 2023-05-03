import React from "react";
import {View, Text, StyleSheet, TouchableOpacity,Image, Switch} from "react-native";

const TaskItem = ({ id, title, status, handleToggle, handleDelete }) =>{
 return(
    <View style={styles.item}>
        <TouchableOpacity key={id} style={styles.todocard}>
            <View style={styles.taskDet}>
                <Text style={styles.itemText}>{title}</Text>
                <Text style={styles.status}>{status? "completed" :"uncomplete"}</Text>
            </View>
            <View style={styles.handleDiv}>
                <Switch value={status}
                     thumbColor={status ? '#006400' : '#f4f3f4'}
                     onValueChange={()=>handleToggle(id)}
                 />
                <TouchableOpacity key={id} onPress={()=>handleDelete(id)}>
                  <Image source={require("../images/delete.png")}
                    style={{width:25,height:25,marginTop:12}} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    </View>
 )
}
const styles = StyleSheet.create({
    item:{
        padding:10
    },
    itemText:{
        fontSize:18
    },
    todocard:{
        flex:0,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        backgroundColor:'#EDEADE',
        padding:10,
        borderRadius:10
    },
    taskDet:{
        flexDirection:"row",
        gap:30,
        padding:5
    },
    status:{
        marginTop:2
    },
    handleDiv:{
        flexDirection:"row",
        gap:20
    }

});
const styels = StyleSheet.create({

})
export default TaskItem;