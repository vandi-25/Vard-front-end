import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const candidates = [
  {
    id: "C001",
    name: "Alex Thompson",
    email: "alex.t@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "TailwindCSS"],
    matchScore: 94,
    date: "2 days ago",
  },
  {
    id: "C002",
    name: "Samantha Wright",
    email: "sam.wright@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    role: "Full Stack Engineer",
    skills: ["Node.js", "React", "MongoDB"],
    matchScore: 87,
    date: "3 days ago",
  },
  {
    id: "C003",
    name: "Michael Chen",
    email: "michael.c@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    role: "Data Scientist",
    skills: ["Python", "TensorFlow", "SQL"],
    matchScore: 82,
    date: "4 days ago",
  },
  {
    id: "C004",
    name: "Priya Patel",
    email: "p.patel@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    role: "DevOps Engineer",
    skills: ["AWS", "Docker", "Kubernetes"],
    matchScore: 75,
    date: "1 week ago",
  },
  {
    id: "C005",
    name: "James Wilson",
    email: "jwilson@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
    role: "UX Designer",
    skills: ["Figma", "UI Design", "User Research"],
    matchScore: 89,
    date: "5 days ago",
  },
]

export function CandidateTable() {
  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <div
          key={candidate.id}
          className="flex items-center justify-between space-x-4 rounded-md border p-3 transition-all hover:bg-muted/50"
        >
          <div className="flex items-center space-x-3">
            <Avatar>
              <AvatarImage src={candidate.avatar} />
              <AvatarFallback>{candidate.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{candidate.name}</div>
              <div className="text-sm text-muted-foreground">{candidate.role}</div>
            </div>
          </div>
          <div className="hidden sm:block">
            <div className="flex gap-1">
              {candidate.skills.slice(0, 2).map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
              {candidate.skills.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{candidate.skills.length - 2}
                </Badge>
              )}
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={`text-sm font-medium rounded-full px-2 py-1 ${
                candidate.matchScore >= 90
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : candidate.matchScore >= 80
                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
              }`}
            >
              {candidate.matchScore}%
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

