import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  const [showToast, setShowToast] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mailUser = "metehan_bacak";
    const mailDomain = "hotmail.de";
    const fullMailAddress = `${mailUser}@${mailDomain}`;
    
    const subject = encodeURIComponent("Angebotsanfrage: " + formData.name);
    const body = encodeURIComponent(
        "Name: " + formData.name + "\n" +
        "E-Mail: " + formData.email + "\n\n" +
        "Anfrage:\n" + formData.message
    );

    window.location.href = `mailto:${fullMailAddress}?subject=${subject}&body=${body}`;
    
    setShowToast(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-900 text-white rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-20 -mr-48 -mt-48" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 tracking-tight relative z-10"
          >
            Bereit für den neuen Glanz?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 mb-16 max-w-xl mx-auto relative z-10"
          >
            Lassen Sie uns über Ihr Projekt sprechen.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10 mb-16">
            <motion.a
                whileHover={{ scale: 1.02 }}
                href="tel:+491737178468"
                className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group flex flex-col items-center"
            >
              <Phone className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={24} />
              <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">Telefon</span>
              <span className="text-xl font-bold tracking-tight text-white">+49 173 717 84 68</span>
            </motion.a>
            <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-colors group flex flex-col items-center"
            >
              <Mail className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={24} />
              <span className="block text-gray-500 text-[10px] font-bold uppercase tracking-widest mb-2">E-Mail</span>
              <span className="text-lg font-bold tracking-tight text-blue-400 break-all">metehan_bacak@hotmail.de</span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white text-gray-900 p-10 md:p-16 rounded-[3.5rem] text-left shadow-2xl relative z-10"
          >
            <h3 className="text-2xl font-bold mb-8 tracking-tight">Nachricht senden</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input 
                    id="name"
                    type="text" 
                    placeholder="Ihr Name" 
                    required 
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-400" 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="sr-only">E-Mail</label>
                  <input 
                    id="email"
                    type="email" 
                    placeholder="Ihre E-Mail" 
                    required 
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-400" 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="sr-only">Ihre Nachricht</label>
                <textarea 
                  id="message"
                  placeholder="Was können wir für Sie tun? (z.B. Unterhaltsreinigung, Fenster, etc.)" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full bg-gray-50 border-none rounded-2xl p-5 focus:ring-2 focus:ring-blue-600 outline-none h-40 resize-none placeholder:text-gray-400" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 active:scale-95"
              >
                <span>Angebot anfordern</span>
                <Send size={20} aria-hidden="true" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 100, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 100, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[100]"
          >
            <div className="bg-gray-900 text-white px-8 py-4 rounded-3xl shadow-2xl flex items-center space-x-4 border border-white/10">
              <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                <CheckCircle2 size={20} className="text-white" />
              </div>
              <span className="font-medium">Anfrage wurde vorbereitet!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
