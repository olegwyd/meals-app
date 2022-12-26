import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import RestorantsScreen from './src/features/restorants/screens/restorants.screen';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestorantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
