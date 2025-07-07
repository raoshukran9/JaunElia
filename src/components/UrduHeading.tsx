// UrduHeading.tsx
import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

const UrduHeading: React.FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <Text
      {...props}
      style={[styles.heading, style]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: 'NotoNastaliqUrdu-Bold', // ✅ Use Bold font
    fontSize: 24,                        // ✅ Slightly bigger for headings
    lineHeight: 42,                      // ✅ Prevent text cut-off
    textAlign: 'right',
    includeFontPadding: false,          // ✅ Fix Android cut-off
    textAlignVertical: 'center',        // ✅ Center vertically
    paddingVertical: 4,                 // ✅ Small top-bottom padding
  },
});

export default UrduHeading;
