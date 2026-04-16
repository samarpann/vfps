import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, Shield, Cpu, Microscope, FlaskConical, Lightbulb, Settings, PenTool } from 'lucide-react';

const Research = () => {
  const innovationFeatures = [
    {
      title: "Thermal Efficiency",
      description: "Our proprietary combustion chambers reduce fuel consumption by 30% while maintaining consistent heat distribution.",
      icon: <Zap className="text-blue-400" size={32} />
    },
    {
      title: "SS-304 Hygiene",
      description: "Every contact part is engineered from food-grade stainless steel to meet international safety standards.",
      icon: <Shield className="text-blue-400" size={32} />
    },
    {
      title: "IoT Automation",
      description: "Real-time monitoring and PLC-controlled systems ensure minimal human intervention and maximum precision.",
      icon: <Cpu className="text-blue-400" size={32} />
    },
    {
      title: "Waste Reduction",
      description: "Precision cutting and conveying systems designed to minimize raw material wastage during production.",
      icon: <Settings className="text-blue-400" size={32} />
    }
  ];

  const rndVidoes = [
    { src: "/videos/video-4.mp4", title: "Core Engineering Lab", desc: "Testing structural integrity and heat endurance." },
    { src: "/videos/video-5.mp4", title: "Continuous Frying System", desc: "R&D on oil flow and temperature consistency." },
    { src: "/videos/vidoe-6.mp4", title: "Automated Seasoning", desc: "Innovation in precise flavor distribution." },
    { src: "/videos/video-7.mp4", title: "Packaging Integration", desc: "Seamless flow from production to end-line." }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <video 
          src="/videos/video-4.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900/80" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="space-y-6"
          >
            <h2 className="text-blue-400 font-bold uppercase tracking-[0.4em] text-sm">Innovation Center</h2>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
              R&D <span className="text-blue-500">LABS</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
              Where engineering meets culinary science to create the next generation of food processing technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovation Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-[#1e3a8a] font-bold text-xs uppercase tracking-widest">
                <Microscope size={16} /> Our Philosophy
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Continuous Innovation in <span className="text-blue-600 underline underline-offset-8">Every Component</span>
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                At VFPS, R&D isn't just a department—it's our foundation. We spend hundreds of hours every month researching material sciences, thermal dynamics, and mechanical automation to ensure our clients stay ahead of the competition.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
                 {innovationFeatures.map((f, i) => (
                   <motion.div 
                    key={i}
                    whileHover={{ x: 10 }}
                    className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all"
                   >
                     <div className="mb-4">{f.icon}</div>
                     <h4 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h4>
                     <p className="text-sm text-slate-500">{f.description}</p>
                   </motion.div>
                 ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[4rem] blur-3xl" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-slate-900 border-8 border-white">
                <video 
                  src="/videos/video-1.mp4" 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Status Cards */}
              <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white">
                       <FlaskConical size={24} />
                    </div>
                    <div>
                       <p className="text-xs uppercase font-bold text-slate-400 tracking-widest">Active Trials</p>
                       <p className="text-2xl font-black text-slate-900">12 Projects</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcases */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-[#1e3a8a] font-bold uppercase tracking-widest text-sm mb-4">Engineering in Motion</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Process R&D Showcase</h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A glimpse into our testing procedures and laboratory environment where we validate every machine before deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rndVidoes.map((vid, idx) => (
              <motion.div 
                key={idx}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl bg-black"
              >
                <video 
                  src={vid.src} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[2000ms]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-10 left-10 right-10">
                   <h4 className="text-3xl font-black text-white mb-2">{vid.title}</h4>
                   <p className="text-blue-200 font-medium">{vid.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Lab Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1e3a8a] rounded-[4rem] p-12 md:p-20 text-white flex flex-col items-center text-center space-y-8 shadow-3xl">
             <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center text-blue-300">
                <Lightbulb size={48} />
             </div>
             <h2 className="text-4xl md:text-6xl font-black tracking-tighter">Your Production, <span className="text-blue-400 italic">Upgraded.</span></h2>
             <p className="text-xl text-blue-100/70 max-w-3xl font-light">
               The machines we build today are the result of years of research. We don't just sell hardware; we provide the competitive edge of advanced engineering.
             </p>
             <Link 
                to="/contact" 
                className="bg-white text-[#1e3a8a] px-12 py-5 rounded-2xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-2xl"
             >
                Consult with R&D Team
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;
