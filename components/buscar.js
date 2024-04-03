import { View, TextInput, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

function buscar(){

    const [query, setQuery] = useState('');

    const handleSearch = () => {
      onSearch(query);
    };
    return (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Buscar..."
            onChangeText={setQuery}
          />
          <Button title="Buscar" onPress={handleSearch} />
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    input: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginRight: 10,
    },
  });
  
  export default buscar;