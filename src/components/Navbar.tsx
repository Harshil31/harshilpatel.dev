export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <span className="text-base font-semibold">Harshil Patel</span>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <a href="#work" className="transition hover:text-black dark:hover:text-white">
            Work
          </a>
          <a href="#projects" className="transition hover:text-black dark:hover:text-white">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-black dark:hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
