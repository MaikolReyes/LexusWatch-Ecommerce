import { collection, getDocs } from "@firebase/firestore";

const CATEGORY_COLLECTION = 'categories';

export const getAllCategories = (db) => {
  const collectionRef = collection(db, CATEGORY_COLLECTION);
  return getDocs(collectionRef)
    .then((snapshot) => {
      const categories = [];
      snapshot?.docs?.forEach((item) => {
        categories.push({
          id: item.id,
          ...item.data()
        })
      })
      return categories;
    })
    .catch((error) => {
      return error;
    })
}