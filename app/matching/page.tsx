import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MatchResultsList } from "@/components/match-results-list"
import { Download, Search, SlidersHorizontal } from "lucide-react"

export default function MatchingPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Match Results</h1>
          <p className="text-muted-foreground">AI-powered candidate matching for your job listings</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Filters</CardTitle>
            <CardDescription>Filter match results by job and criteria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label>Jobs</Label>
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="font-normal">
                    All open positions
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="specific" id="specific" />
                  <Label htmlFor="specific" className="font-normal">
                    Specific position
                  </Label>
                </div>
              </RadioGroup>
              <div className="pt-2">
                <Input placeholder="Search jobs..." disabled />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Match Score</Label>
              <div className="flex items-center gap-2">
                <Input type="number" placeholder="Min" className="h-8 w-20" defaultValue="75" />
                <span>to</span>
                <Input type="number" placeholder="Max" className="h-8 w-20" defaultValue="100" />
                <span>%</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Skills</Label>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {["React", "JavaScript", "TypeScript", "Node.js", "GraphQL"].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox id={`skill-${skill}`} />
                    <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                      {skill}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-4">
              <Button variant="outline" size="sm">
                Reset
              </Button>
              <Button size="sm">Apply</Button>
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader className="flex-row items-center justify-between">
            <div>
              <CardTitle>Candidate-Job Matches</CardTitle>
              <CardDescription>Best candidate matches for your open positions</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative hidden sm:block">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search candidates..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon" className="sm:hidden">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Jobs</TabsTrigger>
                <TabsTrigger value="frontend">Frontend Developer</TabsTrigger>
                <TabsTrigger value="product">Product Manager</TabsTrigger>
                <TabsTrigger value="devops">DevOps Engineer</TabsTrigger>
              </TabsList>
              <MatchResultsList />
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

