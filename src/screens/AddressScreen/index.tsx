import { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import LocationSvg from '../../assets/images/location.svg';

import { View } from '../../components/Themed';

export default function AddressScreen() {
  const [inputValue, setInputValue] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <LocationSvg />
          <StyledText
            fontName={FontName.GothamLight}
            fontSize={18}
            style={styles.title}
          >
            Agregar dirección de entrega
          </StyledText>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Escribe tu dirección"
          keyboardType="numeric"
        />
        <View style={styles.loadingContainer}>
          <StyledText
            fontName={FontName.GothamLight}
            fontSize={18}
            style={styles.loadingAddress}
          >
            Esperando tu ubicación…
          </StyledText>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
  },
  headerContainer: {
    height: 160,
    backgroundColor: '#D4F9F5',
    paddingBottom: 42,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'center',
  },
  title: {
    color: '#008F7E',
  },
  contentContainer: {
    backgroundColor: '#d9d9d9',
    flex: 1,
  },
  loadingContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    marginTop: 166,
  },
  loadingAddress: {
    color: '#ADADAD',
  },
  input: {
    backgroundColor: 'white',
    color: 'red',
    height: 56,
    borderRadius: 28,
    paddingVertical: 20,
    paddingHorizontal: 24,
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 0,
    position: 'relative',
    bottom: 28,
  },
});
