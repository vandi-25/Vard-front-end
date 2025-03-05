import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, FileCode, GitBranch, GitCommit, Calendar } from "lucide-react"
import Link from "next/link"

const profiles = [
  {
    username: "alex-thompson",
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=60&width=60",
    candidateId: "C001",
    candidateName: "Alex Thompson",
    bio: "Frontend developer specializing in React and TypeScript",
    repos: 38,
    commits: 862,
    topLanguages: ["TypeScript", "JavaScript", "CSS"],
    lastActive: "Today",
  },
  {
    username: "mchen-dev",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=60&width=60",
    candidateId: "C003",
    candidateName: "Michael Chen",
    bio: "Full-stack developer | Open source contributor",
    repos: 52,
    commits: 1342,
    topLanguages: ["Python", "JavaScript", "TypeScript"],
    lastActive: "Yesterday",
  },
  {
    username: "priya-patel",
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=60&width=60",
    candidateId: "C004",
    candidateName: "Priya Patel",
    bio: "DevOps engineer and automation enthusiast",
    repos: 29,
    commits: 784,
    topLanguages: ["Go", "JavaScript", "YAML"],
    lastActive: "2 days ago",
  },
]

export function GitHubProfilesList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {profiles.map((profile) => (
        <Card key={profile.username} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage src={profile.avatar} />
                <AvatarFallback>{profile.name.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={`https://github.com/${profile.username}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline truncate"
                  >
                    {profile.name}
                  </Link>
                </div>
                <div className="text-sm text-muted-foreground truncate">@{profile.username}</div>
                <div className="text-sm text-muted-foreground mt-1 truncate">{profile.bio}</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
              <div className="flex items-center gap-1">
                <GitBranch className="h-4 w-4 text-muted-foreground" />
                <span>{profile.repos} repositories</span>
              </div>
              <div className="flex items-center gap-1">
                <GitCommit className="h-4 w-4 text-muted-foreground" />
                <span>{profile.commits} commits</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Active {profile.lastActive}</span>
              </div>
              <div className="flex items-center gap-1">
                <FileCode className="h-4 w-4 text-muted-foreground" />
                <span>Linked to candidate</span>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-1">
                <Code2 className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Top languages:</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {profile.topLanguages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <Link href={`/candidates/${profile.candidateId}`}>View Candidate</Link>
              </Button>
              <Button size="sm" className="w-full" asChild>
                <Link href={`/github/${profile.username}`}>Analysis</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

