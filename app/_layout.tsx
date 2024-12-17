import { Stack } from 'expo-router';
import { useCustomFonts } from '@/hooks/useCustomFonts';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

export default function RootLayout() {
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
      <Stack>
        <Stack.Screen name="(login)" options={{
          title: 'Login',
          headerShown: false,
        }} />
        <Stack.Screen name="event" options={{
          title: 'Event',
          headerTitleAlign: 'center',
        }} />
      </Stack>
  );
}

const styles =StyleSheet.create({ 
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});