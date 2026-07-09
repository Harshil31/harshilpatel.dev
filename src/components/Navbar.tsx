export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <span className="animate-[pulse_2.4s_ease-in-out_infinite] text-base font-semibold tracking-[0.2em] text-orange-500 dark:text-orange-400">
          HP
        </span>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#work" className="transition hover:text-orange-500 dark:hover:text-orange-400">
            Work
          </a>
          <a href="#projects" className="transition hover:text-orange-500 dark:hover:text-orange-400">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-orange-500 dark:hover:text-orange-400">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
