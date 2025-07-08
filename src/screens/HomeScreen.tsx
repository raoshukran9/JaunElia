// HomeScreen.tsx
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useTheme } from '../themes/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '../components/Slider';
import BookCard from '../components/BookCard';
import TodayShair from '../data/TodayShair';
import TodayNasar from '../data/TodayNasar';
import frontruff from '../assets/images/naviconimage.jpg';
import { fetchAllBooks } from '../firebase/fetchAllBooks';
import { useNavigation } from '@react-navigation/native';
import UrduText from '../components/UrduText';
import UrduHeading from '../components/UrduHeading';
import UrduHeaderName from '../components/UrduHeaderName';

type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

const HomeScreen = () => {
  const { theme } = useTheme();
  const navigation: any = useNavigation();
  const [currentTime, setCurrentTime] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    };
    const formatted = now.toLocaleString('en-US', options);
    setCurrentTime(formatted);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await fetchAllBooks();
      setBooks(data);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  const handleBookPress = (book: Book) => {
    console.log('Tapped Book:', book.title);
    // navigation.navigate('BookDetail', { bookId: book.id }); // Future detail screen
  };

  const renderItem: ListRenderItem<Book> = ({ item }) => (
    <BookCard book={item} onPress={() => handleBookPress(item)} />
  );

  return (
    <ScrollView style={{ backgroundColor: theme.background }}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.topRow}>
          <View style={styles.leftProfile}>
            <Image source={frontruff} style={styles.profileImage} />
            <View style={styles.textWrapper}>
              <UrduHeaderName style={[styles.name, { color: theme.text }]}>
                جونؔ ایلیا
              </UrduHeaderName>
              <UrduText style={[styles.dates, { color: theme.text }]}>
                1931 - 2002
              </UrduText>
            </View>
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color={theme.text} />
          </TouchableOpacity>
        </View>

        {/* Slider */}
        <Slider />

        {/* Unicode Books Section */}
        <View style={styles.booksSection}>
          <View style={styles.booksHeader}>
            <UrduHeading style={[styles.sectionTitle, { color: theme.text }]}>
              یونی کوڈ کتب
            </UrduHeading>
            <TouchableOpacity onPress={() => navigation.navigate('UnicodeBooks')}>
              <UrduHeading style={[styles.moreButton, { color: theme.accent }]}>
                مزید دیکھیے
              </UrduHeading>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator size="large" color={theme.accent} />
          ) : (
            <FlatList
              data={books}
              horizontal
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
            />
          )}
        </View>

        {/* آج کا شعر */}
        <View style={styles.sectionRow}>
          <Text style={[styles.dateText, { color: theme.text }]}>{currentTime}</Text>
          <View style={styles.rightTitleWrapper}>
            <UrduHeading style={[styles.centeredTitle, { color: theme.text }]}>
              آج کا شعر
            </UrduHeading>
          </View>
        </View>
        <TodayShair />

        {/* آج کی نثر */}
        <View style={styles.sectionRow}>
          <Text style={[styles.dateText, { color: theme.text }]}>{currentTime}</Text>
          <View style={styles.rightTitleWrapper}>
            <UrduHeading style={[styles.centeredTitle, { color: theme.text }]}>
              آج کی نثر
            </UrduHeading>
          </View>
        </View>
        <TodayNasar />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 30,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  leftProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textWrapper: {
    marginLeft: 10,
    alignItems: 'flex-end',
    maxWidth: 140,
  },
  name: {
    fontSize: 20,
    lineHeight: 30,
  },
  dates: {
    fontSize: 12,
    lineHeight: 20,
  },
  searchButton: {
    padding: 10,
  },
  booksSection: {
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  booksHeader: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    lineHeight: 38,
  },
  moreButton: {
    fontSize: 13,
    lineHeight: 38,
  },
  sectionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 25,
    marginBottom: 12,
  },
  dateText: {
    fontSize: 10.5,
    flex: 1,
    lineHeight: 18,
  },
  rightTitleWrapper: {
    flex: 3,
    alignItems: 'flex-end',
  },
  centeredTitle: {
    fontSize: 16,
    lineHeight: 38,
    textAlign: 'right',
  },
});

export default HomeScreen;
