import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemDetailContainer from "./ItemDetailContainer";


function ItemListContainer() {
    const [producto, setProducto] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProducto(data.results);
            });
    }, [categoryId]);

    return (
        <>
            <h1>SmartWatchs</h1>
            <div className="productsContainer">
                {producto.slice(1, 20).map((producto) => (

                    <div class="card">
                        <Link to={`/item/${categoryId}/${producto.id}`}>
                            <img src={producto.thumbnail} class="card-img-top" />
                        </Link>

                        <div class="card-body">
                            <h5 class="card-title">{producto.title}</h5>
                            <p class="card-text">{'$' + producto.price}</p>

                            <Link to={`/item/${producto.id}`}>
                                <button>Detalle</button>
                            </Link>
                        </div>
                    </div>

                ))}
            </div>
        </>
    );
}

export default ItemListContainer;