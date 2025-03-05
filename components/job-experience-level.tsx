"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

export function JobExperienceLevel() {
  const [selected, setSelected] = useState("mid")

  const levels = [
    {
      id: "entry",
      title: "Entry Level",
      description: "0-2 years of experience",
      years: "0-2",
    },
    {
      id: "mid",
      title: "Mid Level",
      description: "2-5 years of experience",
      years: "2-5",
    },
    {
      id: "senior",
      title: "Senior Level",
      description: "5+ years of experience",
      years: "5+",
    },
    {
      id: "lead",
      title: "Lead / Manager",
      description: "7+ years of experience with leadership",
      years: "7+",
    },
  ]

  return (
    <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
      {levels.map((level) => (
        <Card
          key={level.id}
          className={`relative cursor-pointer px-4 py-3 transition-colors ${
            selected === level.id ? "border-primary bg-primary/5" : "hover:border-muted-foreground/25"
          }`}
          onClick={() => setSelected(level.id)}
        >
          <div className="mb-1 text-sm font-medium">{level.title}</div>
          <div className="text-xs text-muted-foreground">{level.description}</div>
        </Card>
      ))}
    </div>
  )
}

