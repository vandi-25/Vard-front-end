"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function JobSkillsInput() {
  const [skills, setSkills] = useState<string[]>(["React", "TypeScript", "JavaScript"])
  const [input, setInput] = useState("")

  const addSkill = (value: string) => {
    const skill = value.trim()
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill])
      setInput("")
    }
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault()
      addSkill(input)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="text-sm">
            {skill}
            <button
              type="button"
              onClick={() => removeSkill(skill)}
              className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {skill}</span>
            </button>
          </Badge>
        ))}
        <Input
          type="text"
          placeholder="Add skills (press Enter)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInputKeyDown}
          onBlur={() => addSkill(input)}
          className="h-7 w-40 flex-grow"
        />
      </div>

      <div className="pt-2">
        <div className="text-sm font-medium">Popular skills in this category</div>
        <div className="grid grid-cols-2 gap-2 pt-2 sm:grid-cols-3">
          {[
            "JavaScript",
            "React",
            "Node.js",
            "TypeScript",
            "Express",
            "MongoDB",
            "Next.js",
            "Redux",
            "REST API",
            "GraphQL",
            "CSS",
            "HTML",
          ].map((skill) => (
            <div key={skill} className="flex items-center space-x-2">
              <Checkbox
                id={`skill-${skill}`}
                checked={skills.includes(skill)}
                onCheckedChange={(checked) => {
                  if (checked) addSkill(skill)
                  else removeSkill(skill)
                }}
              />
              <Label htmlFor={`skill-${skill}`} className="text-sm font-normal">
                {skill}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

