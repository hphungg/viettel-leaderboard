import TopBar from "@/components/top-bar"
import HeroSection from "@/components/hero-section"
import LeaderboardTable from "@/components/leaderboard-table"
import Pagination from "@/components/pagination"
import { leaderboardData } from "../data/leaderboard-data"

const PAGE_SIZE = 10

export default async function LeaderboardPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const resolvedParams = await searchParams
    const tabParam = resolvedParams?.tab
    const pageParam = resolvedParams?.page
    const requestedTabId = typeof tabParam === "string" ? tabParam : "nl2pp"
    const activeTabId = leaderboardData[requestedTabId]
        ? requestedTabId
        : "nl2pp"
    const currentData = leaderboardData[activeTabId]
    const totalCount = currentData.length
    const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE))
    const requestedPage =
        typeof pageParam === "string" ? Number.parseInt(pageParam, 10) : 1
    const currentPage = Number.isNaN(requestedPage)
        ? 1
        : Math.min(Math.max(requestedPage, 1), totalPages)
    const pageStart = (currentPage - 1) * PAGE_SIZE
    const pageData = currentData.slice(pageStart, pageStart + PAGE_SIZE)

    return (
        <>
            <TopBar activeTabId={activeTabId} />
            <main className="mx-auto flex h-[calc(100vh-72px)] w-full max-w-screen-2xl flex-col gap-6 overflow-hidden p-8">
                <HeroSection />
                <LeaderboardTable data={pageData} pageSize={PAGE_SIZE} />
                <Pagination
                    activeTabId={activeTabId}
                    currentPage={currentPage}
                    pageSize={PAGE_SIZE}
                    totalCount={totalCount}
                />
            </main>
        </>
    )
}
