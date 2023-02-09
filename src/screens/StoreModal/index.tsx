import {
  StyleSheet, Image,
} from 'react-native';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';

import { RootStackScreenProps } from '../../types';
import HalfModal from '../../components/HalfModal';

export default function StoreModal({ navigation, route }: RootStackScreenProps<'StoreModal'>) {
  return (
    <HalfModal
      route={route}
      percentageHeight={0.2}
      navigation={navigation as any}
      containerStyle={styles.container}
      content={(
        <>
          <Image style={styles.brandLogo} source={require('../../assets/images/melt.png')} />
          <StyledText
            fontName={FontName.GothamBold}
            fontSize={22}
            style={styles.title}
          >
            Melt Pizzas
          </StyledText>
          <StyledText
            fontName={FontName.GothamBook}
            fontSize={12}
            style={styles.subtitle}
          >
            Pizzeria - snacks
          </StyledText>
          <StyledText
            fontName={FontName.GothamBook}
            fontSize={20}
            style={styles.contentPlaceholder}
          >
            Detalle de restaurante
          </StyledText>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 0,
    paddingTop: 28,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  brandLogo: {
    width: 148,
    height: 148,
    borderRadius: 8,
  },
  title: {
    lineHeight: 30,
    color: '#333333',
  },
  subtitle: {
    marginTop: 10,
    lineHeight: 16,
    color: '#ADADAD',
    marginBottom: 5,
    textAlign: 'center',
  },
  contentPlaceholder: {
    marginTop: 214,
    lineHeight: 28,
    color: '#ADADAD',
  },
});
