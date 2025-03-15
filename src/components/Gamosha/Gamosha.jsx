import React from 'react';
import './Gamosha.css';
import { Productdata, PhulamGamoshadata } from '../../context/productdata.jsx';

const Gamosha = ({extraClass="main-top"}) => {
  return (
    <div className={extraClass}>
      <p className="ho">Uka Gamosha</p>

      <div className="product-grid">
        {Productdata.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={`Product ${product.id}`} />
            <p className="price">{product.price}</p>
            <p className="rating">{product.rating}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        ))}
      </div>

      <div>
        <p className="ho">Phulam Gamosha</p>

        <div className="product-grid">
          {PhulamGamoshadata.map((Phulamdata) => (
            <div key={Phulamdata.id} className="product-card">
              <img src={Phulamdata.img} alt={`Product ${Phulamdata.id}`} />
              <p className="price">{Phulamdata.price}</p>
              <p className="rating">{Phulamdata.rating}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gamosha;