"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Download, FilePlus } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import ProcessPayrollDialog from "@/components/process-payroll-dialog"

// Sample payroll data
const payrollHistory = [
  {
    id: "PR001",
    period: "March 2025",
    processingDate: "2025-03-28",
    totalAmount: 112450,
    employees: 142,
    status: "Scheduled",
  },
  {
    id: "PR002",
    period: "February 2025",
    processingDate: "2025-02-28",
    totalAmount: 110320,
    employees: 139,
    status: "Completed",
  },
  {
    id: "PR003",
    period: "January 2025",
    processingDate: "2025-01-31",
    totalAmount: 108765,
    employees: 137,
    status: "Completed",
  },
  {
    id: "PR004",
    period: "December 2024",
    processingDate: "2024-12-31",
    totalAmount: 105430,
    employees: 135,
    status: "Completed",
  },
]

export default function PayrollPage() {
  const [date, setDate] = useState<Date>()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [payrollFilter, setPayrollFilter] = useState("all")

  const filteredPayrolls = payrollHistory.filter((payroll) => {
    if (payrollFilter === "all") return true
    return payroll.status.toLowerCase() === payrollFilter.toLowerCase()
  })

  const handleProcessPayroll = () => {
    setIsDialogOpen(false)
    // In a real app, this would handle the payroll processing logic
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payroll Management</h1>
          <p className="text-muted-foreground">Process and manage payrolls for your company</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          <FilePlus className="mr-2 h-4 w-4" />
          Process Payroll
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Payroll (YTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$436,965</div>
            <p className="text-xs text-muted-foreground">+8.2% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Salary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$64,820</div>
            <p className="text-xs text-muted-foreground">+3.1% from last year</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tax Withholdings (YTD)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$102,345</div>
            <p className="text-xs text-muted-foreground">23.4% of total payroll</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Payroll Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Mar 30, 2025</div>
            <p className="text-xs text-muted-foreground">Biweekly schedule</p>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Payroll History</h2>
          <div className="flex items-center space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Filter by date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="end">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
            <Select defaultValue="all" onValueChange={setPayrollFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Payrolls</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Period</TableHead>
                <TableHead>Processing Date</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Employees</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayrolls.map((payroll) => (
                <TableRow key={payroll.id}>
                  <TableCell className="font-medium">{payroll.id}</TableCell>
                  <TableCell>{payroll.period}</TableCell>
                  <TableCell>{payroll.processingDate}</TableCell>
                  <TableCell>${payroll.totalAmount.toLocaleString()}</TableCell>
                  <TableCell>{payroll.employees}</TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        payroll.status === "Completed"
                          ? "bg-green-500"
                          : payroll.status === "Scheduled"
                            ? "bg-blue-500"
                            : payroll.status === "Processing"
                              ? "bg-yellow-500"
                              : "bg-red-500",
                      )}
                    >
                      {payroll.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      <Download className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <ProcessPayrollDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onProcess={handleProcessPayroll}
      />
    </div>
  )
}

