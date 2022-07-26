/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState} from 'react';
import music_data from './musicdata.json';
import SongKart from './components/SongKart';
import SearchBar  from './components/SearchBar';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
} from 'react-native';


const App = () => {
  const[list,setList]=useState(music_data);
  const renderSong = ({item}) => <SongKart song={item} />;
  const renderSeperator = () => <View style={styles.seperator}></View>;
  const handleSearch=text=> {
    const filteredList=music_data.filter(song=>
      {
        const searcedText=text.toLowerCase();
        const currentTitle=song.title.toLowerCase();  
        return currentTitle.indexOf(searcedText)>-1;
      });
      setList(filteredList);
  };
  return (
    <View style={styles.container}>
    <SearchBar onSearch={handleSearch}/>
      <FlatList
        data={list}
        // renderItem={({item})=><Text>{item.title}</Text>}
        renderItem={renderSong}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {borderWidth: 1, borderColor: '#e0e0e0'},
});

export default App;
