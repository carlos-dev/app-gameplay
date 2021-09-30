import React from 'react';
import { View, Image } from 'react-native';

import { styles } from './styles';

export default function GuildIcon() {
  const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-7-1.png';

  return (
    <Image source={{ uri }} style={styles.image} resizeMode="cover" />
  );
}
