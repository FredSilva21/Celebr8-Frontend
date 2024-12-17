import { useFonts } from 'expo-font';

export const useCustomFonts = () => {
    const [fontsLoaded] = useFonts({
      'Exo2-ExtraBold': require('@/assets/fonts/Exo_2/Exo2-ExtraBold.ttf'),
      'Exo2-Bold': require('@/assets/fonts/Exo_2/Exo2-Bold.ttf'),
      'Exo2-SemiBold': require('@/assets/fonts/Exo_2/Exo2-SemiBold.ttf'),
      'Hind-Bold': require('../assets/fonts/Hind/hind-bold.otf'),
      'Hind-Medium': require('../assets/fonts/Hind/hind-medium.otf'),
    });
  
    return fontsLoaded;
  };