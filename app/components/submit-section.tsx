import { categoryOptions } from "../data/leaderboard-data"

export default function SubmitSection() {
    return (
        <section className="border-surface-container border-t pt-12 pb-24">
            <div className="mx-auto max-w-3xl text-center">
                <h2 className="font-headline text-on-surface mb-2 text-3xl font-extrabold tracking-tight">
                    Submit Your Results
                </h2>
                <p className="text-on-surface-variant mb-8">
                    Contribute to the leaderboard by submitting your
                    model&apos;s performance data for verification.
                </p>
                <form className="bg-surface-container-low ring-surface-container space-y-6 rounded-xl p-8 text-left ring-1">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-on-surface-variant text-xs font-bold tracking-wider uppercase"
                                htmlFor="category"
                            >
                                Choose Category
                            </label>
                            <select
                                className="bg-surface-container-lowest border-surface-container-high focus:ring-primary focus:border-primary rounded-lg px-4 py-2.5 text-sm transition-all"
                                id="category"
                            >
                                {categoryOptions.map((option) => (
                                    <option key={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-on-surface-variant text-xs font-bold tracking-wider uppercase"
                                htmlFor="model-name"
                            >
                                Model Name
                            </label>
                            <input
                                className="bg-surface-container-lowest border-surface-container-high focus:ring-primary focus:border-primary rounded-lg px-4 py-2.5 text-sm transition-all"
                                id="model-name"
                                placeholder="e.g. VT-Code-v3"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            className="text-on-surface-variant text-xs font-bold tracking-wider uppercase"
                            htmlFor="submission-file"
                        >
                            Upload Performance Logs (JSON/CSV)
                        </label>
                        <div className="group relative">
                            <input
                                className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                                id="submission-file"
                                type="file"
                            />
                            <div className="border-surface-container-highest text-on-surface-variant group-hover:border-primary group-hover:bg-surface-bright flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-8 transition-all">
                                <span className="material-symbols-outlined text-secondary mb-2 text-4xl">
                                    cloud_upload
                                </span>
                                <p className="text-sm font-medium">
                                    Click to upload or drag and drop
                                </p>
                                <p className="mt-1 text-xs">
                                    Maximum file size: 10MB
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            className="text-on-surface-variant text-xs font-bold tracking-wider uppercase"
                            htmlFor="description"
                        >
                            Additional Details (Optional)
                        </label>
                        <textarea
                            className="bg-surface-container-lowest border-surface-container-high focus:ring-primary focus:border-primary rounded-lg px-4 py-2.5 text-sm transition-all"
                            id="description"
                            placeholder="Briefly describe your model architecture or evaluation setup..."
                            rows={3}
                        ></textarea>
                    </div>
                    <div className="pt-2 text-center">
                        <button
                            className="bg-primary text-on-primary hover:bg-primary/90 shadow-primary/20 w-full rounded-md px-10 py-3 font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-95 md:w-auto"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
