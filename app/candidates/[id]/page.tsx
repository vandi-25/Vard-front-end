import {
  ArrowLeft,
  Briefcase,
  Building,
  Download,
  Edit,
  Github,
  GraduationCap,
  LinkedinIcon,
  Mail,
  MapPin,
  MoreHorizontal,
  Phone,
  Star,
  UserCheck,
} from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CandidateGithub } from "@/components/candidate-github"
import { CandidateTimeline } from "@/components/candidate-timeline"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CandidateProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/candidates">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Candidate Profile</h1>
          <p className="text-muted-foreground">View detailed candidate information and match analysis</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader className="relative flex flex-row items-start justify-between">
              <div className="flex gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/placeholder.svg?height=80&width=80" />
                  <AvatarFallback>AT</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-2xl">Alex Thompson</CardTitle>
                  <div className="text-lg text-muted-foreground">Frontend Developer</div>
                  <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      New York, USA
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />5 years experience
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Star className="h-4 w-4" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Download className="mr-2 h-4 w-4" />
                      Download Resume
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <UserCheck className="mr-2 h-4 w-4" />
                      Mark as Hired
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="mb-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="experience">Experience</TabsTrigger>
                  <TabsTrigger value="github">GitHub</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <div>
                    <h3 className="font-medium">About</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Frontend developer with 5 years of experience specializing in React, TypeScript, and modern web
                      development. Passionate about creating responsive, user-friendly interfaces with a focus on
                      performance and accessibility. Experienced in working with cross-functional teams and mentoring
                      junior developers.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">Skills</h3>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge>React</Badge>
                      <Badge>TypeScript</Badge>
                      <Badge>JavaScript</Badge>
                      <Badge>TailwindCSS</Badge>
                      <Badge>HTML/CSS</Badge>
                      <Badge>Redux</Badge>
                      <Badge>Next.js</Badge>
                      <Badge>Jest</Badge>
                      <Badge>Cypress</Badge>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium">Contact Information</h3>
                    <div className="mt-2 grid gap-2 text-sm sm:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span>alex.t@example.com</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LinkedinIcon className="h-4 w-4 text-muted-foreground" />
                        <span>linkedin.com/in/alexthompson</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-muted-foreground" />
                        <span>github.com/alexthompson</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium">Education</h3>
                    <div className="mt-2 space-y-3">
                      <div className="flex gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                          <GraduationCap className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div>
                          <div className="font-medium">BS Computer Science</div>
                          <div className="text-sm text-muted-foreground">Stanford University • 2014-2018</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="experience">
                  <CandidateTimeline />
                </TabsContent>

                <TabsContent value="github">
                  <CandidateGithub />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Match Score</CardTitle>
              <CardDescription>AI-powered job fit analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center">
                <div className="relative flex h-32 w-32 items-center justify-center rounded-full border-8 border-primary/20">
                  <div
                    className="absolute inset-0 rounded-full border-8 border-primary"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
                  ></div>
                  <div className="text-3xl font-bold">94%</div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Skills Match</span>
                    <span className="font-medium">98%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "98%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Experience Match</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "92%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-sm">
                    <span>Education Match</span>
                    <span className="font-medium">85%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Matched Jobs</CardTitle>
              <CardDescription>Best fitting open positions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                {
                  title: "Senior Frontend Developer",
                  company: "TechCorp Inc.",
                  match: 96,
                },
                {
                  title: "React Developer",
                  company: "InnovateSoft",
                  match: 89,
                },
                {
                  title: "UI Engineer",
                  company: "DigitalWave",
                  match: 83,
                },
              ].map((job, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-md border p-3 transition-all hover:bg-muted/50"
                >
                  <div>
                    <div className="font-medium">{job.title}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Building className="h-3 w-3" />
                      {job.company}
                    </div>
                  </div>
                  <div
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      job.match >= 90
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                        : job.match >= 80
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                    }`}
                  >
                    {job.match}%
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                View All Matching Jobs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

