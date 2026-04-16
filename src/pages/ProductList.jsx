import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Info } from 'lucide-react';
import { categories } from '../data/products';

const ProductList = () => {
  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6">Our Machinery <span className="text-[#1e3a8a]">Solutions</span></h1>
           <p className="text-xl text-slate-500 max-w-3xl mx-auto">
             Explore our range of high-performance food processing plants designed for maximum efficiency and ROI.
           </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {categories.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 group flex flex-col h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                     <img 
                       src={product.image || 'https://images.unsplash.com/photo-1558223108-630d932114a1?auto=format&fit=crop&q=80'} 
                       alt={product.name}
                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                     />
                     <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-[#1e3a8a] shadow-lg">
                        SS-304 Grade
                     </div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                     <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{product.name}</h3>
                     <p className="text-slate-500 mb-8 flex-grow">
                       {product.description}
                     </p>
                     
                     <div className="grid grid-cols-2 gap-4 mb-8">
                        {product.features.slice(0, 2).map(f => (
                          <div key={f} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                             <Settings size={14} className="text-[#1e3a8a]" />
                             {f}
                          </div>
                        ))}
                     </div>

                     <Link 
                       to={`/products/${product.id}`}
                       className="w-full inline-flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-[#1e3a8a] transition-all shadow-xl active:scale-95 group/btn"
                     >
                       Explore Machine <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform" />
                     </Link>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Custom Solutions CTA */}
      <section className="py-24 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center gap-12">
           <div className="text-center lg:text-left">
              <h2 className="text-3xl font-extrabold mb-4">Need a Custom Production Line?</h2>
              <p className="text-blue-100 text-lg">Our engineering team can design machines tailored to your specific product requirements.</p>
           </div>
           <Link to="/contact" className="bg-white text-[#1e3a8a] px-10 py-5 rounded-2xl font-extrabold shadow-2xl hover:bg-blue-50 whitespace-nowrap">
             Get Custom Quote
           </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductList;
