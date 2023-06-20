import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dbData from '../components/utils/db.json';

export default function ProdutoEspecificacao({ productId }){

  const produto = dbData.produtos.find((p) => p.id === productId);
  if (!produto) {
    return <Text>Produto não encontrado</Text>;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Especificações do Produto:</Text>
      <Text style={styles.specs}>{produto.especificacao}</Text>
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