import { getFirestore, } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getProductsByCategory } from '../queries/products';
import { Link } from 'react-router-dom';

const Category = () => {
    const { id } = useParams();
    const [marcas, setMarcas] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        getProductsByCategory(db, id)
            .then((item) => {
                setMarcas(item)
            })
    }, [id]);

    const renderCategories = () => (
        <>
        <div className='position'>
  
          {marcas?.map(item => (
            <div className='card' key={item.marca}>
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
            {renderCategories()}
            
        </>
    )
}

export default Category;