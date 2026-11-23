export type ProductCategoryId =
  | 'interactive-led-displays'
  | 'multimedia-projectors'
  | 'projection-screens'
  | 'projector-mounting-kits'
  | 'digital-podiums'
  | 'audio-equipment'
  | 'conference-systems'
  | 'teleprompters'
  | 'ptz-robotic-cameras'
  | 'smart-classroom-solutions';

export interface Product {
  id: string;
  name: string;
  category: ProductCategoryId;
  categoryLabel: string;
  tagline: string;
  description: string;
  image: string;
  fallbackImage: string;
  gallery?: string[];
  keyFeatures: string[];
  specs: Record<string, string>;
  applications: string[];
  modelNumber?: string;
  brand?: string;
  availableSizes?: string[];
  subType?: string;
  stockStatus?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  location: string;
  category: string;
  image: string;
  description: string;
  equipmentSupplied: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'podiums' | 'smart-classrooms' | 'conference' | 'auditorium' | 'led-displays';
  categoryLabel: string;
  image: string;
  location: string;
  clientType: string;
  description: string;
  equipmentDeployed: string[];
  highlightBadge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BusinessPartner {
  id: string;
  name: string;
  origin: string;
  specialty: string;
  shortCode: string;
}

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'gallery'
  | 'interactive-led-displays'
  | 'multimedia-projectors'
  | 'projection-screens'
  | 'projector-mounting-kits'
  | 'digital-podiums'
  | 'audio-equipment'
  | 'conference-systems'
  | 'teleprompters'
  | 'ptz-robotic-cameras'
  | 'smart-classroom-solutions'
  | 'projects'
  | 'contact'
  | 'admin';
