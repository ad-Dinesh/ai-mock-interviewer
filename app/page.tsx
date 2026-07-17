import LandingNavbar from "@/components/landing/LandingNavbar";
import Hero from "@/components/landing/Hero";
import TechStack from "@/components/landing/TechStack";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import DashboardPreview from "@/components/landing/DashboardPreview";
import FAQ from "@/components/landing/FAQ";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <LandingNavbar />
       <Hero /> 
       <TechStack />
       <Features />
       <HowItWorks />
       <FAQ />
       <CTA />
       <DashboardPreview />
      
      
      <Footer />  
    </>
  );
}