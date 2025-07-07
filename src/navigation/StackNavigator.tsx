import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, I18nManager } from 'react-native';
import TabNavigator from './TabNavigator';
import UnicodeBooksScreen from '../screens/UnicodeBooksScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      {/* Main Tabs */}
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      {/* Unicode Books */}
      <Stack.Screen
        name="UnicodeBooks"
        component={UnicodeBooksScreen}
        options={{
          headerTitle: '', // hide default title
          headerRight: () => (
            <View style={{ paddingRight: 15 }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'JameelNooriNastaleeqKasheeda',
                  writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
                }}
              >
                تمام کتب
              </Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
