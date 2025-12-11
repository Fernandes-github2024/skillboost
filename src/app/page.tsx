import Navbar from "../components/layout/navbar/navbar";
import HeroSection from "../components/layout/herosection/herosection";
import About from "../components/layout/about/about";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
    </main>
  );
}
