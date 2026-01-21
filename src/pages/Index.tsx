import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Snapshot from "@/components/Snapshot";
import RecentHighlights from "@/components/RecentHighlights";
import CoreCompetencies from "@/components/CoreCompetencies";
import ClientShowcase from "@/components/ClientShowcase";
import Contact from "@/components/Contact";
import SideContact from "@/components/SideContact";
import SocialIcons from "@/components/SocialIcons";
import DownloadPDF from "@/components/DownloadPDF";

const Index = () => {
  return (
    <>
      <Header />
      <SideContact />
      <SocialIcons />
      <main className="min-h-screen">
        <Hero />
        <Snapshot />
        <RecentHighlights />
        <CoreCompetencies />
        <ClientShowcase />
        <Contact />
        <DownloadPDF />
      </main>
    </>
  );
};

export default Index;
