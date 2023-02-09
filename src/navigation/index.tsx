/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import StoreModal from '../screens/StoreModal';
import RootScreen from '../screens/RootScreen';
import AddressScreen from '../screens/AddressScreen';
import StoresScreen from '../screens/StoresScreen';
import MaxDistanceModal from '../screens/MaxDistanceModal';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={RootScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Address" component={AddressScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Stores" component={StoresScreen} options={{ headerShown: false }} />
      <Stack.Group
        screenOptions={{
          presentation: 'transparentModal',
          headerShown: false,
        }}
      >
        <Stack.Screen name="MaxDistanceModal" component={MaxDistanceModal} />
        <Stack.Screen name="StoreModal" component={StoreModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
}
