import React, { useEffect, useState } from "react";
import { cardData } from "./cardData";
import "./card.css";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";

// Register required chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Card = () => {
  const [datas, setData] = useState([]);
  useEffect(() => {
    setData(cardData);
  }, []);

  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top", // You can change this to 'left', 'right', 'bottom'
      },
      tooltip: {
        enabled: true,
      },
    },
  };
  const arr = [];
  for (let i = 1; i <= 15; i++) {
    arr.push(i);
  }
  const labels = arr;
  const barData = {
    labels,
    datasets: [
      {
        label: "Progress",
        data: [
          100, 150, 200, 250, 300, 350, 215, 301, 110, 119, 220, 256, 99, 36,
          55,
        ],
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 0,
        // borderRadius:5,
        barThickness: 10,
        minBarLength: 2,
        borderRadius: [
          { topRight: 20, bottomRight: 20 }, // Bar 1
          { topRight: 10, bottomRight: 10 }, // Bar 2
          { topRight: 10, bottomRight: 10 }, // Bar 3
        ],
      },
    ],
  };
  const barOptions = {
    indexAxis: "x",
    responsive: true,
    y: {
      display: false,
      grid: {
        display: false,
      },
      beginAtZero: true,
      max: 400,
      ticks: {
        stepSize: 100,
      },
    },
    x: {
      display: false,
      beginAtZero: true,
      max: 15,
      ticks: {
        stepSize: 1,
      },
      grid: {
        drawOnChartArea: false,
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      grid: {
        display: false,
      },
      title: {
        display: true,
        // text: 'Chart.js Bar Chart',
      },
    },
  };

  const trainingData = {
    labels: ["Passed", "Failed"],
    innerlabels: ["ddd", "ddd"],
    datasets: [
      {
        labels: ["circle"],
        data: [20, 10],
        backgroundColor: ["rgba(1,142,66,1)", "rgba(237,28,36,1)"],

        borderColor: ["rgba(1,142,66,1)", "rgba(54, 162, 235, 1)"],
        cutout: "60%",

        borderWidth: [0, 0],
      },
    ],
  };

  const trainingOptions = {
    cutout: 40,
    plugins: {
      legend: {
        position: "right",
        labels: {
          // boxWidth:"10"
          usePointStyle: true,
          ppintStyle: "circle",
        },
      },
    },
  };

  return (
    <>
      <div className="mb-4">
        <label className="dashboard">Dashboard</label>
      </div>
      <div className="card-head d-md-flex d-block justify-content-between gap-3">
        {datas.map((i) => {
          const {
            color,
          } = i;
          return (
            <>
              <div
                className="card head mx-auto my-lg-0 my-3"
                style={{ borderLeft: `4px solid ${color}` }}
              >
                <div className="card  shadow h-100 py-2">
                  <div className="card-body">
                    <div className="row no-gutters align-items-center">
                      <div className="col mr-2">
                        <div
                          className={`text-xs font-weight-bold text-primary text-uppercase mb-1`}
                        >
                          <labels style={{ color: `${color}` }}>
                            Earnings (Monthly)
                          </labels>
                        </div>
                        <div className="h5 mb-0 font-weight-bold text-gray-800">
                          $40,000
                        </div>
                      </div>
                      <div className="col-auto">
                        <i className="fas fa-calendar fa-2x text-gray-300"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="d-md-flex d-block justify-content-start gap-3 mt-4">
        <div
          className="card dognutchart  border mx-auto my-lg-0 my-3"
          // style={{ width: "21.7rem" }}
        >
          <Doughnut data={data} options={options} className="mx-auto" />
        </div>
        <div
          className="card barChart border mx-auto my-lg-0 my-3"
          // style={{ width: "100%" }}
        >
          <Bar data={barData} options={barOptions} height={100} />
        </div>
      </div>
      <div className="d-md-flex  d-block justify-content-start gap-3 mt-4">
        <div
          className="card chapterWise  border mx-auto my-lg-0 my-3"
          // style={{ width: "21.7rem" }}
        >
          <div className=" training-chart-left ">
            <div>
              <p className="card-header font-weight-bold text-gray-800">Monthly Training Activity</p>
            </div>
            <div>
              <p className="text-center text-black">
                16% more enrollees this month
              </p>
            </div>
            <ul className="training-content">
              <li>
                <p className="course">Course a</p>
                <p className="count">23 Workers Took this course This week</p>
              </li>
              <li>
                <p className="course">Course b</p>
                <p className="count">253 Workers Took this course This week</p>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="d-md-flex d-block barChart mx-auto justify-content-between gap-3"
          // style={{ width: "100%" }}
        >
          <div
            className="border quizPassing card px-2 mx-auto my-lg-0 my-3"
            // style={{ width: "30%" }}
          >
            <Doughnut
              data={trainingData}
              options={trainingOptions}
              className="mx-auto"
            />
          </div>
          <div
            className="border dailyTransition chart card mx-auto my-lg-0 my-3"
            // style={{ width: "70%" }}
          >
            <Bar data={barData} options={barOptions} height={100} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
