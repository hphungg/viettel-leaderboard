import { leaderboardData, tableColumns } from "../data/leaderboard-data"

export default function LeaderboardTable() {
    return (
        <div className="bg-surface-container-lowest border-gray-200 overflow-hidden flex flex-col min-h-0 rounded-xl border">
            <div className="custom-scrollbar overflow-auto">
                <table className="w-full table-auto border-collapse text-left">
                    <thead>
                        <tr className="bg-surface-container-low text-on-surface-variant border-gray-200 border-b">
                            {tableColumns.map((col) => (
                                <th
                                    key={col.key}
                                    className={`font-label border-gray-200 border-r px-4 py-3 text-xs font-bold tracking-widest uppercase ${col.center ? "text-center" : ""
                                        } ${col.key === "rank" ? "w-12" : ""} ${col.key === "model" ? "min-w-[160px]" : ""} ${col.highlight
                                            ? "min-w-[80px] !border-r-0"
                                            : ""
                                        }`}
                                >
                                    {col.highlight ? (
                                        <div className="flex items-center justify-center gap-1">
                                            <span>{col.label}</span>
                                            <span className="material-symbols-outlined text-sm">
                                                expand_more
                                            </span>
                                        </div>
                                    ) : (
                                        col.label
                                    )}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="font-body text-sm">
                        {Array.from({ length: 10 }).map((_, index) => {
                            const entry = leaderboardData[index]

                            if (entry) {
                                return (
                                    <tr
                                        key={entry.rank}
                                        className={`border-gray-200 hover:bg-surface-bright even:bg-surface-container-low/50 border-b transition-colors ${index === 9
                                            ? "!border-b-0"
                                            : ""
                                            }`}
                                    >
                                        <td
                                            className={`border-gray-200 border-r px-4 py-2 text-center font-bold ${entry.rank <= 3 ? "text-primary" : ""}`}
                                        >
                                            {entry.rank}
                                        </td>
                                        <td
                                            className={`border-gray-200 border-r px-4 py-2 ${entry.rank <= 5 ? "font-bold" : ""}`}
                                        >
                                            {entry.model}
                                        </td>
                                        <td className="border-gray-200 text-secondary border-r px-4 py-2 whitespace-nowrap">
                                            {entry.provider}
                                        </td>
                                        <td className="border-gray-200 border-r px-4 py-3 text-center">
                                            {entry.benchmarkScore}
                                        </td>
                                        <td className="border-gray-200 border-r px-4 py-2 text-center">
                                            {entry.tokens}
                                        </td>
                                        <td className="border-gray-200 border-r px-4 py-2 text-center">
                                            {entry.contextWindow}
                                        </td>
                                        <td className="border-gray-200 border-r px-4 py-2 text-center">
                                            {entry.votes}
                                        </td>
                                        <td
                                            className={`border-gray-200 border-r px-4 py-2 text-center ${entry.rankSpread >= 0
                                                ? "text-green-600"
                                                : "text-red-600"
                                                }`}
                                        >
                                            {entry.rankSpread >= 0
                                                ? `+${entry.rankSpread}`
                                                : entry.rankSpread}
                                        </td>
                                        <td className="bg-primary/5 text-primary px-4 py-2 text-center font-extrabold border-gray-200">
                                            {entry.avg}
                                        </td>
                                    </tr>
                                )
                            }

                            return (
                                <tr
                                    key={`empty-${index}`}
                                    className={`border-gray-200 even:bg-surface-container-low/50 border-b h-[#41px] transition-colors ${index === 11
                                        ? "!border-b-0"
                                        : ""
                                        }`}
                                >
                                    {tableColumns.map((col, colIndex) => (
                                        <td
                                            key={`empty-${index}-${col.key}`}
                                            className={`border-gray-200 border-r px-4 py-2 ${col.highlight ? "bg-primary/5" : ""} ${colIndex === tableColumns.length - 1 ? "!border-r-0" : ""}`}
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
