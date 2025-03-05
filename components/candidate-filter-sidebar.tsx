"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

export function CandidateFilterSidebar() {
  const [experienceRange, setExperienceRange] = useState([0, 15])
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "C#",
    "AWS",
    "Docker",
    "SQL",
    "NoSQL",
    "Git",
    "DevOps",
    "UI/UX",
    "Agile",
    "Scrum",
  ]

  const locations = ["Remote", "New York", "San Francisco", "London", "Berlin", "Toronto", "Sydney", "Singapore"]

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skill))
    } else {
      setSelectedSkills([...selectedSkills, skill])
    }
  }

  return (
    <div className="space-y-4">
      <div className="font-medium">Filters</div>

      <Accordion type="multiple" defaultValue={["experience", "skills", "location"]}>
        <AccordionItem value="experience">
          <AccordionTrigger className="text-sm">Experience</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 pt-2">
              <Slider
                value={experienceRange}
                min={0}
                max={15}
                step={1}
                onValueChange={setExperienceRange}
                className="py-4"
              />
              <div className="flex items-center justify-between">
                <div className="text-sm">{experienceRange[0]} years</div>
                <div className="text-sm">{experienceRange[1]} years</div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger className="text-sm">Skills</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3 pt-2">
              <div className="relative">
                <Input placeholder="Search skills..." className="text-sm" />
              </div>

              {selectedSkills.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-2">
                  {selectedSkills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                      <button
                        className="ml-1 text-muted-foreground hover:text-foreground"
                        onClick={() => toggleSkill(skill)}
                      >
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              )}

              <div className="space-y-2 max-h-40 overflow-y-auto">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <Checkbox
                      id={`skill-${skill}`}
                      checked={selectedSkills.includes(skill)}
                      onCheckedChange={() => toggleSkill(skill)}
                    />
                    <Label htmlFor={`skill-${skill}`} className="text-sm font-normal cursor-pointer">
                      {skill}
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

