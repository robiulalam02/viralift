"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Copy, Search, Youtube, Layout, AlertCircle, CheckCircle2, Instagram, Facebook, Rocket } from 'lucide-react';
import { toast } from 'sonner';

type Platform = 'youtube' | 'instagram' | 'facebook';

export default function HeroMain() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [platform, setPlatform] = useState<Platform>('youtube');

  const [errorModal, setErrorModal] = useState({ show: false, title: '', message: '' });

  // Platform Styling Config
  const platformConfig = {
    youtube: { color: 'bg-red-600', hover: 'hover:bg-red-500', text: 'Titles' },
    instagram: { color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600', hover: 'opacity-90', text: 'Captions' },
    facebook: { color: 'bg-blue-600', hover: 'hover:bg-blue-500', text: 'Hooks' }
  };

  const handleGenerate = async () => {
    const cleanedTopic = topic.trim().replace(/[.\-_]/g, "");
    if (!topic.trim() || cleanedTopic.length < 3) {
      setErrorModal({
        show: true,
        title: "Valid Topic Required",
        message: `To generate viral ${platformConfig[platform].text}, we need a real subject!`
      });
      return;
    }

    setLoading(true);
    setResults(null);

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic: topic.trim(), platform }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setResults(data);
      toast.success(`${platform.toUpperCase()} Assets Ready!`);
    } catch (err: any) {
      toast.error(err.message || "Network Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* 1. Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-medium inline-flex items-center gap-2 mb-4">
          <Rocket size={14} /> Skyrocket Your Social Reach
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
          Rank #1 on <br className="md:hidden" />
          <TypewriterText />
          <br />
          With One Click
        </h1>

        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Generate viral {platformConfig[platform].text.toLowerCase()},
          high-impact visual hooks, and SEO-optimized assets tailored for
          the {platform} algorithm.
        </p>
      </motion.div>

      {/* 2. Platform Selector */}
      <div className="flex justify-center mb-8">
        <div className="glass-card p-1 rounded-2xl flex gap-1 border-white/5">
          {(['youtube', 'instagram', 'facebook'] as Platform[]).map((p) => (
            <button
              key={p}
              onClick={() => { setPlatform(p); setResults(null); }}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${platform === p ? 'bg-white/10 text-white shadow-xl' : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              {p === 'youtube' && <Youtube size={18} className={platform === p ? "text-red-500" : ""} />}
              {p === 'instagram' && <Instagram size={18} className={platform === p ? "text-pink-500" : ""} />}
              {p === 'facebook' && <Facebook size={18} className={platform === p ? "text-blue-500" : ""} />}
              <span className="capitalize">{p}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Input Area */}
      <section className="max-w-3xl mx-auto mb-20">
        <div className="glass-card p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 border-white/10">
          <input
            type="text"
            placeholder={`Enter your ${platform} topic...`}
            className="flex-1 bg-transparent px-6 py-4 outline-none text-white placeholder:text-slate-500"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <button
            onClick={handleGenerate}
            disabled={loading}
            className={`${platformConfig[platform].color} ${platformConfig[platform].hover} text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50`}
          >
            {loading ? <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white" /> : <Zap size={18} />}
            {loading ? "Magic in progress..." : "Generate Assets"}
          </button>
        </div>
      </section>

      {/* 4. Results */}
      <AnimatePresence mode="wait">
        {results && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ResultCard title={`${platformConfig[platform].text}`} icon={platform === 'youtube' ? <Youtube className="text-red-500" /> : platform === 'instagram' ? <Instagram className="text-pink-500" /> : <Facebook className="text-blue-500" />} content={results.titles} isList />
            <ResultCard title="Visual Hooks" icon={<Layout className="text-blue-500" />} content={results.thumbnailTexts} isList />
            <ResultCard title="SEO Keywords" icon={<Search className="text-green-500" />} content={results.tags} />
            <ResultCard title="Hashtags" icon={<Sparkles className="text-purple-500" />} content={results.hashtags} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. Error Modal (Existing logic) */}
      <AnimatePresence>
        {errorModal.show && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setErrorModal({ ...errorModal, show: false })} className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
            <div className="glass-card relative w-full max-w-sm p-8 rounded-3xl border border-white/10 shadow-2xl text-center bg-slate-900">
              <AlertCircle size={32} className="mx-auto mb-4 text-red-500" />
              <h3 className="text-2xl font-bold text-white mb-2">{errorModal.title}</h3>
              <p className="text-slate-400 text-sm mb-8">{errorModal.message}</p>
              <button onClick={() => setErrorModal({ ...errorModal, show: false })} className="w-full bg-white text-black py-4 rounded-2xl font-bold">Got it</button>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ResultCard({ title, icon, content, isList = false }: any) {
  const copyToClipboard = () => {
    const text = Array.isArray(content) ? content.join('\n') : content;
    navigator.clipboard.writeText(text);
    toast.success(`${title} copied!`, {
      icon: <CheckCircle2 size={16} className="text-green-500" />,
      style: { background: '#020617', border: '1px solid #1e293b', color: 'white' }
    });
  };

  return (
    <div className="glass-card p-6 rounded-2xl relative group hover:border-white/20 transition-all">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 font-bold text-slate-200 uppercase text-xs tracking-widest">
          {icon} {title}
        </div>
        <button onClick={copyToClipboard} className="text-slate-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg">
          <Copy size={18} />
        </button>
      </div>
      <div className="text-slate-400 text-sm space-y-2">
        {isList ? content.map((item: string, i: number) => (
          <div key={i} className="bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
            {item}
          </div>
        )) : <div className="bg-white/5 p-3 rounded-lg border border-white/5 break-words">{content}</div>
        }
      </div>
    </div>
  );
}


function TypewriterText() {
  const words = ["YouTube", "Instagram", "Facebook"];
  const colors = ["text-red-600", "text-pink-500", "text-blue-600"];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Changes every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className={`inline-block font-black ${colors[index]}`}
    >
      {words[index]}
    </motion.span>
  );
}