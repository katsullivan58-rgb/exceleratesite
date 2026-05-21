import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/Logo1.png"
        alt="Excelerate logo"
        width={80}
        height={80}
        className="rounded-lg"
      />

      <div className="leading-tight">
        <div className="text-sm font-semibold">Excelerate</div>
        <div className="text-xs text-gray-500">
          Less template. More you.
        </div>
      </div>
    </div>
  );
}

