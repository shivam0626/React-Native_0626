import React from 'react'
import { View,StyleSheet } from 'react-native'
import TaskItem from './TaskItem'

const TaskList = ({data,handleToggle,handleDelete}) => {
  return (
    <View>
          <View style={styles.items}>
            {
                data.map((item)=>(
                    <TaskItem 
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        status={item.status}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                ))
            }
          </View>
        </View>
  )
} 
const styles = StyleSheet.create({
    todocard:{
        flex:0,
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        margin:10,
        backgroundColor:'#EDEADE',
        paddingLeft:15,
        borderRadius:10
      }
})

export default TaskList;