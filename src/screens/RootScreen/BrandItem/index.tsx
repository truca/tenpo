import {
  StyleSheet,
} from 'react-native';

import { FontName } from '../../../components/StyledText/types';
import { Brand } from '../../../data/brands';
import StarSvg from '../../../assets/images/star.svg';
import {
  Container, DiscountContainer, ItemContainer, BrandDescriptionContainer, StyledText, Image,
} from './components';

interface BrandItemProps {
  brand: Brand
}

function BrandItem({ brand }: BrandItemProps) {
  return (
    <Container>
      {brand.discount && (
      <DiscountContainer>
        <StyledText fontName={FontName.GothamMedium} fontSize={9} color="#fff" lineHeight={8} textTransform="uppercase">
          {brand.discount}
          %
        </StyledText>
        <StyledText fontName={FontName.GothamMedium} fontSize={7} color="#fff" lineHeight={8} textTransform="uppercase">
          dcto
        </StyledText>
      </DiscountContainer>
      )}
      <ItemContainer>
        <Image width={100} height={100} borderRadius={16} source={brand.logo} />
        <StyledText fontName={FontName.GothamMedium} fontSize={14} color="#333333" lineHeight={20}>
          {brand.name}
        </StyledText>
        <BrandDescription brand={brand} />
      </ItemContainer>
    </Container>
  );
}

function BrandDescription({ brand }: BrandItemProps) {
  return (
    <BrandDescriptionContainer>
      <StarSvg width={12} height={12} style={styles.starIcon} />
      <StyledText
        fontName={FontName.RobotoRegular}
        fontSize={12}
        color="#333333"
        lineHeight={16}
        css="margin-right: 5px;"
      >
        {brand.stars}
      </StyledText>
      <StyledText fontName={FontName.RobotoRegular} fontSize={12} color="#333333" lineHeight={16}>
        {brand.deliveryTime.min}
        -
        {brand.deliveryTime.max}
        {' '}
        min.
      </StyledText>
    </BrandDescriptionContainer>
  );
}

const styles = StyleSheet.create({
  starIcon: { marginTop: 1, marginRight: 1 },
});

export default BrandItem;
