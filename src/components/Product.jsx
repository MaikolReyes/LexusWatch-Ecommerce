import { getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../queries/products';


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    getProductById(db, id)
      .then((item) => {
        setProduct(item)
      })
  }, [id]);

  return (
    <div className='position-product'>
      <div key={product?.id}>
        {product?.images && <img alt="imagen" className='image-product' src={product?.images} />}
        <div className='card-body'>
          <h5 className='card-title'>{product?.name}</h5>
          <p className='card-stock'>Stock Disponible: {product?.stock}</p>
          <p className='card-text'>${product?.price}</p>
          <button onClick='' className='btn btn-primary'>Comprar</button>
        </div>
      </div>
    </div>
  )
}

export default Product;