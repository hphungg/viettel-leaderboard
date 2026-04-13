import TopBar from "@/components/top-bar"
import HeroSection from "@/components/hero-section"
import LeaderboardTable from "@/components/leaderboard-table"
import Pagination from "@/components/pagination"
import { leaderboardData } from "../data/leaderboard-data"

export default async function LeaderboardPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedParams = await searchParams
    const tabParam = resolvedParams?.tab
    const activeTabId = typeof tabParam === "string" ? tabParam : "nl2pp"
    const currentData = leaderboardData[activeTabId] || leaderboardData["nl2pp"]
    const totalCount = currentData.length

    return (
        <>
            <TopBar activeTabId={activeTabId} />
            <main className="mx-auto w-full max-w-screen-2xl flex flex-col h-[calc(100vh-72px)] p-8 gap-6 overflow-hidden">
                <HeroSection />
                <LeaderboardTable data={currentData} />
                <Pagination totalCount={totalCount} />
            </main>
        </>
    )
}
