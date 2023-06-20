import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  produtoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    padding: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    marginTop: 5,
  },
  imagemProduto: {
    width: 100,
    height: 100,    
  },
  detalhesContainer: {
    justifyContent: 'center',
    marginLeft: 5, 
    
    textOverflow: 'ellipsis',
    overflow: "hidden",
  },
  nomeProduto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descricaoProduto: {
    fontSize: 14,
    color: '#888',

    width: 200,
    
  },
  precoProduto: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 2,
    color: 'gold'
  },
  container : {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  content: {    
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  version: {
    fontSize: 18,
    color: '#888',
  },
  customBar: {
    position: 'relative',
    bottom: 1,
    left: 0,
    right: 0 
  },
});

export default styles;
