import React, { useState } from 'react';
import { PageId } from '../types';
import { CATEGORIES, BUSINESS_INFO } from '../data/products';
import { GALLERY_ITEMS } from '../data/gallery';
import { verifyAdminCredentials } from '../utils/sha256';
import {
  LayoutGrid,
  Sliders,
  Images,
  FolderKanban,
  FileText,
  Briefcase,
  LogOut,
  ArrowLeft,
  Save,
  Plus,
  Trash2,
  Upload,
  Lock,
  Mail,
  Eye,
  EyeOff
} from 'lucide-react';

interface AdminPageProps {
  isAuthenticated: boolean;
  onLoginSuccess: () => void;
  onLogout: () => void;
  onNavigate: (page: PageId) => void;
}

type AdminTab = 'banners' | 'home-content' | 'gallery' | 'categories' | 'about' | 'projects';

const DUMMY_SLIDES = [
  { id: 1, title: '4K Interactive LED Displays (55" – 110")', subtitle: '20-point multi-touch panels with Dual OS', image: '/images/products/product_6.jpg' },
  { id: 2, title: 'Casio & Mitsubishi Multimedia Projectors', subtitle: 'Mitsubishi 8000 Series & Casio XJ-S400UN', image: '/images/real-stock/mitsubishi-ud8900u.jpg' },
  { id: 3, title: 'Black & White Digital Podiums', subtitle: 'Dual gooseneck & 2 wireless mics, 60W audio output', image: '/images/client-uploads/upload_3.jpg' },
  { id: 4, title: 'Tenveo TEVO-VA3000E Video Conferencing', subtitle: '10X Lossless Zoom PTZ + 2 expansion mics', image: '/images/real-stock/tenveo-va3000e.jpg' },
  { id: 5, title: 'Stage & Floor Teleprompters (TP27–TP100)', subtitle: '27" to 100" Full HD stage monitor prompters', image: '/images/products/product_2.jpg' }
];

export const AdminPage: React.FC<AdminPageProps> = ({
  isAuthenticated,
  onLoginSuccess,
  onLogout,
  onNavigate
}) => {
  const [activeTab, setActiveTab] = useState<AdminTab>('banners');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState('');
  const [notice, setNotice] = useState<string | null>(null);

  const showDummyNotice = (msg: string) => {
    setNotice(msg);
    setTimeout(() => setNotice(null), 2200);
  };

  if (!isAuthenticated) {
    const handleGateSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (verifyAdminCredentials(email, password)) {
        setAuthError('');
        setEmail('');
        setPassword('');
        onLoginSuccess();
      } else {
        setAuthError('Invalid email or password.');
      }
    };

    return (
      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
          <div className="bg-emerald-800 px-6 py-5 text-white">
            <h1 className="text-lg font-extrabold">Admin Sign In</h1>
            <p className="text-xs text-emerald-100/80">Kohinoor Audio Visual Content Panel</p>
          </div>
          <form onSubmit={handleGateSubmit} className="p-6 space-y-4">
            {authError && (
              <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                {authError}
              </div>
            )}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  autoComplete="off"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter admin email"
                  className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 block">Password</label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-10 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  const tabs: { id: AdminTab; label: string; icon: React.ElementType }[] = [
    { id: 'banners', label: 'Hero Banners & Slides', icon: Sliders },
    { id: 'home-content', label: 'Home Sections Content', icon: LayoutGrid },
    { id: 'gallery', label: 'Installation Gallery', icon: Images },
    { id: 'categories', label: 'Product Categories', icon: FolderKanban },
    { id: 'about', label: 'About Us & Contact', icon: FileText },
    { id: 'projects', label: 'Projects & Partners', icon: Briefcase }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-6">
      {/* Top Admin Header */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
        <div>
          <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
            Website Management
          </span>
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Kohinoor AV — Admin Panel
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="cursor-pointer px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl inline-flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Site</span>
          </button>
          <button
            type="button"
            onClick={onLogout}
            className="cursor-pointer px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold rounded-xl inline-flex items-center gap-1.5"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {notice && (
        <div className="bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs font-semibold shadow-sm">
          {notice}
        </div>
      )}

      {/* Main Workspace Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sidebar Navigation */}
        <aside className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 p-3 space-y-1 shadow-xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-colors cursor-pointer text-left ${
                  active
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-700 hover:bg-emerald-50 hover:text-emerald-800'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </aside>

        {/* Active Panel Content */}
        <div className="lg:col-span-9 bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs space-y-5">
          {/* 1. Hero Banners & Slides */}
          {activeTab === 'banners' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-base font-extrabold text-slate-900">Hero Banners &amp; Slide Manager</h2>
                  <p className="text-xs text-slate-500">Edit homepage slider headings, subtitles, and banner photos.</p>
                </div>
                <button
                  type="button"
                  onClick={() => showDummyNotice('New banner slot ready.')}
                  className="cursor-pointer px-3 py-1.5 bg-emerald-700 text-white text-xs font-bold rounded-lg inline-flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Slide</span>
                </button>
              </div>

              <div className="space-y-3">
                {DUMMY_SLIDES.map((slide) => (
                  <div
                    key={slide.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50/70 grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
                  >
                    <div className="sm:col-span-2 h-16 bg-white rounded-lg border border-slate-200 p-1 flex items-center justify-center">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="sm:col-span-7 space-y-1.5">
                      <input
                        type="text"
                        defaultValue={slide.title}
                        className="w-full px-2.5 py-1.5 text-xs font-bold text-slate-900 bg-white border border-slate-200 rounded-lg"
                      />
                      <input
                        type="text"
                        defaultValue={slide.subtitle}
                        className="w-full px-2.5 py-1.5 text-xs text-slate-600 bg-white border border-slate-200 rounded-lg"
                      />
                    </div>
                    <div className="sm:col-span-3 flex sm:flex-col gap-1.5">
                      <button
                        type="button"
                        onClick={() => showDummyNotice(`Slide #${slide.id} updated.`)}
                        className="flex-1 cursor-pointer px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold rounded-lg inline-flex items-center justify-center gap-1"
                      >
                        <Save className="w-3 h-3" />
                        <span>Update</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => showDummyNotice('Image selector opened.')}
                        className="flex-1 cursor-pointer px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-[11px] font-semibold rounded-lg inline-flex items-center justify-center gap-1"
                      >
                        <Upload className="w-3 h-3" />
                        <span>Photo</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Home Sections Content */}
          {activeTab === 'home-content' && (
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-extrabold text-slate-900">Home Sections &amp; Highlights</h2>
                <p className="text-xs text-slate-500">Manage text blocks shown below the main banner slider.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Experience Heading</label>
                  <input
                    type="text"
                    defaultValue="Established 1978 · 500+ Institutional Projects"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Top Marquee Ribbon</label>
                  <input
                    type="text"
                    defaultValue="Interactive LEDs · Mitsubishi & Casio Projectors · Tenveo VA3000E"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                  />
                </div>
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-bold text-slate-700 block">Featured Lineup Heading</label>
                  <input
                    type="text"
                    defaultValue="Featured Equipment Lineup"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => showDummyNotice('Home section content saved.')}
                className="cursor-pointer px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Content</span>
              </button>
            </div>
          )}

          {/* 3. Installation Gallery */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h2 className="text-base font-extrabold text-slate-900">Installation Gallery</h2>
                  <p className="text-xs text-slate-500">Manage gallery photos, titles, and project cities.</p>
                </div>
                <button
                  type="button"
                  onClick={() => showDummyNotice('Gallery upload box ready.')}
                  className="cursor-pointer px-3 py-1.5 bg-emerald-700 text-white text-xs font-bold rounded-lg inline-flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Photo</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {GALLERY_ITEMS.slice(0, 6).map((item) => (
                  <div key={item.id} className="rounded-xl border border-slate-200 p-2.5 space-y-2 bg-slate-50/60">
                    <div className="h-28 bg-white rounded-lg border border-slate-200 p-1.5 flex items-center justify-center">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <input
                      type="text"
                      defaultValue={item.title}
                      className="w-full px-2 py-1 text-xs font-bold bg-white border border-slate-200 rounded-lg"
                    />
                    <div className="flex items-center justify-between gap-1.5">
                      <input
                        type="text"
                        defaultValue={item.location}
                        className="w-full px-2 py-1 text-[11px] bg-white border border-slate-200 rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => showDummyNotice('Photo removed.')}
                        className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. Product Categories */}
          {activeTab === 'categories' && (
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-extrabold text-slate-900">Product Categories &amp; Order</h2>
                <p className="text-xs text-slate-500">Manage category sequence, headings, and short descriptions.</p>
              </div>

              <div className="space-y-2.5">
                {CATEGORIES.map((cat, idx) => (
                  <div
                    key={cat.id}
                    className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <span className="w-7 h-7 rounded-lg bg-emerald-700 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div className="flex-1 space-y-1">
                        <input
                          type="text"
                          defaultValue={cat.name}
                          className="w-full px-2.5 py-1 text-xs font-bold bg-white border border-slate-200 rounded-lg"
                        />
                        <input
                          type="text"
                          defaultValue={cat.description}
                          className="w-full px-2.5 py-1 text-[11px] text-slate-600 bg-white border border-slate-200 rounded-lg"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => showDummyNotice(`${cat.name} updated.`)}
                      className="cursor-pointer px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] font-bold rounded-lg shrink-0"
                    >
                      Save
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. About Us & Company Info */}
          {activeTab === 'about' && (
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-extrabold text-slate-900">About Us &amp; Office Details</h2>
                <p className="text-xs text-slate-500">Update corporate profile text, office address, and contact lines.</p>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">About Section Headline</label>
                  <input
                    type="text"
                    defaultValue="Audio Visual Equipment, Educational & Business Systems"
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Company Overview</label>
                  <textarea
                    rows={3}
                    defaultValue="Founded in 1978 and headquartered at United Plaza, Blue Area, Islamabad, Kohinoor Audio Visual provides professional audio-visual solutions for educational institutions and businesses across Pakistan."
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Phone / WhatsApp</label>
                    <input
                      type="text"
                      defaultValue={BUSINESS_INFO.phone}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700 block">Public Contact Email</label>
                    <input
                      type="email"
                      defaultValue={BUSINESS_INFO.email}
                      className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700 block">Head Office Address</label>
                  <input
                    type="text"
                    defaultValue={BUSINESS_INFO.address}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => showDummyNotice('Company info saved.')}
                className="cursor-pointer px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Save Details</span>
              </button>
            </div>
          )}

          {/* 6. Client Projects & Partners */}
          {activeTab === 'projects' && (
            <div className="space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-base font-extrabold text-slate-900">Client Projects &amp; Business Partners</h2>
                <p className="text-xs text-slate-500">Manage featured project showcases and partner brand entries.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { title: 'Council Conference Chamber', client: 'Government Assembly · Islamabad' },
                  { title: 'University Lecture Hall Rostrum', client: 'Higher Education · Rawalpindi' },
                  { title: 'National AI Research Center (NCAI)', client: 'NUST Sector H-12 · Islamabad' },
                  { title: 'Auditorium Podium & Stage Sound', client: 'Convocation Hall · Lahore' }
                ].map((proj, i) => (
                  <div key={i} className="p-3 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                    <input
                      type="text"
                      defaultValue={proj.title}
                      className="w-full px-2.5 py-1 text-xs font-bold bg-white border border-slate-200 rounded-lg"
                    />
                    <input
                      type="text"
                      defaultValue={proj.client}
                      className="w-full px-2.5 py-1 text-[11px] text-slate-600 bg-white border border-slate-200 rounded-lg"
                    />
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => showDummyNotice('Projects list updated.')}
                className="cursor-pointer px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl inline-flex items-center gap-1.5"
              >
                <Save className="w-3.5 h-3.5" />
                <span>Update Projects</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
