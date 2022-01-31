import React from 'react';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';

const Product = () => {
  const productItem = (item) => {
    return (
      <div className='col-md-3 col-sm-12 p-3' key={item.id}>
      <div className='prod-card card py-2'>
        <img src={item.img} className='card-img-top' alt={item.title} />
        <div className='card-body text-center'>
          <h5 className='card-title prod-title'>{item.title}</h5>
          <p className='lead bold'>₦ {item.price}</p>
          <NavLink
            to={`/products/${item.id}`}
            className='btn btn-outline-primary'
          >
            Buy Now
          </NavLink>
        </div>
      </div>
      </div>
    );
  };

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <h2>Product</h2>
          <hr />
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {DATA.map(productItem)}
        </div>
      </div>
    </div>
  );
};

export default Product;
