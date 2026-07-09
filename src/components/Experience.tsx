const experiences = [
  {
    id: "Bell-Canada-2026",
    role: "Software Engineer Intern",
    company: "Bell Canada",
    date: "May 2026 – present",
    description:
      "",
  },
  {
    id: "Bell-Canada-2025",
    role: "Software Engineer Intern",
    company: "Bell Canada",
    date: "May - Aug 2025",
    description:
      "Migrated legacy Jenkins workflows to GitLab CI/CD, built automated build/test pipelines, and improved deployment reliability and release efficiency across a microservices-oriented environment.",
  },
  {
    id: "CRL-2025",
    role: "Information Security Analyst",
    company: "Cybersecurity Research Lab",
    date: "Jan - Apr 2025",
    description:
      "Contributed to lab operations and research support by maintaining the website, implementing accessibility-focused front-end updates, and assisting with day-to-day coordination across research and project activities.",
  },
  {
    id: "Bell-Canada-2024",
    role: "Software Engineer Intern",
    company: "Bell Canada",
    date: "May - Dec 2024",
    description:
      "Worked on a newly cloud-migrated GCP application handling 100k+ SIM transactions, building cloud functions, improving backend reliability, and leading security controls approval for deployment.",
  },
  {
    id: "CRL-2023",
    role: "Research Assistant",
    company: "Cybersecurity Research Lab",
    date: "Sep 2023 - Apr 2024",
    description:
      "Built Python-based literature scraping and analysis workflows, then used bibliometric methods and data visualizations to support research synthesis, proposal development, and publication work.",
  },
  {
    id: "YC-2022",
    role: "Project Coordinator",
    company: "Youth Culture Inc.",
    date: "Sep 2021 - Aug 2022",
    description:
      "Coordinated interns, organized a hackathon, and improved website accessibility while helping teams deliver technical projects and build practical software skills.",
  },
];

export default function Experience() {
  return (
    <section id="work" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Work
        </p>
        <h2 className="text-2xl font-semibold">What I've Been Up To</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((item) => (
          <article
            key={item.id}
            className="group rounded-3xl border border-black/10 bg-white/90 p-6 shadow-sm shadow-black/5 transition duration-300 hover:-translate-y-0.5 hover:border-orange-400/60 hover:bg-white hover:shadow-[0_0_30px_rgba(249,115,22,0.22),0_0_60px_rgba(249,115,22,0.14)] dark:border-white/10 dark:bg-white/5 dark:shadow-white/5 dark:hover:border-orange-400/70 dark:hover:bg-white/10 dark:hover:shadow-[0_0_35px_rgba(249,115,22,0.28),0_0_70px_rgba(249,115,22,0.18)]"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-base font-semibold text-zinc-950 dark:text-zinc-100">{item.company}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.role}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{item.date}</p>
            </div>
            <p className="mt-0 max-h-0 overflow-hidden text-sm leading-7 text-zinc-600 opacity-0 transition-all duration-300 ease-out group-hover:mt-4 group-hover:max-h-40 group-hover:opacity-100 group-focus-within:mt-4 group-focus-within:max-h-40 group-focus-within:opacity-100 dark:text-zinc-300">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
