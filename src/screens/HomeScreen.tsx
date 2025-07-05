import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '../components/Slider';
import BookCard from '../components/BookCard';
import frontruff from '../assets/images/naviconimage.jpg';
import books from '../data/books.json';

type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

const HomeScreen = () => {
  const { theme } = useTheme();

  const handleBookPress = (book: Book) => {
    console.log('Tapped Book:', book.title);
  };

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookCard book={item} onPress={handleBookPress} />
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Top Section */}
      <View style={styles.topRow}>
        <View style={styles.leftProfile}>
          <Image source={frontruff} style={styles.profileImage} />
          <View style={styles.textWrapper}>
            <Text style={[styles.name, { color: theme.text, fontFamily: 'JameelNooriNastaleeqKasheeda' }]}>
              جونؔ ایلیا
            </Text>
            <Text style={[styles.dates, { color: theme.text, fontFamily: 'JameelNooriNastaleeqKasheeda' }]}>
              1931 - 2002
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color={theme.text} />
        </TouchableOpacity>
      </View>

      {/* Slider */}
      <Slider />

      {/* Books Section */}
      <View style={styles.booksSection}>
        <View style={styles.booksHeader}>
          <TouchableOpacity onPress={() => console.log('مزید دیکھیے')}>
            <Text
              style={[
                styles.moreButton,
                { color: theme.accent || '#007bff', fontFamily: 'JameelNooriNastaleeqKasheeda' },
              ]}
            >
              مزید دیکھیے
            </Text>
          </TouchableOpacity>
          <Text
            style={[
              styles.sectionTitle,
              { color: theme.text, fontFamily: 'JameelNooriNastaleeqKasheeda' },
            ]}
          >
            یونیکوڈ کتب
          </Text>
        </View>

        <FlatList
          data={books}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          key={'horizontal-books'}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40 },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  leftProfile: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 60, height: 60, borderRadius: 30 },
  textWrapper: { marginLeft: 10 },
  name: { fontSize: 16, fontWeight: 'bold' },
  dates: { fontSize: 12 },
  searchButton: { padding: 10 },
  booksSection: { paddingHorizontal: 20, marginTop: 10 },
  booksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    alignItems: 'center',
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  moreButton: { fontSize: 14 },
});

export default HomeScreen;
