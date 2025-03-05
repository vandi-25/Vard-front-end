import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { MoreHorizontal, Star, Github } from "lucide-react"
import Link from "next/link"

const candidates = [
  {
    id: "C001",
    name: "Alex Thompson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Frontend Developer",
    experience: "5 years",
    location: "New York, USA",
    skills: ["React", "TypeScript", "TailwindCSS", "JavaScript", "HTML/CSS"],
    education: "BS Computer Science, Stanford University",
    matchScore: 94,
    applied: "2 days ago",
    github: "github.com/alexthompson",
  },
  {
    id: "C002",
    name: "Samantha Wright",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Full Stack Engineer",
    experience: "7 years",
    location: "San Francisco, USA",
    skills: ["Node.js", "React", "MongoDB", "Express", "JavaScript"],
    education: "MS Software Engineering, UC Berkeley",
    matchScore: 87,
    applied: "3 days ago",
    github: "github.com/samwright",
  },
  {
    id: "C003",
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Data Scientist",
    experience: "4 years",
    location: "Boston, USA",
    skills: ["Python", "TensorFlow", "SQL", "Data Analysis", "Machine Learning"],
    education: "PhD Data Science, MIT",
    matchScore: 82,
    applied: "4 days ago",
    github: "github.com/michaelchen",
  },
  {
    id: "C004",
    name: "Priya Patel",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "DevOps Engineer",
    experience: "6 years",
    location: "Remote",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
    education: "BS Computer Engineering, Georgia Tech",
    matchScore: 75,
    applied: "1 week ago",
    github: "github.com/priyapatel",
  },
  {
    id: "C005",
    name: "James Wilson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "UX Designer",
    experience: "8 years",
    location: "Seattle, USA",
    skills: ["Figma", "UI Design", "User Research", "Wireframing", "Prototyping"],
    education: "BFA Design, RISD",
    matchScore: 89,
    applied: "5 days ago",
    github: "",
  },
]

export function CandidateList() {
  return (
    <div className="space-y-4">
      {candidates.map((candidate) => (
        <Card key={candidate.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex items-start gap-3 md:w-1/3">
                <Checkbox className="mt-1" />
                <Avatar className="h-10 w-10">
                  <AvatarImage src={candidate.avatar} />
                  <AvatarFallback>{candidate.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <Link href={`/candidates/${candidate.id}`} className="font-medium hover:underline">
                    {candidate.name}
                  </Link>
                  <div className="text-sm text-muted-foreground">{candidate.role}</div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{candidate.experience} exp</span>
                    <span>•</span>
                    <span>{candidate.location}</span>
                  </div>
                </div>
              </div>

              <div className="md:w-1/3">
                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Skills</div>
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {candidate.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{candidate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mt-2">
                  <div className="text-xs text-muted-foreground">Education</div>
                  <div className="text-sm truncate">{candidate.education}</div>
                </div>
              </div>

              <div className="flex flex-row justify-between md:w-1/3 md:flex-col md:items-end">
                <div
                  className={`rounded-full px-2 py-1 text-sm font-medium ${
                    candidate.matchScore >= 90
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      : candidate.matchScore >= 80
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}
                >
                  {candidate.matchScore}% Match
                </div>

                <div className="text-sm text-muted-foreground">Applied {candidate.applied}</div>
              </div>
            </div>
          </CardContent>

          <CardFooter className="border-t bg-muted/40 p-2">
            <div className="flex w-full items-center justify-between">
              <div>
                {candidate.github && (
                  <Badge variant="outline" className="text-xs">
                    <Github className="mr-1 h-3 w-3" />
                    GitHub Profile
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Star className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
                <Button size="sm">View Profile</Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

