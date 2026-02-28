import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, Users, Laptop, MapPin, BrainCircuit, ArrowLeft, Send, AlertTriangle, BookOpen } from 'lucide-react';

export default function NextGenAI_Hackathon() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // FORMA STATE
  const [formData, setFormData] = useState({
    teamName: '', schoolName: '', direction: '',
    leaderName: '', phone: '+998 ', telegram: '',
    member2: '', member3: '', member4: '' // 4-chi a'zo ixtiyoriy
  });
  const [errors, setErrors] = useState({});

  // Telefon maskasi
  const handlePhoneChange = (e) => {
    let val = e.target.value.replace(/\D/g, "");
    if (!val.startsWith("998")) val = "998" + val;
    val = val.slice(0, 12);
    
    let res = "+998 ";
    if (val.length > 3) res += "(" + val.substring(3, 5);
    if (val.length > 5) res += ") " + val.substring(5, 8);
    if (val.length > 8) res += "-" + val.substring(8, 10);
    if (val.length > 10) res += "-" + val.substring(10, 12);
    
    setFormData({ ...formData, phone: res });
    if (res.length >= 19) setErrors(prev => ({...prev, phone: false}));
  };

  const validate = () => {
    let errs = {};
    if (step === 1) {
      if (!formData.teamName.trim()) errs.teamName = "Jamoa nomini kiriting";
      if (!formData.schoolName.trim()) errs.schoolName = "Maktabingizni kiriting";
      if (!formData.direction) errs.direction = "Yo'nalishni tanlang";
    } else if (step === 2) {
      if (!formData.leaderName.trim()) errs.leaderName = "Sardor ismini kiriting";
      if (formData.phone.length < 19) errs.phone = "Raqamni to'liq kiriting";
      if (!formData.telegram.trim()) errs.telegram = "Username kiriting";
    } else if (step === 3) {
      if (!formData.member2.trim()) errs.member2 = "Ism-sharif kiriting";
      if (!formData.member3.trim()) errs.member3 = "Ism-sharif kiriting";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validate()) setStep(step + 1);
  };

  const handleSubmit = async () => {
    if (validate()) {
      if (loading) return;
      setLoading(true);

      const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyf6m-oYJVArbPk2DPLKI-YGG7ElYYuna-2aGc6mba6qHaycNfSnzxnSaayLo_oudj8Qw/exec";

      try {
        await fetch(SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', 
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        setLoading(false);
        setStep(4); 
      } catch (error) {
        setLoading(false);
        alert("Xatolik! Jadvalga ulanib bo'lmadi.");
      }
    }
  };  

  useEffect(() => {
    const target = new Date("March 25, 2026 09:00:00").getTime();
    const interval = setInterval(() => {
      const distance = target - new Date().getTime();
      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
        minutes: Math.max(0, Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))),
        seconds: Math.max(0, Math.floor((distance % (1000 * 60)) / 1000)),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#020817] text-white font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto p-6 md:p-10">
        <header className="flex flex-col md:flex-row justify-between items-center border-b border-white/10 pb-10 mb-12 gap-8">
          <div className="flex flex-col gap-6">
             <div className="flex items-center gap-4">
                <div className="h-12 w-px  bg-blue-500 hidden md:block" />
                <div>
                   <p className="text-[9px] font-black tracking-[0.4em] text-blue-400 uppercase italic">Mas'ul Ijrochilar:</p>
                   <h3 className="text-xs font-bold text-white uppercase tracking-tight">Yangi O'zbekiston Universiteti & Muhammad al-Xorazmiy maktabi</h3>
                </div>
             </div>
             <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] uppercase italic">
                NEXT GEN. <br /> <span className="text-blue-500">AI HACKATHON</span>
             </h1>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
             <div className="flex flex-col items-center md:items-end gap-2">
                <div className="flex items-center gap-2 px-4 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                   <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                   <span className="text-[10px] font-black text-green-500 tracking-[0.2em] uppercase italic">Registration Open</span>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-[1px] rounded-3xl shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                    <div className="bg-[#020817] px-8 py-4 rounded-3xl flex gap-6 font-mono text-white">
                      {[{l:'KUN',v:timeLeft.days}, {l:'SOAT',v:timeLeft.hours}, {l:'MIN',v:timeLeft.minutes}, {l:'SEK',v:timeLeft.seconds}].map((t,i)=>(
                        <div key={i} className="text-center min-w-[50px]">
                          <p className="text-4xl font-black">{String(t.v).padStart(2,'0')}</p>
                          <p className="text-[8px] font-bold text-blue-500 tracking-widest uppercase">{t.l}</p>
                        </div>
                      ))}
                    </div>
                </div>
             </div>
             <div className="text-right">
                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center justify-end gap-2"><MapPin size={12} /> Toshkent shahri</p>
                <p className="text-sm font-bold text-gray-300 italic">25-26-mart, 2026-yil</p>
             </div>
          </div>
        </header>

        <main className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
  <div className="bg-white/[0.03] border border-white/10 p-8 rounded-[2.5rem] backdrop-blur-sm">
      <h3 className="text-blue-400 text-xs font-black tracking-[0.2em] mb-6 flex items-center gap-2 italic uppercase">
        <BrainCircuit size={16} /> Tanlov Yo'nalishlari
      </h3>
      <div className="space-y-4">
        {[
          {t: "AI & Automation", d: "Sun’iy intellekt va aqlli yechimlar."},
          {t: "EdTech", d: "Ta’lim sifati va innovatsion o‘qitish."},
          {t: "HealthTech", d: "Tibbiy raqamli vositalar."},
          {t: "IT Solutions", d: "Ijtimoiy va biznes muammolar."}
        ].map((item, i) => (
          <div key={i} className="group p-3 rounded-2xl hover:bg-white/5 transition-all border-l-2 border-transparent hover:border-blue-500">
             <p className="text-[11px] font-black text-blue-500 uppercase italic">{item.t}</p>
             <p className="text-[10px] text-gray-400 font-medium leading-relaxed">{item.d}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
        {/* NOUTBUK HAQIDA OGOHLANTIRISH */}
        <div className="flex items-center gap-4 bg-red-500/10 p-4 rounded-2xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
          <Laptop size={20} className="text-red-500 shrink-0 animate-pulse" />
          <p className="text-[10px] font-black text-white uppercase italic tracking-tighter">
            MUHIM: Har bir ishtirokchi o'zi bilan <span className="text-red-500">noutbuk</span> olib kelishi shart!
          </p>
        </div>

        <div className="flex items-center gap-4 bg-blue-500/10 p-4 rounded-2xl border border-blue-500/20">
          <AlertTriangle size={20} className="text-blue-400 shrink-0" />
          <p className="text-[10px] font-black text-white uppercase italic tracking-tighter">
            Faqat 10-11-sinf o'quvchilari uchun
          </p>
        </div>
      </div>
  </div>
</div>

          <div className="lg:col-span-7">
            <div className={`bg-[#0b1121]/80 backdrop-blur-xl border ${Object.keys(errors).length > 0 ? 'border-red-500/40' : 'border-blue-500/20'} rounded-[3rem] p-8 md:p-12 shadow-2xl relative transition-all duration-300`}>
                <div className="mb-10 flex justify-between items-end">
                   <div className="w-12 h-1 bg-blue-500 rounded-full" />
                   <span className="text-5xl font-black italic text-white/5 select-none uppercase tracking-tighter">Step 0{step}</span>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                             <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">Jamoa Nomi *</label>
                             <input value={formData.teamName} onChange={(e)=>{setFormData({...formData, teamName: e.target.value}); if(e.target.value) setErrors({...errors, teamName: null})}} type="text" placeholder="G'oliblar Jamoasi" className={`w-full bg-white/5 border ${errors.teamName ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-blue-500 outline-none transition-all uppercase text-xs font-bold`} />
                             {errors.teamName && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.teamName}</p>}
                          </div>
                          <div className="space-y-2">
                             <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">Maktab / Sinv *</label>
                             <input value={formData.schoolName} onChange={(e)=>{setFormData({...formData, schoolName: e.target.value}); if(e.target.value) setErrors({...errors, schoolName: null})}} type="text" placeholder="Masalan: 5-maktab, 11-B" className={`w-full bg-white/5 border ${errors.schoolName ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold uppercase`} />
                             {errors.schoolName && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.schoolName}</p>}
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">Loyiha Yo'nalishi *</label>
                          <select value={formData.direction} onChange={(e)=>{setFormData({...formData, direction: e.target.value}); setErrors({...errors, direction: null})}} className={`w-full bg-white/5 border ${errors.direction ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-black uppercase text-blue-500`}>
                            <option value="" className="bg-[#0b1121]">Yo'nalishni tanlang</option>
                            <option value="AI" className="bg-[#0b1121]">AI & Automation</option>
                            <option value="EdTech" className="bg-[#0b1121]">EdTech (Ta'lim)</option>
                            <option value="HealthTech" className="bg-[#0b1121]">HealthTech (Tibbiyot)</option>
                            <option value="IT" className="bg-[#0b1121]">IT Solutions (Ijtimoiy/Biznes)</option>
                          </select>
                          {errors.direction && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.direction}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                      <div className="space-y-2">
                         <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">Jamoa Sardori F.I.Sh. *</label>
                         <input value={formData.leaderName} onChange={(e)=>{setFormData({...formData, leaderName: e.target.value}); if(e.target.value) setErrors({...errors, leaderName: null})}} type="text" placeholder="Sardor Ism-Sharifi" className={`w-full bg-white/5 border ${errors.leaderName ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold uppercase`} />
                         {errors.leaderName && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.leaderName}</p>}
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">Telefon Raqam *</label>
                           <input value={formData.phone} onChange={handlePhoneChange} type="tel" className={`w-full bg-white/5 border ${errors.phone ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold font-mono`} />
                           {errors.phone && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.phone}</p>}
                        </div>
                        <div className="space-y-2">
                           <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">Telegram Username *</label>
                           <div className="relative">
                             <Send size={14} className={`absolute left-5 top-1/2 -translate-y-1/2 ${errors.telegram ? 'text-red-500' : 'text-blue-500'}`} />
                             <input value={formData.telegram} onChange={(e)=>{setFormData({...formData, telegram: e.target.value}); if(e.target.value) setErrors({...errors, telegram: null})}} type="text" placeholder="@username" className={`w-full bg-white/5 border ${errors.telegram ? 'border-red-500' : 'border-white/10'} p-5 pl-12 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold`} />
                           </div>
                           {errors.telegram && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.telegram}</p>}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div key="s3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                        <div className="space-y-2">
                           <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">2-Ishtirokchi F.I.Sh. *</label>
                           <input value={formData.member2} onChange={(e)=>{setFormData({...formData, member2: e.target.value}); if(e.target.value) setErrors({...errors, member2: null})}} type="text" placeholder="Ism-Sharifi" className={`w-full bg-white/5 border ${errors.member2 ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold uppercase`} />
                           {errors.member2 && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.member2}</p>}
                        </div>
                        <div className="space-y-2">
                           <label className="text-[9px] font-black text-gray-500 uppercase ml-2 tracking-widest">3-Ishtirokchi F.I.Sh. *</label>
                           <input value={formData.member3} onChange={(e)=>{setFormData({...formData, member3: e.target.value}); if(e.target.value) setErrors({...errors, member3: null})}} type="text" placeholder="Ism-Sharifi" className={`w-full bg-white/5 border ${errors.member3 ? 'border-red-500' : 'border-white/10'} p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold uppercase`} />
                           {errors.member3 && <p className="text-[9px] text-red-500 font-black italic ml-2 uppercase font-mono">! {errors.member3}</p>}
                        </div>
                        <div className="space-y-2 opacity-70">
                           <label className="text-[9px] font-black text-gray-400 uppercase ml-2 tracking-widest">4-Ishtirokchi (Ixtiyoriy)</label>
                           <input value={formData.member4} onChange={(e)=>setFormData({...formData, member4: e.target.value})} type="text" placeholder="F.I.Sh." className="w-full bg-white/5 border border-white/5 p-5 rounded-2xl focus:border-blue-500 outline-none transition-all text-xs font-bold uppercase" />
                        </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div key="s4" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-10">
                        <div className="w-20 h-20 bg-blue-500/10 border-2 border-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
                          <CheckCircle2 size={32} className="text-blue-500" />
                        </div>
                        <h2 className="text-3xl font-black italic uppercase tracking-tighter">Muvaffaqiyatli!</h2>
                        <p className="text-[10px] text-gray-500 mt-4 uppercase tracking-[0.2em]">Arizangiz qabul qilindi. Tez orada bog'lanamiz.</p>
                        <button onClick={() => {setStep(1); setFormData({teamName:'', schoolName:'', direction:'', leaderName:'', phone:'+998 ', telegram:'', member2:'', member3:'', member4:''})}} className="mt-8 text-[10px] font-black uppercase text-blue-500 hover:text-white transition-colors">Yangi ariza</button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {step < 4 && (
                  <div className="mt-12 flex gap-4">
                     {step > 1 && (
                       <button onClick={() => setStep(step - 1)} className="flex-1 border border-white/10 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-2 italic">
                         <ArrowLeft size={14} /> Orqaga
                       </button>
                     )}
                     <button 
                       onClick={step === 3 ? handleSubmit : handleNext} 
                       disabled={loading}
                       className="flex-[2] bg-blue-600 hover:bg-blue-500 py-5 rounded-2xl font-black text-white text-[10px] tracking-[0.3em] uppercase transition-all shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 italic disabled:opacity-50"
                     >
                       {loading ? "YUBORILMOQDA..." : (step === 3 ? "Ro'yxatdan o'tish" : "Davom etish")}
                       {!loading && <ChevronRight size={16} />}
                     </button>
                  </div>
                )}
            </div>
          </div>
        </main>

        <footer className="mt-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center opacity-30 gap-6">
            <p className="text-[9px] font-black uppercase tracking-[0.4em]">Next Gen. AI Hackathon // 2026</p>
            <div className="flex gap-10 text-center md:text-right">
               <span className="text-[9px] font-bold uppercase tracking-widest italic">Yangi O'zbekiston Universiteti</span>
               <span className="text-[9px] font-bold uppercase tracking-widest italic">Muhammad al-Xorazmiy maktabi</span>
            </div>
        </footer>
      </div>
    </div>
  );
}