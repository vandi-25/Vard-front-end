import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { JobSkillsInput } from "@/components/job-skills-input"
import { ArrowLeft, LucideCheck } from "lucide-react"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { JobExperienceLevel } from "@/components/job-experience-level"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AddJobPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/jobs">
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Job</h1>
          <p className="text-muted-foreground">Create a new job listing</p>
        </div>
      </div>

      <Tabs defaultValue="details" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="details">Job Details</TabsTrigger>
          <TabsTrigger value="requirements">Requirements</TabsTrigger>
          <TabsTrigger value="matching">Matching Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="details" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Enter general information about the job</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="e.g. Frontend Developer" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <Select>
                    <SelectTrigger id="department">
                      <SelectValue placeholder="Select department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="engineering">Engineering</SelectItem>
                      <SelectItem value="product">Product</SelectItem>
                      <SelectItem value="marketing">Marketing</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="customer-success">Customer Success</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Job Type</Label>
                  <Select>
                    <SelectTrigger id="type">
                      <SelectValue placeholder="Select job type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-time">Full-time</SelectItem>
                      <SelectItem value="part-time">Part-time</SelectItem>
                      <SelectItem value="contract">Contract</SelectItem>
                      <SelectItem value="internship">Internship</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input id="location" placeholder="e.g. Remote, New York, etc." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reports-to">Reports to</Label>
                  <Input id="reports-to" placeholder="e.g. CTO, Engineering Manager, etc." />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="min-salary">Minimum Salary</Label>
                  <Input id="min-salary" type="number" placeholder="e.g. 80000" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="max-salary">Maximum Salary</Label>
                  <Input id="max-salary" type="number" placeholder="e.g. 120000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Job Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe the responsibilities, benefits, and other details about the job..."
                  className="min-h-[200px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requirements" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Job Requirements</CardTitle>
              <CardDescription>Define required skills, experience level, and qualifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Experience Level</Label>
                <JobExperienceLevel />
              </div>

              <div className="space-y-2">
                <Label htmlFor="skills">Required Skills</Label>
                <JobSkillsInput />
              </div>

              <div className="space-y-2">
                <Label htmlFor="education">Minimum Education</Label>
                <Select>
                  <SelectTrigger id="education">
                    <SelectValue placeholder="Select minimum education" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School</SelectItem>
                    <SelectItem value="associate">Associate's Degree</SelectItem>
                    <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                    <SelectItem value="master">Master's Degree</SelectItem>
                    <SelectItem value="doctorate">Doctorate</SelectItem>
                    <SelectItem value="none">No Specific Requirement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="requirements">Other Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="Describe any additional requirements, certifications, or qualifications..."
                  className="min-h-[150px]"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="matching" className="pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Candidate Matching Settings</CardTitle>
              <CardDescription>Configure how candidates are scored and matched for this position</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Skills Importance</Label>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-primary" />
                      <span>Technical Skills</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="number" className="w-16 h-8" defaultValue="40" min="0" max="100" />
                      <span>%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-blue-500" />
                      <span>Experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="number" className="w-16 h-8" defaultValue="30" min="0" max="100" />
                      <span>%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-green-500" />
                      <span>Education</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="number" className="w-16 h-8" defaultValue="20" min="0" max="100" />
                      <span>%</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 rounded-full bg-yellow-500" />
                      <span>Culture Fit</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input type="number" className="w-16 h-8" defaultValue="10" min="0" max="100" />
                      <span>%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Required Skills Threshold</Label>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Candidate must match at least</span>
                    <span className="font-medium">70% of required skills</span>
                  </div>
                  <Input type="range" min="0" max="100" defaultValue="70" step="5" className="w-full" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>More candidates</span>
                    <span>Better quality</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Match Notification</Label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="notifications"
                    className="h-4 w-4 rounded border-gray-300"
                    defaultChecked
                  />
                  <Label htmlFor="notifications" className="font-normal">
                    Notify me when a candidate with 85%+ match applies
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-2">
        <Button variant="outline" asChild>
          <Link href="/jobs">Cancel</Link>
        </Button>
        <Button variant="outline">Save as Draft</Button>
        <Button>
          <LucideCheck className="mr-2 h-4 w-4" />
          Publish Job
        </Button>
      </div>
    </div>
  )
}

