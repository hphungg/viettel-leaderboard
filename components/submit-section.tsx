import { categoryOptions } from "../data/leaderboard-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CloudArrowUp } from "@phosphor-icons/react/dist/ssr"

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
                            <Select>
                                <SelectTrigger id="category" className="bg-surface-container-lowest border-surface-container-high h-[42px] focus-visible:ring-primary focus-visible:border-primary rounded-lg px-4 py-2.5 text-sm transition-all shadow-none">
                                    <SelectValue placeholder="Select a category" />
                                </SelectTrigger>
                                <SelectContent>
                                    {categoryOptions.map((option) => (
                                        <SelectItem key={option} value={option}>{option}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-on-surface-variant text-xs font-bold tracking-wider uppercase"
                                htmlFor="model-name"
                            >
                                Model Name
                            </label>
                            <Input
                                className="bg-surface-container-lowest border-surface-container-high h-[42px] focus-visible:ring-primary focus-visible:border-primary rounded-lg px-4 py-2.5 text-sm transition-all shadow-none"
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
                                <CloudArrowUp className="text-secondary mb-2" size={36} weight="regular" />
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
                        <Textarea
                            className="bg-surface-container-lowest border-surface-container-high focus-visible:ring-primary focus-visible:border-primary rounded-lg px-4 py-2.5 text-sm transition-all shadow-none resize-none"
                            id="description"
                            placeholder="Briefly describe your model architecture or evaluation setup..."
                            rows={3}
                        />
                    </div>
                    <div className="pt-2 text-center">
                        <Button
                            className="bg-primary text-on-primary hover:bg-primary/90 shadow-primary/20 w-full rounded-md px-10 h-12 text-base font-bold shadow-lg transition-all hover:scale-[1.01] active:scale-95 md:w-auto"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    )
}
