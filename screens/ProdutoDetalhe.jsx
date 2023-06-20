import React from 'react';
import { View, Text, Image,TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
//import styles from './utils/Styles';
import ProductInfo from '../components/ProductInfo';



export default function Detalhes({ route }) {
  const { product } = route.params;
  const navigation = useNavigation();

  const navDuvidas = () => {
    navigation.navigate('ProdutoDuvidas');
  };

  
  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }}  style={styles.image}/>
      <View style={styles.detailsContainer}>
        <Text style={styles.name}>{product.nome}</Text>
        <Text style={styles.price} >Preço: <Text style={styles.price2}>{product.price.toFixed(2)}</Text></Text>
      </View>
       
        <ProductInfo />
        <TouchableOpacity style={styles.button} onPress={navDuvidas}>
          <Text style={styles.buttonText}>Dúvidas sobre o produto</Text>
      </TouchableOpacity>
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
