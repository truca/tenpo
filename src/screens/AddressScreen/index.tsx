import { useState, useEffect } from 'react';
import {
  Alert, Button, StyleSheet, TextInput, TouchableOpacity,
} from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';
import LocationSvg from '../../assets/images/location.svg';

import { View } from '../../components/Themed';

export default function AddressScreen() {
  const [inputValue, setInputValue] = useState('');
  const [addressSecondLine, setAddressSecondLine] = useState('');
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync(
        { accuracy: Location.LocationAccuracy.Highest },
      );
      setLocation(userLocation.coords);
    })();
  }, []);

  const lat = location?.latitude;
  const lng = location?.longitude;

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
        <TextInput
          style={styles.input}
          onChangeText={setInputValue}
          value={inputValue}
          placeholder="Escribe tu dirección"
        />
        {lat && lng && (
          <>
            <MapView
              style={styles.map}
              region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01,
              }}
            >
              <Marker
                title="YIKES, Inc."
                description="Web Design and Developmentt"
                coordinate={{ latitude: lat, longitude: lng }}
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
              <TouchableOpacity onPress={() => Alert.alert('Submit')}>
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
        )}

        {(!lat || !lng) && (
        <View style={styles.loadingContainer}>
          <StyledText
            fontName={FontName.GothamBold}
            fontSize={14}
            style={styles.loadingAddress}
          >
            Esperando tu ubicación…
          </StyledText>
        </View>
        )}
      </View>

    </View>
  );
}

// AIzaSyC8fU2DxPo4gAqRbbIHDuZ4bEWnweYDgYE
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
    shadowColor: '#00000029',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.29,
    shadowRadius: 0,
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
