import { Leaf, ShieldCheck, Thermometer, Sprout } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "100% Fruit, Nothing Else",
    text: "No added sugar, colours or preservatives. Clean, simple labels consumers trust.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Quality",
    text: "Carefully selected fruit, freeze-dried to lock in natural flavour, colour and nutrition.",
  },
  {
    icon: Thermometer,
    title: "Shelf-Stable Freshness",
    text: "Crisp texture and vibrant taste with long shelf life and ambient storage.",
  },
  {
    icon: Sprout,
    title: "Sustainably Minded",
    text: "Reduced waste, efficient transport weight, and responsible sourcing.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_10%_10%,rgba(16,185,129,0.12),transparent),radial-gradient(600px_400px_at_90%_10%,rgba(139,92,246,0.10),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Benefits</h2>
          <p className="mt-3 text-white/70">Fresh fruit energy with the convenience of a light, crunchy format.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/15 ring-1 ring-inset ring-emerald-300/30">
                <Icon className="h-5 w-5 text-emerald-200" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
