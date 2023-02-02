// eslint-disable-next-line import/no-extraneous-dependencies
import { Slider as RNSlider } from '@miblanchard/react-native-slider';
import { StyleSheet, View } from 'react-native';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  trackMarks?: number[];
  setValue: (value: number) => void;
}

export default function Slider({
  value, setValue, min, max, step = 1, trackMarks,
}: SliderProps) {
  return (
    <View style={styles.container}>
      <RNSlider
        step={step}
        value={value}
        minimumValue={min}
        maximumValue={max}
        trackMarks={trackMarks}
        trackClickable
        trackStyle={{ height: 4, backgroundColor: '#00BAA4' }}
        minimumTrackTintColor="#00BAA4"
        thumbStyle={{
          width: 16,
          height: 16,
          borderRadius: 8,
          borderWidth: 2,
          borderStyle: 'solid',
          borderColor: '#00BAA4',
          backgroundColor: '#75E7D9',
        }}
        renderTrackMarkComponent={(idx: number) => {
          if (idx + 1 === value) return null;
          return (
            <View style={{
              width: 12,
              height: 12,
              borderRadius: 6,
              backgroundColor: '#00BAA4',
            }}
            />
          );
        }}
        onValueChange={(val: number | number[]) => setValue(Array.isArray(val) ? val[0] : val)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
