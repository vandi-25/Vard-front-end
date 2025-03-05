"use client"

import { GitCommit, GitFork, GitPullRequest, Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const languages = [
  { name: "JavaScript", value: 45, color: "#f1e05a" },
  { name: "TypeScript", value: 25, color: "#3178c6" },
  { name: "HTML", value: 15, color: "#e34c26" },
  { name: "CSS", value: 10, color: "#563d7c" },
  { name: "Python", value: 5, color: "#3572A5" },
]

const activity = [
  { name: "Jan", commits: 68 },
  { name: "Feb", commits: 42 },
  { name: "Mar", commits: 56 },
  { name: "Apr", commits: 78 },
  { name: "May", commits: 94 },
  { name: "Jun", commits: 65 },
  { name: "Jul", commits: 48 },
  { name: "Aug", commits: 72 },
  { name: "Sep", commits: 89 },
  { name: "Oct", commits: 74 },
  { name: "Nov", commits: 63 },
  { name: "Dec", commits: 52 },
]

const repositories = [
  {
    name: "react-dashboard",
    description: "Responsive admin dashboard template built with React and TailwindCSS",
    language: "TypeScript",
    stars: 245,
    forks: 42,
  },
  {
    name: "ts-utils",
    description: "Collection of TypeScript utility functions and helpers",
    language: "TypeScript",
    stars: 187,
    forks: 24,
  },
  {
    name: "nextjs-blog-starter",
    description: "Clean, minimal starter for Next.js blog projects",
    language: "JavaScript",
    stars: 126,
    forks: 36,
  },
]

export function CandidateGithub() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Repositories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">38</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Stars</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">856</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Followers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">142</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Contributions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,837</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languages}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {languages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Commit Activity</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ChartContainer
              config={{
                commits: {
                  label: "Commits",
                  color: "hsl(var(--chart-1))",
                },
              }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={activity}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="commits" fill="var(--color-commits)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      <div>
        <h3 className="mb-4 font-medium">Popular Repositories</h3>
        <div className="space-y-4">
          {repositories.map((repo, index) => (
            <div key={index} className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-medium">{repo.name}</h4>
                  <p className="text-sm text-muted-foreground">{repo.description}</p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1">
                    <GitFork className="h-4 w-4" />
                    {repo.forks}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex gap-6 text-sm">
                <div className="flex items-center gap-1">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{
                      backgroundColor:
                        repo.language === "JavaScript"
                          ? "#f1e05a"
                          : repo.language === "TypeScript"
                            ? "#3178c6"
                            : "#e34c26",
                    }}
                  ></span>
                  {repo.language}
                </div>
                <div className="flex items-center gap-1">
                  <GitCommit className="h-3 w-3" />
                  Last commit 4 days ago
                </div>
                <div className="flex items-center gap-1">
                  <GitPullRequest className="h-3 w-3" />2 open PRs
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

