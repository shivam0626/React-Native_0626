import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const Card = ({first_name,email,last_name,avatar}) => {
    const [isopen,setOpen] = useState(false);
  return (
    <TouchableOpacity onPress={()=>setOpen(!isopen)}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {first_name}
            </Text>
            {isopen && <View style={styles.email}>
                <Text style={styles.text}>
                    {email}
                </Text>
            </View>}
        </View>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
    container:{
        height:120,
        backgroundColor:"#cecece",
        justifyContent:"center",
        padding:10,
        borderBottomWidth:1,
        borderColor:"green",
    },
    text:{
        fontWeight:"bold",
    },
    email:{ 
        height:32,
        paddingLeft:20,
        backgroundColor:"#cecece",
        justifyContent:"center",
    }
})

export default Card;