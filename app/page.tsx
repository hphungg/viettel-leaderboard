export default function LeaderboardPage() {
  return (
    <>
      {/* TopNavBar */}
<header className="bg-[#F9F9FB] dark:bg-slate-900 sticky top-0 z-50 transition-colors">
<div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
<div className="flex items-center gap-8">
<span className="text-2xl font-black tracking-tighter text-[#EE0033]">Viettel Codev Hub</span>
<nav className="hidden md:flex gap-6">
<a className="text-[#1A1C1D] dark:text-slate-300 font-medium hover:text-[#EE0033] hover:bg-[#F3F3F5] dark:hover:bg-slate-800 transition-all duration-200 py-1 px-2" href="#">Home</a>
<a className="text-[#1A1C1D] dark:text-slate-300 font-medium hover:text-[#EE0033] hover:bg-[#F3F3F5] dark:hover:bg-slate-800 transition-all duration-200 py-1 px-2" href="#">Download</a>
<a className="text-[#EE0033] font-bold border-b-2 border-[#EE0033] pb-1 py-1 px-2" href="#">Leaderboard</a>
<a className="text-[#1A1C1D] dark:text-slate-300 font-medium hover:text-[#EE0033] hover:bg-[#F3F3F5] dark:hover:bg-slate-800 transition-all duration-200 py-1 px-2" href="#">Submit</a>
<a className="text-[#1A1C1D] dark:text-slate-300 font-medium hover:text-[#EE0033] hover:bg-[#F3F3F5] dark:hover:bg-slate-800 transition-all duration-200 py-1 px-2" href="#">Reference</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="material-symbols-outlined text-on-surface-variant p-2 hover:bg-surface-container-low rounded-full">search</button>
<button className="bg-primary-container text-on-primary font-bold px-6 py-2 rounded-md hover:scale-[1.02] active:scale-95 transition-all">Login</button>
</div>
</div>
</header>
<main className="flex-grow max-w-screen-2xl mx-auto w-full px-8 py-12">
{/* Hero Section */}
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
{/* Table Container */}
<div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm ring-1 ring-surface-container">
<div className="overflow-x-auto custom-scrollbar">
<table className="w-full text-left border-collapse table-auto">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant border-b border-surface-container-high">
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high w-12 text-center">#</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high min-w-[140px]">Team/Creator</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high min-w-[160px]">Model Name</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high">Provider</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high text-center">Benchmark Score</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high text-center">Tokens</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high text-center">Context Window</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high text-center">Votes</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest border-r border-surface-container-high text-center">Rank Spread</th>
<th className="py-3 px-4 font-bold font-label text-[10px] uppercase tracking-widest bg-primary/10 text-primary text-center min-w-[80px]">
<div className="flex items-center justify-center gap-1">
<span>AVG</span>
<span className="material-symbols-outlined text-sm">expand_more</span>
</div>
</th>
</tr>
</thead>
<tbody className="text-sm font-body">
{/* Data Rows */}
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold text-primary">1</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">OpenAI</td>
<td className="py-2 px-4 border-r border-surface-container-high font-bold">GPT-4o (Omni)</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">OpenAI API</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">88.2</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">1.8T</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">128k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">15,240</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-green-600">+1.2</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">88.8</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">2</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Anthropic</td>
<td className="py-2 px-4 border-r border-surface-container-high font-bold">Claude 3.5 Sonnet</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">AWS/GCP</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">87.5</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">Unk</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">200k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">12,890</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-green-600">+0.8</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">88.5</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">3</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Meta</td>
<td className="py-2 px-4 border-r border-surface-container-high font-bold">Llama 3 400B</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">Hugging Face</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">85.9</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">15T</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">8k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">9,450</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-red-600">-0.4</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">86.4</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">4</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Google</td>
<td className="py-2 px-4 border-r border-surface-container-high font-bold">Gemini 1.5 Pro</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">Google Cloud</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">84.8</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">Unk</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">1M+</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">7,620</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-green-600">+1.5</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">86.0</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">5</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Viettel AI</td>
<td className="py-2 px-4 border-r border-surface-container-high font-bold">VT-Code-70B</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">Viettel Hub</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">83.2</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">2T</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">32k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">6,100</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-green-600">+2.1</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">84.5</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">6</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Mistral AI</td>
<td className="py-2 px-4 border-r border-surface-container-high">Codestral 22B</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">Mistral API</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">78.5</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">Unk</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">32k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">4,340</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-red-600">-0.2</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">80.9</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">7</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Alibaba</td>
<td className="py-2 px-4 border-r border-surface-container-high">Qwen2-Coder</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">ModelScope</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">77.9</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">7T</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">128k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">3,890</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-green-600">+0.5</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">79.1</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">8</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Microsoft</td>
<td className="py-2 px-4 border-r border-surface-container-high">Phi-3.5-MoE</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">Azure</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">75.2</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">4.8T</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">128k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">2,110</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-red-600">-1.1</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">76.9</td>
</tr>
<tr className="border-b border-surface-container-high hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">9</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">BigCode</td>
<td className="py-2 px-4 border-r border-surface-container-high">StarCoder 2</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">HF Hub</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">74.1</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">3.3T</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">16k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">1,840</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-green-600">+0.3</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">76.2</td>
</tr>
<tr className="hover:bg-surface-bright transition-colors even:bg-surface-container-low/50">
<td className="py-2 px-4 border-r border-surface-container-high text-center font-bold">10</td>
<td className="py-2 px-4 border-r border-surface-container-high text-secondary">Stability AI</td>
<td className="py-2 px-4 border-r border-surface-container-high">Stable Code</td>
<td className="py-2 px-4 border-r border-surface-container-high text-xs text-secondary whitespace-nowrap">Stability</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center">72.8</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">1.3T</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">4k</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs">950</td>
<td className="py-2 px-4 border-r border-surface-container-high text-center text-xs text-red-600">-0.8</td>
<td className="py-2 px-4 bg-primary/5 text-center font-extrabold text-primary">73.4</td>
</tr>
</tbody>
</table>
</div>
</div>
{/* Pagination */}
<div className="flex items-center justify-between mt-8 mb-16">
<span className="text-sm text-on-surface-variant font-medium">Showing 1 to 10 of 142 models</span>
<div className="flex items-center gap-2">
<button className="p-2 bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary transition-all disabled:opacity-50 rounded-full" disabled>
<span className="material-symbols-outlined">chevron_left</span>
</button>
<button className="w-10 h-10 rounded-full bg-primary-container text-on-primary font-bold shadow-md">1</button>
<button className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface font-medium hover:bg-primary-container hover:text-on-primary transition-all">2</button>
<button className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface font-medium hover:bg-primary-container hover:text-on-primary transition-all">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="w-10 h-10 rounded-full bg-surface-container-highest text-on-surface font-medium hover:bg-primary-container hover:text-on-primary transition-all">15</button>
<button className="p-2 bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary transition-all rounded-full">
<span className="material-symbols-outlined">chevron_right</span>
</button>
</div>
</div>
{/* Submit Data Section */}
<section className="border-t border-surface-container pt-12 pb-24">
<div className="max-w-3xl mx-auto text-center">
<h2 className="font-headline font-extrabold text-3xl tracking-tight text-on-surface mb-2">Submit Your Results</h2>
<p className="text-on-surface-variant mb-8">Contribute to the leaderboard by submitting your model's performance data for verification.</p>
<form className="space-y-6 bg-surface-container-low p-8 rounded-xl ring-1 ring-surface-container text-left">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="category">Choose Category</label>
<select className="bg-surface-container-lowest border-surface-container-high rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all" id="category">
<option>Code Suggestion Models</option>
<option>Logic &amp; Reasoning</option>
<option>Multi-language Coding</option>
<option>Documentation Generation</option>
</select>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="model-name">Model Name</label>
<input className="bg-surface-container-lowest border-surface-container-high rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all" id="model-name" placeholder="e.g. VT-Code-v3" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="submission-file">Upload Performance Logs (JSON/CSV)</label>
<div className="relative group">
<input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="submission-file" type="file"/>
<div className="border-2 border-dashed border-surface-container-highest rounded-lg p-8 flex flex-col items-center justify-center text-on-surface-variant group-hover:border-primary group-hover:bg-surface-bright transition-all">
<span className="material-symbols-outlined text-4xl mb-2 text-secondary">cloud_upload</span>
<p className="text-sm font-medium">Click to upload or drag and drop</p>
<p className="text-xs mt-1">Maximum file size: 10MB</p>
</div>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="description">Additional Details (Optional)</label>
<textarea className="bg-surface-container-lowest border-surface-container-high rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all" id="description" placeholder="Briefly describe your model architecture or evaluation setup..." rows="3"></textarea>
</div>
<div className="pt-2 text-center">
<button className="w-full md:w-auto bg-primary text-on-primary font-bold px-10 py-3 rounded-md hover:bg-primary/90 hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-primary/20" type="submit">Submit</button>
</div>
</form>
</div>
</section>
</main>
    </>
  );
}
