import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {

    const [ItemCount, setItemCount] = useState(initial);
    const sumar = () => {
        if (ItemCount < stock) {
            setItemCount(ItemCount + 1);
        } else {
            setItemCount(1)
        }
    }
    const restar = () => {
        if (ItemCount > 1) {
            setItemCount(ItemCount - 1);
        }
        else {
            setItemCount(stock)
        }
    }

    return (
        <div className="counterContainer">
            <div className="counter">
                <button className="btn btn-primary" onClick={restar}><h4>-</h4></button>
                <div className="itemCount">{ItemCount}</div>
                <button className="btn btn-primary" onClick={sumar}><h4>+</h4></button>
            </div>
            <button className="btn btn-primary" onDoubleClick={''} onClick={() => onAdd(ItemCount)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;