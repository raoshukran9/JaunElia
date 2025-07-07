import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import books from '../data/books.json';
import { useTheme } from '../themes/ThemeContext';

type Book = {
  id: string;
  title: string;
  author: string;
  cover: string;
};

const UnicodeBooksScreen = () => {
  const { theme } = useTheme();

  const renderBook = ({ item }: { item: Book }) => (
    <TouchableOpacity style={styles.card}>
      <Image source={{ uri: item.cover }} style={styles.image} />
      <Text style={[styles.title, { color: theme.text }]}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default UnicodeBooksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    width: 130,
    height: 180,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'JameelNooriNastaleeqKasheeda',
    textAlign: 'center',
  },
});
