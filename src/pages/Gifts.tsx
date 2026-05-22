import React from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/constants';
import { Heart, Gift, Camera, ShoppingBag, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Gifts() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Popular');
  
  const giftCategories = CATEGORIES.filter(c => ['Customized Gifts', 'Keyrings', 'T-Shirt Print', 'Mug Print'].includes(c.title));
  const giftProducts = PRODUCTS.filter(p => {
    const isGift = !p.category.includes('Trophy') && !p.category.includes('Stamp');
    if (!isGift) return false;
    if (selectedCategory === 'All') return true;
    return p.category.includes(selectedCategory) || p.title.includes(selectedCategory);
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
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
            <div className="glass rounded-full p-3 flex flex-wrap justify-between items-center px-8 gap-4 relative md:sticky top-[100px] z-30 transition-all">
                <div className="flex flex-wrap items-center gap-4">
                    <button onClick={() => setSelectedCategory('All')} className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-primary hover:underline cursor-pointer"><Filter size={14} /> Clear Filter</button>
                    <div className="hidden sm:block h-4 w-[1px] bg-white/20" />
                    <span className="text-xs font-bold text-navy-dark uppercase tracking-widest">Category: {selectedCategory}</span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        Sort by: 
                        <select 
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="bg-transparent text-navy-dark border-none outline-none font-bold uppercase tracking-widest cursor-pointer"
                        >
                          <option>Popular</option>
                          <option>Price: Low to High</option>
                          <option>Price: High to Low</option>
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
