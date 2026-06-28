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
      "",
  },
  {
    id: "CRL-2025",
    role: "Information Security Analyst",
    company: "Cybersecurity Research Lab",
    date: "Jan - Apr 2025",
    description:
      "",
  },
  {
    id: "Bell-Canada-2024",
    role: "Software Engineer Intern",
    company: "Bell Canada",
    date: "May - Dec 2024",
    description:
      "",
  },
  {
    id: "CRL-2023",
    role: "Research Assistant",
    company: "Cybersecurity Research Lab",
    date: "Sep 2023 - Apr 2024",
    description:
      "",
  },
  {
    id: "YC-2022",
    role: "Project Coordinator",
    company: "Youth Culture Inc.",
    date: "Sep 2021 - Aug 2022",
    description:
      "",
  },
];

export default function Experience() {
  return (
    <section id="work" className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
          Work
        </p>
        <h2 className="text-2xl font-semibold">Selected experience</h2>
      </div>
      <div className="space-y-4">
        {experiences.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-sm shadow-black/5 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:shadow-white/5"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-base font-semibold text-zinc-950 dark:text-zinc-100">{item.company}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.role}</p>
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">{item.date}</p>
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
