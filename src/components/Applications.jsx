const uses = [
  {
    title: "Snacking",
    desc: "Crisp, clean, naturally sweet. A satisfying fruit-first snack for any moment.",
  },
  {
    title: "Baking & Pastry",
    desc: "Powders and pieces deliver colour and flavour without added moisture.",
  },
  {
    title: "Cereal & Granola",
    desc: "Vibrant inclusions that stay crunchy in milk and keep their flavour.",
  },
  {
    title: "Dairy & Beverages",
    desc: "Shake, swirl or blend. Adds real fruit taste and colour to yoghurts and drinks.",
  },
];

export default function Applications() {
  return (
    <section id="applications" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_400px_at_20%_30%,rgba(16,185,129,0.10),transparent),radial-gradient(600px_400px_at_80%_30%,rgba(139,92,246,0.10),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Applications</h2>
          <p className="mt-3 text-white/70">Versatility for consumers, retailers and professionals.</p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {uses.map((u) => (
            <div key={u.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-white font-medium">{u.title}</h3>
              <p className="mt-2 text-sm text-white/70">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
