import Link from "next/link"
import { tabs } from "../data/leaderboard-data"

export default function TopBar({ activeTabId }: { activeTabId: string }) {
    return (
        <header className="sticky top-0 z-50 py-4 bg-white border-b border-gray-200 transition-colors">
            <div className="mx-auto flex h-full w-full max-w-screen-2xl items-center px-8">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-black tracking-tighter text-[#EE0033]">
                        Viettel Codev Hub
                    </span>
                    <nav className="hidden gap-6 md:flex">
                        {tabs.map((tab) => {
                            const isActive = tab.id === activeTabId
                            return isActive ? (
                                <Link
                                    key={tab.id}
                                    className="border-b-2 border-[#EE0033] px-2 py-1 pb-1 font-bold text-[#EE0033]"
                                    href={`/?tab=${tab.id}`}
                                >
                                    {tab.label}
                                </Link>
                            ) : (
                                <Link
                                    key={tab.id}
                                    className="px-2 py-1 font-medium text-[#1A1C1D] transition-all duration-200 hover:bg-[#F3F3F5] hover:rounded-full hover:text-[#EE0033]"
                                    href={`/?tab=${tab.id}`}
                                >
                                    {tab.label}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </header>
    )
}
