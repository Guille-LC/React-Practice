import { getFirestore,collection,getDocs,query,where } from "firebase/firestore";

export const getProducts = async (category = null) => {
    try {
        const db = getFirestore()
        const productsCollection = collection(db, 'Productos')
        const prod = productsCollection

        const querySnapshopt = await getDocs(prod)
        const products = querySnapshopt.docs.map(doc=>({
            id: doc.id,
            ...doc.data()
        }))

        return products

    } catch (error) {
        console.error("Error al cargar los productos",error)
        throw error
    }
}