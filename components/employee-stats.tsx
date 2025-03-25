"use client"
import { Doughnut } from "react-chartjs-2"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend)

const departmentData = {
  labels: ["Engineering", "Marketing", "Sales", "Finance", "HR", "Design"],
  datasets: [
    {
      data: [45, 25, 30, 15, 12, 15],
      backgroundColor: [
        "rgba(54, 162, 235, 0.7)",
        "rgba(255, 99, 132, 0.7)",
        "rgba(75, 192, 192, 0.7)",
        "rgba(255, 159, 64, 0.7)",
        "rgba(153, 102, 255, 0.7)",
        "rgba(255, 205, 86, 0.7)",
      ],
      borderColor: [
        "rgba(54, 162, 235, 1)",
        "rgba(255, 99, 132, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 205, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
}

const typeData = {
  labels: ["Full-time", "Part-time", "Contract"],
  datasets: [
    {
      data: [110, 22, 10],
      backgroundColor: ["rgba(54, 162, 235, 0.7)", "rgba(75, 192, 192, 0.7)", "rgba(255, 159, 64, 0.7)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)", "rgba(255, 159, 64, 1)"],
      borderWidth: 1,
    },
  ],
}

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        boxWidth: 10,
        font: {
          size: 10,
        },
      },
    },
  },
}

export default function EmployeeStats() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="h-[140px]">
        <h4 className="text-sm font-medium mb-2">By Department</h4>
        <Doughnut data={departmentData} options={options} />
      </div>
      <div className="h-[140px]">
        <h4 className="text-sm font-medium mb-2">By Type</h4>
        <Doughnut data={typeData} options={options} />
      </div>
    </div>
  )
}

