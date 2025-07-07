// UrduHeaderName.tsx
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const UrduHeaderName: React.FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <Text
      {...props}
      style={[styles.name, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  name: {
    fontFamily: 'JameelNooriNastaleeqKasheeda',
    fontSize: 22,
    lineHeight: 30,
    textAlign: 'right',
    includeFontPadding: false,
    textAlignVertical: 'top',
  },
});

export default UrduHeaderName;
