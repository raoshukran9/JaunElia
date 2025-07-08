// src/firebase/fetchAllBooks.ts
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from './firebase'; // ✅ path correct here

export const fetchAllBooks = async () => {
  try {
    const booksCollection = collection(firestore, 'Books');
    const querySnapshot = await getDocs(booksCollection);

    const books = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        title: data.title,
        author: data.author,
        cover: data.cover,
      };
    });

    return books;
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
};
