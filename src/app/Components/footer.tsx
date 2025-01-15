"use client";
import React from 'react'
import Head from 'next/head';

export default function footer() {
  return (
    <div className="h-96 flex flex-col justify-center items-center bg-gray-900 text-white">
    <main className="flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Budaya, Modern, Kolaboratif.</h1>
      <p className="mb-6 text-sm md:text-lg w-80">Kami adalah platform e-commerce yang menghadirkan pakaian tradisional dan modern terinspirasi dari kekayaan budaya Indonesia</p>
      <button className="bg-yellow-500 text-black font-semibold py-2 px-4 rounded">Kontak</button>
    </main>
    <hr className=''></hr>
    <footer className="mt-8 text-center">
      <div className="mb-4">
        
        <span className="text-sm">&copy; 2025 Arindama. All Rights Reserved.</span>
      </div>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  </div>
  )
}
