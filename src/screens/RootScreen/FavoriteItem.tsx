import {
  StyleSheet, Image, View,
} from 'react-native';
import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import { FavoriteProduct } from '../../data/favoriteProducts';
import StarSvg from '../assets/images/star.svg';

interface FavoriteItemProps {
  favoriteItem: FavoriteProduct
}

function FavoriteItem({ favoriteItem }: FavoriteItemProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.brandLogo}
        source={favoriteItem.brandLogo}
      />
      <Image style={styles.productImage} source={favoriteItem.image} />
      <View style={styles.descriptionContainer}>
        <View style={styles.descriptionRowContainer}>
          <StyledText fontName={FontName.GothamBook} fontSize={12} style={styles.descriptionText}>
            {favoriteItem.name}
          </StyledText>
          <View style={styles.ratingContainer}>
            <StarSvg width={12} height={12} style={styles.starIcon} />
            <StyledText fontName={FontName.GothamBook} fontSize={12} style={styles.descriptionText}>
              {favoriteItem.stars}
            </StyledText>
          </View>
        </View>
        <View style={styles.descriptionRowContainer}>
          <StyledText fontName={FontName.GothamBold} fontSize={12} style={styles.brandName}>
            {favoriteItem.brand}
          </StyledText>
          <StyledText fontName={FontName.GothamBook} fontSize={12} style={styles.descriptionText}>
            {favoriteItem.deliveryTime.min}
            -
            {favoriteItem.deliveryTime.max}
            {' '}
            min.
          </StyledText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 248,
    height: 152,
    display: 'flex',
    backgroundColor: '#fff',
    marginRight: 5,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 3,
  },
  brandLogo: {
    width: 42, height: 42, position: 'absolute', top: 8, left: 12, zIndex: 1,
  },
  productImage: { width: 260, height: 96, marginLeft: -5 },
  descriptionContainer: {
    display: 'flex', paddingHorizontal: 8, paddingTop: 12, backgroundColor: '#fff',
  },
  descriptionRowContainer: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff',
  },
  ratingContainer: { display: 'flex', flexDirection: 'row', backgroundColor: '#fff' },
  starIcon: { marginTop: 1, marginRight: 1 },
  descriptionText: { color: '#333333', lineHeight: 16 },
  brandName: { color: '#00BAA4', lineHeight: 16 },
});

export default FavoriteItem;
