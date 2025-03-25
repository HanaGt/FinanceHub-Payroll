export default function RecentPayments() {
  // Sample data for recent payments
  const recentPayments = [
    {
      id: "PAY-001",
      date: "Mar 15, 2025",
      amount: "$42,350",
      status: "Completed",
      description: "Bi-weekly salary payment",
    },
    {
      id: "PAY-002",
      date: "Mar 01, 2025",
      amount: "$42,125",
      status: "Completed",
      description: "Bi-weekly salary payment",
    },
    {
      id: "PAY-003",
      date: "Feb 15, 2025",
      amount: "$41,980",
      status: "Completed",
      description: "Bi-weekly salary payment",
    },
    {
      id: "PAY-004",
      date: "Feb 01, 2025",
      amount: "$41,870",
      status: "Completed",
      description: "Bi-weekly salary payment",
    },
    {
      id: "PAY-005",
      date: "Jan 15, 2025",
      amount: "$41,670",
      status: "Completed",
      description: "Bi-weekly salary payment",
    },
  ]

  return (
    <div className="space-y-4">
      {recentPayments.map((payment) => (
        <div key={payment.id} className="flex items-center justify-between border-b pb-2">
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">{payment.description}</p>
            <p className="text-xs text-muted-foreground">{payment.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <div>{payment.amount}</div>
            <div className="flex h-2 w-2 rounded-full bg-green-500"></div>
          </div>
        </div>
      ))}
    </div>
  )
}

