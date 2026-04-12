export default function Pagination() {
    return (
        <div className="mt-8 mb-16 flex items-center justify-between">
            <span className="text-on-surface-variant text-sm font-medium">
                Showing 1 to 10 of 142 models
            </span>
            <div className="flex items-center gap-2">
                <button
                    className="bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary rounded-full p-2 transition-all disabled:opacity-50"
                    disabled
                >
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>
                <button className="bg-primary-container text-on-primary h-10 w-10 rounded-full font-bold shadow-md">
                    1
                </button>
                <button className="bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary h-10 w-10 rounded-full font-medium transition-all">
                    2
                </button>
                <button className="bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary h-10 w-10 rounded-full font-medium transition-all">
                    3
                </button>
                <span className="text-on-surface-variant px-2">...</span>
                <button className="bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary h-10 w-10 rounded-full font-medium transition-all">
                    15
                </button>
                <button className="bg-surface-container-highest text-on-surface hover:bg-primary-container hover:text-on-primary rounded-full p-2 transition-all">
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
    )
}
