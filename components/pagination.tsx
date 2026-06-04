import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react/dist/ssr"
import Link from "next/link"

const buttonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition-all"
const enabledButtonClass =
    "bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary"
const disabledButtonClass =
    "pointer-events-none bg-surface-container-highest text-on-surface opacity-50"

function getPageHref(activeTabId: string, page: number) {
    return `/?tab=${activeTabId}&page=${page}`
}

export default function Pagination({
    activeTabId,
    currentPage,
    pageSize,
    totalCount,
}: {
    activeTabId: string
    currentPage: number
    pageSize: number
    totalCount: number
}) {
    const totalPages = Math.max(1, Math.ceil(totalCount / pageSize))
    const startItem = totalCount === 0 ? 0 : (currentPage - 1) * pageSize + 1
    const endItem = Math.min(currentPage * pageSize, totalCount)
    const hasPreviousPage = currentPage > 1
    const hasNextPage = currentPage < totalPages

    return (
        <div className="mt-2 flex shrink-0 items-center justify-between">
            <span className="text-on-surface-variant text-base font-medium">
                Showing {startItem} to {endItem} of {totalCount} models
            </span>
            <div className="flex items-center gap-2">
                <Link
                    aria-disabled={!hasPreviousPage}
                    aria-label="Previous page"
                    className={`${buttonClass} ${
                        hasPreviousPage
                            ? enabledButtonClass
                            : disabledButtonClass
                    }`}
                    href={getPageHref(
                        activeTabId,
                        hasPreviousPage ? currentPage - 1 : currentPage,
                    )}
                >
                    <CaretLeftIcon size={20} />
                </Link>
                {Array.from({ length: totalPages }).map((_, i) => (
                    <Link
                        key={i}
                        aria-current={
                            i + 1 === currentPage ? "page" : undefined
                        }
                        className={`${buttonClass} ${
                            i + 1 === currentPage
                                ? "bg-primary-container text-on-primary hover:bg-primary-container/90 font-bold"
                                : "bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary font-medium"
                        }`}
                        href={getPageHref(activeTabId, i + 1)}
                    >
                        {i + 1}
                    </Link>
                ))}
                <Link
                    aria-disabled={!hasNextPage}
                    aria-label="Next page"
                    className={`${buttonClass} ${
                        hasNextPage ? enabledButtonClass : disabledButtonClass
                    }`}
                    href={getPageHref(
                        activeTabId,
                        hasNextPage ? currentPage + 1 : currentPage,
                    )}
                >
                    <CaretRightIcon size={20} />
                </Link>
            </div>
        </div>
    )
}
