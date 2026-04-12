import TopBar from "./components/top-bar"
import HeroSection from "./components/hero-section"
import LeaderboardTable from "./components/leaderboard-table"
import Pagination from "./components/pagination"

export default function LeaderboardPage() {
    return (
        <>
            <TopBar />
            <main className="mx-auto w-full max-w-screen-2xl flex flex-col h-[calc(100vh-72px)] p-8 gap-6 overflow-hidden">
                <HeroSection />
                <LeaderboardTable />
                <Pagination />
            </main>
        </>
    )
}
