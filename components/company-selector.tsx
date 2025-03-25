"use client"

import { useState } from "react"
import { Check, ChevronsUpDown, Plus, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Sample companies
const companies = [
  {
    value: "acme",
    label: "Acme Inc.",
  },
  {
    value: "globex",
    label: "Globex Corporation",
  },
  {
    value: "initech",
    label: "Initech",
  },
]

export default function CompanySelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("acme")
  const [showNewCompanyDialog, setShowNewCompanyDialog] = useState(false)

  return (
    <Dialog open={showNewCompanyDialog} onOpenChange={setShowNewCompanyDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
            <div className="flex items-center">
              <DollarSign className="mr-2 h-4 w-4" />
              {companies.find((company) => company.value === value)?.label ?? "Select company"}
            </div>
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search company..." />
            <CommandList>
              <CommandEmpty>No company found.</CommandEmpty>
              <CommandGroup heading="Your Companies">
                {companies.map((company) => (
                  <CommandItem
                    key={company.value}
                    onSelect={() => {
                      setValue(company.value)
                      setOpen(false)
                    }}
                    className="text-sm"
                  >
                    <Check className={cn("mr-2 h-4 w-4", value === company.value ? "opacity-100" : "opacity-0")} />
                    {company.label}
                  </CommandItem>
                ))}
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup>
                <DialogTrigger asChild>
                  <CommandItem
                    onSelect={() => {
                      setOpen(false)
                      setShowNewCompanyDialog(true)
                    }}
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Add Company
                  </CommandItem>
                </DialogTrigger>
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add a new company</DialogTitle>
          <DialogDescription>Add a new company to your FinanceHub account.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="company-name">Company name</Label>
            <Input id="company-name" placeholder="Enter company name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="business-type">Business type</Label>
            <Input id="business-type" placeholder="e.g., LLC, Corporation" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tax-id">Tax ID</Label>
            <Input id="tax-id" placeholder="Enter company tax ID" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewCompanyDialog(false)}>
            Cancel
          </Button>
          <Button onClick={() => setShowNewCompanyDialog(false)}>Add Company</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

