import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GitHubProfilesList } from "@/components/github-profiles-list"
import { Input } from "@/components/ui/input"
import { Search, Plus } from "lucide-react"

export default function GitHubProfilesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">GitHub Profiles</h1>
          <p className="text-muted-foreground">Analyze GitHub profiles for candidate assessment</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add GitHub Profile
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Track Development Activity</CardTitle>
          <CardDescription>
            Add candidate GitHub profiles to analyze their development activity and skills
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="text" placeholder="Enter GitHub username" className="pl-8" />
            </div>
            <Button type="submit">Analyze</Button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium">Recent Profiles</h3>
            <div className="mt-4">
              <GitHubProfilesList />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

