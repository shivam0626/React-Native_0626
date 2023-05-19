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
        {isopen &&  <Text style={styles.text}>
            {email}
        </Text>}
    </View>
    </TouchableOpacity>
    
  )
}
const styles = StyleSheet.create({
    container:{
        height:60,
        backgroundColor:"#cecece",
        justifyContent:"center",
        padding:10
    },
    text:{
        fontWeight:"bold"
    }
})

export default Card;