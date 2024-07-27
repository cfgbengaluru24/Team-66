"use client"; // Ensures this component is rendered on the client side

import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend, LineElement, PointElement } from "chart.js";

// Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

// Dashboard Component
const Dashboard: React.FC = () => {
  // Dummy data for demonstration
  const studentData = {
    cgpa: 8.5,
    averagePercentage: 75,
    attendance: 85,
    statistics: {
      semester1: 70,
      semester2: 75,
      semester3: 80,
      semester4: 85,
      semester5: 90,
      semester6: 85,
      semester7: 34,
    }
  };

  // Data for the bar chart
  const barChartData = {
    labels: Object.keys(studentData.statistics),
    datasets: [
      {
        label: 'Semester Performance',
        data: Object.values(studentData.statistics),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Semester',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentage',
        },
        min: 0,
        max: 100,
      },
    },
  };

  // Data for the line chart
  const lineChartData = {
    labels: Object.keys(studentData.statistics),
    datasets: [
      {
        label: 'Performance Trend',
        data: Object.values(studentData.statistics),
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
        tension: 0.1,
      },
    ],
  };

  // Options for the line chart
  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}%`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Semester',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Percentage',
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Student Progress Report</h1>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>CGPA</h3>
          <p className="card-value">{studentData.cgpa}</p>
        </div>
        <div className="dashboard-card">
          <h3>Average Percentage</h3>
          <p className="card-value">{studentData.averagePercentage}%</p>
        </div>
        <div className="dashboard-card">
          <h3>Attendance</h3>
          <p className="card-value">{studentData.attendance}%</p>
        </div>
      </div>

      <div className="charts-container">
        <div className="chart-container">
          <h2 className="chart-title">Semester Performance</h2>
          <Bar data={barChartData} options={barChartOptions} />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Performance Trend</h2>
          <Line data={lineChartData} options={lineChartOptions} />
        </div>
      </div>

      <style jsx>{`
        .dashboard-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .dashboard-title {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }

        .dashboard-cards {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .dashboard-card {
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          flex: 1;
          margin: 0 10px;
        }

        .dashboard-card h3 {
          margin-bottom: 10px;
          color: #555;
        }

        .card-value {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
        }

        .charts-container {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .chart-container {
          width: 50%;
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          padding: 20px;
        }

        .chart-title {
          font-size: 1.5rem;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
