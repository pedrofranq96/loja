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
import styles from './utils/Styles';

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
  return (
    <View style={styles.customBar}>
      <BottomTabBar {...props} />
    </View>
  );
};

export default function ProductInfo() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        name="Descrição"
        component={ProdutoDescricao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="credit-card" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Especificações"
        component={ProdutoEspecificacao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="tag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Avaliações"
        component={ProdutoAvaliacao}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="star" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Comentarios"
        component={ProdutoComentarios}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="envelope" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Vendedor"
        component={ContatoVendedor}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}