import React from 'react';
import { View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Appointment from '../../components/Appointment';
import ButtonAdd from '../../components/ButtonAdd';
import CategorySelect from '../../components/CategorySelect';
import ListDivider from '../../components/ListDivider';
import ListHeader from '../../components/ListHeader';
import Profile from '../../components/Profile';

import { Background } from '../../components/Background';

import { styles } from './styles';

export default function Home() {
  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/04 às 20:40',
      description: 'bora jogar',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/04 às 20:40',
      description: 'bora jogar',
    },
  ];

  const navigation = useNavigation();

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={() => navigation.navigate('AppointmentCreate')} />
      </View>

      <CategorySelect hasCheckBox />

      <View style={styles.content}>
        <ListHeader title="Partidas agendadas" subtitle="Total 6" />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment
              data={item}
              onPress={() => navigation.navigate('AppointmentDetails')}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
