import Experience from "@/components/Experience";
import Navbar from "@/components/Navbar";
import TendrilCursor from "@/components/TendrilCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-[#050505] dark:text-zinc-100">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col gap-20 px-6 py-10 sm:px-8">
        <section className="space-y-8 py-12 sm:py-16">
          <TendrilCursor>
            <div className="space-y-4 px-4 py-8 sm:px-6 sm:py-10">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">
                Personal Portfolio
              </p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-snug sm:text-5xl">
                Hi, I’m Harshil.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
                I create fast, accessible, and polished portfolio sites. This simple homepage shows a hero section, work history, and an easy way to connect.
              </p>
            </div>
          </TendrilCursor>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://linkedin.com/in/harshil31"
              title="https://linkedin.com/in/harshil31"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/harshil31"
              title="https://github.com/harshil31"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="mailto:harshilp31@outlook.com"
              title="mailto:harshilp31@outlook.com"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-black transition hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Email
            </a>
          </div>
        </section>

        <Experience />

        <section id="contact" className="space-y-4 rounded-3xl border border-black/10 bg-white/90 p-8 shadow-lg shadow-black/5 dark:border-white/10 dark:bg-white/5 dark:shadow-white/5">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400">Contact</p>
            <h2 className="text-2xl font-semibold">Let’s build something together.</h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            If you have a project, collaboration, or just want to connect, email me at{' '}
            <a href="mailto:hello@harshilpatel.dev" className="font-semibold text-black underline decoration-1 decoration-black/30 dark:text-white dark:decoration-white/30">
              hello@harshilpatel.dev
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
