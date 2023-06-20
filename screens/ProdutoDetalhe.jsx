import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


import ProductInfo from '../components/ProductInfo';



export default function Detalhes({ dados }) {
  const { product } = dados
  console.log(produto); 

  return (
    <View>
      <Image source={{ uri: product.image }} />
      <View >
        <Text >{product.nome}</Text>
        <Text >
          Preço: <Text >{product.price.toFixed(2)}</Text>
        </Text>
      </View>

      <ProductInfo />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  image: {
    marginTop: 10,
    width: 400,
    height: 200,
    borderRadius: 10,
    marginBottom: 0,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    marginLeft: 10,
    fontSize: 15,
    fontFamily: 'sans-serif',
    marginBottom: 10
  },
  description: {
    textAlign:'center',
    marginTop: 10,
    fontSize: 14,
    marginBottom: 15,
  },
  price: {
    marginLeft: 100,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price2: {
    color:'gold'
  },
  button: {
    backgroundColor: '#f4511e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign:'center',
  }
});
