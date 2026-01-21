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
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  return (
    <>
      <Header />
      <SideContact />
      <SocialIcons />
      <main className="min-h-screen">
        <Hero />
        <AnimatedSection>
          <ValueProp />
        </AnimatedSection>
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
