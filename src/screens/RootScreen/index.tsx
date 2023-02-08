import React from 'react';
import {
  StyleSheet, Image, ScrollView, TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

import { View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import { Carousel } from '../../components/Carousel';
import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import SearchSvg from '../../assets/images/search.svg';
import LocationSvg from '../../assets/images/location.svg';
import Avatar from '../../assets/images/avatar.png';
import BRANDS from '../../data/brands';
import CATEGORIES from '../../data/categories';
import FAVORITE_PRODUCTS from '../../data/favoriteProducts';
import CarouselItem from './CarouselItem';
import BrandItem from './BrandItem';
import CategoryItem from './CategoryItem';
import FavoriteItem from './FavoriteItem';

const IMAGE_URLS = ['https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg', 'https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg'];

export default function RootScreen({ navigation }: RootStackScreenProps<'Root'>) {
  const CarouselItems = IMAGE_URLS.map((url) => <CarouselItem key={url} imageSrc={url} />);

  const BrandItems = BRANDS.map((brand) => <BrandItem key={brand.name} brand={brand} />);

  const CategoryItems = CATEGORIES.map(
    (category) => <CategoryItem key={category.name} category={category} />,
  );

  const FavoriteItems = FAVORITE_PRODUCTS.map(
    (favoriteItem) => <FavoriteItem favoriteItem={favoriteItem} />,
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={Avatar} />
        <SearchSvg width={24} height={24} />
      </View>
      <Carousel height={216} pagingEnabled items={CarouselItems} />
      <TouchableOpacity onPress={() => navigation.replace('Address')}>
        <View style={styles.addressContainer}>
          <LocationSvg width={22} height={25} />
          <View style={styles.addressTextContainer}>
            <StyledText fontName={FontName.GothamMedium} fontSize={12}>
              Enviaremos tus pedidos a
            </StyledText>
            <StyledText fontName={FontName.GothamLight} fontSize={16} style={styles.address}>
              Agustinas 546, Santiago, Región…
            </StyledText>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.restaurantsContainer}>
        <StyledText fontName={FontName.GothamBold} fontSize={18} style={styles.restaurantsTitle}>
          Restaurantes
        </StyledText>
        <Carousel height={145} items={BrandItems} />

        <StyledText
          fontName={FontName.GothamBold}
          fontSize={18}
          style={styles.sectionTitle}
        >
          Categorías
        </StyledText>
        <Carousel height={68} items={CategoryItems} />

        <StyledText
          fontName={FontName.GothamBold}
          fontSize={18}
          style={styles.sectionTitle}
        >
          Tus favoritos
        </StyledText>
        <Carousel height={162} items={FavoriteItems} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingBottom: 500,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#F2F2F2',
  },
  header: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    position: 'absolute',
    zIndex: 1,
  },
  avatar: { width: 50, height: 50 },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 32,
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#D4F9F5',
    alignItems: 'center',
    borderRadius: 20,
    color: '#008F7E',
  },
  address: { marginTop: 4 },
  addressTextContainer: {
    display: 'flex',
    backgroundColor: '#D4F9F5',
    marginLeft: 8,
  },
  restaurantsContainer: {
    backgroundColor: '#FFF', borderTopLeftRadius: 20, borderTopRightRadius: 20, marginTop: -20, paddingTop: 38, paddingHorizontal: 16, paddingBottom: 100,
  },
  restaurantsTitle: { color: 'black', marginBottom: 12, textTransform: 'uppercase' },
  sectionTitle: {
    color: 'black', marginBottom: 20, textTransform: 'uppercase', marginTop: 60,
  },
});
