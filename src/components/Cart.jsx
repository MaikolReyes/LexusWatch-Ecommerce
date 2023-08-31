import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { collection, addDoc, doc, getFirestore } from 'firebase/firestore';

export const Cart = () => {
    const { productCartList, removeItem, clearCart, getTotalPrice } = useContext(CartContext);
    const [orderId, setOrderId] = useState('');

    const name = document.getElementById("name")
    const surname = document.getElementById("surname")
    const email = document.getElementById("email")
    const number = document.getElementById("number")

    const sendOrder = (event) => {

        event.preventDefault();

        const order = {
            client: {
                name,
                surname,
                email,
                number
            },
            items: productCartList,
            total: getTotalPrice(),
            date: new Date()
        }

        const db = getFirestore()

        const queryRef = doc(collection(db, "orders"));

        addDoc(queryRef, order).then(resp => {
            console.log('hola mundo')
        });


    }

    return (
        <div>
            {!orderId ?
                <div>
                    <h2 className='carritoElement'>Carrito:</h2>
                    <div className='carritoElement'>
                        {
                            productCartList.map(({ id, quantity, images, name, price, description }) => {
                                return (
                                    <div className='itemEnCarrito card' key={id}>
                                        <p className='cantidad'>Cantidad De Items: {quantity}</p>
                                        <img src={images} height="100px" className='producto' alt={description} />
                                        <p className='producto'>{name}</p>
                                        <p className='precio'>${price}</p>
                                        <div className='removerButton'>
                                            <button onClick={() => removeItem(id)} className='remover btn btn-danger'>Remover producto</button>
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
                                                <label for="nombre" >Nombre:</label>
                                                <input type="text" className='form-control' name="name" id='name' />
                                            </div>
                                            <div>
                                                <label for="nombre">Apellido:</label>
                                                <input type="text" name="surname" className='form-control' id='surname' />
                                            </div>
                                            <div>
                                                <label for="email">Email:</label>
                                                <input type="email" name="email" className='form-control' id='email' />
                                            </div>
                                            <div>
                                                <label for="numero">Número de telefono:</label>
                                                <input type="number" name="number" className='form-control' id='number' />
                                            </div>
                                            <input type="submit" value="Finalizar Compra" className="btn btn-primary" /> <input type="reset" value="Borrar" className="btn btn-primary" />
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            :
                            <div className='elementoCentrado'>
                                <p className='carritoElement'>El carrito está vacío</p>
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