import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/products';
import { CheckCircle2, ChevronLeft, Download, MessageSquare, Zap, Shield, Cpu } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = categories.find(c => c.id === id);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black mb-6">Product Not Found</h1>
          <Link to="/products" className="text-[#1e3a8a] font-bold">Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#1e3a8a] font-bold mb-10 transition-colors">
          <ChevronLeft size={20} /> Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Image & Quick Specs */}
          <div className="space-y-12 sticky top-28">
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               className="rounded-[3rem] overflow-hidden shadow-3xl bg-slate-50 border border-slate-100 p-8"
            >
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-auto rounded-3xl"
              />
            </motion.div>

            <div className="grid grid-cols-3 gap-6">
                <div className="bg-slate-50 p-6 rounded-3xl text-center">
                   <Zap className="mx-auto text-[#1e3a8a] mb-2" size={24} />
                   <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Power</p>
                   <p className="font-bold text-slate-900">{product.specs.power}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl text-center">
                   <Cpu className="mx-auto text-[#1e3a8a] mb-2" size={24} />
                   <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Capacity</p>
                   <p className="font-bold text-slate-900">{product.specs.capacity}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl text-center">
                   <Shield className="mx-auto text-[#1e3a8a] mb-2" size={24} />
                   <p className="text-[10px] font-black uppercase tracking-wider text-slate-400">Area</p>
                   <p className="font-bold text-slate-900">{product.specs.area}</p>
                </div>
            </div>
          </div>

          {/* Right: Info & CTA */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{product.name}</h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>
              <div className="inline-flex gap-8">
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="text-blue-500" size={20} />
                   <span className="font-bold text-slate-800">SS 304 Build</span>
                </div>
                <div className="flex items-center gap-2">
                   <CheckCircle2 className="text-blue-500" size={20} />
                   <span className="font-bold text-slate-800">Fully Automated</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-100 w-full" />

            <div>
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map(f => (
                  <li key={f} className="bg-slate-50 px-6 py-4 rounded-2xl flex items-center gap-3 border border-slate-100">
                    <div className="w-2 h-2 rounded-full bg-[#1e3a8a]" />
                    <span className="font-medium text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Process Overview</h3>
              <p className="text-slate-600 leading-relaxed italic">
                 The {product.name} is engineered for high throughput and modular scalability. Our design focuses on reducing overheads by optimizing thermal efficiency and reducing oil wastage during production cycles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-10">
               <button className="flex-1 inline-flex items-center justify-center gap-3 bg-[#1e3a8a] text-white py-6 rounded-3xl font-extrabold text-lg shadow-2xl hover:bg-blue-800 transition-all active:scale-95">
                  <MessageSquare size={24} /> Request a Quote
               </button>
               <button className="flex-1 inline-flex items-center justify-center gap-3 bg-slate-900 text-white py-6 rounded-3xl font-extrabold text-lg shadow-2xl hover:bg-slate-800 transition-all active:scale-95">
                  <Download size={24} /> Full Catalogue
               </button>
            </div>

            <div className="p-8 bg-blue-50 rounded-[2.5rem] border border-blue-100 flex items-center gap-6">
               <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-[#1e3a8a] shadow-md shrink-0">
                  <Shield size={32} />
               </div>
               <div>
                  <h4 className="font-bold text-[#1e3a8a]">Quality Assurance</h4>
                  <p className="text-sm text-slate-600">Every machine undergoes a 48-hour continuous stress test before delivery.</p>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products Placeholder */}
      <section className="py-24 bg-slate-50 mt-24">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black mb-12">Other Machine Units</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {categories.filter(c => c.id !== id).slice(0, 4).map(rel => (
                 <Link key={rel.id} to={`/products/${rel.id}`} className="block group">
                    <div className="aspect-video bg-white rounded-3xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all">
                       <img src={rel.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <p className="font-bold text-slate-900 group-hover:text-[#1e3a8a] transition-colors">{rel.name}</p>
                 </Link>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};

export default ProductDetail;
