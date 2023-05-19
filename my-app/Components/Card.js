import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

const Card = ({name,email}) => {
    const [isopen,setOpen] = useState(false);
  return (
    <TouchableOpacity onPress={()=>setOpen(!isopen)}>
        <View style={styles.container}>
            <Text style={styles.text}>
                {name}
            </Text>
        </View>
        {isopen && <View style={styles.container}>
            <Text style={styles.email}>
                {email}
            </Text>
        </View>}
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
    container:{
        height:60,
        backgroundColor:"#cecece",
        justifyContent:"center",
        paddingLeft:20
    },
    text:{
        fontWeight:"bold"
    },
    email:{ 
        height:32,
        paddingLeft:20,
        backgroundColor:"#cecece",
        justifyContent:"center",
    }
})

export default Card;