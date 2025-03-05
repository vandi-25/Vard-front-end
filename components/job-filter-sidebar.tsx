"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function JobFilterSidebar() {
  const [salaryRange, setSalaryRange] = useState([50000, 150000])

  const departments = [
    "Engineering",
    "Product",
    "Marketing",
    "Sales",
    "Customer Success",
    "Finance",
    "HR",
    "Operations",
  ]

  const locations = ["Remote", "New York", "San Francisco", "London", "Berlin", "Toronto", "Sydney", "Singapore"]

  const jobTypes = ["Full-time", "Part-time", "Contract", "Internship"]

  return (
    <div className="space-y-4">
      <div className="font-medium">Filters</div>

      <Accordion type="multiple" defaultValue={["department", "location", "jobType", "salary"]}>
        <AccordionItem value="department">
          <AccordionTrigger className="text-sm">Department</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="relative">
                <Input placeholder="Search departments..." className="text-sm" />
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pt-2">
                {departments.map((department) => (
                  <div key={department} className="flex items-center space-x-2">
                    <Checkbox id={`department-${department}`} />
                    <Label htmlFor={`department-${department}`} className="text-sm font-normal cursor-pointer">
                      {department}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="location">
          <AccordionTrigger className="text-sm">Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="relative">
                <Input placeholder="Search locations..." className="text-sm" />
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto pt-2">
                {locations.map((location) => (
                  <div key={location} className="flex items-center space-x-2">
                    <Checkbox id={`location-${location}`} />
                    <Label htmlFor={`location-${location}`} className="text-sm font-normal cursor-pointer">
                      {location}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="jobType">
          <AccordionTrigger className="text-sm">Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              {jobTypes.map((jobType) => (
                <div key={jobType} className="flex items-center space-x-2">
                  <Checkbox id={`jobType-${jobType}`} />
                  <Label htmlFor={`jobType-${jobType}`} className="text-sm font-normal cursor-pointer">
                    {jobType}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary">
          <AccordionTrigger className="text-sm">Salary Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                value={salaryRange}
                min={30000}
                max={200000}
                step={5000}
                onValueChange={setSalaryRange}
                className="py-4"
              />
              <div className="flex items-center justify-between">
                <div className="text-sm">${salaryRange[0].toLocaleString()}</div>
                <div className="text-sm">${salaryRange[1].toLocaleString()}</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="grid grid-cols-2 gap-2 pt-4">
        <Button variant="outline" size="sm">
          Reset All
        </Button>
        <Button size="sm">Apply Filters</Button>
      </div>
    </div>
  )
}

