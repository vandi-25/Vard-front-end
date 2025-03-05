import { CandidateFilterSidebar } from "@/components/candidate-filter-sidebar"
import { CandidateList } from "@/components/candidate-list"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LayoutGrid, List, Search, SlidersHorizontal } from "lucide-react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CandidatesPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Candidates</h1>
          <p className="text-muted-foreground">Manage and filter your candidate pool</p>
        </div>
        <Button>Add Candidate</Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
        <div className="hidden lg:block">
          <CandidateFilterSidebar />
        </div>

        <div className="lg:col-span-3">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search candidates..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="icon" className="lg:hidden">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
              <div className="hidden lg:block">
                <Tabs defaultValue="list">
                  <TabsList>
                    <TabsTrigger value="list">
                      <List className="h-4 w-4" />
                    </TabsTrigger>
                    <TabsTrigger value="grid">
                      <LayoutGrid className="h-4 w-4" />
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>

            <CandidateList />
          </div>
        </div>
      </div>
    </div>
  )
}

