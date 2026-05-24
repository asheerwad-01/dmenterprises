import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/constants';
import { Award, Star, Compass, ShieldCheck, ArrowRight, ChevronDown, Filter, Search } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Trophies() {
  const location = useLocation();
  const [selectedType, setSelectedType] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Popular');
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    if (location.state && (location.state as any).selectedCategory) {
      setSelectedType((location.state as any).selectedCategory);
    }
  }, [location.state]);
  
  const trophyCategories = [
    { title: 'Trophies', subtitle: 'Classic & Modern', image: '/Trophies/12.jpeg' },
    { title: 'Acrylic Awards', subtitle: 'Elegant & Premium', image: '/Trophies/CP1778.jpeg' },
    { title: 'Wooden Awards', subtitle: 'Classic & Timeless', image: '/Trophies/PW1070BR.jpeg' },
    { title: 'Corporate Awards', subtitle: 'Professional & Prestigious', image: '/Trophies/CP2313.jpeg' },
    { title: 'Star Awards', subtitle: 'Shine & Inspire', image: '/Trophies/23.jpeg' },
    { title: 'Medals', subtitle: 'For Every Victory', image: '/Trophies/32.jpeg' },
  ];

  const trophies = PRODUCTS.filter(p => {
    const isAward = p.category.includes('Trophy') || p.category.includes('Memento');
    if (!isAward) return false;
    
    // Category filter
    let matchesCategory = true;
    if (selectedType !== 'All') {
      const type = selectedType.toLowerCase().split(' ')[0];
      const searchType = type.endsWith('ies') ? type.slice(0, -3) + 'y' : type.endsWith('s') ? type.slice(0, -1) : type;
      matchesCategory = p.category.toLowerCase().includes(searchType);
    }

    // Search query filter
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
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/5" />
            <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col gap-8 relative z-10 text-center lg:text-left">
                <div className="flex flex-col gap-3">
                     <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">Honor. Recognize. Celebrate.</span>
                     <h1 className="text-4xl lg:text-6xl font-extrabold text-navy-dark tracking-tighter leading-none">
                        Trophies & Awards for Every <span className="text-primary italic">Achievement</span>
                     </h1>
                     <p className="text-gray-500 font-medium">Celebrate success and inspire excellence with our premium collection of trophies and awards.</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button className="btn-primary">Shop Collection <ArrowRight size={18} /></button>
                    <button className="btn-secondary">Custom Trophies</button>
                </div>
            </div>
            <div className="lg:w-1/2 p-8 relative">
                 <img src="/Trophies/WLG3811.jpeg" alt="Trophies" className="rounded-3xl shadow-2xl relative z-10" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gold/5 blur-[100px] -z-0" />
            </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-10 py-12 text-center">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <h2 className="text-3xl font-extrabold text-navy-dark tracking-tighter">Shop by <span className="text-primary italic">Award Type</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {trophyCategories.map((cat, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedType(cat.title)}
                      className={cn(
                        "glass-card p-6 rounded-[24px] flex flex-col items-center gap-4 group cursor-pointer transition-all border-2",
                        selectedType === cat.title ? "border-primary bg-primary/5" : "border-transparent"
                      )}
                    >
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-3 group-hover:scale-110 transition-transform">
                            <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-navy-dark leading-tight">{cat.title}</span>
                            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest">{cat.subtitle}</span>
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
                  placeholder="Search trophies..."
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

      {/* Grid */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {trophies.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
            {trophies.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-400 font-bold uppercase tracking-[0.4em]">No trophies found in this category</p>
                </div>
            )}
        </div>
      </section>
    </main>
  );
}
