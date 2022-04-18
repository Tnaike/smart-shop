import React from 'react';
import Slider from './slider/Index';
import { NavLink } from 'react-router-dom';
import DATA from '../Data';

import { ReactComponent as ValueIcon } from '../assets/value.svg';
import { ReactComponent as SeamlessIcon } from '../assets/seamless.svg';
import { ReactComponent as SafeIcon } from '../assets/safe.svg';
import { ReactComponent as DeliveryIcon } from '../assets/delivery.svg';

const Home = () => {
  return (
    <>
      <div className='main-wrap'>
        <Slider />
        <div className='cat__banner_wrap my-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='cat_banner'>
                  <div className='cat_title'>
                    <h3>Men's Clothing</h3>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='cat_banner'>
                  <div className='cat_title'>
                    <h3>Women's Clothing</h3>
                    <div className='offer-banner'>
                      <div className='offer-banner-score text-primary'>15%</div>
                    </div>
                    <div className='offer-banner-badge text-uppercase ib'>Offer</div>
                  </div>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='cat_banner'>
                  <div className='cat_title'>
                    <h3>Electronics</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='section-title-wrap text-center'>
          <h2>Most Recent Products</h2>
        </div>
        <section className='container'>
          <div className='row'>
            <div className='col-lg-12 my-5'>
              <div className='bg-white shadow-sm card p-3'>
                <div className='d-flex justify-content-between'>
                  <h5 className='page-lead m-0'>Recommended Products</h5>
                </div>
                <hr />
                <div className='row'>
                  {DATA?.slice(0, 8).map((item) => {
                    return (
                      <div className='col-md-3 col-sm-12 p-3' key={item.id}>
                        <div className='card my-4 py-2'>
                          <img
                            src={item.img}
                            className='card-img-top'
                            alt={item.title}
                          />
                          <div className='card-body text-center'>
                            <h5 className='card-titleer font-13 prod-title'>
                              {item.title}
                            </h5>
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
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='container more-for-you mt-4 d-none d-sm-block text-dblue'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='py-5 bg-white'>
                <div className='row'>
                  <div className='col-lg-3'>
                    <div className='d-flex justify-content-lg-between'>
                      <div className='pe-3'>
                        <ValueIcon />
                      </div>
                      <div>
                        <h6 className='bolder font-13 text-uppercase ls__1 mb-1'>
                          Great value items
                        </h6>
                        <p className='font-10 m-0'>
                          Most extensive sale of retail brand, covering hundreds
                          of household consumable items.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='d-flex justify-content-lg-between'>
                      <div className='pe-3'>
                        <SeamlessIcon />
                      </div>
                      <div>
                        <h6 className='bolder font-13 text-uppercase ls__1 mb-1'>
                          Seamless shopping
                        </h6>
                        <p className='font-10 m-0'>
                          We offer wide range of products that fits every type
                          of personality and shopping taste.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='d-flex justify-content-lg-between'>
                      <div className='pe-3'>
                        <SafeIcon />
                      </div>
                      <div>
                        <h6 className='bolder font-13 text-uppercase ls__1 mb-1'>
                          Secure payment
                        </h6>
                        <p className='font-10 m-0'>
                          When you make payment with any available pay option,
                          you can be rest assured about your security.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-3'>
                    <div className='d-flex justify-content-lg-between'>
                      <div className='pe-3'>
                        <DeliveryIcon />
                      </div>
                      <div>
                        <h6 className='bolder font-13 text-uppercase ls__1 mb-1'>
                          Nationwide delivery
                        </h6>
                        <p className='font-10 m-0'>
                          We offer fast and effective delivery to every location
                          in Nigeria within 2-3 working days.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
