import React from 'react';
import {
  View, ScrollView, StyleSheet, Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

export interface CarouselProps {
  height: number;
  pagingEnabled?: boolean;
  items: any[] | null | undefined;
}

export function Carousel({ items, height, pagingEnabled = false }: CarouselProps) {
  if (!items || !items.length) return null;
  return (
    <View
      style={{ ...styles.scrollContainer, height }}
    >
      <ScrollView
        horizontal
        pagingEnabled={pagingEnabled}
        onScrollEndDrag={(e) => {
          console.log(e.nativeEvent.contentOffset.x);
        }}
        showsHorizontalScrollIndicator
      >
        {items}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
  },
  image: {
    width,
  },
});
