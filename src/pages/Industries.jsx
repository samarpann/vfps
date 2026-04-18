import React from 'react';
import { motion } from 'framer-motion';
import { industries } from '../data/products';

const Industries = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <section className="bg-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
           <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8">Industries We <span className="text-[#1e3a8a]">Power</span></h1>
           <p className="text-xl text-slate-500 max-w-3xl mx-auto font-light">
             From local snack makers to global conglomerates, we provide the machinery that fuels diverse food industries worldwide.
           </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {industries.map((ind, idx) => (
                <motion.div 
                   key={ind.name}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className="group relative h-[500px] rounded-[4rem] overflow-hidden shadow-2xl"
                >
                   <img 
                     src={ind.image} 
                     alt={ind.name}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
                   <div className="absolute bottom-16 left-16 right-16">
                      <h3 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">{ind.name}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed max-w-sm">
                        High-efficiency production systems optimized for {ind.name.toLowerCase()} processing, ensuring texture consistency and taste profile retention.
                      </p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      <section className="py-24 bg-[#1e3a8a] text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-8 italic">"Building the future of food processing, one plant at a time."</h2>
            <div className="w-20 h-1.5 bg-blue-300 mx-auto rounded-full" />
         </div>
      </section>
    </div>
  );
};

export default Industries;
