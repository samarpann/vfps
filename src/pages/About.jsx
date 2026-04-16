import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe2, Building2 } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            Engineering <span className="text-blue-400">Excellence</span> Since 2008
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto font-light"
          >
            Verma Food Processing System (VFPS) is a global leader in designing and manufacturing high-performance food machinery.
          </motion.p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12">
            <div className="space-y-8">
              <div>
                 <h2 className="text-[#1e3a8a] font-bold uppercase tracking-widest text-sm mb-4">The Visionary</h2>
                 <h3 className="text-4xl font-extrabold text-slate-900 mb-6">Devender Verma</h3>
                 <p className="text-lg text-slate-600 font-bold mb-4 italic">Founder & Lead Engineer</p>
              </div>
              <p className="text-slate-600 leading-relaxed text-lg max-w-2xl mx-auto text-center">
                With over two decades of hands-on experience in industrial engineering, Devender Verma founded VFPS with a single mission: to provide the snack industry with machines that combine rugged durability with modern automation.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6 max-w-sm mx-auto">
                 <div className="border-l-4 border-[#1e3a8a] pl-6 text-left">
                    <p className="text-3xl font-black text-slate-900">20+</p>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
                 </div>
                 <div className="border-l-4 border-blue-400 pl-6 text-left">
                    <p className="text-3xl font-black text-slate-900">500+</p>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Global Plants</p>
                 </div>
              </div>
            </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100"
              >
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center text-[#1e3a8a] mb-8">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Our Mission</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To empower food manufacturers worldwide by providing innovative, energy-efficient, and easy-to-operate machinery that ensures consistent product quality and maximum profitability.
                  </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100"
              >
                  <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 mb-8">
                    <Eye size={32} />
                  </div>
                  <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Our Vision</h3>
                  <p className="text-slate-600 leading-relaxed">
                    To become the global benchmark in food processing technology, recognized for our commitment to sustainable engineering, customer-centric innovations, and uncompromising quality standards.
                  </p>
              </motion.div>
           </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             <div className="space-y-4">
                <Globe2 size={48} className="mx-auto text-blue-300 opacity-50" />
                <p className="text-5xl font-black">25+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200">Countries Served</p>
             </div>
             <div className="space-y-4">
                <Building2 size={48} className="mx-auto text-blue-300 opacity-50" />
                <p className="text-5xl font-black">500+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200">Plants Installed</p>
             </div>
             <div className="space-y-4">
                <Users size={48} className="mx-auto text-blue-300 opacity-50" />
                <p className="text-5xl font-black">150+</p>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200">Expert Technicians</p>
             </div>
             <div className="space-y-4">
                <Award size={48} className="mx-auto text-blue-300 opacity-50" />
                <p className="text-5xl font-black">100%</p>
                <p className="text-sm font-bold uppercase tracking-widest text-blue-200">SS-304 Grade</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
