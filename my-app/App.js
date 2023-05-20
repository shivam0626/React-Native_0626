import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Card from './Components/Card';
import axios from 'axios';

export default function App() {
  const [loading, setLoading] = useState(false);
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
  ]);
  const fetchUsers = ()=>{
    setLoading(true);
    return axios.get("https://reqres.in/api/users")
    .then(res=>{
      setData(res.data.data);
      setLoading(false);
    })
    .catch(err=>{
      setLoading(false); f
    })
  }

  useEffect(()=>{
    fetchUsers();
  },[])

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
