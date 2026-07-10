import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import TendrilCursor from "@/components/TendrilCursor";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fff2e8] text-zinc-900">
      <Navbar />

      <main className="mx-auto flex min-h-[calc(100vh-72px)] max-w-6xl flex-col gap-20 px-6 py-10 sm:px-8">
        <section className="space-y-10 py-14 pb-24 sm:py-18 sm:pb-32">
            <TendrilCursor>
            <div className="space-y-4 px-4 py-8 sm:px-6 sm:py-10">
                <h1 className="max-w-3xl text-4xl font-semibold leading-snug sm:text-5xl">
                  Hi, I’m <span className="text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.16)] dark:text-orange-400">Harshil</span>.
                </h1>
              <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-800">
                  I'm currently a Software Engineering Intern at <b>Bell Canada</b>, working on SaaS applications and cloud infrastructure. <br /> <br />
                  I study Computer Science at <b>Toronto Metropolitan University</b>. <br /> <br />
                  In my spare time, I enjoy learning new technologies, playing sports, and online window shopping 🤪
                </p>
              </div>
            </TendrilCursor>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="https://linkedin.com/in/harshil31"
              title="https://linkedin.com/in/harshil31"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-black/30 hover:bg-white sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/harshil31"
              title="https://github.com/harshil31"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-black/30 hover:bg-white sm:w-auto"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="mailto:harshilp31@outlook.com"
              title="mailto:harshilp31@outlook.com"
              className="inline-flex w-full items-center justify-center rounded-full border border-black/15 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-black/30 hover:bg-white sm:w-auto"
            >
              Email
            </a>
          </div>
        </section>

        <Experience />

        <Projects />

        <section id="contact" className="space-y-4 rounded-3xl border border-black/10 bg-white/80 p-8 shadow-lg shadow-black/5">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">Contact</p>
            <h2 className="text-2xl font-semibold">Let’s build something together.</h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-zinc-700">
            I'm always open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
          </p>
        </section>
      </main>
    </div>
  );
}
