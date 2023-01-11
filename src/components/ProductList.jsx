import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts } from '../queries/products';
import Main from '../layout/Main'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    getAllProducts(db)
      .then((item) => {
        setProducts(item)
      })
  }, []);

  const renderProducts = () => (
    <>

      <div className='position'>

        {products?.map(item => (
          <div className='card' key={item.id}>
            {item.images && <img alt="imagen" className='image' src={item.images} />}
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <p className='card-stock'>Stock Disponible: {item.stock}</p>
              <Link className='btn btn-primary' to={`/product/${item.id}`}> Ver detalle </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )

  return (
    <>
      {<Main />}
      {renderProducts()}
    </>
  )
}

export default ProductList;