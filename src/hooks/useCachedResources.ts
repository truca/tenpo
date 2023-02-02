import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          /* eslint-disable global-require */
          GothamLight: require('../assets/fonts/GothamLight.ttf'),
          GothamBook: require('../assets/fonts/GothamBook.ttf'),
          GothamMedium: require('../assets/fonts/GothamMedium.ttf'),
          GothamBold: require('../assets/fonts/GothamBold.ttf'),
          GothamUltra: require('../assets/fonts/GothamUltra.otf'),
          /* eslint-enable */
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        // eslint-disable-next-line no-console
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
