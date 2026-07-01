import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { resources } from '../../data/resources';
import { Download, Search as SearchIcon, FileText, Box, Lamp, Building2, Ruler, ClipboardList, BookOpen, Table, Zap, Radio } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={18} />,
  Box: <Box size={18} />,
  Lamp: <Lamp size={18} />,
  Building2: <Building2 size={18} />,
  Ruler: <Ruler size={18} />,
  ClipboardList: <ClipboardList size={18} />,
  BookOpen: <BookOpen size={18} />,
  Table: <Table size={18} />,
  Zap: <Zap size={18} />,
  Radio: <Radio size={18} />,
  Cube: <Box size={18} />,
};

export function Resources() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(resources.map(r => r.category))];
  const filtered = resources.filter(r => {
    const matchSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'All' || r.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Resources</h1>
        <p className="text-sm text-white/50 mt-1">Downloads, templates, manuals, and production paperwork</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
          <input
            className="input-field pl-10"
            placeholder="Search resources..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors cursor-pointer ${
                category === c ? 'bg-gold-500/20 text-gold-400' : 'text-white/40 hover:text-white/70'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(r => (
          <GlassCard key={r.id}>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                {iconMap[r.icon] || <FileText size={18} className="text-gold-400" />}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm mb-1">{r.title}</h3>
                <p className="text-xs text-white/50 mb-2">{r.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/30">{r.fileSize}</span>
                  <button className="flex items-center gap-1 text-xs text-gold-400 hover:text-gold-300 transition-colors cursor-pointer">
                    <Download size={12} />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
