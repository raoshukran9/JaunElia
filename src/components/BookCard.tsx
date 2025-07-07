import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import UrduText from './UrduText';
import { useTheme } from '../themes/ThemeContext';

type Props = {
  book: {
    title: string;
    author: string;
    cover: string;
  };
  onPress: () => void;
};

const BookCard = ({ book, onPress }: Props) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.textContainer}>
        <UrduText style={[styles.title, { color: theme.text }]}>
          {book.title}
        </UrduText>
        <UrduText style={[styles.author, { color: theme.text }]}>
          {book.author}
        </UrduText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    width: 120,
    alignItems: 'center', // ✅ Whole card centered
  },
  cover: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 5,
    alignItems: 'center', // ✅ Title/author center aligned
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default BookCard;
