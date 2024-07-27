"use client";
import React, { useState } from "react";
import Link from "next/link";

// Function to check password strength
const checkPasswordStrength = (password: string) => {
  const strength = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };
  
  const score = Object.values(strength).filter(Boolean).length;

  switch (score) {
    case 5:
      return "Strong";
    case 4:
      return "Moderate";
    case 3:
      return "Weak";
    default:
      return "Very Weak";
  }
};

const Signup = () => {
  const [formData, setFormData] = useState({
    donorName: "",
    phoneNumber: "",
    countryCode: "+1", // Default country code
    email: "",
    donorId: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    donorName: "",
    phoneNumber: "",
    password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate input
    switch (name) {
      case "donorName":
        setErrors({
          ...errors,
          donorName: /^[a-zA-Z\s]*$/.test(value)
            ? ""
            : "Donor name should only contain letters",
        });
        break;
      case "phoneNumber":
        setErrors({
          ...errors,
          phoneNumber: /^\d{10}$/.test(value)
            ? ""
            : "Phone number must be exactly 10 digits",
        });
        break;
      case "password":
        setPasswordStrength(checkPasswordStrength(value));
        setErrors({
          ...errors,
          password: value.length < 8
            ? "Password must be at least 8 characters long"
            : "",
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check for validation errors
    if (errors.donorName || errors.phoneNumber || errors.password) {
      alert("Please fix the errors in the form");
      return;
    }

    // Send signup request to backend
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("A verification email has been sent to your email address.");
    } else {
      alert("There was an error signing up.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Donor Name</label>
            <input
              type="text"
              name="donorName"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.donorName ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter donor name"
              value={formData.donorName}
              onChange={handleChange}
            />
            {errors.donorName && (
              <p className="text-red-500 text-sm">{errors.donorName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <div className="flex">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="mr-2 px-2 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="+1">+1</option>
                <option value="+44">+44</option>
                <option value="+91">+91</option>
                {/* Add more country codes as needed */}
              </select>
              <input
                type="tel"
                name="phoneNumber"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.phoneNumber ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                placeholder="Enter your phone number"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Donor ID</label>
            <input
              type="text"
              name="donorId"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter donor ID"
              value={formData.donorId}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.password ? "focus:ring-red-500" : "focus:ring-blue-500"
                }`}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                {showPassword ? (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3.1 4.9a10.07 10.07 0 000 14.2M21 12a9.96 9.96 0 00-5-8.7M4.3 9.3a9.96 9.96 0 000 5.4M12 12a6 6 0 016-6M6 12a6 6 0 016-6M21 12a9.96 9.96 0 01-5 8.7M12 12a6 6 0 01-6-6M9.4 16.6a6 6 0 01-3.4-3.4"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.828 14.828a4 4 0 000-5.656M9.172 9.172a4 4 0 015.656 5.656M12 12a6 6 0 00-6 6M6 12a6 6 0 016-6M12 12a6 6 0 016-6M21 12a9.96 9.96 0 00-5-8.7M3.1 4.9a10.07 10.07"
                    />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <p className="mt-2 text-gray-600">Password Strength: {passwordStrength}</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none hover:bg-blue-600"
            >
              Sign Up
            </button>
            <Link href="/login" className="text-blue-500 hover:underline">
              Already have an account?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
