import React from 'react';
import './Bamboo.css';
import { BambooData } from '../../context/productdata.jsx';

const Bamboo = ({extraClass="main-top"}) => {
        return (
          <div className={extraClass}>
      <p className="ho">Bamboo Products</p>

      <div className="product-grid">
        {BambooData.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={`Product ${product.id}`} />
            <p className="price">{product.price}</p>
            <p className="rating">{product.rating}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bamboo;