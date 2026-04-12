export default function Pagination() {
  return (
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
  );
}
