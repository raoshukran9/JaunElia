// src/firebase/fetchBookMeta.ts
import { doc, getDoc } from 'firebase/firestore';
import { firestore } from './firebase';

export const fetchBookMeta = async (bookId: string) => {
  try {
    const docRef = doc(firestore, 'Books', bookId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching book meta:', error);
    return null;
  }
};
