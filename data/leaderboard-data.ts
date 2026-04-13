export interface LeaderboardEntry {
    rank: number
    model: string
    benchmarkScore: number
    tokens: string
    contextWindow: string
    votes: string
    rankSpread: number
}

export const tabs = [
    { id: "nl2pp", label: "NL2PP" },
    { id: "code-suggestion-on-client", label: "Code Suggestion on Client" },
    { id: "auto-complete-on-server", label: "Auto Complete on Server" },
]

const nl2ppData: LeaderboardEntry[] = [
    { rank: 1, model: "GPT-4o (Omni)", benchmarkScore: 88.2, tokens: "1.8T", contextWindow: "128k", votes: "15,240", rankSpread: 1.2 },
    { rank: 2, model: "Claude 3.5 Sonnet", benchmarkScore: 87.5, tokens: "Unk", contextWindow: "200k", votes: "12,890", rankSpread: 0.8 },
    { rank: 3, model: "Llama 3 400B", benchmarkScore: 85.9, tokens: "15T", contextWindow: "8k", votes: "9,450", rankSpread: -0.4 },
    { rank: 4, model: "Gemini 1.5 Pro", benchmarkScore: 84.8, tokens: "Unk", contextWindow: "1M+", votes: "7,620", rankSpread: 1.5 },
    { rank: 5, model: "VT-Code-70B", benchmarkScore: 83.2, tokens: "2T", contextWindow: "32k", votes: "6,100", rankSpread: 2.1 },
    { rank: 6, model: "Codestral 22B", benchmarkScore: 78.5, tokens: "Unk", contextWindow: "32k", votes: "4,340", rankSpread: -0.2 },
    { rank: 7, model: "Qwen2-Coder", benchmarkScore: 77.9, tokens: "7T", contextWindow: "128k", votes: "3,890", rankSpread: 0.5 },
    { rank: 8, model: "Phi-3.5-MoE", benchmarkScore: 75.2, tokens: "4.8T", contextWindow: "128k", votes: "2,110", rankSpread: -1.1 },
    { rank: 9, model: "StarCoder 2", benchmarkScore: 74.1, tokens: "3.3T", contextWindow: "16k", votes: "1,840", rankSpread: 0.3 },
    { rank: 10, model: "Stable Code", benchmarkScore: 72.8, tokens: "1.3T", contextWindow: "4k", votes: "950", rankSpread: -0.8 },
]

const codeSuggestionData: LeaderboardEntry[] = [
    { rank: 1, model: "Codestral 22B", benchmarkScore: 92.1, tokens: "Unk", contextWindow: "32k", votes: "18,200", rankSpread: 2.5 },
    { rank: 2, model: "Copilot Model", benchmarkScore: 90.5, tokens: "Unk", contextWindow: "8k", votes: "85,000", rankSpread: 0.1 },
    { rank: 3, model: "GPT-4o (Omni)", benchmarkScore: 88.0, tokens: "1.8T", contextWindow: "128k", votes: "14,500", rankSpread: -1.2 },
    { rank: 4, model: "Claude 3.5 Sonnet", benchmarkScore: 86.5, tokens: "Unk", contextWindow: "200k", votes: "11,200", rankSpread: 0.4 },
    { rank: 5, model: "Llama 3 400B", benchmarkScore: 82.3, tokens: "15T", contextWindow: "8k", votes: "8,900", rankSpread: -0.5 },
    { rank: 6, model: "Qwen2-Coder", benchmarkScore: 80.1, tokens: "7T", contextWindow: "128k", votes: "4,500", rankSpread: 1.2 },
]

const autoCompleteData: LeaderboardEntry[] = [
    { rank: 1, model: "DeepSeek Coder V2", benchmarkScore: 95.8, tokens: "2T", contextWindow: "128k", votes: "12,100", rankSpread: 3.2 },
    { rank: 2, model: "StarCoder 2", benchmarkScore: 91.2, tokens: "3.3T", contextWindow: "16k", votes: "9,800", rankSpread: 1.5 },
    { rank: 3, model: "Phind-CodeLlama", benchmarkScore: 88.9, tokens: "Unk", contextWindow: "32k", votes: "6,500", rankSpread: -0.8 },
    { rank: 4, model: "VT-Code-70B", benchmarkScore: 87.5, tokens: "2T", contextWindow: "32k", votes: "5,400", rankSpread: 0.5 },
    { rank: 5, model: "Magicoder-S", benchmarkScore: 84.1, tokens: "Unk", contextWindow: "16k", votes: "3,200", rankSpread: -1.5 },
    { rank: 6, model: "WizardCoder", benchmarkScore: 82.5, tokens: "Unk", contextWindow: "8k", votes: "2,800", rankSpread: -0.2 },
    { rank: 7, model: "CodeGemma", benchmarkScore: 80.2, tokens: "500B", contextWindow: "8k", votes: "2,100", rankSpread: 0.4 },
    { rank: 8, model: "CodeLlama 70B", benchmarkScore: 78.5, tokens: "500B", contextWindow: "100k", votes: "4,300", rankSpread: -1.0 },
]

export const leaderboardData: Record<string, LeaderboardEntry[]> = {
    "nl2pp": nl2ppData,
    "code-suggestion-on-client": codeSuggestionData,
    "auto-complete-on-server": autoCompleteData,
}

export const categoryOptions = [
    "Code Suggestion Models",
    "Logic & Reasoning",
    "Multi-language Coding",
    "Documentation Generation",
]

export const tableColumns = [
    { key: "rank", label: "rank", center: true },
    { key: "model", label: "Model Name" },
    { key: "benchmarkScore", label: "Benchmark Score", center: true },
    { key: "tokens", label: "Tokens", center: true },
    { key: "contextWindow", label: "Context Window", center: true },
    { key: "votes", label: "Votes", center: true },
    { key: "rankSpread", label: "Rank Spread", center: true },
]
