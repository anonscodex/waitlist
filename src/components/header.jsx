import React from 'react';
import Logo from './logo';

const Header = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    alert('Thank you for joining the waitlist!');
    event.target.email.value = '';
  };

  return ( 
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-8">
        <Logo />
      </div>
      <div className="p-8 rounded-lg shadow-lg w-full md:w-1/4">
        <h2 className="text-2xl font-bold mb-8 text-center">Join the Waitlist</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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