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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface EmployeeAddDialogProps {
  isOpen: boolean
  onClose: () => void
  onAdd: (employee: any) => void
}

export default function EmployeeAddDialog({ isOpen, onClose, onAdd }: EmployeeAddDialogProps) {
  const [name, setName] = useState("")
  const [position, setPosition] = useState("")
  const [department, setDepartment] = useState("")
  const [salary, setSalary] = useState("")
  const [date, setDate] = useState<Date>()

  const handleSubmit = () => {
    if (!name || !position || !department || !salary || !date) {
      return // In a real app, show validation errors
    }

    onAdd({
      name,
      position,
      department,
      salary: Number.parseFloat(salary),
      joiningDate: format(date, "yyyy-MM-dd"),
      status: "Active",
    })

    // Reset the form
    setName("")
    setPosition("")
    setDepartment("")
    setSalary("")
    setDate(undefined)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          <DialogDescription>Fill in the employee details and click Add when you're done.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Software Engineer"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="department">Department</Label>
            <Select onValueChange={setDepartment}>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Marketing">Marketing</SelectItem>
                <SelectItem value="Finance">Finance</SelectItem>
                <SelectItem value="Human Resources">Human Resources</SelectItem>
                <SelectItem value="Sales">Sales</SelectItem>
                <SelectItem value="Design">Design</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="salary">Annual Salary</Label>
            <Input
              id="salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="65000"
              type="number"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="joining-date">Joining Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="joining-date"
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
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Add Employee</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

