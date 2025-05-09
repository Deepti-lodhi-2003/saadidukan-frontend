import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axiosInstance from '../instant/axios';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/user/login', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem('token', token);
        alert('Login successful');
        navigate('/');
      } else {
        alert('Login failed, no token received');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <section className="font-['Roboto'] w-full min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <a href="#">
        <img
          src="https://www.shaadidukaan.com/view/images/logo.png"
          alt="Logo"
          className="mx-auto max-w-[150px] md:max-w-[200px]"
        />
      </a>

      <div className="flex flex-col md:flex-row mt-10 w-full max-w-5xl items-center justify-center">
        {/* Left Section---- */}
        <div
          className="w-full md:w-1/4 h-64 md:h-[55vh] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url(https://www.shaadidukaan.com/view/images/login-bg2.jpg)",
          }}
        >
          <div className="absolute inset-[5%] border-2 border-white"></div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 md:h-[55vh] bg-white  rounded-md shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-t border-r border-b border-gray-100 flex items-center justify-center py-10 px-6">
          <div className="bg-white w-full max-w-sm ">
            <h2 className="text-2xl font-bold text-center text-[#ed4856] mb-6">Welcome Back 👋</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 text-sm mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
                  autoComplete="off"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="*********"
                  autoComplete="new-password"
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-pink-400"
                />
              </div>

               {/* Forgot password link */}
               <Link to="/forgot-password" className="text-[#335288] font-semibold hover:underline">
                Forgot password?
              </Link>

              <button
                type="submit"
                className="w-full bg-[#ed4856] text-white font-semibold py-2 hover:bg-pink-900 transition duration-300"
              >
                Login
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-4">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#ed4856] font-semibold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <Link to="/" className="text-black">
          Do You Want To Go <span className="font-bold">Back</span>
        </Link>
      </div>
    </section>
  );
};

export default LoginPage;
