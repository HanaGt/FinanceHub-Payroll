import type { ReactNode } from "react"
import DashboardNav from "@/components/dashboard-nav"
import CompanySelector from "@/components/company-selector"

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <CompanySelector />
          <nav className="ml-auto flex items-center space-x-4">
            <DashboardNav />
          </nav>
        </div>
      </header>
      <div className="flex-1">
        <div className="container py-6">{children}</div>
      </div>
    </div>
  )
}

