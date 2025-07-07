import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const UrduText: React.FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <Text {...props} style={[styles.urdu, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  urdu: {
    fontFamily: 'JameelNooriNastaleeqRegular', // ✅ Use exact name
    fontSize: 16,
    lineHeight: 28,
    textAlign: 'right',
  },
});

export default UrduText;
