import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import mainLogo from '../../assets/icons/main-logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Mock Login Logic
    setTimeout(() => {
      // Store mock tokens and user info
      localStorage.setItem('accessToken', 'mock-access-token');
      localStorage.setItem('refreshToken', 'mock-refresh-token');
      localStorage.setItem('user', JSON.stringify({ name: 'Mock User', email: email }));
      localStorage.setItem('isAuthenticated', 'true');
      
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000); // 1 second delay to simulate network request
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12" 
      style={{ backgroundColor: '#E6F0F5' }}
    >
      <div className="w-full max-w-[520px]">
        {/* Login Card */}
        <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-lg">
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

          {/* Title Section */}

          <div className="text-center space-y-2 mb-8">
            <h1 
              className="text-gray-900 font-sf-pro"
              style={{
                fontSize: '32px',
                fontWeight: 700,
                lineHeight: '120%',
                letterSpacing: '-0.5px',
              }}
            >
              Login to Account
            </h1>
            <p 
              className="text-gray-600 font-sf-pro mt-3"
              style={{
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '150%',
                letterSpacing: '0%',
              }}
            >
              Please enter your email and password to continue
            </p>
            {error && (
              <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg mt-4">
                {error}
              </div>
            )}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Input */}
            <div className="space-y-2">
              <label 
                htmlFor="email" 
                className="block text-left text-gray-900 font-semibold text-sm"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="esteban_schiller@gmail.com"
                required
                className="w-full h-[52px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700/50 focus:border-teal-700 bg-white transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400"
              />
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label 
                htmlFor="password" 
                className="block text-left text-gray-900 font-semibold text-sm"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-[52px] px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-700/50 focus:border-teal-700 bg-white transition-all duration-200 placeholder:text-gray-400 hover:border-gray-400"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors duration-200 focus:outline-none"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me & Forget Password */}
            <div className="flex items-center justify-between text-sm pt-1">
              <label className="flex items-center cursor-pointer group">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer transition-all duration-200"
                  style={{ accentColor: '#275681' }}
                />
                <span className="ml-2.5 text-gray-700 font-medium group-hover:text-gray-900 transition-colors">
                  Remember Password
                </span>
              </label>
              <Link 
                to="/forgot-password"
                className="font-medium transition-colors duration-200"
                style={{ color: '#275681' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                Forget Password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full h-[52px] text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] mt-6 disabled:opacity-70 disabled:cursor-not-allowed"
              style={{
                background: 'linear-gradient(to right, #275681, #4F94D4)',
              }}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
