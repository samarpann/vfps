import React from 'react';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Users2, Trophy } from 'lucide-react';

const Clients = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-24 px-4 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L50 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
           <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">GLOBAL <span className="text-blue-500">TRUST</span></h1>
           <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
             Partnering with industry leaders to deliver excellence in every corner of the world. 500+ successful installations across 25+ countries.
           </p>
        </div>
      </section>

      {/* Global Metrics */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { label: 'Plants Installed', val: '500+', icon: Building2 => <Trophy size={32} /> },
                { label: 'Countries Serviced', val: '25+', icon: Building2 => <Globe size={32} /> },
                { label: 'Happy Clients', val: '400+', icon: Building2 => <Users2 size={32} /> },
                { label: 'Quality Standard', val: 'ISO 9001', icon: Building2 => <ShieldCheck size={32} /> },
              ].map((m, i) => (
                <div key={m.label} className="text-center space-y-4 p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all">
                   <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-[#1e3a8a] mx-auto">
                      {m.icon()}
                   </div>
                   <p className="text-5xl font-black text-slate-900 tracking-tighter">{m.val}</p>
                   <p className="text-sm font-bold uppercase tracking-widest text-slate-400">{m.label}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Client List Placeholder */}
      <section className="py-24 bg-slate-50">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-slate-400 uppercase tracking-[0.3em] font-black text-xs mb-20">Our Prestigious Partners</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 opacity-40 grayscale group">
               {['HALDIRAM', 'BALAJI', 'PEPSICO', 'BIKAJI', 'PRATAAP', 'AMUL', 'MOTHER DAIRY', 'NESTLE'].map(name => (
                 <div key={name} className="flex items-center justify-center p-12 bg-white rounded-[2rem] shadow-sm hover:scale-110 hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-pointer">
                    <span className="text-3xl font-black text-slate-800">{name}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

export default Clients;
