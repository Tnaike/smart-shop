import React from 'react';
import './bannerStyle.css';

const PageBanner = ({ title }) => {
  return (
    <>
      <div className='page-banner'>
        <div className='page_bg-img'>
          <div className='container'>
            <div className='row'>
              <h1 className='intro_title text-center bold text-white'>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
