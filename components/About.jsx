import React from "react";

import {Text, View} from 'react-native';
import styles from "./utils/Styles";

export default function About(){
    return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sobre</Text>
        <Text style={styles.version}>Versão 1.0.0</Text>
      </View>
    </View>
      );
}