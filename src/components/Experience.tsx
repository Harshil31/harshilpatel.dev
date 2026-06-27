const experiences = [
  {
    role: "Frontend Engineer",
    company: "Creative Studio",
    date: "2024 – present",
    description:
      "Building responsive websites, small product launches, and polished UI interactions for creative clients.",
  },
  {
    role: "Web Developer",
    company: "Freelance Projects",
    date: "2022 – 2024",
    description:
      "Delivered landing pages, portfolio sites, and marketing pages with a focus on performance and clarity.",
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
      <div className="grid gap-4 sm:grid-cols-2">
        {experiences.map((item) => (
          <article
            key={item.company}
            className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-sm shadow-black/5 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:shadow-white/5"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-base font-semibold text-zinc-950 dark:text-zinc-100">{item.role}</p>
                <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">{item.company}</p>
              </div>
              <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-600 dark:bg-zinc-950 dark:text-zinc-300">
                {item.date}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
