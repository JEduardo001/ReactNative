
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from 'react-native';
function cardPokemon(name,img){
    return (
       <View>
            <Image
                style={styles.image}
                source={img}
            />
            <Text style={styles.name}>{name}</Text>
       </View>
    );
}

export default cardPokemon;

const getPokemonId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 60, 
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
    },
    pokemonItem: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
    },
  });