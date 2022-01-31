import React from 'react';
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
      <div
        className='modal fade'
        id='resetPasswordModal'
        tabIndex='-1'
        aria-labelledby='resetPassModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content auth-wrap'>
            <div className='modal-header'>
              <h5 className='modal-title fw-bold' id='resetPassModalLabel'>
                Reset Password
              </h5>
              <span className='modal-closer'></span>
              <span
                className='btn-close modal-close-times fs-6'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></span>
            </div>
            <div className='modal-body'>
              <form className='py-3'>
                <div className='wrap-input'>
                  <input
                    type='text'
                    name='email'
                    className='input-field'
                    defaultValue=''
                    placeholder='Email Address'
                  />
                  <span
                    className='input-label'
                    data-placeholder='Email Address'
                  ></span>
                  <span className='input-icon'>
                    <i className='fa fa-envelope-o'></i>
                  </span>
                </div>
                <div className='btn-container'>
                  <button type='submit' className='btn-block btn-primary'>
                    Reset Password
                  </button>
                </div>
                <div className='text-center mt-4'>
                  <NavLink to='/login' className='a-link fw-bold' data-bs-toggle='modal' data-bs-target='#loginModal'>
                    Login
                    <i
                      className='fa fa-long-arrow-right ms-1'
                      aria-hidden='true'
                    ></i>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
