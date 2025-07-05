import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
} from 'react-native';
import { useTheme } from '../themes/ThemeContext';

const SettingsScreen = () => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.heading, { color: theme.text }]}>ترجیحات</Text>

      {/* Dark Mode Toggle */}
      <View style={styles.settingRow}>
        <Text style={[styles.label, { color: theme.text }]}>ڈارک موڈ</Text>
        <Switch
          value={isDark}
          onValueChange={toggleTheme}
          thumbColor={isDark ? '#fff' : '#333'}
          trackColor={{ false: '#aaa', true: '#555' }}
        />
      </View>

      {/* Language Option */}
      <TouchableOpacity style={styles.settingRow}>
        <Text style={[styles.label, { color: theme.text }]}>زبان</Text>
        <Text style={{ color: theme.accent }}>اردو</Text>
      </TouchableOpacity>

      {/* Font Size */}
      <TouchableOpacity style={styles.settingRow}>
        <Text style={[styles.label, { color: theme.text }]}>فانٹ سائز</Text>
        <Text style={{ color: theme.accent }}>درمیانہ</Text>
      </TouchableOpacity>

      {/* App Info */}
      <View style={[styles.infoBox, { backgroundColor: theme.card }]}>
        <Text style={[styles.infoText, { color: theme.text }]}>ایپ ورژن: 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    direction: I18nManager.isRTL ? 'rtl' : 'ltr',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 30,
    textAlign: 'center',
  },
  settingRow: {
    flexDirection: 'row-reverse', 
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    textAlign: 'right',
  },
  infoBox: {
    marginTop: 30,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 14,
  },
});

export default SettingsScreen;
