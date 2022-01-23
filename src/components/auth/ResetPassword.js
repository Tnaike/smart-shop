import React from 'react';
import { NavLink } from 'react-router-dom';

const ResetPassword = () => {
  return (
    <>
      <button
        type='button'
        className='btn btn-outline-primary'
        data-bs-toggle='modal'
        data-bs-target='#resetPasswordModal'
      >
        Reset Password
      </button>

      <div
        className='modal fade'
        id='resetPasswordModal'
        tabindex='-1'
        aria-labelledby='resetPassModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content auth-wrap'>
            <div className='modal-header'>
              <h5 className='modal-title fw-bold' id='resetPassModalLabel'>
                Reset Password
              </h5>
              <span class='modal-closer'></span>
              <span
                class='btn-close modal-close-times fs-6'
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
                  <button type='submit' class='btn-block btn-primary'>
                    Reset Password
                  </button>
                </div>
                <div className='text-center mt-4'>
                  <NavLink to='/login' className='a-link'>
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
