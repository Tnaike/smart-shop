import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
// import DATA from '../Data';
//import { addItem, deleteItem } from '../redux/actions/index';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);

  // const [cartBtn, setCartBtn] = useState('Add to Cart');
  // // eslint-disable-next-line eqeqeq
  // const proDetail = DATA.filter((item) => item?.id == proId?.id);
  // const product = proDetail[0];
  console.log(product);

  // We need to store useDispatch
  // const dispatch = useDispatch();

  // const handleCart = () => {
  //   if (cartBtn === 'Add to Cart') {
  //     dispatch(addItem(product));
  //     setCartBtn('Remove from Cart');
  //   } else {
  //     dispatch(deleteItem(product));
  //     setCartBtn('Add to Cart');
  //   }
  // };

  const SkeletonLoading = () => {
    return (
      <>
        <div className='col-md-6'>
          <Skeleton height={400} />
        </div>
        <div className='col-md-6' style={{lineHeight:2}}>
          <Skeleton height={50} width={300}/>
          <Skeleton height={75} />
          <Skeleton height={25} width={150}/>
          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100}/>
          <Skeleton height={50} width={100} style={{marginLeft:5}}/>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className='col-md-6 d-flex justify-content-center mx-auto prod-card'>
          <img src={product.image} alt={product.title} height='400px' />
        </div>
        <div className='col-md-6'>
          <h4 className='text-uppercase text-black-50'>{product.category}</h4>
          <h1 className='display-5 fw-bold'>{product.title}</h1>
          <p className='lead fw-bolder'>
            Rating {product.rating && product.rating.rate}{' '}
            <i className='fa fa-star text-warning'></i>
          </p>
          <h2 className='display-6 fw-bold my-4'>${product.price}</h2>
          <p className='lead'>{product.description}</p>
          <button className='btn btn-outline-primary px-4 py-2'>Add to Cart</button>
          <NavLink className='btn btn-outline-primary px-3 py-2'>Go to Cart</NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className='container py-5'>
        <div className='row justify-content-center py-5'>
          {loading ? <SkeletonLoading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
