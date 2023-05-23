import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import Card from './Components/Card';
import axios from 'axios';
import AddUser from './Components/AddUser';

export default function App() {
  const [loading, setLoading] = useState(false);
  const [data,setData] = useState([]);

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

  const handleAdd =(text)=>{
      /** POST REQUEST */

      const payload={
        id:data.length+1,
        first_name: text,
        email:`${text}@masaischool.com`,
        last_name:text
      }
      setData([...data,
        payload])
  }

  return (
    <View style={styles.container}>
      <Header title="My First App" />
      <AddUser onSubmit={handleAdd} />
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
