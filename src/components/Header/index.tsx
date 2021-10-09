import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';

import { styles } from './styles';

type Props = {
  title: string;
  action?: ReactNode
}

export default function AppointmentDetails({ title, action }: Props) {
  const { secondary100, secondary40, heading } = theme.colors;
  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={[secondary100, secondary40]}
      style={styles.container}
    >
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>
        {title}
      </Text>

      {
        action
        && (
          action
        )
      }

    </LinearGradient>
  );
}

AppointmentDetails.defaultProps = {
  action: null,
};
