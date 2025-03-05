"use client"

import { useState, useCallback } from "react"
import { FileText, Upload, CheckCircle2, AlertCircle, X } from "lucide-react"
import { useDropzone } from "react-dropzone"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function FileUpload() {
  const [files, setFiles] = useState<
    Array<{
      name: string
      size: number
      status: "uploading" | "complete" | "error"
      progress: number
    }>
  >([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Simulate file upload
    const newFiles = acceptedFiles.map((file) => ({
      name: file.name,
      size: file.size,
      status: "uploading" as const,
      progress: 0,
    }))

    setFiles((prev) => [...prev, ...newFiles])

    // Simulate upload progress
    newFiles.forEach((file, index) => {
      const timer = setInterval(
        () => {
          setFiles((prevFiles) =>
            prevFiles.map((prevFile, prevIndex) => {
              if (prevFile.name === file.name && prevFile.status === "uploading") {
                const newProgress = Math.min(prevFile.progress + 10, 100)

                if (newProgress === 100) {
                  clearInterval(timer)
                  return {
                    ...prevFile,
                    progress: 100,
                    status: Math.random() > 0.9 ? "error" : "complete",
                  }
                }

                return {
                  ...prevFile,
                  progress: newProgress,
                }
              }
              return prevFile
            }),
          )
        },
        300 + index * 100,
      )
    })
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [".docx"],
    },
    maxSize: 5 * 1024 * 1024, // 5MB
  })

  const removeFile = (fileName: string) => {
    setFiles(files.filter((file) => file.name !== fileName))
  }

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors
          ${
            isDragActive
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25 hover:border-primary/50 hover:bg-muted/50"
          }`}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center space-y-2 text-muted-foreground">
          <Upload className="h-12 w-12 mb-2" />
          <h3 className="text-lg font-medium text-foreground">Drag & drop files here</h3>
          <p>Drag and drop resume files here or click to browse</p>
          <Button size="sm" variant="secondary" className="mt-2">
            Select Files
          </Button>
        </div>
      </div>

      {files.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium">Files ({files.length})</h3>
          <div className="space-y-2">
            {files.map((file) => (
              <div key={file.name} className="flex items-center space-x-2 rounded-md border p-2">
                <div className="bg-muted rounded p-1">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-sm">
                    <p className="font-medium truncate">{file.name}</p>
                    <p className="text-muted-foreground">{Math.round(file.size / 1024)} KB</p>
                  </div>
                  <div className="flex items-center space-x-2 pt-1">
                    <Progress value={file.progress} className="h-2" />
                    <p className="text-xs w-10 text-muted-foreground">{file.progress}%</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {file.status === "complete" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  {file.status === "error" && <AlertCircle className="h-5 w-5 text-destructive" />}
                  <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeFile(file.name)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setFiles([])}>
              Clear All
            </Button>
            <Button disabled={!files.some((file) => file.status === "complete")}>Process Resumes</Button>
          </div>
        </div>
      )}
    </div>
  )
}

