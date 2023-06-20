import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default function ProdutoAvaliacao({ dados }){
  const {product} = dados
  return(
    <View style={styles.container}>
      <Text style={styles.label}>Avaliações:</Text>
      <Text style={styles.title}>{product.avaliacoes} 
          <Icon name="star" style={styles.specs} />
          <Icon name="star" style={styles.specs} />
          <Icon name="star" style={styles.specs} />
          <Icon name="star" style={styles.specs} />
          <Icon name="star" style={styles.specs} />

      </Text>
    </View>
  )
  };


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