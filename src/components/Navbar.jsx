import { useState } from 'react'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 shadow">
      <h1 className="text-xl font-bold text-blue-600">UI Studio</h1>

      <div className="space-x-6 hidden md:block">
        <a href="#" className="hover:text-blue-500">Home</a>
        <a href="#" className="hover:text-blue-500">Features</a>
        <a href="#" className="hover:text-blue-500">Contact</a>
      </div>

      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
}
export default Navbar;