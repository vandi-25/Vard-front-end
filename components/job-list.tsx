import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Building, Clock, DollarSign, MapPin, MoreHorizontal, User } from "lucide-react"
import Link from "next/link"

const jobsData = {
  active: [
    {
      id: "JOB001",
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$120,000 - $150,000",
      posted: "2 weeks ago",
      applicants: 42,
      deadline: "2 weeks left",
    },
    {
      id: "JOB002",
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      salary: "$130,000 - $160,000",
      posted: "1 week ago",
      applicants: 28,
      deadline: "3 weeks left",
    },
    {
      id: "JOB003",
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$140,000 - $170,000",
      posted: "3 days ago",
      applicants: 15,
      deadline: "1 month left",
    },
    {
      id: "JOB004",
      title: "UX Designer",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$90,000 - $120,000",
      posted: "4 days ago",
      applicants: 34,
      deadline: "3 weeks left",
    },
    {
      id: "JOB005",
      title: "Sales Representative",
      department: "Sales",
      location: "Chicago, IL",
      type: "Full-time",
      salary: "$80,000 - $100,000 + Commission",
      posted: "1 week ago",
      applicants: 22,
      deadline: "2 weeks left",
    },
  ],
  draft: [
    {
      id: "DRAFT001",
      title: "Marketing Manager",
      department: "Marketing",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      lastEdited: "Yesterday",
    },
    {
      id: "DRAFT002",
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$115,000 - $145,000",
      lastEdited: "3 days ago",
    },
  ],
  closed: [
    {
      id: "CLOSED001",
      title: "Data Scientist",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Full-time",
      closed: "1 week ago",
      applicants: 48,
      hired: 1,
    },
    {
      id: "CLOSED002",
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      closed: "2 weeks ago",
      applicants: 36,
      hired: 2,
    },
    {
      id: "CLOSED003",
      title: "Frontend Developer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      closed: "1 month ago",
      applicants: 52,
      hired: 1,
    },
  ],
}

type JobListProps = {
  status: "active" | "draft" | "closed"
}

export function JobList({ status }: JobListProps) {
  const jobs = jobsData[status]

  return (
    <div className="space-y-4">
      {jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <h3 className="mb-2 text-lg font-medium">No jobs found</h3>
          <p className="mb-4 text-sm text-muted-foreground">
            {status === "active"
              ? "You don't have any active job listings."
              : status === "draft"
                ? "You don't have any job drafts."
                : "You don't have any closed jobs."}
          </p>
          {status === "active" || status === "draft" ? (
            <Button asChild>
              <Link href="/jobs/add">Create a Job</Link>
            </Button>
          ) : null}
        </div>
      ) : (
        jobs.map((job) => (
          <Card key={job.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Link href={`/jobs/${job.id}`} className="text-xl font-semibold hover:underline">
                      {job.title}
                    </Link>
                    {status === "active" && <Badge variant="secondary">{job.type}</Badge>}
                    {status === "draft" && (
                      <Badge
                        variant="outline"
                        className="text-yellow-500 border-yellow-200 bg-yellow-100 dark:bg-yellow-900 dark:border-yellow-800"
                      >
                        Draft
                      </Badge>
                    )}
                    {status === "closed" && (
                      <Badge variant="outline" className="text-muted-foreground">
                        Closed
                      </Badge>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">{job.department}</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 pt-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      {job.location}
                    </div>
                    {job.salary && (
                      <div className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" />
                        {job.salary}
                      </div>
                    )}
                    {status === "active" && (
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {job.applicants} applicants
                      </div>
                    )}
                    {status === "closed" && (
                      <div className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {job.hired} hired (from {job.applicants} applicants)
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {status === "active" && (
                    <div className="flex flex-col items-end">
                      <div className="text-sm font-medium">Posted {job.posted}</div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {job.deadline}
                      </div>
                    </div>
                  )}
                  {status === "draft" && (
                    <div className="text-sm text-muted-foreground">Last edited {job.lastEdited}</div>
                  )}
                  {status === "closed" && <div className="text-sm text-muted-foreground">Closed {job.closed}</div>}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t bg-muted/40 px-6 py-3">
              <div className="flex items-center">
                <Building className="mr-2 h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Your Company Inc.</span>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
                <Button asChild size="sm">
                  <Link href={`/jobs/${job.id}`}>
                    {status === "active" ? "View Applicants" : status === "draft" ? "Edit Draft" : "View Details"}
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))
      )}
    </div>
  )
}

