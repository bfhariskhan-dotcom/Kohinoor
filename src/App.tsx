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
import { applyRouteSeo, getRoutePath } from './utils/seo';
import { PRODUCTS } from './data/products';

const VALID_PAGES: PageId[] = [
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

function resolveLocationState(): { page: PageId; product: Product | null } {
  const path = window.location.pathname.replace(/\/+$/, '');
  const hash = window.location.hash.replace('#', '');

  if (path.startsWith('/product/')) {
    const productId = path.replace('/product/', '');
    const found = PRODUCTS.find((p) => p.id === productId) || null;
    if (found) {
      return {
        page: VALID_PAGES.includes(found.category as PageId)
          ? (found.category as PageId)
          : 'products',
        product: found
      };
    }
  }

  const slug = path.replace(/^\//, '') as PageId;
  if (slug && VALID_PAGES.includes(slug)) {
    return { page: slug, product: null };
  }

  if (hash && VALID_PAGES.includes(hash as PageId)) {
    return { page: hash as PageId, product: null };
  }

  return { page: 'home', product: null };
}

export default function App() {
  const initial = resolveLocationState();
  const [currentPage, setCurrentPage] = useState<PageId>(initial.page);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(initial.product);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quotePreselectedProduct, setQuotePreselectedProduct] = useState<string | undefined>();
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  useEffect(() => {
    const syncFromLocation = () => {
      const next = resolveLocationState();
      setCurrentPage(next.page);
      setSelectedProduct(next.product);
    };

    // Normalize legacy #hash links cleanly to path URLs without reloading
    if (window.location.hash) {
      const hashPage = window.location.hash.replace('#', '') as PageId;
      if (VALID_PAGES.includes(hashPage)) {
        window.history.replaceState({}, '', getRoutePath(hashPage));
      }
    }

    window.addEventListener('popstate', syncFromLocation);
    window.addEventListener('hashchange', syncFromLocation);
    return () => {
      window.removeEventListener('popstate', syncFromLocation);
      window.removeEventListener('hashchange', syncFromLocation);
    };
  }, []);

  useEffect(() => {
    applyRouteSeo(currentPage, selectedProduct);
  }, [currentPage, selectedProduct]);

  const handleNavigate = (page: PageId) => {
    setSelectedProduct(null);
    setCurrentPage(page);
    const targetPath = getRoutePath(page);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProduct = (product: Product | null) => {
    setSelectedProduct(product);
    const targetPath = getRoutePath(currentPage, product);
    if (window.location.pathname !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }
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
            onSelectProduct={handleSelectProduct}
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
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'interactive-led-displays':
        return (
          <InteractiveLedPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'multimedia-projectors':
        return (
          <MultimediaProjectorsPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'projection-screens':
        return (
          <ProjectionScreensPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'projector-mounting-kits':
        return (
          <ProjectorMountsPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'digital-podiums':
        return (
          <DigitalPodiumsPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'audio-equipment':
        return (
          <AudioEquipmentPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'conference-systems':
        return (
          <ConferenceSystemsPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'teleprompters':
        return (
          <TelepromptersPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'ptz-robotic-cameras':
        return (
          <PtzCamerasPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        );
      case 'smart-classroom-solutions':
        return (
          <SmartClassroomPage
            onNavigate={handleNavigate}
            onSelectProduct={handleSelectProduct}
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
            onSelectProduct={handleSelectProduct}
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
        onClose={() => handleSelectProduct(null)}
        onOpenQuote={handleOpenQuoteModal}
      />
    </div>
  );
}
