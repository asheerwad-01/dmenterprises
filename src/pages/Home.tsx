import React from 'react';
import Hero from '@/components/Hero';
import CategoryBar from '@/components/CategoryBar';
import FeatureStrip from '@/components/FeatureStrip';
import ProductCard from '@/components/ProductCard';
import { PRODUCTS } from '@/constants';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex flex-col overflow-x-hidden">
      <Hero />
      <CategoryBar />
      <FeatureStrip />

      {/* Featured Products */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Handpicked Collection</span>
              <h2 className="text-4xl font-extrabold text-navy-dark tracking-tighter">Featured <span className="text-primary italic">Products</span></h2>
            </div>
            <Link to="/shop" className="btn-secondary">View All Products <ArrowRight size={18} /></Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
