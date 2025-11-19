export default function Footer() {
  return (
    <footer className="relative pb-12 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} Pimlico Naturals. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#contact" className="hover:text-white">Contact</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
