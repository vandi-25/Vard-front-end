"use client"

import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

// Sample data
const monthlyData = [
  { name: "Jan", applicants: 165, matches: 139, hires: 91 },
  { name: "Feb", applicants: 180, matches: 148, hires: 106 },
  { name: "Mar", applicants: 190, matches: 160, hires: 129 },
  { name: "Apr", applicants: 210, matches: 178, hires: 130 },
  { name: "May", applicants: 252, matches: 189, hires: 146 },
  { name: "Jun", applicants: 265, matches: 201, hires: 154 },
  { name: "Jul", applicants: 280, matches: 210, hires: 163 },
]

const skillsData = [
  { name: "JavaScript", value: 120 },
  { name: "Python", value: 98 },
  { name: "React", value: 86 },
  { name: "Java", value: 75 },
  { name: "Node.js", value: 60 },
  { name: "SQL", value: 55 },
  { name: "TypeScript", value: 48 },
]

export function DashboardCharts() {
  return (
    <Tabs defaultValue="trends" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="trends">Hiring Trends</TabsTrigger>
        <TabsTrigger value="skills">Top Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="trends" className="h-[350px]">
        <ChartContainer
          config={{
            applicants: {
              label: "Applicants",
              color: "hsl(var(--chart-1))",
            },
            matches: {
              label: "Matches",
              color: "hsl(var(--chart-2))",
            },
            hires: {
              label: "Hires",
              color: "hsl(var(--chart-3))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="applicants"
                strokeWidth={2}
                stroke="var(--color-applicants)"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="matches" strokeWidth={2} stroke="var(--color-matches)" />
              <Line type="monotone" dataKey="hires" strokeWidth={2} stroke="var(--color-hires)" />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </TabsContent>
      <TabsContent value="skills" className="h-[350px]">
        <ChartContainer
          config={{
            value: {
              label: "Candidates",
              color: "hsl(var(--chart-1))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={skillsData} layout="vertical" margin={{ top: 5, right: 30, left: 70, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} horizontal />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" tick={{ fontSize: 12 }} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="value"
                fill="var(--color-value)"
                radius={[0, 4, 4, 0]}
                label={{
                  position: "right",
                  formatter: (value) => `${value}`,
                  fontSize: 12,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </TabsContent>
    </Tabs>
  )
}

