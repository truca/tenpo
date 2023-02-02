import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';
import { Carousel } from '../components/Carousel';
import Slider from '../components/Slider';
import StyledText from '../components/StyledText';
import { FontName } from '../components/StyledText/types';

export default function RootScreen({ navigation }: RootStackScreenProps<'Root'>) {
  const [value, setValue] = useState<number>(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen exists.</Text>
      <Carousel images={['https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg', 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg']} />
      <Slider value={value} setValue={setValue} min={1} max={5} trackMarks={[1, 2, 3, 4, 5]} />
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text>{value}</Text>
      </TouchableOpacity>
      <StyledText fontName={FontName.GothamLight} fontSize={16} style={styles.linkText}>
        Gotham
      </StyledText>
      <StyledText fontName={FontName.GothamBook} fontSize={16} style={styles.linkText}>
        Gotham
      </StyledText>
      <StyledText fontName={FontName.GothamMedium} fontSize={16} style={styles.linkText}>
        Gotham
      </StyledText>
      <StyledText fontName={FontName.GothamBold} fontSize={16} style={styles.linkText}>
        Gotham
      </StyledText>
      <StyledText fontName={FontName.GothamUltra} fontSize={16} style={styles.linkText}>
        Gotham
      </StyledText>

      <StyledText fontName={FontName.RobotoLight} fontSize={16} style={styles.linkText}>
        Roboto
      </StyledText>
      <StyledText fontName={FontName.RobotoRegular} fontSize={16} style={styles.linkText}>
        Roboto
      </StyledText>
      <StyledText fontName={FontName.RobotoBlack} fontSize={16} style={styles.linkText}>
        Roboto
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'F2F2F2',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
