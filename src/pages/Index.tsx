import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import PerformanceMarketers from "@/components/PerformanceMarketers";
import HowWeDoIt from "@/components/HowWeDoIt";
import ClientShowcase from "@/components/ClientShowcase";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";
import SideBar from "@/components/SideBar";
import DownloadPDF from "@/components/DownloadPDF";
import AnimatedSection from "@/components/AnimatedSection";
import Preloader from "@/components/Preloader";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <SideBar />
      <main className="min-h-screen">
        <Hero />
        <AnimatedSection delay={100}>
          <WhatWeDo />
        </AnimatedSection>
        <AnimatedSection>
          <PerformanceMarketers />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <HowWeDoIt />
        </AnimatedSection>
        <AnimatedSection>
          <ClientShowcase />
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <Insights />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
        <DownloadPDF />
      </main>
    </>
  );
};

export default Index;
