// App.tsx
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, useTheme } from './src/themes/ThemeContext';
import StackNavigator from './src/navigation/StackNavigator';


const AppContent = () => {
  const { theme, isDark } = useTheme();

  return (
    <>
      <StatusBar
        backgroundColor={theme.background}
        barStyle={isDark ? 'light-content' : 'dark-content'}
      />
      <NavigationContainer>
        <StackNavigator /> 
      </NavigationContainer>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <AppContent />
  </ThemeProvider>
);

export default App;
