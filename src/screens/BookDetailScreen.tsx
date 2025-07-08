// src/screens/BookDetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { ref, get } from 'firebase/database';
import { database } from '../firebase/firebase';
import UrduText from '../components/UrduText';
import UrduHeading from '../components/UrduHeading';

type BookContent = {
  id: number;
  title: string;
  subtitle?: string;
  text: string;
  align: 'right' | 'left' | 'center';
  favorite?: boolean;
};

type RouteParams = {
  BookDetail: {
    bookId: string; // "8"
  };
};

const BookDetailScreen = () => {
  const route = useRoute<RouteProp<RouteParams, 'BookDetail'>>();
  const { bookId } = route.params;
  const [content, setContent] = useState<BookContent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const bookRef = ref(database, `books/${bookId}/mainyamain`);
        const snapshot = await get(bookRef);
        if (snapshot.exists()) {
          const data = Object.values(snapshot.val()) as BookContent[];
          setContent(data);
        }
      } catch (err) {
        console.log('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [bookId]);

  return (
    <ScrollView style={styles.container}>
      <UrduHeading style={styles.header}>کتاب کا مواد</UrduHeading>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        content.map((item) => (
          <View key={item.id} style={styles.card}>
            {item.title && (
              <UrduHeading style={styles.title}>{item.title}</UrduHeading>
            )}
            {item.subtitle && (
              <UrduText style={styles.subtitle}>{item.subtitle}</UrduText>
            )}
            <UrduText style={styles.text}>{item.text}</UrduText>
          </View>
        ))
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 20, textAlign: 'center', marginBottom: 15 },
  card: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    marginBottom: 12,
    borderRadius: 10,
  },
  title: { fontSize: 18, marginBottom: 6 },
  subtitle: { fontSize: 14, marginBottom: 4 },
  text: { fontSize: 15, lineHeight: 24 },
});

export default BookDetailScreen;
