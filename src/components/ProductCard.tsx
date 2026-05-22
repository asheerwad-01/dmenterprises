import React from 'react';
import { Heart, ShoppingCart, Plus } from 'lucide-react';
import { Product } from '@/constants';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  key?: string | number;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="glass-card p-5 group flex flex-col gap-4 rounded-3xl"
    >
      <Link to={`/product/${product.id}`} className="relative aspect-square rounded-2xl overflow-hidden bg-white flex items-center justify-center p-6 cursor-pointer">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
        />
      </Link>
      
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-extrabold text-primary uppercase tracking-[0.2em]">{product.category}</span>
        <Link to={`/product/${product.id}`} className="hover:text-primary transition-colors cursor-pointer">
          <h3 className="font-bold text-navy-dark tracking-tight line-clamp-1 italic">{product.title}</h3>
        </Link>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-extrabold text-navy-dark">₹{product.price.toLocaleString()}</span>
        </div>
      </div>
    </motion.div>
  );
}

