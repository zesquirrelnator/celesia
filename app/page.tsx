import { features, navigation, footerNavigation } from './landing-components/contentSections';
import Header from './landing-components/Header';
import Hero from './landing-components/Hero';
import Clients from './landing-components/Clients';
import Features from './landing-components/Features';
import Footer from './landing-components/Footer';

export default function LandingPage() {
  return (
    <div className='bg-white dark:text-white dark:bg-boxdark-2'>
      <Header navigation={navigation} />

      <main className='isolate dark:bg-boxdark-2'>
        <Hero />
        <Clients />
        <Features features={features} />
      </main>

      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}