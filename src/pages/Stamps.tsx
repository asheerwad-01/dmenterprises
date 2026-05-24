import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/constants';
import { CheckCircle2, Package, History, Stamp, ArrowRight, ChevronDown, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Stamps() {
  const location = useLocation();
  const [selectedType, setSelectedType] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Popular');
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    if (location.state && (location.state as any).selectedCategory) {
      setSelectedType((location.state as any).selectedCategory);
    }
  }, [location.state]);

  const stampCategories = [
    { title: 'Self Inking Stamps', subtitle: 'Fast & Convenient', image: 'https://www.thestampmaker.com/Images/products/TRODAT_PRINTY_4910.jpg.ashx?width=600&height=600&quality=90&format=webp&scale=canvas' },
    { title: 'Pre Inked Stamps', subtitle: 'Ready to Use', image: 'https://5.imimg.com/data5/SELLER/Default/2021/10/LO/CW/DN/35413928/trodat-flashy-red-pic-2--500x500.jpg' },
    { title: 'Pocket Stamps', subtitle: 'Compact & Portable', image: 'https://www.colop.com/media/catalog/product/cache/c42398b6d2e2aaadd2e3dde4cdef77a9/1/4/148591_detail1___colop-pocket-stamp-30-green-line_1.webp' },
    { title: 'Date & Number Stamps', subtitle: 'For Office Use', image: 'https://images.meesho.com/images/products/380804139/96rlg_512.webp?width=512' },
  ];

  const stamps = PRODUCTS.filter(p => {
    const isStamp = p.category.toLowerCase().includes('stamp');
    if (!isStamp) return false;

    // Filter by category selection
    let matchesCategory = true;
    if (selectedType !== 'All' && selectedType !== 'Rubber Stamps') {
      const typeLower = selectedType.toLowerCase();
      const prodCatLower = p.category.toLowerCase();
      const prodTitleLower = p.title.toLowerCase();

      if (typeLower.includes('self')) {
        matchesCategory = prodCatLower.includes('self') || prodTitleLower.includes('self') || prodCatLower.includes('printer');
      } else if (typeLower.includes('pre')) {
        matchesCategory = prodCatLower.includes('pre') || prodTitleLower.includes('pre') || prodCatLower.includes('flash');
      } else if (typeLower.includes('pocket')) {
        matchesCategory = prodCatLower.includes('pocket') || prodTitleLower.includes('pocket') || prodCatLower.includes('mobile');
      } else if (typeLower.includes('date') || typeLower.includes('number')) {
        matchesCategory = prodCatLower.includes('date') || prodTitleLower.includes('date') || prodCatLower.includes('number') || prodTitleLower.includes('number') || prodCatLower.includes('dater') || prodTitleLower.includes('dater') || prodTitleLower.includes('numberer');
      } else {
        // Fallback split logic
        const key = typeLower.split(' ')[0];
        matchesCategory = prodTitleLower.includes(key) || prodCatLower.includes(key);
      }
    }

    // Filter by search query
    let matchesSearch = true;
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      matchesSearch = p.title.toLowerCase().includes(query) || p.category.toLowerCase().includes(query);
    }

    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    if (sortBy === 'Rating: High to Low') return (b.rating || 0) - (a.rating || 0);
    if (sortBy === 'Name: A to Z') return a.title.localeCompare(b.title);
    if (sortBy === 'Name: Z to A') return b.title.localeCompare(a.title);
    return 0;
  });

  return (
    <main className="pt-32 pb-20">
      {/* Hero */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto glass rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center relative">
          <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col gap-8 relative z-10">
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">Make Your Mark. Every Time.</span>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-navy-dark tracking-tighter leading-none">
                High-Quality <span className="text-primary">Rubber Stamps</span> for Every <span className="italic text-gold">Need</span>
              </h1>
              <p className="text-gray-500 font-medium">Durable, precise and long-lasting stamps for business, office and personal use.</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Shop Stamps <ArrowRight size={18} /></button>
              <button className="btn-secondary">Custom Design</button>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 relative">
            <img src="https://images.unsplash.com/photo-1565538448774-67aa321ed3e2?q=80&w=1200" alt="Stamps" className="rounded-3xl shadow-2xl relative z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-100/50 blur-[120px] -z-0" />
          </div>
        </div>
      </section>

      {/* Grid Header Info */}
      <section className="px-6 lg:px-10 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <CheckCircle2 size={18} />, title: 'Crisp Impressions', desc: 'Clear & sharp prints' },
            { icon: <Package size={18} />, title: 'Premium Materials', desc: 'Built to last long' },
            { icon: <Stamp size={18} />, title: 'Customizable', desc: 'Text, logo & design' },
            { icon: <Package size={18} />, title: 'Quick Delivery', desc: 'Pan India shipping' },
          ].map((f, i) => (
            <div key={i} className="glass-card p-4 flex items-center gap-4 rounded-2xl">
              <div className="bg-primary/10 p-3 rounded-xl text-primary">{f.icon}</div>
              <div className="flex flex-col">
                <span className="text-[10px] font-extrabold text-navy-dark uppercase tracking-tight">{f.title}</span>
                <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">{f.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-10 py-12 text-center">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <h2 className="text-3xl font-extrabold text-navy-dark tracking-tighter">Shop by <span className="text-primary italic">Stamp Type</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stampCategories.map((cat, i) => (
              <div
                key={i}
                onClick={() => setSelectedType(cat.title)}
                className={cn(
                  "glass-card p-6 rounded-[24px] flex flex-col items-center gap-4 group cursor-pointer transition-all border-2",
                  selectedType === cat.title ? "border-primary bg-primary/5" : "border-transparent hover:-translate-y-1"
                )}
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-navy-dark leading-tight">{cat.title}</span>
                  <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest leading-none">{cat.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 lg:px-10 relative md:sticky top-[100px] z-30 transition-all">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-[32px] md:rounded-full p-4 md:p-3 flex flex-col md:flex-row justify-between items-center px-8 gap-4">
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              <button 
                onClick={() => { setSelectedType('All'); setSearchQuery(''); }} 
                className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary hover:underline cursor-pointer"
              >
                <Filter size={14} /> Clear Filter
              </button>
              <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
              <span className="text-xs font-bold text-navy-dark uppercase tracking-widest">Type: {selectedType}</span>
              
              <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
              
              {/* Search input with premium glassmorphism styling */}
              <div className="relative flex-grow sm:flex-grow-0 min-w-[200px]">
                <input
                  type="text"
                  placeholder="Search stamps..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 text-navy-dark border border-white/20 rounded-full px-5 py-1.5 pl-9 text-xs font-bold uppercase tracking-wider outline-none placeholder:text-gray-400 focus:bg-white/20 focus:border-primary/50 transition-all font-sans"
                />
                <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-navy-dark text-xs font-bold"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                Sort by:
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-navy-dark border-none outline-none font-bold uppercase tracking-widest cursor-pointer font-sans"
                >
                  <option className="bg-white text-navy-dark">Popular</option>
                  <option className="bg-white text-navy-dark">Price: Low to High</option>
                  <option className="bg-white text-navy-dark">Price: High to Low</option>
                  <option className="bg-white text-navy-dark">Rating: High to Low</option>
                  <option className="bg-white text-navy-dark">Name: A to Z</option>
                  <option className="bg-white text-navy-dark">Name: Z to A</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stamps.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          {stamps.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold uppercase tracking-[0.4em]">No stamps found in this category</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
