import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import About from './components/About';
AppRegistry.registerComponent('loja', () => App);

import Lista from './components/ListaProdutos';

import ProdutoDuvidas from './screens/ProdutoDuvidas';
import ProductInfo from './components/ProductInfo';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Itens diversos" component={Lista}/>
      <Stack.Screen name="ProductInfo" component={ProductInfo}/>
      <Stack.Screen name="ProdutoDuvidas" component={ProdutoDuvidas} />
    </Stack.Navigator>
  );
}

export default function App(){
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="inicio">
          <Drawer.Screen name="inicio" component={MainStack} />
          <Drawer.Screen name="Sobre" component={About} />
        </Drawer.Navigator>
    </NavigationContainer>
    
  )
}