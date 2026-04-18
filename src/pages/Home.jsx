import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Wrench, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { categories, whyChooseUs, industries } from '../data/products';
import { Link } from 'react-router-dom';
import rdImg from '../assets/images/r-and-d.jpg';
import hero1Img from '../assets/images/hero-1.jpg';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroCarousel />

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={rdImg} 
                  alt="Industrial Machinery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-[#1e3a8a] text-white p-8 rounded-3xl shadow-xl hidden md:block">
                <span className="block text-4xl font-bold mb-1">15+</span>
                <span className="text-sm font-medium opacity-80 uppercase tracking-widest">Years of Excellence</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[#1e3a8a] font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                Verma Food Processing <span className="text-gray-400">System</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Established in 2008, VFPS has been at the forefront of manufacturing high-grade food processing machinery. We specialize in SS 304 food-grade plants that prioritize low oil consumption, high automation, and peak durability.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Global Export Presence",
                  "500+ Successful Installations",
                  "Advanced Engineering Design",
                  "24/7 After-Sales Support"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="inline-flex items-center gap-2 text-[#1e3a8a] font-bold group hover:underline underline-offset-8 transition-all">
                Read Our Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <h2 className="text-[#1e3a8a] font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Complete Production Plants</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              We provide end-to-end solutions for various snack and food processing needs, custom-built to your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={product.image || hero1Img} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-3">{product.name}</h4>
                  <p className="text-slate-500 mb-6 line-clamp-2">{product.description}</p>
                  <Link 
                    to={`/products/${product.id}`}
                    className="flex items-center gap-2 text-[#1e3a8a] font-bold hover:gap-4 transition-all"
                  >
                    View Details <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-blue-800 transition-all active:scale-95"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-blue-300 font-bold uppercase tracking-widest text-sm mb-4">Why VFPS?</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">Setting Benchmark in Industrial Standards</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                      {item.icon === 'Oil' && <Zap size={28} className="text-blue-300" />}
                      {item.icon === 'Shield' && <Shield size={28} className="text-blue-300" />}
                      {item.icon === 'Cpu' && <Globe size={28} className="text-blue-300" />}
                      {item.icon === 'Settings' && <Wrench size={28} className="text-blue-300" />}
                      {item.icon === 'Globe' && <Globe size={28} className="text-blue-300" />}
                    </div>
                    <h4 className="text-xl font-bold">{item.title}</h4>
                    <p className="text-blue-100/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-3xl">
                <img 
                  src={hero1Img} 
                  alt="Quality Control" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl text-slate-900 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="font-extrabold text-xl">100%</p>
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Food Grade SS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <motion.div
               initial={{ x: -30, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="lg:w-1/2 order-2 lg:order-1"
            >
              <h2 className="text-[#1e3a8a] font-bold uppercase tracking-widest text-sm mb-4">Innovation & Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">Continuous Innovation in Food Processing Technology</h3>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Our dedicated R&D wing works tirelessly to integrate the latest technological advancements in industrial machinery. From thermal efficiency to noise reduction, we engineer components that make your production smoother and more profitable.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-10">
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Advanced Engineering</h4>
                  <p className="text-sm text-slate-500">Using state-of-the-art CAD/CAM systems for precision design.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Process Optimization</h4>
                  <p className="text-sm text-slate-500">Designing machines that reduce raw material wastage.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Custom Development</h4>
                  <p className="text-sm text-slate-500">Tailoring machinery to specific product chemistries.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Quality Testing</h4>
                  <p className="text-sm text-slate-500">Rigorous inspection cycles before every shipment.</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
               initial={{ x: 30, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="lg:w-1/2 order-1 lg:order-2"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#1e3a8a] rounded-3xl translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-black">
                  <video 
                    src="/videos/video-4.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4">Market Presence</h2>
             <h3 className="text-4xl md:text-5xl font-extrabold mb-6">Industries We Serve</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="group relative aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
                <img 
                  src={industry.image || hero1Img} 
                  alt={industry.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-bold text-lg leading-tight">{industry.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Videos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-[#1e3a8a] font-bold uppercase tracking-widest text-sm mb-4">Live from Factory</h2>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900">Manufacturing in Action</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { src: "/videos/video-5.mp4", title: "Continuous Frying System" },
                { src: "/videos/video-7.mp4", title: "Automated Conveying" },
                { src: "/videos/vidoe-6.mp4", title: "Flavoring & Seasoning" }
              ].map((vid, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="rounded-3xl overflow-hidden shadow-xl aspect-video bg-black">
                    <video 
                      src={vid.src} 
                      autoPlay 
                      muted 
                      loop 
                      playsInline 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                    />
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 text-center">{vid.title}</h4>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Clients Section Placeholder */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h3 className="text-slate-400 uppercase tracking-widest font-extrabold text-xs mb-8">Trusted by industry leaders worldwide</h3>
             <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
               {/* Placeholders for logos */}
               <span className="text-3xl font-black text-slate-800">HALDIRAM</span>
               <span className="text-3xl font-black text-slate-800">BALAJI</span>
               <span className="text-3xl font-black text-slate-800">PEPSICO</span>
               <span className="text-3xl font-black text-slate-800">BIKAJI</span>
               <span className="text-3xl font-black text-slate-800">PRATAAP</span>
             </div>
           </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a8a] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to Optimize Your Production?</h3>
              <p className="text-xl text-blue-100/70 mb-12 max-w-2xl mx-auto font-light">
                Get a free consultation from our experts and find the perfect machinery for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-white text-[#1e3a8a] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all shadow-xl">
                  Get a Free Consultation
                </Link>
                <a href="tel:+919800000000" className="bg-transparent border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
                  Contact Sales
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
