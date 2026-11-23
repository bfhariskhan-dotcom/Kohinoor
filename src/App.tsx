import React, { useState, useEffect } from 'react';
import { PageId, Product } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { QuoteModal } from './components/QuoteModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AdminLoginModal } from './components/AdminLoginModal';
import { CursorGlow } from './components/CursorGlow';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { InteractiveLedPage } from './pages/InteractiveLedPage';
import { MultimediaProjectorsPage } from './pages/MultimediaProjectorsPage';
import { ProjectionScreensPage } from './pages/ProjectionScreensPage';
import { ProjectorMountsPage } from './pages/ProjectorMountsPage';
import { DigitalPodiumsPage } from './pages/DigitalPodiumsPage';
import { AudioEquipmentPage } from './pages/AudioEquipmentPage';
import { ConferenceSystemsPage } from './pages/ConferenceSystemsPage';
import { TelepromptersPage } from './pages/TelepromptersPage';
import { PtzCamerasPage } from './pages/PtzCamerasPage';
import { SmartClassroomPage } from './pages/SmartClassroomPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedProduct, setQuotePreselectedProduct] = useState<string | undefined>();
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home',
        'about',
        'products',
        'interactive-led-displays',
        'multimedia-projectors',
        'projection-screens',
        'projector-mounting-kits',
        'digital-podiums',
        'audio-equipment',
        'conference-systems',
        'teleprompters',
        'ptz-robotic-cameras',
        'smart-classroom-solutions',
        'projects',
        'gallery',
        'contact',
        'admin'
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
      case 'interactive-led-displays':
        return (
          <InteractiveLedPage
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
      case 'projection-screens':
        return (
          <ProjectionScreensPage
            onNavigate={handleNavigate}
            onSelectProduct={setSelectedProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'projector-mounting-kits':
        return (
          <ProjectorMountsPage
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
      case 'audio-equipment':
        return (
          <AudioEquipmentPage
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
      case 'teleprompters':
        return (
          <TelepromptersPage
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
      case 'admin':
        return (
          <AdminPage
            isAuthenticated={isAdminAuthenticated}
            onLoginSuccess={() => setIsAdminAuthenticated(true)}
            onLogout={() => {
              setIsAdminAuthenticated(false);
              handleNavigate('home');
            }}
            onNavigate={handleNavigate}
          />
        );
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
    <div className="min-h-screen flex flex-col bg-emerald-50/40 text-slate-800 selection:bg-emerald-600 selection:text-white relative">
      <CursorGlow />

      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      <main className="flex-1">{renderPage()}</main>

      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
        onOpenAdmin={() => {
          if (isAdminAuthenticated) {
            handleNavigate('admin');
          } else {
            setAdminLoginOpen(true);
          }
        }}
      />

      <WhatsAppFloatingButton />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preSelectedProduct={quotePreselectedProduct}
      />

      <AdminLoginModal
        isOpen={adminLoginOpen}
        onClose={() => setAdminLoginOpen(false)}
        onSuccess={() => {
          setIsAdminAuthenticated(true);
          setAdminLoginOpen(false);
          handleNavigate('admin');
        }}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={handleOpenQuoteModal}
      />
    </div>
  );
}
