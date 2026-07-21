/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';
import FAQPage from './components/FAQPage';
import ServiceDetail from './components/ServiceDetail';
import DemoForm from './components/DemoForm';
import TermsPage from './components/TermsPage';
import RefundPage from './components/RefundPage';
import PrivacyPage from './components/PrivacyPage';
import AboutPage from './components/AboutPage';

export type ViewType = 'home' | 'faq' | 'privacy' | 'terms' | 'refund' | 'service-detail' | 'about';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);

  const handleExploreService = (id: string) => {
    setSelectedServiceId(id);
    setCurrentView('service-detail');
  };

  const openDemoForm = () => setIsDemoFormOpen(true);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  // Global listener for demo form
  useEffect(() => {
    const handleTrigger = () => setIsDemoFormOpen(true);
    window.addEventListener('triggerDemoForm', handleTrigger);
    
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button, a');
      if (button && button.textContent?.toLowerCase().includes('get free demo')) {
        // Only intercept if it's not already handled by a React click handler that calls our function
        // (though opening it twice doesn't hurt as it's just state)
        e.preventDefault();
        e.stopPropagation();
        setIsDemoFormOpen(true);
      }
    };
    window.addEventListener('click', handleGlobalClick, true); // Capture phase to intercept

    return () => {
      window.removeEventListener('triggerDemoForm', handleTrigger);
      window.removeEventListener('click', handleGlobalClick, true);
    };
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'faq':
        return <FAQPage onBack={() => setCurrentView('home')} />;
      case 'service-detail':
        return (
          <ServiceDetail 
            serviceId={selectedServiceId || 'web-dev'} 
            onBack={() => setCurrentView('home')} 
            onNavigateToPackage={() => {
              setCurrentView('home');
              setTimeout(() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }} 
            onNavigateToContact={() => {
              setCurrentView('home');
              setTimeout(() => {
                document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            onDemoRequest={openDemoForm}
          />
        );
      case 'terms':
        return <TermsPage onBack={() => setCurrentView('home')} />;
      case 'about':
        return <AboutPage onBack={() => setCurrentView('home')} onDemoRequest={openDemoForm} />;
      case 'refund':
        return <RefundPage onBack={() => setCurrentView('home')} />;
      case 'privacy':
        return <PrivacyPage onBack={() => setCurrentView('home')} />;
      default:
        return (
          <>
            <Hero onDemoRequest={openDemoForm} />
            <Services onExplore={handleExploreService} />
            <Industries />
            <Pricing onDemoRequest={openDemoForm} />
            <Portfolio />
            <Process />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#050816] font-sans selection:bg-blue-600/30 selection:text-blue-500 overflow-x-hidden">
      <Navbar setView={setCurrentView} currentView={currentView} onDemoRequest={openDemoForm} />
      <main className="relative w-full overflow-x-hidden">
        {renderView()}
      </main>
      <Footer setView={setCurrentView} />
      <ChatAssistant />
      <DemoForm isOpen={isDemoFormOpen} onClose={() => setIsDemoFormOpen(false)} />
    </div>
  );
}

