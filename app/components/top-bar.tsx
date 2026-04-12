const navLinks = [
  { label: "Home", href: "#", active: false },
  { label: "Download", href: "#", active: false },
  { label: "Leaderboard", href: "#", active: true },
  { label: "Submit", href: "#", active: false },
  { label: "Reference", href: "#", active: false },
];

export default function TopBar() {
  return (
    <header className="bg-[#F9F9FB] dark:bg-slate-900 sticky top-0 z-50 transition-colors">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <span className="text-2xl font-black tracking-tighter text-[#EE0033]">Viettel Codev Hub</span>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) =>
              link.active ? (
                <a
                  key={link.label}
                  className="text-[#EE0033] font-bold border-b-2 border-[#EE0033] pb-1 py-1 px-2"
                  href={link.href}
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  className="text-[#1A1C1D] dark:text-slate-300 font-medium hover:text-[#EE0033] hover:bg-[#F3F3F5] dark:hover:bg-slate-800 transition-all duration-200 py-1 px-2"
                  href={link.href}
                >
                  {link.label}
                </a>
              )
            )}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-low rounded-full">search</button>
          <button className="bg-primary-container text-on-primary font-bold px-6 py-2 rounded-md hover:scale-[1.02] active:scale-95 transition-all">Login</button>
        </div>
      </div>
    </header>
  );
}
