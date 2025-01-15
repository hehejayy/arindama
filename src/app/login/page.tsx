'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Components/Navbar'; 
import Footer from '../Components/footer';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(loginbg.png)' }}>
      <Navbar />
      <motion.div
        className="max-w-lg mx-auto bg-white p-8 mt-10 mb-10 rounded-3xl shadow-lg font-poppins"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Masuk ke Akun Anda</h2>
        
        <p className="text-sm text-gray-600 mb-6">
          Kami adalah platform e-commerce yang menghadirkan pakaian tradisional dan modern terinspirasi dari kekayaan budaya Indonesia, memadukan elemen tradisional dengan gaya kontemporer untuk melestarikan warisan nusantara.
        </p>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="flex items-center text-sm text-gray-500"
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="h-5 w-5" />
                <span className="ml-1">{showPassword ? 'Hide' : 'Show'}</span>
              </button>
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="mt-1 block w-full border-2 border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-3"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
            <button
              type="submit"
              className="w-full sm:w-1/2 py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gray-400 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-2 sm:mb-0"
            >
              Log in
            </button>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-500 sm:ml-2">
              Forgot your password?
            </a>
          </div>

          <div className="flex items-center justify-center mb-4">
            <span className="border-t border-gray-300 flex-grow mr-3"></span>
            <span className="text-gray-500 text-sm">Or log in with</span>
            <span className="border-t border-gray-300 flex-grow ml-3"></span>
          </div>

          <div className="flex justify-between">
            <button className="w-1/2 py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <span className="flex items-center justify-center">
                <img src="/facebook-icon.svg" alt="Facebook" className="h-5 w-5 mr-2" />
                Facebook
              </span>
            </button>
            <button className="w-1/2 ml-2 py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              <span className="flex items-center justify-center">
                <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
                Google
              </span>
            </button>
          </div>
        </form>
      </motion.div>
      <Footer />
    </div>
  );
};

export default LoginForm;
