import { leaderboardData, tableColumns } from "../data/leaderboard-data";

export default function LeaderboardTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm ring-1 ring-surface-container">
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full text-left border-collapse table-auto">
          <thead>
            <tr className="bg-surface-container-low text-on-surface-variant border-b border-surface-container-high">
              {tableColumns.map((col) => (
                <th
                  key={col.key}
                  className={`py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high ${
                    col.center ? "text-center" : ""
                  } ${col.key === "rank" ? "w-12" : ""} ${
                    col.key === "team" ? "min-w-[140px]" : ""
                  } ${col.key === "model" ? "min-w-[160px]" : ""} ${
                    col.highlight
                      ? "bg-primary/10 text-primary min-w-[80px] !border-r-0"
                      : ""
                  }`}
                >
                  {col.highlight ? (
                    <div className="flex items-center justify-center gap-1">
                      <span>{col.label}</span>
                      <span className="material-symbols-outlined text-sm">expand_more</span>
                    </div>
                  ) : (
                    col.label
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm font-body">
            {leaderboardData.map((entry, index) => (
              <tr
                key={entry.rank}
                className={`border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50 ${
                  index === leaderboardData.length - 1 ? "!border-b-0" : ""
                }`}
              >
                <td className={`py-2 px-4 border-r border-surface-container-high text-center font-bold ${entry.rank <= 3 ? "text-primary" : ""}`}>
                  {entry.rank}
                </td>
                <td className="py-2 px-4 border-r border-surface-container-high text-secondary">
                  {entry.team}
                </td>
                <td className={`py-2 px-4 border-r border-surface-container-high ${entry.rank <= 5 ? "font-bold" : ""}`}>
                  {entry.model}
                </td>
                <td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">
                  {entry.provider}
                </td>
                <td className="py-2 px-4 border-r border-surface-container-high text-center">
                  {entry.benchmarkScore}
                </td>
                <td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">
                  {entry.tokens}
                </td>
                <td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">
                  {entry.contextWindow}
                </td>
                <td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">
                  {entry.votes}
                </td>
                <td className={`py-2 px-4 border-r border-surface-container-high text-center text-xs ${
                  entry.rankSpread >= 0 ? "text-green-600" : "text-red-600"
                }`}>
                  {entry.rankSpread >= 0 ? `+${entry.rankSpread}` : entry.rankSpread}
                </td>
                <td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">
                  {entry.avg}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
