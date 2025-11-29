import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../../assets/icons/main-logo.png';

function PasswordResetSuccess() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12" 
      style={{ backgroundColor: '#E6F0F5' }}
    >
      <div className="w-full max-w-[520px]">
        {/* Success Card */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-lg text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <img 
                src={mainLogo} 
                alt="Sofi Core Logo" 
                className="w-12 h-12 object-contain"
              />
              <span className="font-bold text-2xl tracking-tight leading-none" style={{ color: '#C59E54', marginTop: '4px' }}>Soul Gate</span>
            </div>
          </div>

          {/* Title */}
          <h1 
            className="text-gray-900 font-sf-pro mb-3"
            style={{
              fontSize: '32px',
              fontWeight: 700,
              lineHeight: '120%',
              letterSpacing: '-0.5px',
            }}
          >
            Password Updated Successfully!
          </h1>
          
          {/* Subtitle */}
          <p 
            className="text-gray-600 font-sf-pro mb-8"
            style={{
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '150%',
            }}
          >
            Your new password has been saved. You can now continue securely.
          </p>

          {/* Sign In Button */}
          <Link
            to="/login"
            className="inline-block w-full h-[52px] leading-[52px] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            style={{ background: 'linear-gradient(to right, #275681, #4F94D4)' }}
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PasswordResetSuccess;
