"use client";
import React, { useState } from "react";
import Link from "next/link";
import Login from "../loginschool/Login";

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
    schoolName: "",
    phoneNumber: "",
    countryCode: "+1", // Default country code
    email: "",
    schoolId: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    schoolName: "",
    phoneNumber: "",
    password: "",
  });

  const [passwordStrength, setPasswordStrength] = useState("");

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate input
    switch (name) {
      case "schoolName":
        setErrors({
          ...errors,
          schoolName: /^[a-zA-Z\s]*$/.test(value)
            ? ""
            : "School name should only contain letters",
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check for validation errors
    if (errors.schoolName || errors.phoneNumber || errors.password) {
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
            <label className="block text-gray-700">School Name</label>
            <input
              type="text"
              name="schoolName"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.schoolName ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter your school name"
              value={formData.schoolName}
              onChange={handleChange}
            />
            {errors.schoolName && (
              <p className="text-red-500 text-sm">{errors.schoolName}</p>
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
            <label className="block text-gray-700">School ID</label>
            <input
              type="text"
              name="schoolId"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your school ID"
              value={formData.schoolId}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <p className={`text-sm mt-2 ${passwordStrength === "Strong" ? "text-green-500" : passwordStrength === "Moderate" ? "text-yellow-500" : "text-red-500"}`}>
              Password Strength: {passwordStrength}
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link
            href="/my-app/app/components/loginschool/Login.tsx"
            className="text-blue-500 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
