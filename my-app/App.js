import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import { useState } from 'react';
import Card from './Components/Card';

export default function App() {
  const [data,setData] = useState([
    {
      id:1,
      name:"John",
      email:"john@masaischool.com"
    },
    {
      id:2,
      name:"Jane",
      email:"jane@masaischool.com"
    }
  ])
  return (
    <View style={styles.container}>
      <Header title="My First App" />
      <View>
        <FlatList 
          data={data}
          keyExtractor={item=>item.id}
          renderItem={({item})=> <Card{...item}/>}
         />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf',
    paddingTop:50
  },
});
