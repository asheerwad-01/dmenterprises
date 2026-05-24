import React from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/constants';
import { Heart, Gift, Camera, ShoppingBag, ArrowRight, Filter, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Gifts() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Popular');
  const [searchQuery, setSearchQuery] = React.useState('');

  React.useEffect(() => {
    if (location.state && (location.state as any).selectedCategory) {
      setSelectedCategory((location.state as any).selectedCategory);
    }
  }, [location.state]);
  
  const giftCategories = CATEGORIES.filter(c => ['Customized Gifts', 'Keyrings', 'T-Shirt Print', 'Mug Print'].includes(c.title));
  const giftProducts = PRODUCTS.filter(p => {
    const isGift = !p.category.includes('Trophy') && !p.category.includes('Stamp');
    if (!isGift) return false;
    
    // Category filter
    let matchesCategory = true;
    if (selectedCategory !== 'All') {
      const catLower = selectedCategory.toLowerCase();
      const prodCatLower = p.category.toLowerCase();
      const prodTitleLower = p.title.toLowerCase();

      if (catLower === 'customized gifts') {
        matchesCategory = prodCatLower.includes('gift');
      } else if (catLower === 'keyrings') {
        matchesCategory = prodCatLower.includes('keyring');
      } else {
        matchesCategory = prodCatLower.includes(catLower) || prodTitleLower.includes(catLower);
      }
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
        <div className="max-w-7xl mx-auto glass rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-center relative gap-12">
            <div className="lg:w-1/2 p-8 lg:p-20 flex flex-col gap-8 relative z-10 text-center lg:text-left">
                <div className="flex flex-col gap-4">
                     <span className="text-[10px] font-bold text-primary uppercase tracking-[0.4em]">Personalized. Meaningful. Memorable.</span>
                     <h1 className="text-4xl lg:text-7xl font-extrabold text-navy-dark tracking-tighter leading-[1.1]">
                        Customized Gifts <br />Made <span className="text-primary italic">Just for You</span>
                     </h1>
                     <p className="text-gray-500 font-medium">Unique, thoughtful and tailor-made gifts for every occasion, person and purpose.</p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    <button className="btn-primary">Explore Gifts <ArrowRight size={18} /></button>
                    <button className="btn-secondary">Create Your Own</button>
                </div>
            </div>
            <div className="lg:w-1/2 relative p-8">
                 <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200" alt="Gifts" className="rounded-3xl shadow-2xl relative z-10" />
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 blur-[100px] -z-0 rounded-full" />
            </div>
        </div>
      </section>

      {/* Category Icons Strip */}
      <section className="px-6 lg:px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6">
            {[
                { icon: <Heart size={18} />, title: 'Unique & Personal', desc: 'Made just for you' },
                { icon: <Gift size={18} />, title: 'Premium Quality', desc: 'Built to impress' },
                { icon: <Camera size={18} />, title: 'Custom Design', desc: 'Your idea, our creation' },
                { icon: <ShoppingBag size={18} />, title: 'Bulk Orders', desc: 'Perfect for events' },
            ].map((f, i) => (
                <div key={i} className="glass card px-6 py-3 flex items-center gap-3 rounded-full">
                    <div className="text-primary">{f.icon}</div>
                    <div className="flex flex-col">
                        <span className="text-[8px] font-extrabold text-navy-dark uppercase tracking-widest leading-none">{f.title}</span>
                        <span className="text-[8px] text-gray-400 font-bold uppercase tracking-[0.05em] leading-none mt-0.5">{f.desc}</span>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Categories */}
      <section className="px-6 lg:px-10 py-16">
            <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="text-center">
                <h2 className="text-4xl font-extrabold text-navy-dark tracking-tighter">Shop by <span className="text-primary italic">Category</span></h2>
                <button onClick={() => setSelectedCategory('All')} className="text-primary text-[10px] font-bold uppercase tracking-[0.4em] mt-4 hover:underline cursor-pointer">View All Gifts</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
                {giftCategories.map((cat, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedCategory(cat.title)}
                      className={cn(
                        "glass-card group flex flex-col items-center gap-6 p-10 rounded-[32px] transition-all cursor-pointer border-2",
                        selectedCategory === cat.title ? "border-primary bg-primary/5" : "border-transparent hover:-translate-y-2"
                      )}
                    >
                        <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center p-6 group-hover:scale-110 transition-all duration-500">
                             <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex flex-col items-center text-center">
                             <h4 className="text-lg font-bold text-navy-dark tracking-tight">{cat.title}</h4>
                             <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{cat.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
      </section>

      {/* Product List */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
            <div className="glass rounded-[32px] md:rounded-full p-4 md:p-3 flex flex-col md:flex-row justify-between items-center px-8 gap-4 relative md:sticky top-[100px] z-30 transition-all">
                <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
                    <button 
                      onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }} 
                      className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary hover:underline cursor-pointer"
                    >
                      <Filter size={14} /> Clear Filter
                    </button>
                    <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
                    <span className="text-xs font-bold text-navy-dark uppercase tracking-widest">Category: {selectedCategory}</span>
                    
                    <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
                    
                    {/* Search input with premium glassmorphism styling */}
                    <div className="relative flex-grow sm:flex-grow-0 min-w-[200px]">
                      <input
                        type="text"
                        placeholder="Search gifts..."
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {giftProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            {giftProducts.length === 0 && (
                <div className="text-center py-20">
                    <p className="text-gray-400 font-bold uppercase tracking-[0.4em]">No products found in this category</p>
                </div>
            )}
        </div>
      </section>
      
      {/* Create Your Own Promo */}
      <section className="px-6 lg:px-10 py-20">
         <div className="max-w-7xl mx-auto glass rounded-[32px] p-8 lg:p-16 flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden bg-gradient-to-r from-white/40 to-primary/5">
            <div className="absolute top-0 right-0 w-[40%] h-full bg-primary opacity-5 -z-10 blur-3xl rounded-full translate-x-1/2" />
            <div className="lg:w-1/2 flex flex-col gap-4">
                <h2 className="text-4xl font-extrabold text-navy-dark tracking-tighter">Have a Unique Idea?</h2>
                <p className="text-gray-500 font-medium">We'll bring it to life! Share your idea and our team will create something extraordinary for you.</p>
                <div className="flex gap-4 mt-6">
                    <button className="btn-primary">Create Your Own Gift <ArrowRight size={18} /></button>
                    <button className="btn-secondary">Bulk Enquiry</button>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-75 group-hover:scale-100 transition-all duration-700" />
                    <img src="https://images.unsplash.com/photo-1549465220-1a89238cd48?q=80&w=600" className="w-64 h-64 object-contain relative z-10 drop-shadow-2xl" />
                </div>
            </div>
         </div>
      </section>
    </main>
  );
}
