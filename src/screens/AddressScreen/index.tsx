import {
  useState, useCallback, useContext,
} from 'react';
import {
  Alert, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import LocationSvg from '../../assets/images/location.svg';
import ClearSvg from '../../assets/images/clear.svg';
import SearchSvg from '../../assets/images/search.svg';

import { View } from '../../components/Themed';
import { GOOGLE_MAPS_API_KEY } from '../../constants/ApiKeys';
import { RootStackScreenProps } from '../../types';
import { AddressContext } from '../../contexts/AddressContext';

interface Option {
  label: string;
  description: string;
  value: string;
}

const failedConnection = async () => new Promise((_, reject) => {
  setTimeout(() => reject(new Error('fail')), 1000);
});

export default function AddressScreen({ navigation }: RootStackScreenProps<'Root'>) {
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState<Option[]>([]);
  const [isLoadingGeolocation, setIsLoadingGeolocation] = useState<boolean>(false);
  const [addressSecondLine, setAddressSecondLine] = useState('');
  const {
    address, setAddress, coords, setCoords, clearFullAddress,
  } = useContext(AddressContext);

  const fetchAutocomplete = useCallback(async (filter: string) => {
    const shouldConnectionFail = Math.random() < 0.2;

    if (shouldConnectionFail) {
      failedConnection().catch(() => {
        Alert.alert('Solicitud fallida', 'El servicio de Google Maps está caído, Quieres reintentar?', [
          {
            text: 'No',
            onPress: () => {},
            style: 'cancel',
          },
          { text: 'OK', onPress: () => fetchAutocomplete(filter) },
        ]);
      });
      return;
    }

    const results = await axios.get(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${filter}&components=country:CL&key=${GOOGLE_MAPS_API_KEY}`,
    );
    const newOptions = results.data.predictions.map(
      (prediction: any) => {
        const mainText = prediction.structured_formatting.main_text;
        const fullText = prediction.description;
        return ({
          label: mainText,
          description: fullText.substr(mainText.length + 2),
          value: prediction.place_id,
        });
      },
    );
    setOptions(newOptions);
  }, [setOptions]);

  const fetchAddressFromCoordinates = useCallback(
    async (locationArg: Location.LocationObjectCoords | null) => {
      if (locationArg) {
        const results = await axios.get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${locationArg?.latitude},${locationArg?.longitude}&key=${GOOGLE_MAPS_API_KEY}`,
        );
        const newAddress = results.data.results[0].formatted_address;
        if (newAddress.length > 31) setAddress(`${newAddress.substr(0, 31)}…`);
        else setAddress(newAddress);
      }
    },
    [setAddress],
  );

  const fetchPlaceFromPlaceId = useCallback(
    async (placeId: string) => {
      const results = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&fields=address_component,geometry,formatted_address,name&language=es&key=${GOOGLE_MAPS_API_KEY}`,
      );
      const newAddress = results.data.result.formatted_address;
      const { lat, lng } = results.data.result.geometry.location;
      if (newAddress.length > 31) setAddress(`${newAddress.substr(0, 31)}…`);
      else setAddress(newAddress);

      setCoords({ lat, lng });
    },
    [setAddress, setCoords],
  );

  const fetchCurrentPosition = useCallback(async () => {
    setIsLoadingGeolocation(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setIsLoadingGeolocation(false);
      Alert.alert('Permiso para acceder a la ubicación fue denegado');
      return;
    }

    const userLocation = await Location.getCurrentPositionAsync(
      { accuracy: Location.LocationAccuracy.Highest },
    );
    setIsLoadingGeolocation(false);
    if (userLocation) {
      setOptions([]);
      setInputValue('');
      setCoords({ lat: userLocation.coords.latitude, lng: userLocation.coords.longitude });
      fetchAddressFromCoordinates(userLocation.coords);
    } else {
      Alert.alert('Error getting your location!');
    }
  }, [fetchAddressFromCoordinates, setCoords]);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <LocationSvg />
          <StyledText
            fontName={FontName.GothamLight}
            fontSize={18}
            style={styles.title}
          >
            Agregar dirección de entrega
          </StyledText>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.addressInputContainer}>
          <TextInput
            style={styles.addressInput}
            onChangeText={setInputValue}
            value={address || inputValue}
            placeholder="Escribe tu dirección"
          />

          {address ? (
            <TouchableOpacity
              style={{
                zIndex: 2, position: 'absolute', right: 25, top: -12,
              }}
              onPress={clearFullAddress}
            >
              <ClearSvg width={24} height={24} />
            </TouchableOpacity>
          ) : inputValue && (
            <TouchableOpacity
              style={{
                zIndex: 2, position: 'absolute', right: 25, top: -12,
              }}
              onPress={() => fetchAutocomplete(inputValue)}
            >
              <SearchSvg width={24} height={24} />
            </TouchableOpacity>
          )}
        </View>
        {coords ? (
          <>
            <MapView
              style={styles.map}
              region={{
                latitude: coords.lat,
                longitude: coords.lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                title="YIKES, Inc."
                description="Web Design and Developmentt"
                coordinate={{ latitude: coords.lat, longitude: coords.lng }}
                icon={require('../../assets/images/marker.png')}
              />
            </MapView>
            <View style={styles.addressForm}>
              <StyledText
                fontName={FontName.GothamBold}
                fontSize={16}
                style={styles.addressSecondLineTitle}
              >
                Agregar información de entrega
              </StyledText>
              <StyledText
                fontName={FontName.GothamBook}
                fontSize={14}
                style={styles.addressSecondLineDescription}
              >
                Depto, Oficina, Piso, Block,
              </StyledText>
              <TextInput
                style={styles.addressSecondLineInput}
                value={addressSecondLine}
                onChangeText={setAddressSecondLine}
                multiline
                numberOfLines={5}
                underlineColorAndroid="transparent"
              />
              <TouchableOpacity onPress={() => navigation.navigate('Stores')}>
                <View style={styles.submitButton}>
                  <StyledText
                    fontName={FontName.GothamBook}
                    fontSize={14}
                    style={styles.submitText}
                  >
                    Agregar Dirección
                  </StyledText>
                </View>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          !options.length && isLoadingGeolocation && (
          <View style={styles.loadingContainer}>
            <StyledText
              fontName={FontName.GothamBold}
              fontSize={14}
              style={styles.loadingAddress}
            >
              Esperando tu ubicación…
            </StyledText>
          </View>
          )
        )}

        {!address && options.length > 0 && (
        <View style={styles.optionsContainer}>
          { options.map((option) => (
            <TouchableOpacity onPress={() => fetchPlaceFromPlaceId(option.value)}>
              <View style={styles.addressOption} key={option.value}>
                <View style={styles.addressOptionDescription}>
                  <StyledText
                    fontName={FontName.GothamMedium}
                    fontSize={18}
                    style={styles.addressOptionName}
                  >
                    {option.label}
                  </StyledText>
                  <StyledText
                    fontName={FontName.RobotoRegular}
                    fontSize={12}
                    style={styles.addressOptionAddress}
                  >
                    {option.description}
                  </StyledText>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={fetchCurrentPosition}>
            <View style={[styles.addressOption, styles.useLocationOption]}>
              <MaterialCommunityIcons name="target" size={26} color="#00BAA4" />
              <View style={styles.addressOptionDescription}>
                <StyledText
                  fontName={FontName.GothamMedium}
                  fontSize={14}
                  style={styles.useLocationText}
                >
                  Buscar por ubicación
                </StyledText>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        )}
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
    justifyContent: 'center',
  },
  title: {
    color: '#008F7E',
  },
  contentContainer: {
    backgroundColor: '#fff',
    flex: 1,
    position: 'relative',
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
  addressInputContainer: {
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
  },
  addressInput: {
    overflow: 'hidden',
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

  optionsContainer: {
    backgroundColor: 'transparent',
    paddingTop: 25,
  },
  addressOption: {
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
  addressOptionDescription: {
    backgroundColor: 'transparent',
    marginLeft: 14,
  },
  addressOptionName: {
    color: '#333333',
    lineHeight: 22,
  },
  addressOptionAddress: {
    color: '#ADADAD',
    lineHeight: 16,
  },
  useLocationOption: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  useLocationText: {
    color: '#00BAA4',
    lineHeight: 20,
  },
});
