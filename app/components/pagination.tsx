export default function Pagination({ totalCount }: { totalCount: number }) {
    const totalPages = Math.max(1, Math.ceil(totalCount / 12))

    return (
        <div className="mt-2 flex-shrink-0 flex items-center justify-between">
            <span className="text-on-surface-variant text-base font-medium">
                Showing 1 to {totalCount} of {totalCount} models
            </span>
            <div className="flex items-center gap-2">
                <button
                    className="bg-surface-container-highest h-10 w-10 text-on-surface hover:bg-primary-container border-gray-200 hover:text-on-primary rounded-full border p-2 transition-all disabled:opacity-50"
                    disabled
                >
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        className={`border-gray-200 h-10 w-10 border rounded-full transition-all ${i === 0
                            ? "bg-primary-container text-on-primary font-bold shadow-md"
                            : "bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary font-medium"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
                {totalPages > 3 && <span className="text-on-surface-variant px-2">...</span>}
                <button
                    className="bg-surface-container-highest h-10 w-10 border-gray-200 text-on-surface hover:bg-primary-container hover:text-on-primary rounded-full border p-2 transition-all disabled:opacity-50"
                    disabled={totalPages <= 1}
                >
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    )
}
