
import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import TrustedClients from "@/components/TrustedClients";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <OurStory />
      <Services />
      <WhyChooseUs />
      <TrustedClients />
      <Contact />
    </div>
  );
};

export default Index;
