import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from 'react-native';
import Titulo from "./components/Titulo.js";
import Buscar from "./components/buscar.js";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40');
        const data = await response.json();
        setPokemons(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <View style={styles.container}>
      <Text> <Titulo /> </Text>
      <Buscar></Buscar>
      
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={pokemons}
          renderItem={({ item }) => (
            <View style={styles.pokemonItem}>
              
                <Image
                  style={styles.image}
                  source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(item.url)}.png` }}
                />
                <Text style={styles.name}>{item.name}</Text>
            </View>
          )}
        />
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const getPokemonId = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  pokemonItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: '#D0CFCA'
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 120,
  },
  nameContainer: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
  },
});
