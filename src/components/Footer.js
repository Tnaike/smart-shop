import React from 'react';
import { NavLink } from 'react-router-dom';
import FootLogo from '../assets/SmartShop__foot.png';
import MasterCard from '../assets/Mastercard.png';
import ApplePay from '../assets/ApplePay.png';
import AmazonPay from '../assets/AmazonPay.png';
import PayPal from '../assets/PayPal.png';
import Bitcoin from '../assets/Bitcoin.png';
import Visa from '../assets/Visa.png';
import './style.css';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <>
      <footer className='footer'>
        <div className='footer_wrap pr pt__60 pb__30 text-white'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-md-6 col-12 mb__30 order-lg-1'>
                <div className='widget_footer'>
                  <h3 className='widget_title flex al_center fl_between font-16 mg__0 mb__30 dn_md'>
                    <span className='txt_title'>GET IN TOUCH</span>
                    <span className='nav_link_icon me-5'></span>
                  </h3>
                  <div className='textwidget widget_footer'>
                    <div className='footer-contact'>
                      <p>
                        <a className='db' href='/'>
                          <img src={FootLogo} alt='SmartShop' height='50'/>
                        </a>
                      </p>
                      <p>
                        <i className='fa fa-map-marker me-2'> </i>
                        <span>
                          1, Naike Avenue, Netwood Rd, <br />{' '}
                          <span className='pl__30'>Victoria-Island, Lagos.</span>
                        </span>
                      </p>
                      <p>
                        <i className='fa fa-envelope me-2'></i>
                        <span>
                          {' '}
                          <a
                            href='mailto:contact@smartshop.ng'
                            className='text-white'
                          >
                            contact@smartshop.ng
                          </a>
                        </span>
                      </p>
                      <p>
                        <i className='fa fa-phone me-2'></i>{' '}
                        <span>+234 802-3031-668 </span>
                      </p>
                    </div>
                  </div>
                  <div className='widget widget__social_profiles'>
                    <div className='social-profiles-wrapper'>
                      <div className='social-profiles-wrapper-inner'>
                        <div className='social-profiles'>
                          <ul>
                            <li>
                              <a
                                href='http://'
                                title='Facebook'
                                target='_blank'
                                rel='noreferrer'
                              >
                                <i className='fa fa-facebook'></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href='https://twitter.com/Timmynaike'
                                title='Twitter'
                                target='_blank'
                                rel='noreferrer'
                              >
                                <i className='fa fa-twitter'></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href='https://github.com/Tnaike'
                                title='GitHub'
                                target='_blank'
                                rel='noreferrer'
                              >
                                <i className='fa fa-github'></i>
                              </a>
                            </li>
                            <li>
                              <a
                                href='https://www.linkedin.com/in/timilehin-adenaike-865069129'
                                title='Linkedin'
                                target='_blank'
                                rel='noreferrer'
                              >
                                <i className='fa fa-linkedin'></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-12 mb__30 order-lg-1'>
                <div className='widget_footer'>
                  <h3 className='widget_title flex al_center fl_between font-16 mg__0 mb__20'>
                    <span className='txt_title'>CATEGORIES</span>
                  </h3>
                  <div className='menu_footer widget_footer'>
                    <ul className='menu'>
                      <li class='menu-item'>
                        <a href='/collections/men'>For Men</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/collections/women'>For Women</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/collections/accessories'>Accessories</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/collections/shoes'>Shoes</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/collections/denim'>Denim</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-12 mb__30 order-lg-1'>
                <div className='widget_footer'>
                  <h3 className='widget_title flex al_center fl_between font-16 mg__0 mb__20'>
                    <span className='txt_title'>INFORMATION</span>
                  </h3>
                  <div class='menu_footer widget_footer'>
                    <ul class='menu'>
                      <li class='menu-item'>
                        <a href='/about-us'>About Us</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/contact-us'>Contact Us</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/terms-conditions'>Terms &amp; Conditions</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/returns-exchanges'>Returns &amp; Exchanges</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/shipping-delivery'>Shipping &amp; Delivery</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-2 col-md-6 col-12 mb__30 order-lg-1'>
                <div className='widget_footer'>
                  <h3 className='widget_title flex al_center fl_between font-16 mg__0 mb__20'>
                    <span className='txt_title'>USEFUL LINKS</span>
                  </h3>
                  <div class='menu_footer widget_footer'>
                    <ul class='menu'>
                      <li class='menu-item'>
                        <a href='/store-location'>Store Location</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/latest-news'>Latest News</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/size-guide'>Size Guide</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/safety-tips'>Safety tips</a>
                      </li>
                      <li class='menu-item'>
                        <a href='/faqs'>FAQs</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-lg-3 col-md-6 col-12 mb__30 order-lg-1'>
                <div className='widget_footer'>
                  <h3 className='widget_title flex al_center fl_between font-16 mg__0 mb__20'>
                    <span className='txt_title'>NEWSLETTER SIGNUP</span>
                  </h3>
                  <div className='textwidget widget_footer'>
                    <p>Subscribe to our newsletter to Get exclusive offers.</p>
                  </div>
                  <div className='field-widget'>
                    <form className='newsletter_form pr'>
                      <div className='input-area'>
                        <input
                          type='text'
                          className='newsletter-email'
                          name='newsletter_email'
                          placeholder='Enter your email'
                        />
                      </div>
                      <div className='button-area'>
                        <span className='input-group-btn'>
                          <button
                            className='btn btn-icon submit'
                            type='submit'
                          ></button>
                        </span>
                      </div>
                      <p className='newsletter-msg'></p>
                    </form>
                  </div>
                  <div className='payment__method-icon mt__20'>
                    <img src={MasterCard} alt='payment method'/>
                    <img src={AmazonPay} alt='payment method'/>
                    <img src={ApplePay} alt='payment method'/>
                    <img src={PayPal} alt='payment method'/>
                    <img src={Bitcoin} alt='payment method'/>
                    <img src={Visa} alt='payment method'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='site-info'>
          <div className='container'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6 pull-left'>
                Copyright © {year}{' '}
                <NavLink className='text-white' to='/'>
                  Smart Store{' '}
                </NavLink>
                All rights reserved.
              </div>
              <div className='col-lg-6 col-md-6 pull-right'>
                <div className='text-right'>
                  Develop &amp; design by{' '}
                  <span className='text-primary'>Tnaike</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
