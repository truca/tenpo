import {
  View, StyleSheet, Image,
} from 'react-native';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import { Brand } from '../../data/brands';
import StarSvg from '../../assets/images/star.svg';

interface BrandItemProps {
  brand: Brand
}

function BrandItem({ brand }: BrandItemProps) {
  return (
    <View style={styles.container}>
      {brand.discount && (
      <View style={styles.discountContainer}>
        <StyledText fontName={FontName.GothamMedium} fontSize={9} style={styles.discountText}>
          {brand.discount}
          %
        </StyledText>
        <StyledText fontName={FontName.GothamMedium} fontSize={7} style={styles.discountText}>
          dcto
        </StyledText>
      </View>
      )}
      <View style={styles.itemContainer}>
        <Image style={styles.brandLogo} source={brand.logo} />
        <StyledText fontName={FontName.GothamMedium} fontSize={14} style={styles.brandName}>
          {brand.name}
        </StyledText>
        <BrandDescription brand={brand} />
      </View>
    </View>
  );
}

function BrandDescription({ brand }: BrandItemProps) {
  return (
    <View style={styles.brandDescription}>
      <StarSvg width={12} height={12} style={styles.starIcon} />
      <StyledText
        fontName={FontName.RobotoRegular}
        fontSize={12}
        style={styles.starsText}
      >
        {brand.stars}
      </StyledText>
      <StyledText fontName={FontName.RobotoRegular} fontSize={12} style={styles.deliveryText}>
        {brand.deliveryTime.min}
        -
        {brand.deliveryTime.max}
        {' '}
        min.
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex', width: 110, height: 145, alignItems: 'center', backgroundColor: '#FFF', position: 'relative',
  },
  discountContainer: {
    backgroundColor: '#00BAA4', width: 30, height: 30, borderRadius: 15, position: 'absolute', right: 0, zIndex: 1, top: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
  },
  discountText: {
    color: '#fff', lineHeight: 8, textTransform: 'uppercase',
  },
  itemContainer: { backgroundColor: '#fff', marginTop: 6, right: 1 },
  brandLogo: { width: 100, height: 100, borderRadius: 16 },
  brandName: { color: '#333333', lineHeight: 20 },
  brandDescription: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFF',
  },
  starIcon: { marginTop: 1, marginRight: 1 },
  starsText: {
    color: '#333333', marginRight: 5, lineHeight: 16,
  },
  deliveryText: { color: '#333333', lineHeight: 16 },
});

export default BrandItem;
