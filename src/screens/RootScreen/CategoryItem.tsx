import {
  StyleSheet, Image, View,
} from 'react-native';
import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import { Category } from '../../data/categories';

interface CategoryItemProps {
  category: Category
}

function CategoryItem({ category }: CategoryItemProps) {
  return (
    <View style={styles.container}>
      <Image style={styles.categoryImage} source={category.image} />
      <StyledText
        fontName={FontName.GothamBold}
        fontSize={14}
        style={styles.categoryName}
      >
        {category.name}
      </StyledText>
      <View style={styles.overlay} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 152, height: 65, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', marginRight: 5,
  },
  categoryImage: { width: 152, height: 65, position: 'absolute' },
  categoryName: {
    color: '#fff', textTransform: 'uppercase', lineHeight: 22, letterSpacing: 1.2, zIndex: 2,
  },
  overlay: {
    width: 144, height: 62, backgroundColor: '#00000029', position: 'absolute', zIndex: 1, borderRadius: 8,
  },
});

export default CategoryItem;
