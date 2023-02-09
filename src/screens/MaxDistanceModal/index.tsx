import { useContext } from 'react';
import {
  StyleSheet, View,
} from 'react-native';
import MapView, { Marker, Circle } from 'react-native-maps';

import StyledText from '../../components/StyledText';
import { FontName } from '../../components/StyledText/types';

import { RootStackScreenProps } from '../../types';
import HalfModal from '../../components/HalfModal';
import Slider from '../../components/Slider';
import { AddressContext } from '../../contexts/AddressContext';

export default function MaxDistanceModal({ navigation, route }: RootStackScreenProps<'MaxDistanceModal'>) {
  const { coords, maxDistance, setMaxDistance } = useContext(AddressContext);

  if (!coords) return null;

  const { lat, lng } = coords;
  return (
    <HalfModal
      route={route}
      percentageHeight={0.3}
      navigation={navigation as any}
      containerStyle={styles.container}
      content={(
        <>
          <StyledText
            fontName={FontName.GothamBold}
            fontSize={22}
            style={styles.title}
          >
            Agregar dirección de entrega
          </StyledText>
          <StyledText
            fontName={FontName.GothamBook}
            fontSize={14}
            style={styles.subtitle}
          >
            Puedes modificar el radio de distancia para encontrar tu restaurante
          </StyledText>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderLabels}>
              <StyledText
                fontName={FontName.GothamBold}
                fontSize={12}
                style={styles.sliderLabel}
              >
                1 km
              </StyledText>
              <StyledText
                fontName={FontName.GothamBold}
                fontSize={12}
                style={styles.sliderLabel}
              >
                5 km
              </StyledText>
            </View>
            <Slider
              value={maxDistance}
              setValue={setMaxDistance}
              min={1}
              max={5}
              trackMarks={[1, 2, 3, 4, 5]}
            />
          </View>
          <MapView
            style={styles.map}
            region={{
              latitude: lat,
              longitude: lng,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            <Marker
              title="YIKES, Inc."
              description="Web Design and Developmentt"
              coordinate={{ latitude: lat, longitude: lng }}
              icon={require('../../assets/images/marker.png')}
            />
            <Circle
              key={(lng + lat).toString()}
              center={{
                latitude: lat,
                longitude: lng,
              }}
              radius={maxDistance * 1000}
              strokeWidth={1}
              strokeColor="#008F7E"
              fillColor="#008F7E30"
            />
          </MapView>
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 0,
    paddingTop: 56,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    lineHeight: 30,
    color: '#333333',
  },
  subtitle: {
    marginTop: 10,
    lineHeight: 20,
    color: '#ADADAD',
    marginBottom: 5,
    textAlign: 'center',
  },
  sliderContainer: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    height: 88,
    paddingTop: 22,
    position: 'relative',
  },
  map: {
    width: '100%',
    flex: 1,
  },
  sliderLabels: {
    backgroundColor: 'transparent',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    top: 22,
    paddingHorizontal: 5,
  },
  sliderLabel: {
    color: '#008F7E',
    lineHeight: 16,
    textTransform: 'uppercase',
  },
});
