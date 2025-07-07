import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { useTheme } from '../themes/ThemeContext';

const getPakistanTime = () => {
  const now = new Date();
  return new Intl.DateTimeFormat('ur-PK', {
    timeZone: 'Asia/Karachi',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(now);
};

const TodayShair = () => {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbYg0Q3_AOTOQ2TBC2ORB5N2wsgbuH43_6SytzhbT8gR3S-TeZ8nTgZATvgzfRYMV26ezY4J_qw5If1rglWfT5g1iPZIGU3B2Xsr71ntwAUqGy1hiqUJWHZrOIo52VE_r6Yvkc85YklMUV9flFJToZeHWMgtwPBTO6b98F29h0j_XnWBhsPGSRiHpY_6E/s1024/ajkashair.png',
        }}
        style={styles.background}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.headerRow}>
          <Text style={[styles.heading, { color: theme.text }]}>آج کا شعر</Text>
          <Text style={[styles.datetime, { color: theme.text }]}>{getPakistanTime()}</Text>
        </View>

        <Text style={[styles.quote, { color: theme.text }]}>
          تمھارے بعد کسی سے محبتیں نہ ہوئیں{"\n"}بس اک تمھیں چاہا دل و جان سے بہت
        </Text>

        <Text style={[styles.footer, { color: theme.text }]}>
          ایڈمن: شکران ● اقتباس: منتخب شاعری
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
    width: '100%',
    padding: 15,
    justifyContent: 'space-between',
  },
  imageStyle: {
    resizeMode: 'stretch', // ✅ No cropping
    opacity: 0.35,         // ✅ More visible background
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

export default TodayShair;
