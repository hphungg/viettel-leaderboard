import { ClockIcon } from "@phosphor-icons/react/dist/ssr"

export default function HeroSection() {
    const currentDate = new Date()
        .toLocaleDateString("en-US", {
            timeZone: "Asia/Ho_Chi_Minh",
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
        .toUpperCase()

    return (
        <div className="shrink-0">
            <div className="flex flex-row items-center justify-between gap-6">
                <h1 className="font-headline text-on-surface text-4xl font-extrabold tracking-tight">
                    Leaderboard of Code Suggestion models
                </h1>
                <div className="flex gap-2">
                    <div className="bg-surface-container-low flex items-center gap-2 rounded-xl border border-gray-200 p-2">
                        <ClockIcon
                            className="text-primary"
                            weight="fill"
                            size={24}
                        />
                        <span className="font-label text-xs font-bold tracking-wider uppercase">
                            Updated: {currentDate}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
