import { getFirestore, } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { setProductById, getProductsByCategory, deleteProductById } from '../queries/products';

const Category = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);

    // useEffect(() => {
    //   const db = getFirestore();
    //   const data = {
    //     name: "Arena para gatos",
    //     description: "Descripcion de las plantas"
    //   }
    //   setProductById(db, data, '123123asd')
    //     .then((data) => {
    //       console.log('data:', data)
    //     })
    //     .catch((error) => {
    //       console.log('error:', error)
    //     })
    // }, [])

    useEffect(() => {
        const db = getFirestore();
        deleteProductById(db, '123123asd')
            .then((data) => {
                console.log('data:', data)
            })
            .catch((error) => {
                console.log('error:', error)
            })
    }, [])

    useEffect(() => {
        const db = getFirestore();
        getProductsByCategory(db, id)
            .then((item) => {
                setProducts(item)
            })
    }, [id]);

    const renderProducts = () => {
        return products?.map((item) => (
            <div className='product' key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.description}</p>
                <Link to={`/product/${item.id}`}> Ver detalle </Link>
            </div>
        ))
    }

    return (
        <>
            <h3>Acá va a ir la categoria</h3>
            {renderProducts()}
        </>
    )
}

export default Category;