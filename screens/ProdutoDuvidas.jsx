import React from "react";
import { View, Text } from "react-native";

import { StyleSheet } from "react-native";
export default function ProdutoDuvidas({ dados }) {
 const {product: {duvidas}} = dados
  return(   
    <View>  
  
    {duvidas.map((duvida) =>(
      <View style={styles.container}>
      <Text style={styles.question}>Pergunta: {duvida.pergunta}</Text>
      <Text style={styles.info}>Nome: {duvida.nome}</Text>
      <Text style={styles.info}>Data: {duvida.data}</Text>
      <View style={styles.answerContainer}>
        <Text style={styles.answerLabel}>Resposta do vendedor:</Text>
        <Text style={styles.answer}>{duvida.resposta}</Text>
      </View>
      </View>
    ))}
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
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 5,
  },
  answerContainer: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 10,
  },
  answerLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  answer: {
    fontSize: 16,
    marginTop: 5,
  },
});

