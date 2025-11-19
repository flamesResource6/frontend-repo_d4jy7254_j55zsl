export default function CTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(700px_500px_at_50%_0%,rgba(16,185,129,0.10),transparent)]" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">Let’s talk</h2>
          <p className="mt-3 text-white/70">For pricing, samples or wholesale, leave your details and our team will reach out.</p>
          <form className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <input required placeholder="Name" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" />
            <input required type="email" placeholder="Email" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" />
            <input placeholder="Company (optional)" className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" />
            <textarea rows="3" placeholder="What are you looking for?" className="sm:col-span-3 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-emerald-300/40" />
            <button type="submit" className="sm:col-span-3 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-slate-900 hover:bg-emerald-50">
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
