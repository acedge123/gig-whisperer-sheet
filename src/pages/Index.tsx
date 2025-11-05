import Hero from "@/components/Hero";
import Snapshot from "@/components/Snapshot";
import RecentHighlights from "@/components/RecentHighlights";
import CoreCompetencies from "@/components/CoreCompetencies";
import ClientShowcase from "@/components/ClientShowcase";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Snapshot />
      <RecentHighlights />
      <CoreCompetencies />
      <ClientShowcase />
      <Contact />
    </main>
  );
};

export default Index;
