import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

export const getProducts = async (category = null) => {
    try {
        const db = getFirestore();
        const productsCollection = collection(db, 'Productos');

        const q = category
            ? query(productsCollection, where("categoria", "==", category))
            : productsCollection;

        const snapshot = await getDocs(q);
        const products = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return products;
    } catch (error) {
        console.error("Error al cargar los productos", error);
        throw error;
    }
};
