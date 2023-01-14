import { getFirestore } from 'firebase/firestore';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { getProductById } from '../queries/products';
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addItem } = useContext(CartContext);
  const [contador, setContador] = useState("-");

  useEffect(() => {
    const db = getFirestore();
    getProductById(db, id)
      .then((item) => {
        setProduct(item)
      })
  }, [id]);

  const onAdd = (quantity) => {
    setContador(quantity)
    addItem(product, quantity)
  }

  return (
    <div className='position-product' key={product?.id}  >
      {product?.images && <img alt="imagen" className='image-product' src={product?.images} />}
      <div className='card-body-product'>
        <h5 className='card-title-product'>{product?.name}</h5>
        <p className='card-stock'>Stock Disponible: {product?.stock}</p>
        <p className='card-text'>${product?.price}</p>
        <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        <p className='cantidad'>Cantidad Agregada: {contador}</p>
      </div>
    </div>
  )
}

export default Product;