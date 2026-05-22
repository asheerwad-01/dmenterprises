import React from 'react';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/constants';
import { Filter, ChevronDown, SlidersHorizontal, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [sortBy, setSortBy] = React.useState('Popular');

  const filteredProducts = PRODUCTS.filter(p => {
    if (selectedCategory === 'All') return true;
    return p.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
      p.title.toLowerCase().includes(selectedCategory.toLowerCase());
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  return (
    <main className="pt-32 pb-20">
      {/* ... previous code remains the same ... */}
      <section className="px-6 lg:px-10 py-16 text-center relative overflow-hidden">
        {/* ... hero content ... */}
        <div className="absolute top-[-20%] right-[-10%] w-[40%] h-[100%] bg-primary/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[30%] h-[80%] bg-gold/5 blur-[120px] rounded-full" />

        <div className="max-w-4xl mx-auto flex flex-col gap-6 relative z-10">
          <span className="text-xs font-bold text-primary uppercase tracking-[0.4em]">Personalized. Meaningful. Memorable.</span>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-navy-dark tracking-tighter leading-none">
            Shop Premium <br />
            <span className="text-primary">Trophies, Gifts</span> & More
          </h1>
          <p className="text-gray-500 font-medium max-w-xl mx-auto">
            High-quality products for every achievement, milestone, and special occasion. Explore our extensive collection.
          </p>
        </div>
      </section>

      {/* Category Selection */}
      <section className="px-6 lg:px-10 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8">
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-extrabold text-navy-dark tracking-tighter">Shop by <span className="text-primary italic">Category</span></h2>
              <button
                onClick={() => setSelectedCategory('All')}
                className="text-primary font-bold text-xs uppercase tracking-widest hover:underline"
              >
                Clear Filters
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.title)}
                  className="flex-shrink-0"
                >
                  <div className={cn(
                    "glass-card p-4 rounded-2xl flex items-center gap-4 min-w-[200px] hover:-translate-y-1 transition-all cursor-pointer border-2",
                    selectedCategory === cat.title ? "border-primary bg-primary/5" : "border-transparent"
                  )}>
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2">
                      <img src={cat.image} alt={cat.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-navy-dark text-sm tracking-tight">{cat.title}</span>
                      <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{cat.subtitle}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="px-6 lg:px-10 relative md:sticky top-[100px] z-30 transition-all">
        <div className="max-w-7xl mx-auto">
          <div className="glass rounded-full p-3 flex flex-wrap justify-between items-center px-8 gap-4">
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
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-6 lg:px-10 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 font-bold uppercase tracking-[0.4em]">No products found in this category</p>
              <button onClick={() => setSelectedCategory('All')} className="btn-secondary mt-6 mx-auto">View All Products</button>
            </div>
          )}
        </div>
      </section>

      {/* Pagination Placeholder */}
      <div className="flex justify-center items-center gap-4 mt-20">
        <button className="p-3 glass rounded-full text-gray-400 hover:text-primary transition-colors"><ChevronDown className="rotate-90" size={20} /></button>
        <div className="flex gap-2">
          {[1, 2, 3].map(n => (
            <button key={n} className={`w-10 h-10 rounded-full font-bold transition-all ${n === 1 ? 'bg-primary text-white shadow-lg' : 'glass text-navy-dark hover:bg-white/80'}`}>{n}</button>
          ))}
          <span className="flex items-center px-2 text-gray-400 font-bold">...</span>
          <button className="w-10 h-10 rounded-full font-bold glass text-navy-dark hover:bg-white/80">8</button>
        </div>
        <button className="p-3 glass rounded-full text-gray-400 hover:text-primary transition-colors"><ChevronDown className="-rotate-90" size={20} /></button>
      </div>
    </main>
  );
}
