"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon, Calculator } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface ProcessPayrollDialogProps {
  isOpen: boolean
  onClose: () => void
  onProcess: () => void
}

// Sample employee data for payroll
const payrollEmployees = [
  { id: "EMP001", name: "John Smith", salary: 7083.33, deductions: 1770.83, netPay: 5312.5 },
  { id: "EMP002", name: "Sarah Johnson", salary: 6500.0, deductions: 1625.0, netPay: 4875.0 },
  { id: "EMP003", name: "Michael Brown", salary: 6000.0, deductions: 1500.0, netPay: 4500.0 },
  { id: "EMP004", name: "Emily Davis", salary: 5666.67, deductions: 1416.67, netPay: 4250.0 },
  { id: "EMP005", name: "David Wilson", salary: 5416.67, deductions: 1354.17, netPay: 4062.5 },
]

export default function ProcessPayrollDialog({ isOpen, onClose, onProcess }: ProcessPayrollDialogProps) {
  const [date, setDate] = useState<Date>()
  const [payrollType, setPayrollType] = useState("")
  const [includeBonus, setIncludeBonus] = useState(false)
  const [calculating, setCalculating] = useState(false)
  const [payrollCalculated, setPayrollCalculated] = useState(false)

  const handleCalculate = () => {
    if (!date || !payrollType) {
      return // In a real app, show validation errors
    }

    setCalculating(true)

    // Simulate calculation delay
    setTimeout(() => {
      setCalculating(false)
      setPayrollCalculated(true)
    }, 1500)
  }

  const handleProcess = () => {
    onProcess()

    // Reset the form
    setDate(undefined)
    setPayrollType("")
    setIncludeBonus(false)
    setPayrollCalculated(false)
  }

  const totalSalary = payrollEmployees.reduce((sum, emp) => sum + emp.salary, 0)
  const totalDeductions = payrollEmployees.reduce((sum, emp) => sum + emp.deductions, 0)
  const totalNetPay = payrollEmployees.reduce((sum, emp) => sum + emp.netPay, 0)

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Process Payroll</DialogTitle>
          <DialogDescription>Configure the payroll details and review before processing.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="payroll-date">Payroll Date</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="payroll-date"
                    variant={"outline"}
                    className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Select date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="payroll-type">Payroll Type</Label>
              <Select onValueChange={setPayrollType}>
                <SelectTrigger id="payroll-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="regular">Regular Payroll</SelectItem>
                  <SelectItem value="bonus">Bonus Payroll</SelectItem>
                  <SelectItem value="contract">Contractor Payments</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="include-bonus"
              checked={includeBonus}
              onCheckedChange={(checked) => setIncludeBonus(!!checked)}
            />
            <Label htmlFor="include-bonus">Include quarterly bonuses in this payroll</Label>
          </div>

          {!payrollCalculated && (
            <Button onClick={handleCalculate} disabled={!date || !payrollType || calculating} className="mt-2">
              {calculating ? "Calculating..." : "Calculate Payroll"}
              {!calculating && <Calculator className="ml-2 h-4 w-4" />}
            </Button>
          )}

          {payrollCalculated && (
            <div className="space-y-4 mt-2">
              <h3 className="font-medium">Payroll Summary</h3>
              <Table>
                <TableCaption>Payroll for {date ? format(date, "MMMM d, yyyy") : "Selected Date"}</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="text-right">Gross Salary</TableHead>
                    <TableHead className="text-right">Deductions</TableHead>
                    <TableHead className="text-right">Net Pay</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payrollEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell className="font-medium">{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell className="text-right">${employee.salary.toFixed(2)}</TableCell>
                      <TableCell className="text-right">${employee.deductions.toFixed(2)}</TableCell>
                      <TableCell className="text-right">${employee.netPay.toFixed(2)}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow className="font-medium">
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell className="text-right">${totalSalary.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${totalDeductions.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${totalNetPay.toFixed(2)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          {payrollCalculated && <Button onClick={handleProcess}>Process Payroll</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

