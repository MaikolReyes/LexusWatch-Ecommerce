import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { getTotalProducts, productCartList } = useContext(CartContext);

    return (
        <div className="cart">
            <div className="cartBg">
                <i className="fa-solid fa-cart-shopping"></i>
                {
                    productCartList.length > 0 ?
                        <p>{getTotalProducts()}</p>
                        :
                        ''
                }
            </div>
        </div>
    )
}

export default CartWidget;