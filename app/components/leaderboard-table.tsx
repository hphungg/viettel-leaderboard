import { leaderboardData, tableColumns } from "../data/leaderboard-data"

export default function LeaderboardTable() {
    return (
        <div className="bg-surface-container-lowest ring-surface-container overflow-hidden rounded-xl shadow-sm ring-1">
            <div className="custom-scrollbar overflow-x-auto">
                <table className="w-full table-auto border-collapse text-left">
                    <thead>
                        <tr className="bg-surface-container-low text-on-surface-variant border-surface-container-high border-b">
                            {tableColumns.map((col) => (
                                <th
                                    key={col.key}
                                    className={`font-label border-surface-container-high border-r px-4 py-3 text-[10px] font-bold tracking-widest uppercase ${
                                        col.center ? "text-center" : ""
                                    } ${col.key === "rank" ? "w-12" : ""} ${
                                        col.key === "team"
                                            ? "min-w-[140px]"
                                            : ""
                                    } ${col.key === "model" ? "min-w-[160px]" : ""} ${
                                        col.highlight
                                            ? "bg-primary/10 text-primary min-w-[80px] !border-r-0"
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
                        {leaderboardData.map((entry, index) => (
                            <tr
                                key={entry.rank}
                                className={`border-surface-container-high hover:bg-surface-bright even:bg-surface-container-low/50 border-b transition-colors ${
                                    index === leaderboardData.length - 1
                                        ? "!border-b-0"
                                        : ""
                                }`}
                            >
                                <td
                                    className={`border-surface-container-high border-r px-4 py-2 text-center font-bold ${entry.rank <= 3 ? "text-primary" : ""}`}
                                >
                                    {entry.rank}
                                </td>
                                <td className="border-surface-container-high text-secondary border-r px-4 py-2">
                                    {entry.team}
                                </td>
                                <td
                                    className={`border-surface-container-high border-r px-4 py-2 ${entry.rank <= 5 ? "font-bold" : ""}`}
                                >
                                    {entry.model}
                                </td>
                                <td className="border-surface-container-high text-secondary border-r px-4 py-2 text-xs whitespace-nowrap">
                                    {entry.provider}
                                </td>
                                <td className="border-surface-container-high border-r px-4 py-2 text-center">
                                    {entry.benchmarkScore}
                                </td>
                                <td className="border-surface-container-high border-r px-4 py-2 text-center text-xs">
                                    {entry.tokens}
                                </td>
                                <td className="border-surface-container-high border-r px-4 py-2 text-center text-xs">
                                    {entry.contextWindow}
                                </td>
                                <td className="border-surface-container-high border-r px-4 py-2 text-center text-xs">
                                    {entry.votes}
                                </td>
                                <td
                                    className={`border-surface-container-high border-r px-4 py-2 text-center text-xs ${
                                        entry.rankSpread >= 0
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {entry.rankSpread >= 0
                                        ? `+${entry.rankSpread}`
                                        : entry.rankSpread}
                                </td>
                                <td className="bg-primary/5 text-primary px-4 py-2 text-center font-extrabold">
                                    {entry.avg}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
