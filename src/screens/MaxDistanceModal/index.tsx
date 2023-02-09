import { useState } from 'react';
import {
  StyleSheet, View,
} from 'react-native';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';

import { RootStackScreenProps } from '../../types';
import HalfModal from '../../components/HalfModal';
import Slider from '../../components/Slider';

export default function MaxDistanceModal({ navigation, route }: RootStackScreenProps<'MaxDistanceModal'>) {
  const [maxDistance, setMaxDistance] = useState(1);

  return (
    <HalfModal
      route={route}
      percentageHeight={0.3}
      navigation={navigation as any}
      containerStyle={styles.container}
      content={(
        <>
          <StyledText
            fontName={FontName.GothamBold}
            fontSize={22}
            style={styles.title}
          >
            Agregar dirección de entrega
          </StyledText>
          <StyledText
            fontName={FontName.GothamBook}
            fontSize={14}
            style={styles.subtitle}
          >
            Puedes modificar el radio de distancia para encontrar tu restaurante
          </StyledText>
          <View style={styles.sliderContainer}>
            <Slider
              value={maxDistance}
              setValue={setMaxDistance}
              min={1}
              max={5}
              trackMarks={[1, 2, 3, 4, 5]}
            />
          </View>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 0,
    paddingTop: 56,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    lineHeight: 30,
    color: '#333333',
  },
  subtitle: {
    marginTop: 10,
    lineHeight: 20,
    color: '#ADADAD',
    marginBottom: 5,
    textAlign: 'center',
  },
  sliderContainer: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 88,
  },
});
