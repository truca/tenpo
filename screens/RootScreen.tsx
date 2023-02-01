import { StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants'

import { Text, View } from '../components/Themed';
import { RootStackScreenProps } from '../types';

export default function RootScreen({ navigation }: RootStackScreenProps<'Root'>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen exists.</Text>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'F2F2F2'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
