import {
  useState, useEffect, useCallback, useContext,
} from 'react';
import {
  Alert, StyleSheet, TextInput, TouchableOpacity, Image,
} from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import LocationSvg from '../../assets/images/location.svg';

import { View } from '../../components/Themed';
import { RootStackScreenProps } from '../../types';
import { AddressContext } from '../../contexts/AddressContext';

export interface Store {
  id: number,
  logo: any,
  name: string,
  address: string,
  isOpen: boolean,
  distance: number,
}

const STORES: Store[] = [{
  id: 1,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt Bilbao',
  address: 'Av. Francisco Bilbao 3975, La Reina',
  isOpen: true,
  distance: 1,
},
{
  id: 2,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt pajaritos',
  address: 'Melt Pajaritos Americo Vespucio 51 - Local 128, Pajaritos, Maipú',
  isOpen: false,
  distance: 1,
},
{
  id: 3,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt Barrio Brasil',
  address: 'Compañía de Jesús 1909, Santiago',
  isOpen: false,
  distance: 3,
},
{
  id: 4,
  logo: require('../../assets/images/melt.png'),
  name: 'Melt El Bosque',
  address: 'Callao 2912, Las Condes',
  isOpen: true,
  distance: 5,
}];

export default function StoresScreen({ navigation }: RootStackScreenProps<'Root'>) {
  const [inputValue, setInputValue] = useState('');
  const [filterClosedStores, setFilterClosedStores] = useState<boolean>(false);
  const { maxDistance } = useContext(AddressContext);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" size={26} color="#008F7E" />
          </TouchableOpacity>
          <View style={styles.titleTexts}>
            <StyledText
              fontName={FontName.GothamBold}
              fontSize={12}
              style={styles.subtitle}
            >
              Tu ubicación cercana
            </StyledText>
            <StyledText
              fontName={FontName.GothamLight}
              fontSize={18}
              style={styles.title}
            >
              Calle Agustinas #546
            </StyledText>
          </View>

          <TouchableOpacity onPress={() => navigation.replace('Address')}>
            <View style={styles.targetIcon}>
              <MaterialCommunityIcons name="target" size={26} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Escribe nombre del restaurante que búscas"
        />
        {inputValue && (
        <View style={styles.storeFiltersContainer}>
          <TouchableOpacity onPress={() => setFilterClosedStores((prev) => !prev)}>
            <View
              style={[styles.storeFilter, filterClosedStores ? {} : styles.storeFilterDisabled]}
            >
              <StyledText
                fontName={FontName.GothamBook}
                fontSize={12}
                style={[styles.subtitle, styles.storesFilterText]}
              >
                Solo locales abiertos
              </StyledText>
              <AntDesign name="checkcircle" size={18} color="#008F7E" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MaxDistanceModal')}>
            <View style={styles.storeFilter}>
              <StyledText
                fontName={FontName.GothamBook}
                fontSize={12}
                style={[styles.subtitle, styles.storesFilterText]}
              >
                Área de búsqueda:
              </StyledText>
              <StyledText
                fontName={FontName.GothamBold}
                fontSize={12}
                style={styles.subtitle}
              >
                {maxDistance}
                {' '}
                KM
              </StyledText>
            </View>
          </TouchableOpacity>
        </View>
        )}
        {inputValue && STORES.filter((store) => {
          const isWithinDistance = store.distance <= maxDistance;
          const matchesOpenState = filterClosedStores ? store.isOpen : true;

          return isWithinDistance && matchesOpenState;
        }).map((store) => (
          <View style={styles.storeOption} key={store.id}>
            <Image style={styles.storeLogo} source={store.logo} />
            <View style={styles.storeOptionDescription}>
              <StyledText
                fontName={FontName.GothamMedium}
                fontSize={18}
                style={styles.storeOptionName}
              >
                {store.name}
              </StyledText>
              <StyledText
                fontName={FontName.RobotoRegular}
                fontSize={12}
                style={styles.storeOptionAddress}
              >
                {store.address}
              </StyledText>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    height: 160,
    backgroundColor: '#D4F9F5',
    paddingBottom: 42,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  titleTexts: {
    backgroundColor: 'transparent',
  },
  targetIcon: {
    backgroundColor: '#008F7E',
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  contentContainer: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
  },
  title: {
    color: '#008F7E',
  },
  subtitle: {
    lineHeight: 16,
    color: '#008F7E',
  },
  storeFiltersContainer: {
    backgroundColor: '#F2F2F2',
    height: 100,
    paddingBottom: 18,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    alignItems: 'flex-end',
    width: '100%',
  },
  storeFilter: {
    borderColor: '#008F7E',
    borderRadius: 4,
    borderWidth: 2,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 8,
    height: 32,
  },
  storeFilterDisabled: {
    opacity: 0.3,
  },
  storesFilterText: {
    marginRight: 8,
  },
  distanceFilterValue: {
    color: '#008F7E',
    lineHeight: 16,
  },
  storeOption: {
    backgroundColor: 'transparent',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: '#F2F2F2',
    borderStyle: 'solid',
  },
  storeLogo: {
    width: 40,
    height: 40,
  },
  storeOptionDescription: {
    backgroundColor: 'transparent',
    marginLeft: 14,
  },
  storeOptionName: {
    color: '#333333',
    lineHeight: 22,
  },
  storeOptionAddress: {
    color: '#ADADAD',
    lineHeight: 16,
  },

  loadingContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    marginTop: 166,
  },
  loadingAddress: {
    color: '#ADADAD',
  },
  input: {
    backgroundColor: 'white',
    color: '#333333',
    fontSize: 16,
    lineHeight: 16,
    fontFamily: 'GothamBook',
    fontWeight: '300',
    height: 56,
    borderRadius: 28,
    paddingBottom: 20,
    paddingTop: 22,
    paddingHorizontal: 24,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.29,
    shadowRadius: 3,
    elevation: 20,
    position: 'absolute',
    top: -28,
    width: '100%',
    zIndex: 1,
  },
  map: {
    width: '100%',
    height: 200,
  },
  addressForm: {
    display: 'flex',
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
    paddingTop: 33,
  },
  addressSecondLineTitle: {
    color: '#333333',
    lineHeight: 22,
  },
  addressSecondLineDescription: {
    color: '#ADADAD',
    lineHeight: 20,
  },
  addressSecondLineInput: {
    width: '100%',
    marginTop: 13,
    alignItems: 'flex-start',
    display: 'flex',
    borderColor: '#e8e8e8',
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#00BAA4',
    paddingVertical: 20,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 36,
    marginHorizontal: 8,
  },
  submitText: {
    textTransform: 'uppercase',
    color: '#FFFFFF',
    lineHeight: 20,
    fontWeight: '700',
  },
});
