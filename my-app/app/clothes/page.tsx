"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar/page";
import ClothingDonorPage from "./clothingdonor/clothingdonor";
import Inventory from "./inventory/inventory"; // Adjust the path as necessary

const Page = () => {
  const router = useRouter();
  const donateRef = useRef<HTMLDivElement | null>(null);
  const neededRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToDonate = () => {
    if (donateRef.current) {
      donateRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const handleScrollToNeeded = () => {
    if (neededRef.current) {
      neededRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <div className="relative">
        <div
          className="hero min-h-screen h-screen bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fGNsb3RoaW5nJTIwbGVmdCUyMHNpZGV8ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="hero-overlay bg-gradient-to-b from-transparent to-black opacity-60 absolute inset-0"></div>
          <div className="flex flex-col items-center justify-center text-center text-white z-10 px-6">
            <div className="max-w-lg">
              <h1 className="mb-5 text-6xl font-extrabold leading-tight drop-shadow-md">
                Make a Difference with Your Clothing Donation
              </h1>
              <p className="mb-8 text-lg font-medium drop-shadow-sm">
                Join us in our mission to help those in need by donating your
                gently used clothes. Explore our needed items or offer your
                contributions below.
              </p>
              <div className="flex justify-center space-x-6">
                <button
                  onClick={handleScrollToNeeded}
                  className="btn btn-primary text-lg font-semibold py-3 px-6 rounded-full shadow-xl transition-transform transform hover:scale-105 hover:bg-blue-700"
                >
                  Needed Clothes
                </button>
                <button
                  onClick={handleScrollToDonate}
                  className="btn btn-secondary text-lg font-semibold py-3 px-6 rounded-full shadow-xl transition-transform transform hover:scale-105 hover:bg-green-700"
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={neededRef} className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10 text-blue-700">
            Needed Clothing Items
          </h2>
          <div className="p-10 max-w-20xl mx-auto bg-gray-100 shadow-2xl rounded-lg">
            <Inventory />
          </div>
        </div>
      </div>

      <div ref={donateRef} className="h-screen bg-gray-50 flex items-center justify-center">
        <div className="min-h-screen h-full w-full bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1502898746234-cdef14a6eec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGNsb3RoaW5nJTIwbGVmdCUyMHNpZGV8ZW58MHx8MHx8fDA%3D')",
          }}
        >
          <div className="hero-overlay bg-gradient-to-b from-transparent to-white opacity-60 absolute inset-0"></div>
          <div className="flex flex-col max-w-20xl mx-auto items-center justify-center text-center text-gray-900 z-10 px-6">
            <ClothingDonorPage />
          </div>
        </div>
      </div>
=======
import React from "react";
import Navbar from "../components/Navbar/page";
import Footer from "../components/Footer/page";

const Page = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-300 min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto mt-16 px-4">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
                You Can Make a Difference
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-6">
                Your support of our mission brings hope and help to families in
                need. Together, we can create lasting change and offer
                assistance where it's needed most.
              </p>
              <p className="text-base md:text-lg text-gray-600 mb-6">
                <strong className="font-semibold">Mission Statement:</strong>{" "}
                Our mission is to provide emergency assistance, disaster relief,
                and education in communities affected by crises. We aim to help
                individuals and families recover and rebuild their lives through
                dedicated support and resources.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Our Impact
                </h2>
                <ul className="list-disc pl-5 text-gray-700">
                  <li>Over 500,000 people assisted in the last year alone.</li>
                  <li>
                    Dispatched over 1,000 disaster relief vehicles to affected
                    areas.
                  </li>
                  <li>
                    Provided emergency supplies and financial aid to thousands
                    of families.
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  What People Are Saying
                </h2>
                <blockquote className="text-gray-700 italic border-l-4 border-blue-500 pl-4">
                  <p>
                    "Your support has been a lifeline for my family. We are
                    incredibly grateful for the help and hope you have provided
                    during this challenging time." - Jane Doe
                  </p>
                </blockquote>
              </div>
              <div className="mt-8">
                <a className="bg-blue-600  text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold">
                  Get Involved With Us
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://aspireandglee.com/wp-content/uploads/2021/06/yaas-gosaba-1.jpg"
                alt="American Red Cross Disaster Relief Vehicle"
                className="rounded-md shadow-lg transform transition-transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
