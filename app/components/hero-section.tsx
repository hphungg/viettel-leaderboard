export default function HeroSection() {
  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-headline font-extrabold text-5xl tracking-tight text-on-surface mb-4">Leaderboard of Code Suggestion models</h1>
          <p className="text-on-surface-variant max-w-2xl leading-relaxed">Evaluating state-of-the-art models across comprehensive benchmarks. Real-time performance tracking for LLMs, Computer Vision, and Multimodal systems.</p>
        </div>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg">
            <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>update</span>
            <span className="font-label text-xs uppercase tracking-wider font-bold">Updated: APR 10, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
