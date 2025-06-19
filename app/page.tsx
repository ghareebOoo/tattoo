import About from "@/components/About";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Information from "@/components/Information";
import Watch from "@/components/Watch";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Counter />
      <Information />
      <Watch />
      <Contact />
      <Footer />
    </div>
  );
}
