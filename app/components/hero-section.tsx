export default function HeroSection() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        timeZone: "Asia/Ho_Chi_Minh",
        month: "short",
        day: "2-digit",
        year: "numeric",
    }).toUpperCase()

    return (
        <div className="flex-shrink-0">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <h1 className="font-headline text-on-surface mb-6 text-4xl font-extrabold tracking-tight">
                        Leaderboard of Code Suggestion models
                    </h1>
                    <p className="text-on-surface-variant max-w-2xl text-base leading-relaxed">
                        Evaluating our models vs. state-of-the-art models across comprehensive
                        benchmarks.
                    </p>
                </div>
                <div className="flex gap-2">
                    <div className="bg-surface-container-low border-gray-200 flex items-center gap-2 rounded-xl border p-2">
                        <span
                            className="material-symbols-outlined text-primary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            update
                        </span>
                        <span className="font-label text-xs font-bold tracking-wider uppercase">
                            Updated: {currentDate}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
