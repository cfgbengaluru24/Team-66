"use client"; 

import { FC } from "react";

interface STUDENT {
  name: string;
  tenure: number;
  kids: number;
  donation: string; 
}

const studentData: STUDENT[] = [
  {
    name: "Student A",
    tenure: 5,
    kids: 2,
    donation: "Rs. 900000",
  },
  {
    name: "Student B",
    tenure: 3,
    kids: 1,
    donation: "Rs. 390000",
  },
  {
    name: "Student C",
    tenure: 4,
    kids: 3,
    donation: "Rs. 800000",
  },
  {
    name: "Student D",
    tenure: 2,
    kids: 0,
    donation: "Rs. 50000",
  },
  {
    name: "Student E",
    tenure: 6,
    kids: 2,
    donation: "Rs. 300000",
  },
];

const TableOne: FC = () => {
  return (
    <div className="rounded-sm border border-stroke bg-black px-5 pb-2.5 pt-6 shadow-default sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-white">Donor History</h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-5 rounded-sm bg-gray-2">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Name</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Tenure (years)</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">No. of Kids</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Donation</h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base text-white">Actions</h5>
          </div>
        </div>

        {studentData.map((student, key) => (
          <div
            className={`grid grid-cols-5 bg-gray-800 rounded-lg shadow-lg ${
              key !== studentData.length - 1 ? "mb-4" : ""
            }`}
            key={key}
          >
            <div className="flex items-center p-2.5 xl:p-5">
              <p className="text-white">{student.name}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-white">{student.tenure}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-white">{student.kids}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-white">{student.donation}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button className="text-white bg-green-500 hover:bg-green-700 px-3 py-1 rounded">Accept</button>
              <button className="text-white bg-red-500 hover:bg-red-700 px-3 py-1 rounded ml-2">Reject</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
