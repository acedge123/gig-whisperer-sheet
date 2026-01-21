import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProp from "@/components/ValueProp";
import WhatWeDo from "@/components/WhatWeDo";
import PerformanceMarketers from "@/components/PerformanceMarketers";
import HowWeDoIt from "@/components/HowWeDoIt";
import ClientShowcase from "@/components/ClientShowcase";
import Insights from "@/components/Insights";
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
        <ValueProp />
        <WhatWeDo />
        <PerformanceMarketers />
        <HowWeDoIt />
        <ClientShowcase />
        <Insights />
        <Contact />
        <DownloadPDF />
      </main>
    </>
  );
};

export default Index;
