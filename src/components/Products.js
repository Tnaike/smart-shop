import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAllProducts } from '../redux/actions';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';

const Products = () => {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state?.productReducer?.products);
 
  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let isCreated = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (isCreated) {
        setData(await response?.clone()?.json());
        setFilteredProducts(await response?.json());
        setLoading(false);
      }
      return () => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isCreated = false;
      };
    };

    getProducts();
  }, []);

  const LoadingProducts = () => {
    return (
      <>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
        <div className='col-md-3'>
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data?.filter((x) => x?.category === cat);
    setFilteredProducts(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className='buttons d-flex justify-content-center mb-4 pb-4'>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => setFilteredProducts(data)}
          >
            All
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct('jewelery')}
          >
            Jewelery
          </button>
          <button
            className='btn btn-outline-dark me-2'
            onClick={() => filterProduct('electronics')}
          >
            Electronics
          </button>
        </div>

        {filteredProducts?.map((product) => {
          return (
            <div className='col-md-3 col-sm-12 mb-4' key={product?.id}>
              <div className='card p-4 h-100 text-center'>
                <img
                  src={product?.image}
                  className='card-img-top'
                  alt={product.title}
                  height='250px'
                />
                <div className='card-body'>
                  <h5 className='card-title mb-0'>
                    {product?.title.substring(0, 18)}...
                  </h5>
                  <p className='card-text lead fw-bold'>${product.price}</p>
                  <NavLink
                    to={`/products/${product?.id}`}
                    className='btn btn-outline-primary'
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className='container py-5'>
        <div className='row'>
          <h2>Latest Products</h2>
          <hr />
        </div>
      </div>
      <div className='container'>
        <div className='row justify-content-center'>
          {loading ? <LoadingProducts /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
