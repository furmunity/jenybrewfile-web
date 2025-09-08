'use client';

import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import ProductFeatures from '../components/ProductFeatures';
import ComparisonTable from '../components/ComparisonTable';
import MarketAnalysis from '../components/MarketAnalysis';
import ProcessSection from '../components/ProcessSection';
import USPSection from '../components/USPSection';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <ProductFeatures />
      <ComparisonTable />
      <MarketAnalysis />
      <ProcessSection />
      <USPSection />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}