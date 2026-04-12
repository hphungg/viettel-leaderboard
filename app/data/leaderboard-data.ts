export interface LeaderboardEntry {
    rank: number
    team: string
    model: string
    provider: string
    benchmarkScore: number
    tokens: string
    contextWindow: string
    votes: string
    rankSpread: number
    avg: number
}

export const leaderboardData: LeaderboardEntry[] = [
    {
        rank: 1,
        team: "OpenAI",
        model: "GPT-4o (Omni)",
        provider: "OpenAI API",
        benchmarkScore: 88.2,
        tokens: "1.8T",
        contextWindow: "128k",
        votes: "15,240",
        rankSpread: 1.2,
        avg: 88.8,
    },
    {
        rank: 2,
        team: "Anthropic",
        model: "Claude 3.5 Sonnet",
        provider: "AWS/GCP",
        benchmarkScore: 87.5,
        tokens: "Unk",
        contextWindow: "200k",
        votes: "12,890",
        rankSpread: 0.8,
        avg: 88.5,
    },
    {
        rank: 3,
        team: "Meta",
        model: "Llama 3 400B",
        provider: "Hugging Face",
        benchmarkScore: 85.9,
        tokens: "15T",
        contextWindow: "8k",
        votes: "9,450",
        rankSpread: -0.4,
        avg: 86.4,
    },
    {
        rank: 4,
        team: "Google",
        model: "Gemini 1.5 Pro",
        provider: "Google Cloud",
        benchmarkScore: 84.8,
        tokens: "Unk",
        contextWindow: "1M+",
        votes: "7,620",
        rankSpread: 1.5,
        avg: 86.0,
    },
    {
        rank: 5,
        team: "Viettel AI",
        model: "VT-Code-70B",
        provider: "Viettel Hub",
        benchmarkScore: 83.2,
        tokens: "2T",
        contextWindow: "32k",
        votes: "6,100",
        rankSpread: 2.1,
        avg: 84.5,
    },
    {
        rank: 6,
        team: "Mistral AI",
        model: "Codestral 22B",
        provider: "Mistral API",
        benchmarkScore: 78.5,
        tokens: "Unk",
        contextWindow: "32k",
        votes: "4,340",
        rankSpread: -0.2,
        avg: 80.9,
    },
    {
        rank: 7,
        team: "Alibaba",
        model: "Qwen2-Coder",
        provider: "ModelScope",
        benchmarkScore: 77.9,
        tokens: "7T",
        contextWindow: "128k",
        votes: "3,890",
        rankSpread: 0.5,
        avg: 79.1,
    },
    {
        rank: 8,
        team: "Microsoft",
        model: "Phi-3.5-MoE",
        provider: "Azure",
        benchmarkScore: 75.2,
        tokens: "4.8T",
        contextWindow: "128k",
        votes: "2,110",
        rankSpread: -1.1,
        avg: 76.9,
    },
    {
        rank: 9,
        team: "BigCode",
        model: "StarCoder 2",
        provider: "HF Hub",
        benchmarkScore: 74.1,
        tokens: "3.3T",
        contextWindow: "16k",
        votes: "1,840",
        rankSpread: 0.3,
        avg: 76.2,
    },
    {
        rank: 10,
        team: "Stability AI",
        model: "Stable Code",
        provider: "Stability",
        benchmarkScore: 72.8,
        tokens: "1.3T",
        contextWindow: "4k",
        votes: "950",
        rankSpread: -0.8,
        avg: 73.4,
    },
]

export const categoryOptions = [
    "Code Suggestion Models",
    "Logic & Reasoning",
    "Multi-language Coding",
    "Documentation Generation",
]

export const tableColumns = [
    { key: "rank", label: "#", center: true },
    { key: "team", label: "Team/Creator" },
    { key: "model", label: "Model Name" },
    { key: "provider", label: "Provider" },
    { key: "benchmarkScore", label: "Benchmark Score", center: true },
    { key: "tokens", label: "Tokens", center: true },
    { key: "contextWindow", label: "Context Window", center: true },
    { key: "votes", label: "Votes", center: true },
    { key: "rankSpread", label: "Rank Spread", center: true },
    { key: "avg", label: "AVG", center: true, highlight: true },
]
