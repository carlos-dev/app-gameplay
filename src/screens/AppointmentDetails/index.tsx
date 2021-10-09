import React from 'react';
import {
  ImageBackground, Text, View, FlatList,
} from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import ListHeader from '../../components/ListHeader';
import Member from '../../components/Member';
import Header from '../../components/Header';
import ListDivider from '../../components/ListDivider';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import BannerImg from '../../assets/banner.png';

export default function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Carl',
      avatar_url: 'https://avatars.githubusercontent.com/u/31482507?v=4',
      status: 'online',
    },
    {
      id: '2',
      username: 'Carl',
      avatar_url: 'https://avatars.githubusercontent.com/u/31482507?v=4',
      status: 'offline',
    },
  ];

  return (
    <Background>
      <Header
        title="Detalhes"
        action={(
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        )}
      />

      <ImageBackground
        source={BannerImg}
        style={styles.banner}
      >
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partuda da md10
          </Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 2" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Member data={item} />
        )}
        ItemSeparatorComponent={() => <ListDivider />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}