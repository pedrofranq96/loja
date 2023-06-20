import React, {useState, useEffect} from 'react';
import { View, Text, ActivityIndicator, Image, TouchableOpacity, ScrollView  } from 'react-native';
import styles from './utils/Styles';


export default function Lista({ navigation }){

  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        const data = require('./utils/db.json').produtos;
        setProdutos(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }, 2000);
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }


  

  return (
    <ScrollView>
      <View style={styles.container}>
        {produtos.map((produto) => (
          <TouchableOpacity key={produto.productId} onPress={() => navigation.navigate('Detalhes', { product: produto })}>

            <View style={styles.produtoContainer}>

              <Image source={{ uri: produto.image }} style={styles.imagemProduto} />

              <View style={styles.detalhesContainer}>
                <Text style={styles.nomeProduto}>{produto.nome}</Text>
                <Text style={styles.precoProduto}>R$ {produto.price}</Text>
                <Text style={styles.descricaoProduto}>{produto.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

