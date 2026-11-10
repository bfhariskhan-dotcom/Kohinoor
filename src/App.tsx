import React, { useState, useEffect } from 'react';
import { PageId, Product } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CursorGlow } from './components/CursorGlow';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { DigitalPodiumsPage } from './pages/DigitalPodiumsPage';
import { MultimediaProjectorsPage } from './pages/MultimediaProjectorsPage';
import { InteractiveLedPage } from './pages/InteractiveLedPage';
import { ConferenceSystemsPage } from './pages/ConferenceSystemsPage';
import { PtzCamerasPage } from './pages/PtzCamerasPage';
import { SmartClassroomPage } from './pages/SmartClassroomPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedProduct, setQuotePreselectedProduct] = useState<string | undefined>();

  // Synchronize with URL hash for bookmarking & browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'products',
        'digital-podiums',
        'multimedia-projectors',
        'interactive-led-displays',
        'conference-systems',
        'ptz-robotic-cameras',
        'smart-classroom-solutions',
        'projects',
        'gallery',
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteModal = (productName?: string) => {
    setQuotePreselectedProduct(productName);
    setQuoteModalOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'about':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'products':
        return (
          <ProductsPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'digital-podiums':
        return (
          <DigitalPodiumsPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'multimedia-projectors':
        return (
          <MultimediaProjectorsPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'interactive-led-displays':
        return (
          <InteractiveLedPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'conference-systems':
        return (
          <ConferenceSystemsPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'ptz-robotic-cameras':
        return (
          <PtzCamerasPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'smart-classroom-solutions':
        return (
          <SmartClassroomPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'gallery':
        return (
          <GalleryPage
            onNavigate={handleNavigate}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-emerald-700 selection:text-white relative">
      {/* Subtle Ambient Cursor Glow Effect */}
      <CursorGlow />

      {/* Top Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Main Page Body */}
      <main className="flex-1">{renderPage()}</main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />

      {/* Quotation Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preSelectedProduct={quotePreselectedProduct}
      />

      {/* Deep Specification Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={handleOpenQuoteModal}
      />
    </div>
  );
}
