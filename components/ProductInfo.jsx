import React from 'react';
import { View} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProdutoDescricao from '../screens/ProdutoDescricao'
import ProdutoEspecificacao from '../screens/ProdutoEspecificacao'
import ProdutoAvaliacao  from '../screens/ProdutoAvaliacao'
import ProdutoComentarios  from '../screens/ProdutoComentarios'
import ContatoVendedor  from '../screens/ContatoVendedor'
import ProdutoDuvidas from '../screens/ProdutoDuvidas'
import styles from './utils/Styles';

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
  return (
    <View style={styles.customBar}>
      <BottomTabBar {...props} />
    </View>
  );
};

export default function ProductInfo({route}) {
  const routes = route.params

  return (
    <Tab.Navigator name="ProductInfo" tabBar={(props) => <CustomTabBar {...props} />}>
      
      <Tab.Screen
        name="Descrição"
       
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }}
      >{() => <ProdutoDescricao dados={routes}/>}</Tab.Screen>
      <Tab.Screen
        name="Especificações"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="tag" color={color} size={size} />
          ),
        }}
      >
        {() => <ProdutoEspecificacao dados={routes}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Avaliações"
        
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      >{() => <ProdutoAvaliacao dados={routes}/>}</Tab.Screen>
      <Tab.Screen
        name="Comentarios"
       
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope" color={color} size={size} />
          ),
        }}
      >
        {() => <ProdutoComentarios dados={routes}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Vendedor"
       
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      >
      {() => <ContatoVendedor dados={routes}/>}
    </Tab.Screen>
    <Tab.Screen
        name="Duvidas"
       
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="question-circle" color={color} size={size} />
          ),
        }}
      >
      {() => <ProdutoDuvidas dados={routes}/>}
    </Tab.Screen>

      
    </Tab.Navigator>
  );
}