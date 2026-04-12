const navLinks = [
    { label: "NL2PP", href: "#", active: true },
    { label: "Code Suggestion on Client", href: "#", active: false },
    { label: "Auto Complete on Server", href: "#", active: false },
]

export default function TopBar() {
    return (
        <header className="sticky top-0 z-50 py-4 bg-white border-b border-gray-200 transition-colors">
            <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center px-8">
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
                                    className="px-2 py-1 font-medium text-[#1A1C1D] transition-all duration-200 hover:bg-[#F3F3F5] hover:rounded-full hover:text-[#EE0033]"
                                    href={link.href}
                                >
                                    {link.label}
                                </a>
                            ),
                        )}
                    </nav>
                </div>
            </div>
        </header>
    )
}
