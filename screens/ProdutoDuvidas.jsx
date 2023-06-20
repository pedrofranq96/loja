import React from "react";
import { View, Text } from "react-native";
import dbData from '../components/utils/db.json';
import { StyleSheet } from "react-native";
export default function ProdutoDuvidas({ duvidaId }) {
  const duvida = dbData.duvidas;
  const prodDuvida = duvida.find((d) => d.id === duvidaId);

  if (!prodDuvida) {
    return <Text>Duvida não encontrada</Text>;
  }
  return(
    <View style={styles.container}>
    <Text style={styles.question}>Pergunta: {prodDuvida.pergunta}</Text>
    <Text style={styles.info}>Nome: {prodDuvida.nome}</Text>
    <Text style={styles.info}>Data: {prodDuvida.data}</Text>
    <View style={styles.answerContainer}>
      <Text style={styles.answerLabel}>Resposta do vendedor:</Text>
      <Text style={styles.answer}>{prodDuvida.resposta}</Text>
    </View>
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

