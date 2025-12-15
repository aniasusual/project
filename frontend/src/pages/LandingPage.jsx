import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/landing/Hero';
import Features from '../components/landing/Features';
import UseCases from '../components/landing/UseCases';
import InteractiveDemo from '../components/landing/InteractiveDemo';
import TechStack from '../components/landing/TechStack';
import Comparison from '../components/landing/Comparison';
import Testimonials from '../components/landing/Testimonials';
import Pricing from '../components/landing/Pricing';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';
import Navbar from '../components/landing/Navbar';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <InteractiveDemo />
      <Features />
      <UseCases />
      <TechStack />
      <Comparison />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;