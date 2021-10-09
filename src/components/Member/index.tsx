import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../global/styles/theme';

import Avatar from '../Avatar';

import { styles } from './styles';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

type Props = {
  data: MemberProps
}

export default function Member({ data }: Props) {
  const { on, primary } = theme.colors;
  const { avatar_url, status, username } = data;
  const isOnline = status === 'online';

  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar_url} />

      <View>
        <Text style={styles.title}>
          {username}
        </Text>

        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              {
                backgroundColor: isOnline ? on : primary,
              },
            ]}
          />
          <Text style={styles.nameStatus}>
            {isOnline ? 'Disponível' : 'Ocupado'}
          </Text>
        </View>
      </View>
    </View>
  );
}
