import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e3a8a]/20 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
           <motion.h1 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             className="text-5xl md:text-7xl font-extrabold mb-6"
           >
             Let's Build Your <span className="text-blue-400">Plant</span>
           </motion.h1>
           <motion.p 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-xl text-slate-400 max-w-2xl mx-auto"
           >
             Reach out to our engineering experts for customized machinery solutions and detailed price quotes.
           </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              {/* Form */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="bg-white p-10 md:p-16 rounded-[4rem] shadow-3xl border border-slate-100"
              >
                <h2 className="text-3xl font-extrabold text-slate-900 mb-10">Inquiry Form</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
                       <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
                       <input type="tel" placeholder="+91 XXXX XXXXX" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Interest</label>
                       <select className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all">
                          <option>Select Plant Type</option>
                          <option>Potato Chips Plant</option>
                          <option>Namkeen Plant</option>
                          <option>Extruder Lines</option>
                          <option>Other Machinery</option>
                       </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-4">Your Message</label>
                     <textarea rows="5" placeholder="Tell us about your project requirements..." className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all"></textarea>
                  </div>
                  <button className="w-full bg-[#1e3a8a] text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-800 transition-all active:scale-95 flex items-center justify-center gap-3">
                    Send Inquiry <Send size={20} />
                  </button>
                </form>
              </motion.div>

              {/* Info */}
              <div className="flex flex-col gap-12">
                 <div className="space-y-12">
                   <div className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-3xl bg-blue-50 flex items-center justify-center text-[#1e3a8a] shrink-0 group-hover:scale-110 transition-transform">
                         <MapPin size={32} />
                      </div>
                      <div>
                         <h3 className="text-xl font-extrabold text-slate-900 mb-2">Our Headquarters</h3>
                         <p className="text-slate-500 leading-relaxed max-w-xs">
                           Plot No. 123, Industrial Area Phase II, <br />
                           New Delhi, India - 1100XX
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-3xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 group-hover:scale-110 transition-transform">
                         <Phone size={32} />
                      </div>
                      <div>
                         <h3 className="text-xl font-extrabold text-slate-900 mb-2">Direct Contact</h3>
                         <p className="text-slate-500 leading-relaxed">
                           +91 98XXX XXXXX <br />
                           +91 99XXX XXXXX
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-110 transition-transform">
                         <Mail size={32} />
                      </div>
                      <div>
                         <h3 className="text-xl font-extrabold text-slate-900 mb-2">Email Inquiries</h3>
                         <p className="text-slate-500 leading-relaxed">
                           info@vfp-system.com <br />
                           sales@vfp-system.com
                         </p>
                      </div>
                   </div>
                 </div>

                 {/* Map Placeholder */}
                 <div className="flex-grow aspect-video bg-slate-100 rounded-[3rem] overflow-hidden relative shadow-inner border border-slate-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="text-center space-y-4">
                          <MapPin size={48} className="mx-auto text-slate-300" />
                          <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Interactive Map Loading...</p>
                       </div>
                    </div>
                    {/* Real map would go here */}
                 </div>

                 <div className="bg-[#25D366] text-white p-10 rounded-[3rem] flex items-center justify-between shadow-2xl hover:scale-[1.02] transition-transform cursor-pointer">
                    <div className="space-y-2">
                       <h4 className="text-2xl font-black">Fast Support?</h4>
                       <p className="font-medium opacity-90">Chat with us on WhatsApp for instant replies.</p>
                    </div>
                    <MessageCircle size={48} fill="currentColor" />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
