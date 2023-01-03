import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCategories } from '../queries/categories';
import { getAllProducts } from '../queries/products';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    getAllProducts(db)
      .then((item) => {
        setProducts(item)
      })
  }, []);

  useEffect(() => {
    const db = getFirestore();
    getAllCategories(db)
      .then((item) => {
        setCategories(item)
      })
  }, []);

  const renderProducts = () => (
    products?.map(item => (
      <div className='product' key={item.id}>
        {item.image && <img alt="imagen" src={item.image} />}
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <Link to={`/product/${item.id}`}> Ver detalle </Link>
      </div>
    ))
  )

  const renderCategories = () => (

    categories?.map(item => (
      
<>
        return (

        <ul>
          <Link to={`/category/${item.id}`}>
            <li key={item?.id}>{item?.name}</li>
          </Link>
        </ul>


        <h3>Acá va a ir la product list</h3>
        {renderCategories()}
        {renderProducts()}
      </>

    )))
}



export default ProductList;