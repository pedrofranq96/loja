import React from "react";
import dbData from '../components/utils/db.json';
import { Text, View, StyleSheet } from 'react-native';

export default function ProdutoComentarios({comentarioId}) {
  const comentarios = dbData.comentarios;
  const comentario = comentarios.find((c) => c.id === comentarioId);

  if (!comentario) {
    return <Text>Comentário não encontrado</Text>;
  }
  return (
    <View style={styles.container}>
      <View key={comentario.id}>
        <Text style={styles.comentario}>Comentário: {comentario.comentario}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Nome:</Text>
            <Text style={styles.infoValue}>{comentario.nome}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Data:</Text>
            <Text style={styles.infoValue}>{comentario.data}</Text>
          </View>
          <Text style={styles.info}>Nota: {comentario.nota}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 10,
  },
  comentario: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    marginLeft: 10,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  infoValue: {
    fontSize: 16,
  },
});