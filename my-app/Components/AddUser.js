import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const AddUser = ({onSubmit}) => {
    const [text,setText] = useState("");

    const handleSubmit =()=>{
        onSubmit(text);
        setText('');
    }

  return (
    <View style={styles.container}>
        <Text style={styles.head}>Add User</Text>
        <TextInput 
            placeholder='enter user name' 
            value={text}
            onChangeText={setText}
            style={styles.input}
        />
        <Button 
            style={styles.button}
            title="Add User"
            onPress={handleSubmit}
            color={"teal"}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    input:{
        backgroundColor:"#cecece",
        marginBottom:10,
        padding:10,
        marginTop:10,
        borderRadius:5
    },
    head:{
        textTransform:"uppercase",
        fontWeight:"700"
    }
})

export default AddUser