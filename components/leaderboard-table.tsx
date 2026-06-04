import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr"
import { tableColumns, LeaderboardEntry } from "../data/leaderboard-data"

const columnWidthClass: Record<keyof LeaderboardEntry, string> = {
    rank: "w-16",
    model: "w-[360px]",
    benchmarkScore: "w-[140px]",
    tokens: "w-[160px]",
    contextWindow: "w-[140px]",
    votes: "w-[120px]",
    rankSpread: "w-[120px]",
}

export default function LeaderboardTable({
    data,
    pageSize = 10,
}: {
    data: LeaderboardEntry[]
    pageSize?: number
}) {
    return (
        <div className="bg-surface-container-lowest flex min-h-0 flex-col overflow-hidden rounded-xl border border-gray-200">
            <div className="custom-scrollbar overflow-auto">
                <table className="w-full min-w-275 table-fixed border-collapse text-left">
                    <colgroup>
                        {tableColumns.map((col) => (
                            <col
                                key={col.key}
                                className={columnWidthClass[col.key]}
                            />
                        ))}
                    </colgroup>
                    <thead>
                        <tr className="bg-surface-container-low text-on-surface-variant border-b border-gray-200">
                            {tableColumns.map((col) => (
                                <th
                                    key={col.key}
                                    className={`font-label overflow-hidden border-r border-gray-200 px-4 py-3 text-xs font-bold tracking-widest text-ellipsis whitespace-nowrap uppercase ${
                                        col.center ? "text-center" : ""
                                    } ${col.highlight ? "border-r-0!" : ""}`}
                                >
                                    {col.highlight ? (
                                        <div className="flex items-center justify-center gap-1">
                                            <span>{col.label}</span>
                                            <CaretDownIcon
                                                size={14}
                                                weight="bold"
                                            />
                                        </div>
                                    ) : (
                                        col.label
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-body text-sm">
                        {Array.from({ length: pageSize }).map((_, index) => {
                            const entry = data[index]
                            const isLastRow = index === pageSize - 1

                            if (entry) {
                                return (
                                    <tr
                                        key={entry.rank}
                                        className={`hover:bg-surface-bright even:bg-surface-container-low/50 h-12 border-b border-gray-200 transition-colors ${
                                            isLastRow ? "border-b-0!" : ""
                                        }`}
                                    >
                                        <td
                                            className={`border-r border-gray-200 px-4 py-2 text-center font-bold ${entry.rank <= 3 ? "text-primary" : ""}`}
                                        >
                                            {entry.rank}
                                        </td>
                                        <td
                                            className="truncate border-r border-gray-200 px-4 py-2"
                                            title={entry.model}
                                        >
                                            {entry.model}
                                        </td>
                                        <td className="border-r border-gray-200 px-4 py-3 text-center">
                                            {entry.benchmarkScore}
                                        </td>
                                        <td className="border-r border-gray-200 px-4 py-2 text-center">
                                            {entry.tokens}
                                        </td>
                                        <td className="border-r border-gray-200 px-4 py-2 text-center">
                                            {entry.contextWindow}
                                        </td>
                                        <td className="border-r border-gray-200 px-4 py-2 text-center">
                                            {entry.votes}
                                        </td>
                                        <td
                                            className={`border-gray-200 px-4 py-2 text-center ${
                                                entry.rankSpread >= 0
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {entry.rankSpread >= 0
                                                ? `+${entry.rankSpread}`
                                                : entry.rankSpread}
                                        </td>
                                    </tr>
                                )
                            }

                            return (
                                <tr
                                    key={`empty-${index}`}
                                    className={`even:bg-surface-container-low/50 h-12 border-b border-gray-200 transition-colors ${
                                        isLastRow ? "border-b-0!" : ""
                                    }`}
                                >
                                    {tableColumns.map((col, colIndex) => (
                                        <td
                                            key={`empty-${index}-${col.key}`}
                                            className={`border-r border-gray-200 px-4 py-2 ${col.highlight ? "bg-primary/5" : ""} ${colIndex === tableColumns.length - 1 ? "border-r-0!" : ""}`}
                                        >
                                            &nbsp;
                                        </td>
                                    ))}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
