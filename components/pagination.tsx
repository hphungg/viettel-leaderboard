import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"

export default function Pagination({ totalCount }: { totalCount: number }) {
    const totalPages = Math.max(1, Math.ceil(totalCount / 10))

    return (
        <div className="mt-2 flex-shrink-0 flex items-center justify-between">
            <span className="text-on-surface-variant text-base font-medium">
                Showing 1 to {totalCount} of {totalCount} models
            </span>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    className="h-10 w-10 rounded-full border-gray-200 bg-surface-container-highest p-0 text-on-surface hover:bg-primary-container hover:text-on-primary transition-all disabled:opacity-50"
                    disabled
                >
                    <CaretLeft size={20} />
                </Button>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <Button
                        key={i}
                        variant="outline"
                        className={`h-10 w-10 rounded-full transition-all ${i === 0
                            ? "bg-primary-container text-on-primary font-bold hover:bg-primary-container/90"
                            : "bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary font-medium"
                            }`}
                    >
                        {i + 1}
                    </Button>
                ))}
                {totalPages > 3 && <span className="text-on-surface-variant px-2">...</span>}
                <Button
                    variant="outline"
                    className="h-10 w-10 rounded-full border-gray-200 bg-surface-container-highest p-0 text-on-surface hover:bg-primary-container hover:text-on-primary transition-all disabled:opacity-50"
                    disabled={totalPages <= 1}
                >
                    <CaretRight size={20} />
                </Button>
            </div>
        </div>
    )
}
