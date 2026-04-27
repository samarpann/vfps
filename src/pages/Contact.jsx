import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    interest: 'Select Plant Type',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate email sending
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        interest: 'Select Plant Type',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-24 px-4 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e3a8a]/20 skew-x-12 translate-x-1/2" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-black mb-6 leading-tight"
            >
              Let's Build Your Plant
            </motion.h1>
           <motion.p 
             initial={{ y: 20, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-2xl text-slate-300 max-w-3xl mx-auto font-medium"
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
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-black uppercase tracking-widest text-slate-700 ml-4">Full Name</label>
                       <input 
                         type="text" 
                         name="fullName"
                         value={formData.fullName}
                         onChange={handleChange}
                         placeholder="John Doe" 
                         required
                         className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-black uppercase tracking-widest text-slate-700 ml-4">Email Address</label>
                       <input 
                         type="email" 
                         name="email"
                         value={formData.email}
                         onChange={handleChange}
                         placeholder="john@example.com" 
                         required
                         className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all" 
                       />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-sm font-black uppercase tracking-widest text-slate-700 ml-4">Phone Number</label>
                       <input 
                         type="tel" 
                         name="phone"
                         value={formData.phone}
                         onChange={handleChange}
                         placeholder="+91 XXXX XXXXX" 
                         required
                         className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all" 
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-black uppercase tracking-widest text-slate-700 ml-4">Interest</label>
                       <select 
                         name="interest"
                         value={formData.interest}
                         onChange={handleChange}
                         className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                       >
                          <option disabled>Select Plant Type</option>
                          <option>Potato Chips Plant</option>
                          <option>Namkeen Plant</option>
                          <option>Extruder Lines</option>
                          <option>Other Machinery</option>
                       </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-black uppercase tracking-widest text-slate-700 ml-4">Your Message</label>
                     <textarea 
                       rows="5" 
                       name="message"
                       value={formData.message}
                       onChange={handleChange}
                       placeholder="Tell us about your project requirements..." 
                       required
                       className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-[#1e3a8a] transition-all"
                     ></textarea>
                  </div>
                   <button 
                     type="submit"
                     disabled={status === 'sending'}
                     className="w-full bg-[#1e3a8a] text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-blue-800 transition-all active:scale-95 flex items-center justify-center gap-3 disabled:opacity-50"
                   >
                     {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Inquiry'}
                     <Send size={20} />
                   </button>
                   {status === 'success' && (
                     <p className="text-green-600 text-center font-bold mt-4">Thank you! We will get back to you soon.</p>
                   )}
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
                         <p className="text-slate-900 font-medium leading-relaxed max-w-xs">
                           Plot no. 08 khasra no.13 Mainapur indl. area <br />
                           Behind Vaishno Dharam kanta, <br />
                            Meerut Road, Ghaziabad U.P. 201003
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-3xl bg-green-50 flex items-center justify-center text-green-600 shrink-0 group-hover:scale-110 transition-transform">
                         <Phone size={32} />
                      </div>
                      <div>
                         <h3 className="text-xl font-extrabold text-slate-900 mb-2">Direct Contact</h3>
                         <p className="text-slate-900 font-bold leading-relaxed">
                           +91 98108 03491 <br />
                           +91 74174 17435 <br />
                            +91 82850 12432
                         </p>
                      </div>
                   </div>

                   <div className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 shrink-0 group-hover:scale-110 transition-transform">
                         <Mail size={32} />
                      </div>
                      <div>
                         <h3 className="text-xl font-extrabold text-slate-900 mb-2">Email & Web</h3>
                         <p className="text-slate-900 font-medium leading-relaxed">
                           vermafoodsales@gmail.com <br />
                           www.vermafoodsystem.in
                         </p>
                      </div>
                   </div>
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
