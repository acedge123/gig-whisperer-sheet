import Hero from "@/components/Hero";
import Snapshot from "@/components/Snapshot";
import RecentHighlights from "@/components/RecentHighlights";
import CoreCompetencies from "@/components/CoreCompetencies";
import ClientShowcase from "@/components/ClientShowcase";
import Contact from "@/components/Contact";
import DownloadPDF from "@/components/DownloadPDF";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Snapshot />
      <RecentHighlights />
      <CoreCompetencies />
      <ClientShowcase />
      <Contact />
      <DownloadPDF />
    </main>
  );
};

export default Index;
