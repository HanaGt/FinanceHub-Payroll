"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, DollarSign, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Perfect for small businesses just getting started with payroll.",
    price: 29,
    frequency: "per month",
    features: [
      "Up to 25 employees",
      "Basic payroll processing",
      "Tax calculations",
      "Basic reporting",
      "Email support",
    ],
    limitations: ["No custom fields", "No multi-location support", "Limited integrations"],
  },
  {
    id: "professional",
    name: "Professional",
    description: "Ideal for growing businesses with more complex payroll needs.",
    price: 79,
    frequency: "per month",
    features: [
      "Up to 100 employees",
      "Advanced payroll processing",
      "Tax filing & payments",
      "Custom fields",
      "Custom reports",
      "Priority email & phone support",
      "HR tools integration",
      "Multi-location support",
    ],
    limitations: ["Limited API access"],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Full-featured solution for large businesses with complex requirements.",
    price: 199,
    frequency: "per month",
    features: [
      "Unlimited employees",
      "All Professional features",
      "Advanced compliance tools",
      "Dedicated account manager",
      "Full API access",
      "Custom integrations",
      "White-label options",
      "24/7 premium support",
    ],
    limitations: [],
  },
]

export default function SubscribePage() {
  const [selectedPlan, setSelectedPlan] = useState("professional")

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
        <section className="container py-12">
          <div className="mx-auto max-w-4xl space-y-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Payroll Plan</h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              Select the plan that best fits your business needs
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card key={plan.id} className={cn("flex flex-col", plan.popular && "border-primary shadow-md")}>
                {plan.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline text-5xl font-bold">
                    ${plan.price}
                    <span className="ml-1 text-sm font-medium text-muted-foreground">{plan.frequency}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 grid gap-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Features</h4>
                    <ul className="grid gap-2 text-sm">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {plan.limitations.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Limitations</h4>
                      <ul className="grid gap-2 text-sm">
                        {plan.limitations.map((limitation) => (
                          <li key={limitation} className="flex items-center gap-2">
                            <X className="h-4 w-4 text-red-500" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {selectedPlan === plan.id ? "Selected" : "Select Plan"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mx-auto max-w-md">
            <Button size="lg" className="w-full">
              Continue with {plans.find((p) => p.id === selectedPlan)?.name} plan
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              All plans include a 14-day free trial. No credit card required.
            </p>
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

