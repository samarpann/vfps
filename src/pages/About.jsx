import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe2, Building2 } from 'lucide-react';
import ownerImg from '../assets/images/owner.jpg';
import noodlesPlantImg from '../assets/images/noodles-plant.jpg';

const About = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-slate-900 text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full" />
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full text-blue-400 text-sm font-bold uppercase tracking-widest mb-8"
          >
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span>Make In India Initiative</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            Verma Food <br/> <span className="text-blue-400">Processing</span> System
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed"
          >
            A trusted name in food processing machinery manufacturing, delivering innovative and efficient solutions to modern food industries globally.
          </motion.p>
        </div>
      </section>

      {/* Main Overview */}
      <section className="py-24 bg-white overflow-hidden pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-[#1e3a8a] font-black uppercase tracking-[0.2em] text-sm mb-4">Who We Are</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                  Driving Innovation in <span className="text-blue-600">Food Technology</span>
                </h3>
              </div>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Verma Food Processing System is a trusted name in the field of food processing machinery manufacturing, delivering innovative and efficient solutions to modern food industries. With a strong commitment to the <strong>Make in India</strong> initiative, we specialize in designing and manufacturing high-performance food processing machines, especially fully automatic noodle making plants.
                </p>
                <p>
                  With years of industry experience, we understand the evolving needs of food manufacturers. Our machines are engineered using advanced technology and food-grade materials, ensuring high productivity, consistent quality, hygiene, and long operational life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-blue-600">
                    <p className="font-bold text-slate-900 mb-1">Advanced Technology</p>
                    <p className="text-sm">Engineered for maximum efficiency and minimal wastage.</p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl border-l-4 border-[#1e3a8a]">
                    <p className="font-bold text-slate-900 mb-1">Food-Grade Materials</p>
                    <p className="text-sm">Ensuring the highest standards of hygiene and durability.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative group">
                <img 
                  src={noodlesPlantImg} 
                  alt="Industrial Machinery"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-12 left-12 text-white">
                  <p className="text-5xl font-black mb-2">20+</p>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-80">Years of Experience</p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Owner Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-[4rem] overflow-hidden relative shadow-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 p-12 md:p-24 relative z-20">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-6">The Founder's Vision</h2>
                  <h3 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
                    Devender Verma
                  </h3>
                  <div className="w-20 h-1 bg-blue-500 rounded-full mb-8" />
                  <p className="text-xl text-slate-300 leading-relaxed font-light italic mb-10">
                    "With over two decades of hands-on experience in industrial engineering, Devender Verma founded VFPS with a single mission: to provide the snack industry with machines that combine rugged durability with modern automation."
                  </p>
                  <div className="grid grid-cols-2 gap-12 pt-4">
                    <div>
                      <p className="text-3xl font-black text-white">20+</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-3xl font-black text-white">500+</p>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Plants</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="lg:col-span-5 relative h-full min-h-[500px]">
                <img 
                  src={ownerImg} 
                  alt="Devender Verma - Founder & CEO"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range & Customization */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Versatile Solutions for Every Need</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Our product range caters to various segments of the food industry, helping businesses scale their production with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Noodles Processing", desc: "Fully automatic plants for high-volume noodle production.", icon: <Target className="text-blue-600" /> },
              { title: "Snacks & Grains", desc: "Advanced solutions for various snacks, grains, and spices.", icon: <Award className="text-orange-600" /> },
              { title: "Customized Solutions", desc: "Tailored machinery based on specific client requirements.", icon: <Building2 className="text-[#1e3a8a]" /> }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence & Support */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a8a] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <Globe2 size={240} />
            </div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
                  Global Reach. <br/>
                  Unmatched Support.
                </h2>
                <div className="space-y-6 text-blue-100/80 text-lg">
                  <p>
                    Beyond India, Verma Food Processing System has established a growing global presence by supplying machines to Africa and Gulf countries, earning trust through quality, reliability, and performance.
                  </p>
                  <p>
                    We believe in building long-term relationships by providing end-to-end support, including installation, training, and after-sales service.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 pt-8">
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                    <span className="font-bold">Africa</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                    <span className="font-bold">Gulf Countries</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                    <span className="font-bold">Global Supply</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <p className="text-4xl font-black mb-2">100%</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Quality Trust</p>
                 </div>
                 <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <p className="text-4xl font-black mb-2">24/7</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Support Availability</p>
                 </div>
                 <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <p className="text-4xl font-black mb-2">Export</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Grade Quality</p>
                 </div>
                 <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                    <p className="text-4xl font-black mb-2">Direct</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Manufacturer</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats - Compact */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             <div className="space-y-2">
                <p className="text-4xl font-black">20+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Years Experience</p>
             </div>
             <div className="space-y-2">
                <p className="text-4xl font-black">500+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Global Plants</p>
             </div>
             <div className="space-y-2">
                <p className="text-4xl font-black">10+</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Countries Served</p>
             </div>
             <div className="space-y-2">
                <p className="text-4xl font-black">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">SS-304 Grade</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
