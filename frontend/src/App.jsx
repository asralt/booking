import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-[#CABAC8]">
      <Navbar /> {/* Include the Navbar component */}
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-gray-900">Welcome to the Booking Website</h1>
      </div>
    </div>
  );
};

export default App;
