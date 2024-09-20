import React from "react";
import "./Item.css"

function Item  ({name, quantity, expirationDate}) {
    return (
        <div className="principal">
            <div className="food-item">
                <h2 className="food-name">{name}</h2>
                <p className="food-quantity">Quantidade: {quantity}</p>
                <p className="food-expiration">Validade: {expirationDate}</p>
            </div>
        </div>    
    );

};

export default Item;