"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export default function ReportsPage() {
  const [reportType, setReportType] = useState("")
  const [dateRange, setDateRange] = useState("")

  const handleGenerateReport = () => {
    // Here you would typically handle the report generation logic
    console.log(`Generating ${reportType} report for ${dateRange}`)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
      <Card>
        <CardHeader>
          <CardTitle>Generate Report</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="report-type">Report Type</Label>
              <Select onValueChange={setReportType} required>
                <SelectTrigger id="report-type">
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payroll">Payroll Report</SelectItem>
                  <SelectItem value="tax">Tax Report</SelectItem>
                  <SelectItem value="employee">Employee Report</SelectItem>
                  <SelectItem value="department">Department Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-range">Date Range</Label>
              <Select onValueChange={setDateRange} required>
                <SelectTrigger id="date-range">
                  <SelectValue placeholder="Select date range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="this-quarter">This Quarter</SelectItem>
                  <SelectItem value="last-quarter">Last Quarter</SelectItem>
                  <SelectItem value="this-year">This Year</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleGenerateReport}>Generate Report</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}