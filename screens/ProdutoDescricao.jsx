import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dbData from '../components/utils/db.json';

export default function ProdutoDescricao({ dados }) {
  const {product} = dados
  console.log(dados)

  // const descricoes = dbData.produtos;
  // const descricao = descricoes.find((c) => c.id === productId);
  // if (!descricao) {
  //   return <Text>Descrição não encontrada</Text>;
  // }
  return (
    <View style={styles.container}>
      <Text>{product.description}</Text>
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});