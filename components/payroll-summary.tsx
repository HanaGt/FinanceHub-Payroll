"use client"

import { useRef } from "react"
import { Bar } from "react-chartjs-2"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
}

const months = ["October 2024", "November 2024", "December 2024", "January 2025", "February 2025", "March 2025"]

const data = {
  labels: months,
  datasets: [
    {
      label: "Gross Salary",
      data: [105430, 106890, 108120, 108765, 110320, 112450],
      backgroundColor: "rgba(25, 113, 194, 0.7)",
    },
    {
      label: "Tax Deductions",
      data: [24250, 24585, 24870, 25015, 25373, 25863],
      backgroundColor: "rgba(242, 153, 74, 0.7)",
    },
    {
      label: "Benefits",
      data: [10543, 10689, 10812, 10876, 11032, 11245],
      backgroundColor: "rgba(76, 175, 80, 0.7)",
    },
  ],
}

export default function PayrollSummary() {
  const chartRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={chartRef} className="h-[300px] w-full">
      <Bar options={options} data={data} />
    </div>
  )
}

