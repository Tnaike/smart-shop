import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import DATA from '../Data';
import { addItem, deleteItem } from '../redux/actions/index';

const ProductDetails = () => {
  const [cartBtn, setCartBtn] = useState('Add to Cart');
  const proId = useParams();
  // eslint-disable-next-line eqeqeq
  const proDetail = DATA.filter((item) => item?.id == proId?.id);
  const product = proDetail[0];
  console.log(product);

  // We need to store useDispatch
  const dispatch = useDispatch();

  const handleCart = () => {
    if (cartBtn === 'Add to Cart') {
      dispatch(addItem(product));
      setCartBtn('Remove from Cart');
    } else {
      dispatch(deleteItem(product));
      setCartBtn('Add to Cart');
    }
  };

  return (
    <>
      <div className='container my-5 py-3'>
        <div className='row'>
          <div className='col-md-6 d-flex justify-content-center mx-auto prod-card'>
            <img src={product?.img} alt={product?.title} height='450px' />
          </div>
          <div className='col-md-6 d-flex flex-column justify-content-center'>
            <h1 className='display-5 fw-bold'>{product.title}</h1>
            <hr />
            <h2 className='my-4'>{product.price}</h2>
            <p className='lead'>{product.desc}</p>
            <button
              onClick={handleCart}
              className='btn btn-outline-primary my-5'
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
