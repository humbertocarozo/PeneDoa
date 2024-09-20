import React from "react";
import Item from './Item';
import "./List.css";

function List() {
    return (
      <div>
        <Item
          name="Uvas"
          quantity="10kg"
          expirationDate="15-09-2024"
        />
        <Item
          name="Pão"
          quantity="20 pães"
          expirationDate="10-09-2024"
        />
        <Item
          name="Milk"
          quantity="15 litros"
          expirationDate="30-09-2024"  
        />
      </div>
    );
  }

export default List;