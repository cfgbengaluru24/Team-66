"use client";
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
