import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#ranges", label: "Product Ranges" },
    { href: "#benefits", label: "Benefits" },
    { href: "#applications", label: "Applications" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#top" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 ring-1 ring-inset ring-emerald-300/40">
                <Leaf className="h-5 w-5 text-emerald-300" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-white font-semibold tracking-tight">Pimlico Naturals</div>
                <div className="text-xs text-emerald-200/80">Freeze-Dried Fruit</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map(l => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition">
                  {l.label}
                </a>
              ))}
              <a href="#contact" className="ml-2 inline-flex items-center rounded-xl bg-emerald-400/20 px-4 py-2 text-sm font-medium text-emerald-100 ring-1 ring-inset ring-emerald-300/40 hover:bg-emerald-400/30">
                Contact Sales
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-white/90 hover:bg-white/10" onClick={() => setOpen(s => !s)} aria-label="Toggle menu">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              <div className="grid gap-2">
                {links.map(l => (
                  <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-white/90 hover:bg-white/10" onClick={() => setOpen(false)}>
                    {l.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center rounded-xl bg-emerald-400/20 px-4 py-2 text-sm font-medium text-emerald-100 ring-1 ring-inset ring-emerald-300/40 hover:bg-emerald-400/30">
                  Contact Sales
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
