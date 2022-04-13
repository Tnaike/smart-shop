import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/smartshop-logo.png';
import './style.css';

const Footer = () => {
  return (
    <>
      <footer className='footer_wrap pr pt__60 pb__30 text-white'>
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
                        <img src={Logo} alt='SmartShop' />
                      </a>
                    </p>
                    <p>
                      <i className='fa fa-map-marker me-2'> </i>
                      <span>
                        101, Tiamiyu Savage Street, <br />{' '}
                        <span className='pl__30'>Victoria-Island, Lagos</span>
                      </span>
                    </p>
                    <p>
                      <i className='fa fa-envelope me-2'></i>
                      <span>
                        {' '}
                        <a
                          href='mailto:contact@smartshop.com'
                          className='text-white'
                        >
                          contact@smartshop.com
                        </a>
                      </span>
                    </p>
                    <p>
                      <i className='fa fa-phone me-2'></i>{' '}
                      <span>+234 802 3031 669 </span>
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
                              href='http://'
                              title='Twitter'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <i className='fa fa-twitter'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href='http://'
                              title='Instagram'
                              target='_blank'
                              rel='noreferrer'
                            >
                              <i className='fa fa-instagram'></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href='http://'
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
                  <span className='nav_link_icon me-2'></span>
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
                  <span className='nav_link_icon me-2'></span>
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
                  <span className='nav_link_icon me-2'></span>
                </h3>
                <div class='menu_footer widget_footer'>
                  <ul class='menu'>
                    <li class='menu-item'>
                      <a href='/store-location'>Store Location</a>
                    </li>
                    <li class='menu-item'>
                      <a href='/latest-news'>latest News</a>
                    </li>
                    <li class='menu-item'>
                      <a href='/size-guide'>Size Guide</a>
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
                  <span className='nav_link_icon me-2'></span>
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
                        >
                          Subscribe
                        </button>
                      </span>
                    </div>
                    <p className='newsletter-msg'></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className='m-0'>
          Copyright ©2022{' '}
          <NavLink className='text-white' to='/'>
            Smart Store
          </NavLink>{' '}
          All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Footer;
