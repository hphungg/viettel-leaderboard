import { categoryOptions } from "../data/leaderboard-data";

export default function SubmitSection() {
  return (
    <section className="border-t border-surface-container pt-12 pb-24">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-headline font-extrabold text-3xl tracking-tight text-on-surface mb-2">Submit Your Results</h2>
        <p className="text-on-surface-variant mb-8">Contribute to the leaderboard by submitting your model&apos;s performance data for verification.</p>
        <form className="space-y-6 bg-surface-container-low p-8 rounded-xl ring-1 ring-surface-container text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="category">Choose Category</label>
              <select className="bg-surface-container-lowest border-surface-container-high rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all" id="category">
                {categoryOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="model-name">Model Name</label>
              <input className="bg-surface-container-lowest border-surface-container-high rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all" id="model-name" placeholder="e.g. VT-Code-v3" type="text" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="submission-file">Upload Performance Logs (JSON/CSV)</label>
            <div className="relative group">
              <input className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" id="submission-file" type="file" />
              <div className="border-2 border-dashed border-surface-container-highest rounded-lg p-8 flex flex-col items-center justify-center text-on-surface-variant group-hover:border-primary group-hover:bg-surface-bright transition-all">
                <span className="material-symbols-outlined text-4xl mb-2 text-secondary">cloud_upload</span>
                <p className="text-sm font-medium">Click to upload or drag and drop</p>
                <p className="text-xs mt-1">Maximum file size: 10MB</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant" htmlFor="description">Additional Details (Optional)</label>
            <textarea className="bg-surface-container-lowest border-surface-container-high rounded-lg px-4 py-2.5 text-sm focus:ring-primary focus:border-primary transition-all" id="description" placeholder="Briefly describe your model architecture or evaluation setup..." rows={3}></textarea>
          </div>
          <div className="pt-2 text-center">
            <button className="w-full md:w-auto bg-primary text-on-primary font-bold px-10 py-3 rounded-md hover:bg-primary/90 hover:scale-[1.01] active:scale-95 transition-all shadow-lg shadow-primary/20" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}
