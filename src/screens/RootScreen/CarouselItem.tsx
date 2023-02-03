import { StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface CarouselItemProps {
  imageSrc: string
}

function CarouselItem({ imageSrc }: CarouselItemProps) {
  return <Image style={styles.image} source={{ uri: imageSrc }} />;
}

const styles = StyleSheet.create({
  image: {
    width, height: 216,
  },
});

export default CarouselItem;
