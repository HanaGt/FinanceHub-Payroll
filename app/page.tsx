import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, DollarSign, Building, Users, PieChart, ShieldCheck } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <DollarSign className="h-6 w-6" />
              <span className="font-bold">FinanceHub</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <ThemeToggle />
            <nav className="flex items-center space-x-2">
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm">Register</Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Dynamic Payroll Management for Every Business
                </h1>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Automate salary processing, tax deductions, benefits management, and compliance tracking across
                  multiple locations.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/register">
                  <Button size="lg" className="gap-1">
                    Get Started <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/features">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Building className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Multi-Company Support</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Configure unique payroll structures and workflows for each company you manage.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Users className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Dynamic Employee Management</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Add custom fields and categories to adapt to any organizational structure.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <PieChart className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Real-time Analytics</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Track payroll expenses and gain insights with customizable dashboards.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold">Compliance Management</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Stay compliant with tax regulations and labor laws across different regions.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="mx-auto aspect-video overflow-hidden rounded-xl border bg-background object-cover object-center sm:w-full lg:order-last">
                <div className="h-full w-full bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-indigo-950/30 dark:to-blue-950/30 flex items-center justify-center">
                  <DollarSign className="h-24 w-24 text-primary/30" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} FinanceHub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

