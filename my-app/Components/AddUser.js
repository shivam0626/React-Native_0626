import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddUser = ({onsubmit}) => {
    const [text,setText] = useState("");

    const handleSubmit =()=>{

    }

  return (
    <View style={styles.container}>
        <Text>Add User</Text>
        <TextInput 
            placeholder='enter user name' 
            value={text}
            onChangeText={setText}

        />
        <Button 
            style={styles.button}
            title="Add"
            onPresss={handleSubmit}
            color={"teal"}
        />
        <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
})

export default AddUser