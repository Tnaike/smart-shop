import React from 'react';
import { NavLink } from 'react-router-dom';
import './Auth.css';


const Login = () => {
  return (
    <>
      <button
        type='button'
        className='a-link'
        data-bs-toggle='modal'
        data-bs-target='#loginModal'
      >
        <span className='fa fa-user-o me-1'></span>Login
      </button>

      <div
        className='modal fade'
        id='loginModal'
        tabindex='-1'
        aria-labelledby='loginModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content auth-wrap'>
            <div className='modal-header'>
              <h5 className='modal-title fw-bold' id='loginModalLabel'>
                Login
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
                <div className='wrap-input'>
                  <input
                    type='password'
                    name='password'
                    className='input-field'
                    defaultValue='{password}'
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
                <div className='form-wrap text-end'>
                  <NavLink to='/reset-password' className='a-link' data-bs-toggle='modal' data-bs-target='#resetPasswordModal'>
                    Forgot password?
                  </NavLink>
                </div>
                <div className='btn-container'>
                  <button type='submit' class='btn-block btn-primary'>
                    Submit
                  </button>
                </div>
                <div className='text-center mt-4'>
                  <NavLink to='/' className='a-link' data-bs-toggle='modal' data-bs-target='#signupModal'>
                    Create your Account
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

export default Login;
