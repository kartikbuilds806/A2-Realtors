import React from 'react';
import Hero from '../components/Hero';
import TrustSignals from '../components/TrustSignals';
import Services from '../components/Services';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CtaForm from '../components/CtaForm';

const Home = () => {
  return (
    <>
      <Hero />
      <TrustSignals />
      <Services />
      <FeaturedProperties />
      <WhyChooseUs />
      <Testimonials />
      <CtaForm />
    </>
  );
};

export default Home;
