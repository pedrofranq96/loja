import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import dbData from '../components/utils/db.json';

export default function ProdutoComentarios({ comentarioId }) {
  const comentarios = dbData.comentarios;
  const comentario = comentarios.find((c) => c.comentarioId === comentarioId);

  if (!comentario) {
    return <Text>Comentário não encontrado</Text>;
  }
  return (
    <View style={styles.container}>
      <View key={comentario.comentarioId}>
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
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});