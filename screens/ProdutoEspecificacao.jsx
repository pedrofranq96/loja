import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


export default function ProdutoEspecificacao({ dados }){
  const {product: {especificacao}} = dados
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especificações do Produto:</Text>
      <Text style={styles.specs}>{especificacao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  specs: {
    fontSize: 16,
  },
});