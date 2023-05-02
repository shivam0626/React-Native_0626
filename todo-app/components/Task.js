import React from "react";
import {View, Text, StyleSheet} from "react-native";

const Task = (props) =>{
 return(
    <View style={styles.item}>
        <Text style={style.itemText}>{props.text}</Text>
    </View>
 )
}
const styles = StyleSheet.create({
    item:{
        padding:15
    },
    itemText:{
        fontSize:18
    }
})
export default Task;