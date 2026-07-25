import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Capabilities } from "./components/Capabilities";
import { Results } from "./components/Results";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Work } from "./components/Work";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground">
      <Navbar />
      <Hero />
      <Capabilities />
      <Results />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      <div className="grain" aria-hidden="true" />
    </main>
  );
}
