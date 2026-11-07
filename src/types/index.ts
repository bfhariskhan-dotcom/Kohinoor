export interface Product {
  id: string;
  name: string;
  category: 'digital-podiums' | 'multimedia-projectors' | 'interactive-led-displays' | 'conference-systems' | 'ptz-robotic-cameras' | 'smart-classroom-solutions';
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

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export type PageId =
  | 'home'
  | 'about'
  | 'products'
  | 'digital-podiums'
  | 'multimedia-projectors'
  | 'interactive-led-displays'
  | 'conference-systems'
  | 'ptz-robotic-cameras'
  | 'smart-classroom-solutions'
  | 'projects'
  | 'contact';
