"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const sourceData = [
  { name: "Job Boards", value: 45, color: "hsl(var(--chart-1))" },
  { name: "Referrals", value: 25, color: "hsl(var(--chart-2))" },
  { name: "Company Website", value: 15, color: "hsl(var(--chart-3))" },
  { name: "LinkedIn", value: 10, color: "hsl(var(--chart-4))" },
  { name: "Other", value: 5, color: "hsl(var(--chart-5))" },
]

export function AnalyticsSources() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={sourceData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {sourceData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

