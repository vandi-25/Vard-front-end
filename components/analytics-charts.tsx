"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  FunnelChart,
  Funnel,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const funnelData = [
  { name: "Applications", value: 3842, fill: "hsl(var(--chart-1))" },
  { name: "Screened", value: 1586, fill: "hsl(var(--chart-2))" },
  { name: "Interviews", value: 862, fill: "hsl(var(--chart-3))" },
  { name: "Offers", value: 342, fill: "hsl(var(--chart-4))" },
  { name: "Hired", value: 282, fill: "hsl(var(--chart-5))" },
]

const trendData = [
  { month: "Jan", applications: 254, screened: 104, interviews: 68, offers: 24, hired: 18 },
  { month: "Feb", applications: 286, screened: 118, interviews: 72, offers: 28, hired: 22 },
  { month: "Mar", applications: 324, screened: 146, interviews: 84, offers: 32, hired: 26 },
  { month: "Apr", applications: 362, screened: 168, interviews: 92, offers: 36, hired: 28 },
  { month: "May", applications: 405, screened: 182, interviews: 98, offers: 42, hired: 32 },
  { month: "Jun", applications: 427, screened: 194, interviews: 108, offers: 44, hired: 34 },
  { month: "Jul", applications: 392, screened: 176, interviews: 94, offers: 38, hired: 30 },
]

const conversionData = [
  { stage: "Application to Screen", rate: 41 },
  { stage: "Screen to Interview", rate: 54 },
  { stage: "Interview to Offer", rate: 40 },
  { stage: "Offer to Hire", rate: 82 },
]

export function AnalyticsCharts() {
  return (
    <Tabs>
      <TabsContent value="funnel" className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <FunnelChart>
            <Tooltip formatter={(value) => [`${value} candidates`, null]} labelFormatter={(name) => `Stage: ${name}`} />
            <Funnel dataKey="value" data={funnelData} isAnimationActive>
              {funnelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Funnel>
          </FunnelChart>
        </ResponsiveContainer>
      </TabsContent>

      <TabsContent value="trend" className="h-[400px]">
        <ChartContainer
          config={{
            applications: {
              label: "Applications",
              color: "hsl(var(--chart-1))",
            },
            screened: {
              label: "Screened",
              color: "hsl(var(--chart-2))",
            },
            interviews: {
              label: "Interviews",
              color: "hsl(var(--chart-3))",
            },
            offers: {
              label: "Offers",
              color: "hsl(var(--chart-4))",
            },
            hired: {
              label: "Hired",
              color: "hsl(var(--chart-5))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Line
                type="monotone"
                dataKey="applications"
                stroke="var(--color-applications)"
                strokeWidth={2}
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="screened" stroke="var(--color-screened)" strokeWidth={2} />
              <Line type="monotone" dataKey="interviews" stroke="var(--color-interviews)" strokeWidth={2} />
              <Line type="monotone" dataKey="offers" stroke="var(--color-offers)" strokeWidth={2} />
              <Line type="monotone" dataKey="hired" stroke="var(--color-hired)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </TabsContent>

      <TabsContent value="conversion" className="h-[400px]">
        <ChartContainer
          config={{
            rate: {
              label: "Conversion Rate (%)",
              color: "hsl(var(--chart-1))",
            },
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={conversionData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="stage" />
              <YAxis domain={[0, 100]} />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="rate"
                fill="var(--color-rate)"
                radius={[4, 4, 0, 0]}
                label={{
                  position: "top",
                  formatter: (value: any) => `${value}%`,
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

