import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24">
      {/* Gradient background with soft fruit tones */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_20%_10%,rgba(16,185,129,0.20),transparent),radial-gradient(800px_500px_at_80%_20%,rgba(147,51,234,0.15),transparent),linear-gradient(to_bottom_right,#0b1220,#0b1120)]"></div>
        <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
            Natural • Premium • Innovative
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Freeze‑Dried Fruit, Reimagined
          </h1>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            Intensely flavourful, clean-ingredient fruit snacks and ingredients. Perfect for healthy snacking, bakery, cereal and foodservice applications.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#ranges" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium shadow/50 shadow-white/10 hover:bg-emerald-50">
              Explore Ranges
            </a>
            <a href="#contact" className="inline-flex items-center rounded-xl ring-1 ring-inset ring-white/20 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10">
              Contact Sales
            </a>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-center text-white/70">
            <div>
              <div className="text-2xl font-semibold text-white">100% Fruit</div>
              <div className="text-xs">No added sugar</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">Intense</div>
              <div className="text-xs">Natural flavour</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">Versatile</div>
              <div className="text-xs">Snack • Bake • Mix</div>
            </div>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[480px] lg:h-[560px]">
          <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-emerald-300/10 via-fuchsia-300/10 to-violet-300/10 blur-3xl" />
          <div className="relative h-full overflow-hidden rounded-3xl ring-1 ring-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/myxXfbNiwnbTpGFp/scene.splinecode" />
          </div>
        </div>
      </div>
    </section>
  );
}
