import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from './styles/bannerStyle';

// @ts-ignore
import logo from './assets/clipart.png';

export default () => (
  <View style={styles.banner}>
    <Image source={logo} style={styles.logoSmall}></Image>
    <View style={styles.titles}>
        <Text style={styles.titulo}>ISNPA -</Text>
        <Text style={styles.subtitulo}>Gestor de finanzas</Text>
    </View>
  </View>
)
