import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Benefits from "./components/Benefits.jsx";
import Ranges from "./components/Ranges.jsx";
import Applications from "./components/Applications.jsx";
import CTA from "./components/CTA.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background texture and subtle gradients */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_10%_0%,rgba(16,185,129,0.15),transparent),radial-gradient(1000px_700px_at_100%_0%,rgba(139,92,246,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_500px_at_50%_100%,rgba(255,255,255,0.04),transparent)]" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Ranges />
        <Benefits />
        <Applications />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
