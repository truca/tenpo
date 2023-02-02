import React from 'react';
import {
  View, ScrollView, Image, StyleSheet, Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const height = width * 0.8;

export interface CarouselProps {
  images: string[] | null | undefined
}

export function Carousel({ images }: CarouselProps) {
  if (!images || !images.length) return null;
  return (
    <View
      style={styles.scrollContainer}
    >
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator
      >
        {images.map((imageSrc) => (
          <Image style={styles.image} source={{ uri: imageSrc }} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    height,
  },
  image: {
    width,
    height,
  },
});
