import Link from "next/link"
import { tabs } from "../data/leaderboard-data"

export default function TopBar({ activeTabId }: { activeTabId: string }) {
    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white py-4 transition-colors">
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
                                    className="border-b-2 border-[#EE0033] px-2 py-1 pb-1 font-medium text-[#EE0033]"
                                    href={`/?tab=${tab.id}`}
                                >
                                    {tab.label}
                                </Link>
                            ) : (
                                <Link
                                    key={tab.id}
                                    className="px-2 py-1 font-medium text-[#1A1C1D] hover:rounded-full hover:bg-[#F3F3F5] hover:text-[#EE0033]"
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
