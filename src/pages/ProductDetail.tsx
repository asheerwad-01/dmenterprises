import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '@/constants';
import { ArrowLeft, Star, Heart, Share2, ShieldCheck, Truck, RotateCcw, MessageCircle, ChevronRight, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

export default function ProductDetail() {
   const { id } = useParams();
   const product = PRODUCTS.find((p) => p.id === id);

   if (!product) {
      return (
         <div className="pt-40 pb-20 px-6 text-center">
            <h2 className="text-3xl font-bold">Product not found</h2>
            <Link to="/shop" className="btn-primary mt-6 mx-auto">Back to Shop</Link>
         </div>
      );
   }

   const handleEnquiry = () => {
      const message = `Hello DM Enterprises! I am interested in your product: *${product.title}* (${product.category}). \n\nCould you please provide more details and the latest pricing? \n\nProduct Link: ${window.location.href}`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/919658889357?text=${encodedMessage}`, '_blank');
   };

   return (
      <main className="pt-32 pb-20 bg-bg-light min-h-screen">
         <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Navigation & Breadcrumbs */}
            <div className="flex items-center gap-6 mb-10">
               <button
                  onClick={() => window.history.back()}
                  className="p-3 glass rounded-full text-navy-dark hover:bg-primary hover:text-white transition-all cursor-pointer shadow-sm group"
               >
                  <ArrowLeft size={20} className="group-active:scale-90 transition-transform" />
               </button>
               <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                  <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
                  <ChevronRight size={10} />
                  <span className="text-navy-dark">{product.category}</span>
                  <ChevronRight size={10} />
                  <span className="text-primary italic truncate">{product.title}</span>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               {/* Image Showcase */}
               <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col gap-6"
               >
                  <div className="glass h-[500px] rounded-[40px] flex items-center justify-center p-12 relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-primary/5 -z-10" />
                     <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700"
                     />
                  </div>
                  {/* Thumbnails Placeholder */}
                  <div className="flex gap-4">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="w-24 h-24 glass rounded-2xl p-4 flex items-center justify-center cursor-pointer border-2 border-transparent hover:border-primary transition-all">
                           <img src={product.image} className="max-h-full max-w-full object-contain opacity-60" />
                        </div>
                     ))}
                  </div>
               </motion.div>

               {/* Product Info */}
               <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex flex-col gap-8"
               >
                  <div className="flex flex-col gap-3">
                     <span className="text-xs font-bold text-primary uppercase tracking-[0.3em]">{product.category}</span>
                     <h1 className="text-4xl lg:text-5xl font-extrabold text-navy-dark tracking-tighter leading-tight">
                        {product.title}
                     </h1>
                     <div className="flex items-center gap-4 mt-2">
                        <div className="flex text-gold">
                           {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" stroke="none" />)}
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">(24 Reviews)</span>
                     </div>
                  </div>

                  <div className="flex flex-col gap-1">
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Our Price</span>
                     <div className="flex items-baseline gap-2">
                        <span className="text-4xl font-extrabold text-navy-dark tracking-tighter">₹{product.price.toLocaleString()}</span>
                        <span className="text-gray-400 line-through text-lg font-medium">₹{(product.price * 1.2).toFixed(0)}</span>
                        <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-1 rounded-md uppercase">Save 20%</span>
                     </div>
                  </div>

                  <p className="text-gray-500 font-medium leading-relaxed">
                     Expertly crafted with the highest quality materials, this ${product.category.toLowerCase()} is designed for those who value excellence and durability. Perfect for recognition, decoration, or a special customized gift.
                  </p>

                  {/* Product Meta */}
                  <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/20">
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Material</span>
                        <span className="text-sm font-bold text-navy-dark">Premium Grade</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Stock Status</span>
                        <span className="text-sm font-bold text-green-600">In Stock</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customization</span>
                        <span className="text-sm font-bold text-navy-dark">Available</span>
                     </div>
                     <div className="flex flex-col gap-1">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estimated Delivery</span>
                        <span className="text-sm font-bold text-navy-dark">3-5 Business Days</span>
                     </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4 mt-4">
                     <button
                        onClick={handleEnquiry}
                        className="w-full py-5 justify-center text-xl font-bold rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95 flex items-center gap-3 bg-[#25D366] text-white shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)]"
                     >
                        <MessageCircle size={28} fill="white" /> Enquire via WhatsApp
                     </button>
                  </div>

                  {/* Security Stripes */}
                  <div className="flex flex-wrap gap-6 mt-4">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <ShieldCheck size={14} className="text-primary" /> 100% Secure Checkout
                     </div>
                     <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <Truck size={14} className="text-primary" /> Free Pan-India Delivery
                     </div>
                     <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        <RotateCcw size={14} className="text-primary" /> Easy Returns
                     </div>
                  </div>
               </motion.div>
            </div>

            {/* Tabs Section */}
            <section className="mt-20">
               <div className="flex gap-8 border-b border-white/20 pb-4">
                  <button className="text-sm font-bold text-navy-dark border-b-2 border-primary pb-4 -mb-[18px]">Description</button>
               </div>
               <div className="py-10 text-gray-500 font-medium leading-relaxed flex flex-col gap-4">
                  <p>Experience the superior craftsmanship of DM Enterprises. Our products are made with meticulous attention to detail, ensuring that every piece meets the highest standards of luxury and durability.</p>
                  <ul className="list-disc ml-6 flex flex-col gap-2">
                     <li>High-Resolution Laser Engraving Available</li>
                     <li>Precision Molded Design</li>
                     <li>Ergonomic Handling</li>
                     <li>Eco-Friendly Sustainable Packaging</li>
                  </ul>
               </div>
            </section>
         </div>
      </main>
   );
}
