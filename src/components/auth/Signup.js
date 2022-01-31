import React from 'react';
import { NavLink } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <button
        type='button'
        className='a-link ms-3'
        data-bs-toggle='modal'
        data-bs-target='#signupModal'
      >
        Register
      </button>

      <div
        className='modal fade'
        id='signupModal'
        tabIndex='-1'
        aria-labelledby='registerModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content auth-wrap'>
            <div className='modal-header'>
              <h5 className='modal-title fw-bold' id='registerModalLabel'>
                Create an Account
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
                    name='fullName'
                    className='input-field'
                    defaultValue=''
                    placeholder='Full Name'
                  />
                  <span
                    className='input-label'
                    data-placeholder='Full Name'
                  ></span>
                  <span className='input-icon'>
                    <i className='fa fa-user-o'></i>
                  </span>
                </div>
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
                <div className='wrap-input'>
                  <input
                    type='password'
                    name='password'
                    className='input-field'
                    defaultValue=''
                    placeholder='Password'
                  />
                  <span
                    className='input-label'
                    data-placeholder='Password'
                  ></span>
                  <span className='input-icon'>
                    <i className='fa fa-lock'></i>
                  </span>
                </div>
                <div className='mb-3 form-check px-4'>
                  <input
                    type='checkbox'
                    className='form-check-input'
                    id='acceptTermsCheck'
                  />
                  <label className='form-check-label' htmlFor='acceptTermsCheck'>
                  Accept Terms &amp; Conditions
                  </label>
                </div>
                <div className='btn-container'>
                  <button type='submit' className='btn-block btn-primary'>
                    Register
                  </button>
                </div>
                <div className='text-center mt-4'>
                  Already have an account?
                  <NavLink
                    to='/register'
                    className='a-link fw-bold'
                    data-bs-toggle='modal'
                    data-bs-target='#loginModal'
                  >
                    {' '}
                    Login
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

export default Signup;
