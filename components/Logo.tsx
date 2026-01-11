export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white shadow-sm">
        <span className="text-sm font-semibold">Ex</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold">Excelerate</div>
        <div className="text-xs text-gray-500">Get hired. Show your work.</div>
      </div>
    </div>
  );
}
