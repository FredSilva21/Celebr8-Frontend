import { Stack } from 'expo-router';
import { useCustomFonts } from '@/hooks/useCustomFonts';
import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import useAuth from '@/hooks/Auth/useAuth';

export default function RootLayout() {
  const fontsLoaded = useCustomFonts();
  const { isAuthenticated, loading } = useAuth();

  if (loading || !fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <Stack>
      {isAuthenticated ? (
        <Stack.Screen
          name="event"
          options={{
            headerShown: false,
          }}
        />
      ) : (
        <Stack.Screen
          name="(login)"
          options={{
            headerShown: false,
          }}
        />
      )}
    </Stack>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});