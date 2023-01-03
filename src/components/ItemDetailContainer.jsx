import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState([])
    const { itemId, categoryId } = useParams()

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const filterProduct = data.results.find((product) => product.id == itemId)
                setOneProduct(filterProduct)

            });
    }, [itemId, categoryId]);
    return (
        <div class="card">
            <Link to={``}>
                <img src={oneProduct.thumbnail} class="card-img-top" />
            </Link>

            <div class="card-body">
                <h5 class="card-title">{oneProduct.title}</h5>
                <p class="card-text">{'$' + oneProduct.price}</p>

                <Link to={`/item/${oneProduct.id}`}>
                    <button>Detalle</button>
                </Link>
            </div>
        </div>


    )
}

export default ItemDetailContainer;