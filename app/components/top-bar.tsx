const navLinks = [
    { label: "Home", href: "#", active: false },
    { label: "Download", href: "#", active: false },
    { label: "Leaderboard", href: "#", active: true },
    { label: "Submit", href: "#", active: false },
    { label: "Reference", href: "#", active: false },
]

export default function TopBar() {
    return (
        <header className="sticky top-0 z-50 bg-[#F9F9FB] transition-colors dark:bg-slate-900">
            <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-4">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-black tracking-tighter text-[#EE0033]">
                        Viettel Codev Hub
                    </span>
                    <nav className="hidden gap-6 md:flex">
                        {navLinks.map((link) =>
                            link.active ? (
                                <a
                                    key={link.label}
                                    className="border-b-2 border-[#EE0033] px-2 py-1 pb-1 font-bold text-[#EE0033]"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ) : (
                                <a
                                    key={link.label}
                                    className="px-2 py-1 font-medium text-[#1A1C1D] transition-all duration-200 hover:bg-[#F3F3F5] hover:text-[#EE0033] dark:text-slate-300 dark:hover:bg-slate-800"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ),
                        )}
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container-low rounded-full p-2">
                        search
                    </button>
                    <button className="bg-primary-container text-on-primary rounded-md px-6 py-2 font-bold transition-all hover:scale-[1.02] active:scale-95">
                        Login
                    </button>
                </div>
            </div>
        </header>
    )
}
