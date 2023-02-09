import { useState, useEffect, useCallback } from 'react';
import {
  Alert, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import LocationSvg from '../../assets/images/location.svg';

import { View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';

export default function StoresScreen({ navigation }: RootStackScreenProps<'Root'>) {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={26} color="#008F7E" />
          </TouchableOpacity>
          <View style={styles.titleTexts}>
            <StyledText
              fontName={FontName.GothamBold}
              fontSize={12}
              style={styles.subtitle}
            >
              Tu ubicación cercana
            </StyledText>
            <StyledText
              fontName={FontName.GothamLight}
              fontSize={18}
              style={styles.title}
            >
              Calle Agustinas #546
            </StyledText>
          </View>

          <TouchableOpacity onPress={() => navigation.replace('Address')}>
            <View style={styles.targetIcon}>
              <MaterialCommunityIcons name="target" size={26} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Escribe nombre del restaurante que búscas"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  titleTexts: {
    backgroundColor: 'transparent',
  },
  targetIcon: {
    backgroundColor: '#008F7E',
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  contentContainer: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
  title: {
    color: '#008F7E',
  },
  subtitle: {
    lineHeight: 16,
    color: '#008F7E',
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
    color: '#333333',
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'GothamBook',
    fontWeight: '300',
    height: 56,
    borderRadius: 28,
    paddingBottom: 20,
    paddingTop: 22,
    paddingHorizontal: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    position: 'absolute',
    top: -28,
    width: '100%',
    zIndex: 1,
  },
  map: {
    width: '100%',
    height: 200,
  },
  addressForm: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    paddingTop: 33,
  },
  addressSecondLineTitle: {
    color: '#333333',
    lineHeight: 22,
  },
  addressSecondLineDescription: {
    color: '#ADADAD',
    lineHeight: 20,
  },
  addressSecondLineInput: {
    width: '100%',
    marginTop: 13,
    alignItems: 'flex-start',
    display: 'flex',
    borderColor: '#e8e8e8',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#00BAA4',
    paddingVertical: 20,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 8,
  },
  submitText: {
    textTransform: 'uppercase',
    color: '#FFFFFF',
    lineHeight: 20,
    fontWeight: '700',
  },
});
