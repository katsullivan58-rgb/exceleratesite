export function PricingCard({
  title,
  price,
  description,
  features,
  popular,
}: {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div
      className={
        "rounded-2xl border p-6 shadow-sm " +
        (popular ? "border-black" : "border-gray-200")
      }
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-gray-600">{description}</p>
        </div>
        {popular && (
          <span className="rounded-full bg-black px-3 py-1 text-xs text-white">
            Most popular
          </span>
        )}
      </div>

      <div className="mt-6 text-3xl font-semibold">
        {price}
        <span className="text-base font-normal text-gray-500"> USD</span>
      </div>

      <ul className="mt-6 space-y-2 text-sm text-gray-700">
        {features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="mailto:you@example.com"
        className="mt-8 block w-full rounded-xl bg-black px-4 py-3 text-center text-sm font-medium text-white hover:opacity-90"
      >
        Get started
      </a>
    </div>
  );
}
