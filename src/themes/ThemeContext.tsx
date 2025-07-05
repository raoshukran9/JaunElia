import React, { createContext, useContext, useState, ReactNode } from 'react';
import LightTheme from './light';
import DarkTheme from './dark';

export type Theme = {
  background: string;
  text: string;
  card: string;
  border: string;
  accent: string;
  tabActive: string;
  tabInactive: string;
  tabBackground: string;
};

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
  theme: Theme;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {},
  theme: LightTheme,
});

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const value: ThemeContextType = {
    isDark,
    toggleTheme,
    theme: isDark ? DarkTheme : LightTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
