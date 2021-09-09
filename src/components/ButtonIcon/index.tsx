import React from 'react';
import {
  Text, Image, View, TouchableOpacity, TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

import Discord from '../../assets/discord.png';

type Props = TouchableOpacityProps &{
  title: string,
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={Discord} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
