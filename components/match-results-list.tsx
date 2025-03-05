import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const matchResults = [
  {
    candidateId: "C001",
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    jobId: "JOB001",
    jobTitle: "Senior Frontend Developer",
    matchScore: 94,
    skills: ["React", "TypeScript", "TailwindCSS", "JavaScript"],
    applied: "2 days ago",
  },
  {
    candidateId: "C002",
    name: "Samantha Wright",
    avatar: "/placeholder.svg?height=40&width=40",
    jobId: "JOB003",
    jobTitle: "DevOps Engineer",
    matchScore: 91,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    applied: "3 days ago",
  },
  {
    candidateId: "C003",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    jobId: "JOB001",
    jobTitle: "Senior Frontend Developer",
    matchScore: 87,
    skills: ["JavaScript", "React", "CSS", "HTML"],
    applied: "1 week ago",
  },
  {
    candidateId: "C004",
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    jobId: "JOB002",
    jobTitle: "Product Manager",
    matchScore: 89,
    skills: ["Product Strategy", "Roadmapping", "User Research", "Agile"],
    applied: "5 days ago",
  },
  {
    candidateId: "C005",
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    jobId: "JOB003",
    jobTitle: "DevOps Engineer",
    matchScore: 83,
    skills: ["Docker", "AWS", "Terraform", "Linux"],
    applied: "1 week ago",
  },
  {
    candidateId: "C006",
    name: "Emily Rodriguez",
    avatar: "/placeholder.svg?height=40&width=40",
    jobId: "JOB002",
    jobTitle: "Product Manager",
    matchScore: 85,
    skills: ["Product Development", "User Testing", "Jira", "Stakeholder Management"],
    applied: "2 days ago",
  },
]

export function MatchResultsList() {
  return (
    <div className="space-y-4">
      {matchResults.map((result) => (
        <div
          key={`${result.candidateId}-${result.jobId}`}
          className="flex items-center justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50"
        >
          <div className="flex flex-1 items-start gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={result.avatar} />
              <AvatarFallback>{result.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <Link href={`/candidates/${result.candidateId}`} className="font-medium hover:underline">
                {result.name}
              </Link>
              <div className="text-sm text-muted-foreground">
                <Link href={`/jobs/${result.jobId}`} className="hover:underline">
                  {result.jobTitle}
                </Link>
                <span> • Applied {result.applied}</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {result.skills.slice(0, 3).map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
                {result.skills.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{result.skills.length - 3}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          <div className="ml-4 flex flex-col items-end gap-2">
            <div
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                result.matchScore >= 90
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : result.matchScore >= 80
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              }`}
            >
              {result.matchScore}% Match
            </div>
            <Button size="sm" variant="outline">
              Compare
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

