import React from 'react';
import mainLogo from '../assets/icons/main-logo.png';

function GlobalLoader() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: '#E6F0F5' }}
    >
      <div className="w-full max-w-md">
        {/* Glass Card */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-10 shadow-lg">
          {/* Logo - Icon Only */}
          <div className="flex flex-col items-center justify-center mb-8">
            <img 
              src={mainLogo} 
              alt="Sofi Core Logo" 
              className="w-16 h-16 object-contain mb-2"
            />
            <div className="text-xl font-bold" style={{ color: '#C59E54' }}>Soul Gate</div>
          </div>

          {/* Spinner */}
          <div className="flex justify-center mb-6">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
              <div 
                className="absolute inset-0 border-4 border-transparent rounded-full animate-spin"
                style={{ 
                  borderTopColor: '#275681',
                  borderRightColor: '#4F94D4'
                }}
              ></div>
            </div>
          </div>

          {/* Loading Text - Subtle and Clean */}
          <p className="text-center text-gray-600 font-medium text-base">
            Loading<span className="animate-pulse">...</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default GlobalLoader;
