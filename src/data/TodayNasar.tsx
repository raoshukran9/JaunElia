import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { useTheme } from '../themes/ThemeContext';

const TodayNasar = () => {
  const { theme, mode } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj9Y9zxWl_vovF7wShAOIei5p0w8NiX4CvUMFWxQYccex8OXcUcuXCS4RYXI9JwROmm9iO0LYuciKADXLyETb2_BD1eJwc92RlLy_iTU3ev5N9vT3SJ98NZ_N7tu5CQG5q2NdRyc33TOC9BLLAf_lRxA-Q-pW8wE6eq0QZqVT-bHUm2CSusF0Vxp42Mqv0/s1024/ajkinasar.png',
        }}
        style={styles.background}
        imageStyle={{
          opacity: mode === 'dark' ? 0.18 : 0.30,
        }}
      >
        <View style={styles.headerRow}>
          <Text style={[styles.heading, { color: theme.text }]}>آج کی نثر</Text>
          <Text style={[styles.datetime, { color: theme.text }]}>5 جولائی، 2025 - 10:30pm</Text>
        </View>

        <Text style={[styles.quote, { color: theme.text }]}>
          درد، جب لفظوں میں ڈھلتا ہے تو صداقت بن جاتا ہے۔
        </Text>

        <Text style={[styles.footer, { color: theme.text }]}>
          ایڈمن: شکران ● اقتباس: جون ایلیا کی تحریریں
        </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  background: {
    padding: 15,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 18,
    fontFamily: 'JameelNooriNastaleeqKasheeda',
  },
  datetime: {
    fontSize: 14,
    fontFamily: 'JameelNooriNastaleeqKasheeda',
  },
  quote: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 12,
    fontFamily: 'JameelNooriNastaleeqKasheeda',
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'JameelNooriNastaleeqKasheeda',
  },
});

export default TodayNasar;
