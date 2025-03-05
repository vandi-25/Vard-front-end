import { BuildingIcon, BriefcaseIcon } from "lucide-react"

export function CandidateTimeline() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "TechGlobal Inc.",
      location: "New York, NY",
      period: "Jan 2021 - Present",
      description:
        "Led the development of responsive web applications using React and TypeScript. Implemented state management with Redux and optimized performance across the platform. Mentored junior developers and established coding standards.",
    },
    {
      title: "Frontend Developer",
      company: "WebSolutions Ltd.",
      location: "Boston, MA",
      period: "Jun 2018 - Dec 2020",
      description:
        "Developed and maintained multiple client-facing applications. Created reusable component libraries and implemented CI/CD pipelines. Collaborated with design team to ensure pixel-perfect implementations.",
    },
    {
      title: "Junior Web Developer",
      company: "CreativeTech",
      location: "San Francisco, CA",
      period: "Aug 2016 - May 2018",
      description:
        "Built responsive web interfaces using HTML, CSS, and JavaScript. Assisted in migrating legacy codebases to modern frameworks. Participated in code reviews and agile development processes.",
    },
  ]

  return (
    <div className="space-y-6">
      <h3 className="font-medium">Experience Timeline</h3>
      <div className="relative space-y-8 before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-muted">
        {experiences.map((experience, index) => (
          <div key={index} className="relative flex gap-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm z-10">
              <BriefcaseIcon className="h-4 w-4" />
            </div>
            <div className="flex-1 rounded-lg border bg-card p-4 shadow-sm">
              <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row">
                <div>
                  <div className="font-medium">{experience.title}</div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <BuildingIcon className="h-3 w-3" />
                    {experience.company} • {experience.location}
                  </div>
                </div>
                <div className="text-sm text-muted-foreground">{experience.period}</div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

