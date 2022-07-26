import React from "react";
import { TextInput,View } from "react-native";
import styles from './SearchBarStyles';
const SearchBar=(props)=>
{
    
    return(
<View style={styles.container}>
    <TextInput
     placeholder="Ara..."
     onChangeText={props.onSearch}
     />
</View>

    );


}
export default SearchBar;