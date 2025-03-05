import { FileUpload } from "@/components/file-upload"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function UploadPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume Upload</h1>
          <p className="text-muted-foreground">Upload candidate resumes for parsing and analysis</p>
        </div>
      </div>

      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle>Upload Resumes</CardTitle>
          <CardDescription>Upload PDF or DOCX files to automatically extract candidate information</CardDescription>
        </CardHeader>
        <CardContent>
          <FileUpload />
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground">
            <p>Supported file types: PDF, DOCX</p>
            <p>Maximum file size: 5MB</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

