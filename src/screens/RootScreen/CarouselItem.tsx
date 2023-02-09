import { StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface CarouselItemProps {
  imageSrc: any
}

function CarouselItem({ imageSrc }: CarouselItemProps) {
  return <Image style={styles.image} source={imageSrc} />;
}

const styles = StyleSheet.create({
  image: {
    width,
    height: 216,
    borderRadius: 8,
  },
});

export default CarouselItem;
