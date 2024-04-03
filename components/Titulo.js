import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    
    titulo: {
      flex: 1,
      fontSize: 40,
      fontWeight: 'bold',
      color: '#FFDE63'
    }
  });

function Titulo(){
    return (
     
        <Text style={styles.titulo}>Lista de Pokemons</Text>
      
    );
}

export default Titulo;