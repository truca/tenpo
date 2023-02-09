import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Navigation from './src/navigation';
import AddressContextProvider from './src/contexts/AddressContext';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AddressContextProvider>
          <Navigation colorScheme={colorScheme} />
        </AddressContextProvider>
      </SafeAreaProvider>
    );
  }
}
