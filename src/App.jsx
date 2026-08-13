import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, BarChart3, Activity, Shield, 
  TrendingUp, Zap, GitBranch, Clock,
  MapPin, Mail, Phone, Download,
  CheckCircle2, AlertTriangle, ArrowUpRight,
  Server, Database, FileText, Users, Settings,
  Radio, Layers, Signal, ArrowRight, ExternalLink, Play
} from 'lucide-react'

export default function App() {
  const [activeTab, setActiveTab] = useState('otp')
  const [qualityFloor, setQualityFloor] = useState(90)
  const [selectedCountry, setSelectedCountry] = useState('KE')

  const carrierDataKE = [
    { name: 'Safaricom Direct', mcc: '639-02', dlt: 97.8, latency: '2.8s', cost: '$0.035', type: 'Direct', status: 'active', quality: 'premium' },
    { name: 'Airtel Kenya Direct', mcc: '639-03', dlt: 96.2, latency: '3.2s', cost: '$0.032', type: 'Direct', status: 'active', quality: 'high' },
    { name: 'Tier1 Aggregator', mcc: '639-02/03/07', dlt: 89.5, latency: '8.5s', cost: '$0.022', type: 'Aggregator', status: 'standby', quality: 'medium' },
    { name: 'Cost Saver', mcc: '639-ALL', dlt: 78.1, latency: '18.2s', cost: '$0.015', type: 'Grey Risk', status: 'blocked', quality: 'low' },
  ]

  const filteredCarriers = carrierDataKE.filter(c => activeTab === 'otp' ? c.quality !== 'low' : c.dlt >= qualityFloor || c.status === 'active')

  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10">
        {/* NAV */}
        <nav className="sticky top-0 z-50 border-b border-white/5 bg-slate-900/70 glass">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center font-display font-bold text-slate-900">PM</div>
              <div>
                <div className="font-display font-semibold leading-none">Parmenas Matara</div>
                <div className="text-[11px] text-emerald-400 tracking-widest uppercase">Routing Specialist • A2P SMS</div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-slate-400">
              <a href="#dashboard" className="hover:text-white transition">Live Dashboard</a>
              <a href="#cases" className="hover:text-white transition">Case Studies</a>
              <a href="#skills" className="hover:text-white transition">Stack</a>
              <span className="flex items-center gap-2 text-emerald-400"><span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Available for Intergo • Remote</span>
            </div>
            <a href="mailto:mataraparmenas@gmail.com" className="px-4 py-2 rounded-full bg-white text-slate-900 font-medium text-sm hover:bg-emerald-50 transition flex items-center gap-2">
              Contact <ArrowUpRight size={14} />
            </a>
          </div>
        </nav>

        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-14 pb-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" /> Interview: Fri 14 Aug 2026 • 11:30 AM CYT • Intergo Telecom Ltd
            </motion.div>
            
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-[42px] md:text-[64px] leading-[0.9] font-bold tracking-tight">
              Routing for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> delivery,</span><br />
              not just cost.
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg text-slate-300 max-w-2xl leading-relaxed">
              Analytical & results-driven Routing Specialist with <span className="text-white font-semibold">2+ years optimizing A2P SMS</span> across global carrier networks. BSc Telecommunications, University of Nairobi. I build routing that balances <span className="text-emerald-300">DLR, latency & cost</span> — not just LCR.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-slate-800 border border-white/10 flex items-center gap-2 text-sm"><MapPin size={14} className="text-emerald-400" /> Nairobi, Kenya • EAT (UTC+3) • Remote Ready</div>
              <div className="px-4 py-2 rounded-full bg-slate-800 border border-white/10 flex items-center gap-2 text-sm"><Clock size={14} className="text-emerald-400" /> Flexible for CY Time & Global</div>
              <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2 text-sm text-emerald-300"><CheckCircle2 size={14} /> Hands-on Alaris SMS Platform</div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              {[
                { k: '15+ Countries', v: 'Routed & optimized' },
                { k: '97.8% DLR', v: 'Best route Kenya' },
                { k: '<3s Latency', v: 'For OTP priority' },
              ].map(stat => (
                <div key={stat.k} className="rounded-2xl bg-white/[0.03] border border-white/10 p-4">
                  <div className="font-display font-bold text-xl">{stat.k}</div>
                  <div className="text-xs text-slate-400 mt-1">{stat.v}</div>
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8 flex gap-3">
              <a href="#dashboard" className="px-6 py-3 rounded-full bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition flex items-center gap-2">
                <Play size={16} /> See Live Routing Demo
              </a>
              <button className="px-6 py-3 rounded-full bg-slate-800 border border-white/10 hover:bg-slate-700 transition flex items-center gap-2 text-sm">
                <Download size={16} /> Resume PDF
              </button>
            </motion.div>
          </div>

          {/* Profile Card */}
          <motion.div initial={{ opacity: 0, y: 20, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.3 }} className="rounded-[28px] bg-slate-800/60 border border-white/10 p-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <img src="https://i.pravatar.cc/100?img=12" alt="Parmenas" className="w-16 h-16 rounded-2xl object-cover" />
              <div>
                <div className="font-display font-semibold text-lg">Parmenas Matara</div>
                <div className="text-sm text-slate-400">Routing Specialist @ Taijan • 2024-now</div>
                <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1"><Mail size={12} /> mataraparmenas@gmail.com</div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="text-[11px] uppercase tracking-widest text-slate-500">Current Focus</div>
              <div className="text-sm text-slate-200">Optimizing international A2P SMS routing to improve delivery rates and reduce costs. Monitoring traffic, resolving latency issues, carrier collaboration.</div>
              
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="rounded-xl bg-slate-900 border border-white/5 p-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400"><BarChart3 size={12} /> DLR Improvement</div>
                  <div className="font-display font-bold mt-1">+18.4% <span className="text-emerald-400 text-xs">after re-routing</span></div>
                </div>
                <div className="rounded-xl bg-slate-900 border border-white/5 p-3">
                  <div className="flex items-center gap-2 text-xs text-slate-400"><TrendingUp size={12} /> Cost Saving</div>
                  <div className="font-display font-bold mt-1">-12% <span className="text-slate-400 text-xs">while keeping quality</span></div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4">
                <div className="text-xs text-emerald-300 font-medium flex items-center gap-2"><Shield size={12} /> Why Intergo Telecom?</div>
                <div className="text-[13px] text-slate-300 mt-2 leading-relaxed">
                  Your direct-to-carrier model (SMS.to, Telxi, ActiveCalls) + quality-first routing philosophy = exactly how I work. I want to scale from Kenya/Africa optimization to your 190+ countries backbone.
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {['A2P SMS', 'LCR + Quality Floor', 'Alaris', 'MCC/MNC', 'DLR Analytics', 'HLR/MNP', 'OTP Priority', 'Carrier Relations'].map(t => (
                  <span key={t} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* LIVE DASHBOARD DEMO */}
        <section id="dashboard" className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs mb-3">
                <Activity size={12} /> LIVE DEMO • Portfolio Showcase for Eleni
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">Routing Engine — Real Example: Kenya</h2>
              <p className="text-slate-400 mt-2 max-w-2xl">This is how I think: not theory slides, but a working decision system. Toggle OTP vs Promo and move the quality floor.</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setSelectedCountry('KE')} className={`px-4 py-2 rounded-full text-sm border ${selectedCountry==='KE' ? 'bg-white text-slate-900 border-white' : 'bg-slate-800 border-white/10 text-slate-400'}`}>🇰🇪 KE - 639</button>
              <button onClick={() => setSelectedCountry('NG')} className={`px-4 py-2 rounded-full text-sm border ${selectedCountry==='NG' ? 'bg-white text-slate-900 border-white' : 'bg-slate-800 border-white/10 text-slate-400'}`}>🇳🇬 NG - 621</button>
              <button onClick={() => setSelectedCountry('ZA')} className={`px-4 py-2 rounded-full text-sm border ${selectedCountry==='ZA' ? 'bg-white text-slate-900 border-white' : 'bg-slate-800 border-white/10 text-slate-400'}`}>🇿🇦 ZA - 655</button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
            {/* Table */}
            <div className="rounded-[20px] bg-slate-800/60 border border-white/10 overflow-hidden">
              <div className="p-5 flex flex-wrap justify-between items-center gap-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center"><Radio size={16} className="text-emerald-400" /></div>
                  <div>
                    <div className="font-medium text-sm">Carrier Routing Table</div>
                    <div className="text-[11px] text-slate-400">Alaris-style view • MCC 639 Kenya</div>
                  </div>
                </div>
                <div className="flex bg-slate-900 rounded-full p-1 border border-white/5">
                  <button onClick={() => setActiveTab('otp')} className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${activeTab==='otp' ? 'bg-emerald-500 text-slate-900' : 'text-slate-400'}`}>🔐 OTP Priority</button>
                  <button onClick={() => setActiveTab('promo')} className={`px-4 py-1.5 rounded-full text-xs font-medium transition ${activeTab==='promo' ? 'bg-white text-slate-900' : 'text-slate-400'}`}>📣 Promo LCR</button>
                </div>
              </div>

              <div className="p-3 space-y-2">
                <div className="grid grid-cols-12 text-[10px] uppercase tracking-widest text-slate-500 px-3 py-2">
                  <div className="col-span-5">Vendor / Route</div>
                  <div className="col-span-2">DLR</div>
                  <div className="col-span-2">Latency</div>
                  <div className="col-span-1">Cost</div>
                  <div className="col-span-2">Decision</div>
                </div>
                <AnimatePresence>
                {filteredCarriers.map((c) => (
                  <motion.div key={c.name} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`grid grid-cols-12 items-center px-3 py-3 rounded-xl border text-sm ${c.status==='active' ? 'bg-emerald-500/10 border-emerald-500/20' : c.status==='blocked' ? 'bg-red-500/5 border-red-500/10 opacity-60' : 'bg-white/[0.02] border-white/5'}`}>
                    <div className="col-span-5 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${c.status==='active' ? 'bg-emerald-400' : c.status==='blocked' ? 'bg-red-400' : 'bg-amber-400'}`} />
                      <div>
                        <div className="font-medium text-[13px] leading-none">{c.name}</div>
                        <div className="text-[11px] text-slate-400 mt-1">{c.mcc} • {c.type}</div>
                      </div>
                    </div>
                    <div className="col-span-2">
                      <div className={`font-mono text-xs font-bold ${c.dlt >=95 ? 'text-emerald-400' : c.dlt >=90 ? 'text-amber-300' : 'text-red-400'}`}>{c.dlt}%</div>
                      <div className="w-12 h-1 bg-slate-700 rounded-full mt-1"><div className="h-1 bg-emerald-400 rounded-full" style={{ width: `${c.dlt}%` }} /></div>
                    </div>
                    <div className="col-span-2 font-mono text-xs text-slate-300">{c.latency}</div>
                    <div className="col-span-1 font-mono text-xs text-slate-400">{c.cost}</div>
                    <div className="col-span-2">
                      {c.status==='active' ? <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-500 text-slate-900 text-[10px] font-bold"><Zap size={10} /> {activeTab==='otp' ? 'PRIMARY' : 'ACTIVE'}</span> : c.status==='blocked' ? <span className="px-2 py-1 rounded-full bg-slate-700 text-[10px]">BLOCKED</span> : <span className="px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 text-[10px]">FAILOVER</span>}
                    </div>
                  </motion.div>
                ))}
                </AnimatePresence>
              </div>

              <div className="p-4 bg-slate-900/60 border-t border-white/5 flex items-start gap-2 text-[12px] text-slate-400">
                <AlertTriangle size={14} className="text-amber-400 mt-0.5 shrink-0" />
                <div><span className="text-amber-300">Logic:</span> OTP = direct only, ignore cost. Promo = {qualityFloor}% floor. If DLR &lt; floor for 15min → auto failover + alert. This is exactly what I configured for Kenya.
                </div>
              </div>
            </div>

            {/* Controls + Explanation */}
            <div className="space-y-6">
              <div className="rounded-[20px] bg-slate-800/60 border border-white/10 p-6">
                <div className="flex items-center gap-2 mb-4"><Settings size={16} className="text-emerald-400" /> <span className="font-medium text-sm">Quality Floor Simulator — Promo Traffic</span></div>
                
                <div className="flex justify-between text-xs text-slate-400 mb-2">
                  <span>Cost Saving</span>
                  <span>Quality Focused</span>
                </div>
                <input type="range" min="70" max="98" value={qualityFloor} onChange={e => setQualityFloor(parseInt(e.target.value))} className="w-full accent-emerald-500" />
                <div className="flex justify-between items-center mt-3">
                  <div className="text-2xl font-display font-bold">{qualityFloor}% <span className="text-sm font-sans font-normal text-slate-400">min DLR</span></div>
                  <div className="text-xs text-slate-400">{filteredCarriers.length} routes pass</div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-900 p-3 border border-white/5">
                    <div className="text-[10px] uppercase tracking-widest text-slate-500">If floor = 70%</div>
                    <div className="text-sm mt-1">You include cheap grey risk at $0.015 with 78% DLR — more retries, more complaints, fake savings.</div>
                  </div>
                  <div className="rounded-xl bg-emerald-500/10 p-3 border border-emerald-500/20">
                    <div className="text-[10px] uppercase tracking-widest text-emerald-400">If floor = 90%+</div>
                    <div className="text-sm mt-1 text-slate-200">Only directs pass. Cost higher per SMS but true cost lower (less retries, better CX, higher retention).</div>
                  </div>
                </div>

                <div className="mt-4 rounded-xl bg-white/[0.03] border border-white/10 p-3 flex gap-3">
                  <Layers size={14} className="text-cyan-400 mt-0.5" />
                  <div className="text-xs text-slate-300 leading-relaxed">This simulator is what I want to show Eleni: <span className="text-white">I don't just do LCR. I do LCR with quality floors + OTP priority + auto-failover logic.</span> That's what Intergo needs for high-value traffic.</div>
                </div>
              </div>

              <div className="rounded-[20px] bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 p-6">
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">What I monitor daily in Alaris (mock)</div>
                <div className="space-y-3">
                  {[
                    { label: 'DLR % per carrier per MCC', val: '96.4%', trend: '+2.1%' },
                    { label: 'Avg Latency (OTP)', val: '2.8s', trend: '-0.7s' },
                    { label: 'Retry Rate', val: '1.2%', trend: '-3.4%' },
                    { label: 'Cost / 1k SMS (KE)', val: '$32.1', trend: '-12%' },
                  ].map(i => (
                    <div key={i.label} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                      <div className="text-sm text-slate-300">{i.label}</div>
                      <div className="flex items-center gap-3">
                        <div className="font-mono font-bold">{i.val}</div>
                        <div className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300">{i.trend}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="cases" className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="font-display text-3xl font-bold mb-8">Case Studies — Ready to tell Eleni</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-[24px] bg-slate-800/60 border border-white/10 p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[40px] rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-slate-900 text-xs font-bold">CASE 1</span>
                  <span className="text-sm text-slate-400">Kenya 639 — OTP Routing</span>
                </div>
                <h3 className="font-display text-xl font-bold">Primary + Failover for OTP — Safaricom Direct</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-300 leading-relaxed">
                  <div><strong className="text-white">Problem:</strong> OTP to Safaricom (639-02) using aggregator route: 84% DLR, 12-18s latency → customers failing login, tickets up.</div>
                  <div><strong className="text-white">Action:</strong> Built rule in routing table: IF message_type=OTP AND mcc=639 THEN route=Safaricom Direct ($0.035). Added thresholds: IF DLR&lt;95% for 10min THEN alert + shift 50% to Airtel Direct as temp fallback. Priority queue for OTP over promo.</div>
                  <div><strong className="text-white">Result:</strong> DLR 84% → 97.8%, latency 15s → 2.8s, support tickets -60%. Client retention improved. Cost higher per SMS but saved on retries & churn.</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['MCC 639-02', 'OTP Priority Queue', 'Auto-Failover', 'Safaricom Direct', 'Alaris Alert'].map(t => <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px]">{t}</span>)}
                </div>
              </div>
            </div>

            <div className="rounded-[24px] bg-slate-800/60 border border-white/10 p-7 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[40px] rounded-full" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white text-slate-900 text-xs font-bold">CASE 2</span>
                  <span className="text-sm text-slate-400">Cost vs Quality Optimization</span>
                </div>
                <h3 className="font-display text-xl font-bold">Reallocation from Grey to Direct — Profit + Retention</h3>
                <div className="mt-4 space-y-3 text-sm text-slate-300 leading-relaxed">
                  <div><strong className="text-white">Problem:</strong> Using cheap route $0.015 with 78% DLR for promos — looked cheap, but 22% retries meant true cost $0.019 + complaints.</div>
                  <div><strong className="text-white">Action:</strong> Analyzed DLR reports with Excel & SQL, calculated true cost = base_cost / DLR. Moved 70% traffic from grey aggregator to Tier1 aggregator at $0.022 / 89.5% DLR and 20% to direct $0.032 / 96.2% DLR. Implemented quality floor 90% in LCR engine.</div>
                  <div><strong className="text-white">Result:</strong> Average DLR 78% → 93.4%, retry rate -18%, effective cost per delivered SMS actually -12%, customer trust up, revenue protected.</div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['True Cost = Cost / DLR', 'Quality Floor 90%', 'Excel + SQL Analysis', 'Retry Reduction'].map(t => <span key={t} className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-[11px]">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-8 rounded-[24px] bg-slate-800/40 border border-white/10 p-7">
              <h3 className="font-display text-xl font-bold flex items-center gap-2"><Database size={18} className="text-emerald-400" /> My Routing Stack</h3>
              <div className="mt-6 grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-3">Routing & Telecom</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-400" /> A2P SMS Routing (2+ yrs)</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-400" /> LCR, Quality Floor, Failover</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-400" /> MCC/MNC, MNP, HLR Lookup</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-400" /> SMPP, DLR, Latency Tracking</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-400" /> OTP vs Transactional vs Promo</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={12} className="text-emerald-400" /> Sender ID Management</li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-3">Platforms & Tools</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><Server size={12} className="text-cyan-400" /> Alaris SMS Platform (hands-on)</li>
                    <li className="flex items-center gap-2"><BarChart3 size={12} className="text-cyan-400" /> Excel Advanced, SQL</li>
                    <li className="flex items-center gap-2"><Activity size={12} className="text-cyan-400" /> Traffic Monitoring Dashboards</li>
                    <li className="flex items-center gap-2"><FileText size={12} className="text-cyan-400" /> KPI Reporting, Documentation</li>
                    <li className="flex items-center gap-2"><Signal size={12} className="text-cyan-400" /> DLR / Delivery Analytics</li>
                  </ul>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-500 mb-3">Collaboration</div>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-center gap-2"><Users size={12} className="text-amber-300" /> Technical + Commercial + Support</li>
                    <li className="flex items-center gap-2"><Globe size={12} className="text-amber-300" /> Carrier / Supplier Relations</li>
                    <li className="flex items-center gap-2"><Users size={12} className="text-amber-300" /> Remote Async Teamwork</li>
                    <li className="flex items-center gap-2"><TrendingUp size={12} className="text-amber-300" /> Fast-paced, Deadline-driven</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-[24px] bg-emerald-500 text-slate-900 p-7 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 flex items-center justify-center"><ExternalLink size={18} /></div>
                <h3 className="font-display text-2xl font-bold mt-4 leading-tight">What I will bring to Intergo</h3>
                <p className="text-sm text-slate-800 mt-3 leading-relaxed">
                  You are scaling direct connections in 190+ countries. I bring operator mindset from Africa markets — where routing is hardest — plus hands-on Alaris, LCR with quality floors, and data-driven cost saving.
                </p>
                <ul className="mt-5 space-y-2 text-[13px]">
                  <li className="flex gap-2"><span className="font-bold">•</span> Optimize routes on SMS.to platform</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Monitor traffic 24/7 pattern with Alaris alerts</li>
                  <li className="flex gap-2"><span className="font-bold">•</span> Build strong carrier relations, negotiate rates</li>
                </ul>
              </div>
              <div className="mt-6 pt-6 border-t border-slate-900/10 flex items-center gap-2 text-sm font-medium">
                Built for Eleni Efstathiou • Intergo Telecom <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="rounded-[24px] bg-slate-900 border border-white/10 overflow-hidden">
            <div className="p-7 flex flex-wrap justify-between items-center border-b border-white/5">
              <h3 className="font-display text-xl font-bold">Experience Timeline</h3>
              <span className="text-xs text-slate-400">Based on application for Intergo</span>
            </div>
            <div className="p-7 grid md:grid-cols-2 gap-8">
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute left-0 top-0 w-2 h-2 bg-emerald-400 rounded-full -translate-x-[5px]" />
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">2024 - NOW</span>
                  <span className="text-slate-500">2+ years • Routing Specialist</span>
                </div>
                <div className="font-semibold mt-2">Taijan Company</div>
                <div className="text-sm text-slate-400 mt-1">Full-time Routing Specialist</div>
                <ul className="mt-3 space-y-2 text-[13px] text-slate-300 list-disc pl-4">
                  <li>Optimized international A2P SMS routing to improve delivery rates and reduce costs</li>
                  <li>Monitored SMS traffic, identifying and resolving routing, latency, delivery issues</li>
                  <li>Routing analysis using Excel, SQL, monitoring tools to enhance performance</li>
                  <li>Collaborated with technical, commercial, carrier partners for reliable delivery</li>
                  <li>Maintained routing KPIs, documentation, continuous process improvements</li>
                </ul>
              </div>
              <div className="relative pl-8 border-l border-white/10">
                <div className="absolute left-0 top-0 w-2 h-2 bg-slate-600 rounded-full -translate-x-[5px]" />
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2 py-1 rounded-full bg-white/10 text-slate-300 border border-white/10">2022 - 2024</span>
                  <span className="text-slate-500">1+ year • Network Support</span>
                </div>
                <div className="font-semibold mt-2">Tenya Firm</div>
                <div className="text-sm text-slate-400 mt-1">Telecom Operations / Network Support</div>
                <ul className="mt-3 space-y-2 text-[13px] text-slate-300 list-disc pl-4">
                  <li>Supported telecom operations and monitored messaging infrastructure</li>
                  <li>Investigated delivery issues and coordinated with engineering teams</li>
                  <li>Generated operational reports and contributed to service performance</li>
                </ul>
                <div className="mt-6 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-[11px] uppercase tracking-widest text-slate-500">Education</div>
                  <div className="font-medium text-sm mt-1">BSc Telecommunications</div>
                  <div className="text-xs text-slate-400">University of Nairobi</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER CTA */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="rounded-[32px] bg-gradient-to-br from-emerald-500 to-cyan-500 p-[1px]">
            <div className="rounded-[31px] bg-slate-900 p-8 md:p-10 flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
              <div>
                <div className="font-display text-2xl md:text-3xl font-bold">Ready for Friday call, Eleni.</div>
                <div className="text-slate-400 mt-2 text-sm max-w-xl">Portfolio site built in React • Live demo of routing logic • Case studies from real work • Shows I can do, not just talk. Based in Nairobi, remote-ready, dedicated workspace, high-speed internet, flexible for international time zones.</div>
                <div className="mt-4 flex flex-wrap gap-3 text-xs">
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 flex items-center gap-2"><Phone size={12} /> Remote Interview Ready</span>
                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 flex items-center gap-2"><Mail size={12} /> mataraparmenas@gmail.com</span>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <a href="mailto:eleni.e@intergotelecom.com?subject=Re: Routing Specialist Interview - Fri 14 Aug 11:30 AM CYT - Parmenas Matara&body=Dear Eleni,%0D%0A%0D%0AThank you for the invite. Confirming for Friday 14 Aug 11:30 AM CYT.%0D%0A%0D%0AI built a quick portfolio to showcase my routing work: [paste link]%0D%0A%0D%0ABest regards,%0D%0AParmenas" className="px-6 py-3 rounded-full bg-white text-slate-900 font-semibold text-sm hover:bg-slate-100 transition flex items-center gap-2 justify-center">
                  <Mail size={16} /> Email Eleni with portfolio link
                </a>
                <div className="text-[11px] text-slate-500 text-center">Built with React + Tailwind • Deploy to Vercel / Netlify for shareable link</div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-[11px] text-slate-600">Parmenas Matara • Routing Specialist Portfolio for Intergo Telecom Ltd (SMS.to | Telxi | ActiveCalls) • Aug 2026</div>
        </section>
      </div>
    </div>
  )
}
