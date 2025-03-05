import { DateRangePicker } from "@/components/date-range-picker"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { AnalyticsSources } from "@/components/analytics-sources"
import { AnalyticsMetrics } from "@/components/analytics-metrics"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download } from "lucide-react"

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
          <p className="text-muted-foreground">Track and analyze your recruitment data</p>
        </div>
        <div className="flex items-center gap-2">
          <DateRangePicker />
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <AnalyticsMetrics />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-full lg:col-span-4">
          <CardHeader>
            <CardTitle>Hiring Pipeline</CardTitle>
            <CardDescription>Track candidates through each stage of your recruitment process</CardDescription>
          </CardHeader>
          <CardContent className="px-2">
            <Tabs defaultValue="funnel">
              <TabsList className="mb-4">
                <TabsTrigger value="funnel">Funnel</TabsTrigger>
                <TabsTrigger value="trend">Trend</TabsTrigger>
                <TabsTrigger value="conversion">Conversion</TabsTrigger>
              </TabsList>
              <AnalyticsCharts />
            </Tabs>
          </CardContent>
        </Card>

        <Card className="col-span-full lg:col-span-3">
          <CardHeader>
            <CardTitle>Candidate Sources</CardTitle>
            <CardDescription>Distribution of candidates by source</CardDescription>
          </CardHeader>
          <CardContent>
            <AnalyticsSources />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recruitment by Department</CardTitle>
          <CardDescription>Job openings, candidates, and hires by department</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left font-medium p-3">Department</th>
                  <th className="text-center font-medium p-3">Open Positions</th>
                  <th className="text-center font-medium p-3">Candidates</th>
                  <th className="text-center font-medium p-3">Interviews</th>
                  <th className="text-center font-medium p-3">Offers</th>
                  <th className="text-center font-medium p-3">Hires</th>
                  <th className="text-center font-medium p-3">Time to Hire</th>
                  <th className="text-center font-medium p-3">Fill Rate</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    department: "Engineering",
                    positions: 12,
                    candidates: 248,
                    interviews: 58,
                    offers: 24,
                    hires: 18,
                    timeToHire: "32 days",
                    fillRate: "75%",
                  },
                  {
                    department: "Product",
                    positions: 5,
                    candidates: 142,
                    interviews: 32,
                    offers: 12,
                    hires: 8,
                    timeToHire: "28 days",
                    fillRate: "80%",
                  },
                  {
                    department: "Marketing",
                    positions: 4,
                    candidates: 98,
                    interviews: 26,
                    offers: 9,
                    hires: 7,
                    timeToHire: "24 days",
                    fillRate: "78%",
                  },
                  {
                    department: "Sales",
                    positions: 8,
                    candidates: 176,
                    interviews: 48,
                    offers: 22,
                    hires: 15,
                    timeToHire: "21 days",
                    fillRate: "68%",
                  },
                  {
                    department: "Customer Success",
                    positions: 6,
                    candidates: 134,
                    interviews: 42,
                    offers: 16,
                    hires: 12,
                    timeToHire: "25 days",
                    fillRate: "75%",
                  },
                  {
                    department: "Finance",
                    positions: 3,
                    candidates: 65,
                    interviews: 18,
                    offers: 6,
                    hires: 5,
                    timeToHire: "30 days",
                    fillRate: "83%",
                  },
                ].map((row, i) => (
                  <tr key={i} className="border-b hover:bg-muted/50">
                    <td className="p-3 font-medium">{row.department}</td>
                    <td className="p-3 text-center">{row.positions}</td>
                    <td className="p-3 text-center">{row.candidates}</td>
                    <td className="p-3 text-center">{row.interviews}</td>
                    <td className="p-3 text-center">{row.offers}</td>
                    <td className="p-3 text-center">{row.hires}</td>
                    <td className="p-3 text-center">{row.timeToHire}</td>
                    <td className="p-3 text-center">{row.fillRate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

