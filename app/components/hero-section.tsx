export default function HeroSection() {
    return (
        <div className="mb-12">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <h1 className="font-headline text-on-surface mb-4 text-5xl font-extrabold tracking-tight">
                        Leaderboard of Code Suggestion models
                    </h1>
                    <p className="text-on-surface-variant max-w-2xl leading-relaxed">
                        Evaluating state-of-the-art models across comprehensive
                        benchmarks. Real-time performance tracking for LLMs,
                        Computer Vision, and Multimodal systems.
                    </p>
                </div>
                <div className="flex gap-2">
                    <div className="bg-surface-container-low flex items-center gap-2 rounded-lg px-4 py-2">
                        <span
                            className="material-symbols-outlined text-primary"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                            update
                        </span>
                        <span className="font-label text-xs font-bold tracking-wider uppercase">
                            Updated: APR 10, 2026
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
