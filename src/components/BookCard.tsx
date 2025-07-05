import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import UrduText from './UrduText'; 

type Props = {
  book: {
    title: string;
    author: string;
    cover: string;
  };
  onPress: () => void;
};

const BookCard = ({ book, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: book.cover }} style={styles.cover} />
      <View style={styles.textContainer}>
        <UrduText style={styles.title}>{book.title}</UrduText>
        <UrduText style={styles.author}>{book.author}</UrduText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 10,
    width: 120,
  },
  cover: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  textContainer: {
    marginTop: 5,
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 14,
  },
  author: {
    fontSize: 12,
    color: '#666',
  },
});

export default BookCard;
