
import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Login"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <form className="w-full">
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
              />
            </div>
            <div className="card-actions justify-end">
              <button className="btn btn-primary w-full">Login</button>
            </div>
            <div classname-="mt-8 text-sm"> 
                <Link to='/singup' className='text-primary hover:underline'>
                  Singup
                </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
