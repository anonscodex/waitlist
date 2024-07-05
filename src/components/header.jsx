import React from 'react';
import Logo from './logo';
import FloatingImage from './FloatingImage';
import FloatingImage2 from './Floatingimage2';

const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    alert('Thank you for joining the waitlist!');
    event.target.email.value = '';
  };

  return ( 
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className='m-10 flex flex-row'>
      <FloatingImage />
      <FloatingImage2 />

      </div>
      
      <div className="p-8 rounded-lg shadow-lg w-full md:w-1/4 justify-center">
      <div className="mb-8">
        <Logo />
      </div>
        <h2 className="text-1xl font-bold mb-8 text-center">Join the <span className='text-indigo-700'>Waitlist</span> for the next big thing that provide 
        a place for skilled service provider</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-700 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Join Waitlist
            </button>
          </div>
        </form>
      </div>
      
    </div>
  );
};
 
export default Header;
