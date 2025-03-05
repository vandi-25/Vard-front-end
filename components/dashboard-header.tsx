import Link from "next/link"
import { PlusCircle, UploadCloud } from "lucide-react"

import { Button } from "@/components/ui/button"

export function DashboardHeader() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Manage your candidates and job listings</p>
      </div>
      <div className="flex items-center gap-2">
        <Button asChild variant="outline">
          <Link href="/upload">
            <UploadCloud className="mr-2 h-4 w-4" />
            Upload Resumes
          </Link>
        </Button>
        <Button asChild>
          <Link href="/candidates/add">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Candidate
          </Link>
        </Button>
      </div>
    </div>
  )
}

