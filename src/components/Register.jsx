import React, { useState } from 'react';
import axios from '../instant/axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage(null);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
    setMessage(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      if (otpSent) {
        const response = await axios.post("/user/verifyOtp", {
          email: formData.email,
          otp,
        });

        if (response.data) {
          setMessage("OTP Verified Successfully.");
          setMessageType("success");
          setTimeout(() => {
            navigate("/login");
          }, 1200);
        } else {
          setMessage("Invalid OTP.");
          setMessageType("error");
        }
      } else {
        const response = await axios.post("/user/signup", formData);

        if (response.data) {
          setOtpSent(true);
          setMessage("Registration successful. Please check your email for the OTP.");
          setMessageType("success");
        } else {
          setMessage("Error during registration.");
          setMessageType("error");
        }
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || "Server error.");
      } else {
        setMessage("Something went wrong!");
      }
      setMessageType("error");
    }

    setLoading(false);
  };


  return (
    <div className="min-h-screen flex items-center justify-center px-4"
    style={{
      backgroundImage:
        "url('https://www.shaadidukaan.com/view/images/why-choose-bg.webp')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}>


<main className="flex-grow flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-pink-200 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#ed4856] mb-6">
            {otpSent ? "Verify OTP" : "Create an Account"}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            {!otpSent ? (
              <>
                <input
                  type="text"
                  name="fullname"
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-pink-400 focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-pink-400 focus:outline-none"
                />
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="*********"
                  autoComplete="new-password"
                  required
                  className="w-full px-4 py-3 border border-gray-300 focus:ring-1 focus:ring-pink-400 focus:outline-none"
                />
              </>
            ) : (
              <input
                type="text"
                name="otp"
                onChange={handleOtpChange}
                placeholder="Enter OTP"
                required
                className="w-full px-4 py-3 border rounded-lg border-gray-300 focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            )}

            <button
              type="submit"
              className={`w-full py-3 text-lg bg-[#ed4856] text-white font-semibold  hover:bg-pink-900 transition ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading
                ? otpSent
                  ? "Verifying OTP..."
                  : "Signing up..."
                : otpSent
                ? "Verify OTP"
                : "Sign Up"}
            </button>
          </form>

          {message && (
            <div
              className={`mt-4 text-center px-4 py-3 rounded-lg text-sm font-medium ${
                messageType === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {message}
            </div>
          )}

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#ed4856] font-semibold hover:underline">
              Login
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
};

export default Register;
