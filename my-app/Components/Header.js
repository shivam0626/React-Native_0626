import { StyleSheet, Text, View } from "react-native";

const Header = ({title}) => {
  return (
    <View style ={styles.container}>
        <Text style={styles.text}>
            {title}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height:60,
        backgroundColor:"teal",
        justifyContent:"center"
    },
    text:{
        color:"#ffff",
        fontSize:20,
        alignSelf:"center",
        fontWeight:600
    }
})

export default Header