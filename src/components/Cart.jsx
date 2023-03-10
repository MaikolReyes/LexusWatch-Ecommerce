import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore } from 'firebase/firestore';

const Cart = () => {
    const { productCartList, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState("");

    const sendOrder = (event) => {
        event.preventDefault();
        const order = {
            client: {
                name: event.target[0].value,
                surname: event.target[1].value,
                email: event.target[2].value,
                number: event.target[3].value,
            },
            items: productCartList,
            total: getTotalPrice(),
            date: new Date()
        }
        const db = getFirestore()


        const queryRef = collection(db, "orders");
        addDoc(queryRef, order).then(response => {
            setOrderId(response.id);
        });
    }

    return (
        <div>
            {!orderId ?
                <div>
                    <h2 className='carritoElement'>Carrito:</h2>
                    <div className=' carritoElement'>
                        {
                            productCartList.map((item) => {
                                return (
                                    <div className='itemEnCarrito card' key={item.id}>
                                        <p className='cantidad'>Cantidad De Items: {item.quantity}</p>
                                        <img src={item.images} height="100px" className='producto' alt={item.description} />
                                        <p className='producto'>{item.name}</p>
                                        <p className='precio'>${item.price}</p>
                                        <div className='removerButton'>
                                            <button onClick={() => removeItem(item.id)} className='remover btn btn-danger'>Remover producto</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        productCartList.length > 0 ?
                            <div className='total'>
                                <div className='elementoCentrado'>
                                    <h3 className='carritoElement'>Total: ${getTotalPrice()}</h3>
                                    <button onClick={() => clearCart()} className='carritoElement btn btn-primary'>Vaciar carrito</button>
                                </div>
                                <div className='elementoCentrado'>
                                    <form className='formValidation' onSubmit={sendOrder}>

                                        
                                        <fieldset className='fieldsetValidation'>
                                            <legend><strong>Enviar pedido:</strong></legend>
                                            <div>
                                                <label for="nombre">Nombre:</label>
                                                <input type="text" name="name" />
                                            </div>
                                            <div>
                                                <label for="nombre">Apellido:</label>
                                                <input type="text" name="surname" />
                                            </div>
                                            <div>
                                                <label for="email">Email:</label>
                                                <input type="email" name="email" />
                                            </div>
                                            <div>
                                                <label for="numero">N??mero de telefono:</label>
                                                <input type="number" name="number" />
                                            </div>
                                            <input type="submit" value="Guardar orden" className="button" /> <input type="reset" value="Borrar" className="button" />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            :
                            <div className='elementoCentrado'>
                                <p className='carritoElement'>El carrito est?? vac??o</p>
                                <Link to='/' className='carritoElement'><button className='btn btn-secondary'>Ver productos</button></Link>
                            </div>
                    }
                </div>
                :
                <h3>Tu orden ha sido registrada!</h3>
            }
        </div>
    )
}

export default Cart;