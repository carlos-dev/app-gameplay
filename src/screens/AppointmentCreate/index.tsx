import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { Background } from '../../components/Background';
import Header from '../../components/Header';
import GuildIcon from '../../components/GuildIcon';
import SmallInput from '../../components/SmallInput';
import CategorySelect from '../../components/CategorySelect';

import { styles } from './styles';
import { theme } from '../../global/styles/theme';

export default function AppointmentCreate() {
  return (
    <Background>
      <Header title="Agendar partida" />

      <Text style={[styles.label, styles.labelHeader]}>Categoria</Text>

      <CategorySelect hasCheckBox />

      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {
              // <View style={styles.image} />
              <GuildIcon />
            }

            <View style={styles.selectBody}>
              <Text style={styles.label}>Selecione um servidor</Text>
            </View>
            <Feather
              name="chevron-right"
              color={theme.colors.heading}
              size={18}
            />
          </View>

          <SmallInput />
        </RectButton>
      </View>
    </Background>
  );
}
