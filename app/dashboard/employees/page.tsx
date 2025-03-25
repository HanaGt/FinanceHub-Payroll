"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PlusCircle, Search } from "lucide-react"
import EmployeeAddDialog from "@/components/employee-add-dialog"

// Sample employee data - in a real app, this would come from an API
const initialEmployees = [
  {
    id: "EMP001",
    name: "John Smith",
    position: "Software Engineer",
    department: "Engineering",
    salary: 85000,
    joiningDate: "2023-02-15",
    status: "Active",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    salary: 78000,
    joiningDate: "2022-11-01",
    status: "Active",
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    position: "Product Designer",
    department: "Design",
    salary: 72000,
    joiningDate: "2023-06-10",
    status: "Active",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    position: "Financial Analyst",
    department: "Finance",
    salary: 68000,
    joiningDate: "2022-08-22",
    status: "Active",
  },
  {
    id: "EMP005",
    name: "David Wilson",
    position: "HR Specialist",
    department: "Human Resources",
    salary: 65000,
    joiningDate: "2023-01-05",
    status: "Active",
  },
]

export default function EmployeesPage() {
  const [employees, setEmployees] = useState(initialEmployees)
  const [searchQuery, setSearchQuery] = useState("")
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddEmployee = (newEmployee: any) => {
    setEmployees((prev) => [...prev, { ...newEmployee, id: `EMP${String(prev.length + 1).padStart(3, "0")}` }])
    setIsDialogOpen(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Employees</h1>
          <p className="text-muted-foreground">Manage your company's employees and their information</p>
        </div>
        <Button onClick={() => setIsDialogOpen(true)}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search employees..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Salary</TableHead>
              <TableHead>Joining Date</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredEmployees.length > 0 ? (
              filteredEmployees.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell className="font-medium">{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.position}</TableCell>
                  <TableCell>{employee.department}</TableCell>
                  <TableCell>${employee.salary.toLocaleString()}</TableCell>
                  <TableCell>{employee.joiningDate}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
                      {employee.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="h-24 text-center">
                  No employees found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <EmployeeAddDialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)} onAdd={handleAddEmployee} />
    </div>
  )
}

