import TopBar from "./components/top-bar";
import HeroSection from "./components/hero-section";
import LeaderboardTable from "./components/leaderboard-table";
import Pagination from "./components/pagination";
import SubmitSection from "./components/submit-section";

export default function LeaderboardPage() {
  return (
    <>
      <TopBar />
      <main className="flex-grow max-w-screen-2xl mx-auto w-full px-8 py-12">
        <HeroSection />
        <LeaderboardTable />
        <Pagination />
        <SubmitSection />
      </main>
    </>
  );
}
