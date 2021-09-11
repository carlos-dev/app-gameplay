import React from 'react';
import {
  View, Text, Image,
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcon';

import { styles } from './styles';

import Illustration from '../../assets/illustration.png';

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Image source={Illustration} style={styles.image} resizeMode="stretch" />

      <View style={styles.content}>
        <Text style={styles.title}>
          Concecte-se
          {'\n'}
          a orgazine suas
          {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games
          {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon title="Entrar com Discord" activeOpacity={0.7} />
      </View>
    </View>
  );
}
