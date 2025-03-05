import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JobList } from "@/components/job-list"
import { JobFilterSidebar } from "@/components/job-filter-sidebar"
import { JobStats } from "@/components/job-stats"
import { PlusCircle, Search, SlidersHorizontal } from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Job Listings</h1>
          <p className="text-muted-foreground">Manage your job listings and view applicants</p>
        </div>
        <Button asChild>
          <Link href="/jobs/add">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Job
          </Link>
        </Button>
      </div>

      <JobStats />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="hidden lg:block">
          <JobFilterSidebar />
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search jobs..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </div>

            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Active Jobs</TabsTrigger>
                <TabsTrigger value="draft">Drafts</TabsTrigger>
                <TabsTrigger value="closed">Closed</TabsTrigger>
              </TabsList>
              <TabsContent value="active" className="pt-4">
                <JobList status="active" />
              </TabsContent>
              <TabsContent value="draft" className="pt-4">
                <JobList status="draft" />
              </TabsContent>
              <TabsContent value="closed" className="pt-4">
                <JobList status="closed" />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}

