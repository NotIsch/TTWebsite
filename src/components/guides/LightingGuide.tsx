import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { lightingGuides, visualiserGuides } from '../../data/guides';
import { Lightbulb, Monitor, ChevronDown, ChevronRight, Star, Film } from 'lucide-react';

export function LightingGuide() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [favourites, setFavourites] = useState<string[]>([]);

  const toggleFav = (id: string) => {
    setFavourites(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Technical Guides</h1>
        <p className="text-sm text-white/50 mt-1">ETC EOS Ion Lighting Console Reference</p>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Lightbulb size={16} className="text-gold-400" />
        <span className="text-xs font-medium text-white/40 uppercase tracking-wider">ETC EOS Ion Programming Guide</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {lightingGuides.map(section => (
          <GlassCard key={section.id}>
            <div className="flex items-start justify-between mb-3">
              <button
                onClick={() => setExpanded(expanded === section.id ? null : section.id)}
                className="flex items-center gap-2 flex-1 cursor-pointer"
              >
                {expanded === section.id ? <ChevronDown size={16} className="text-gold-400" /> : <ChevronRight size={16} className="text-gold-400" />}
                <h3 className="font-semibold text-left">{section.title}</h3>
              </button>
              <button onClick={() => toggleFav(section.id)} className="p-1 hover:bg-white/5 rounded transition-colors cursor-pointer">
                <Star size={14} className={favourites.includes(section.id) ? 'text-gold-400 fill-gold-400' : 'text-white/30'} />
              </button>
            </div>

            <p className="text-sm text-white/60">{section.content}</p>

            {expanded === section.id && section.subsections && (
              <div className="mt-4 space-y-3 border-t border-white/5 pt-4">
                {section.subsections.map(sub => (
                  <div key={sub.title} className="glass-light rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gold-400 mb-1">{sub.title}</h4>
                    <p className="text-xs text-white/50 leading-relaxed">{sub.content}</p>
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        ))}
      </div>

      <div className="border-t border-white/5 pt-8 mt-8">
        <div className="flex items-center gap-2 mb-4">
          <Monitor size={16} className="text-gold-400" />
          <span className="text-xs font-medium text-white/40 uppercase tracking-wider">Lighting Visualiser - Blender + BlenderDMX</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {visualiserGuides.map(section => (
            <GlassCard key={section.id}>
              <div className="flex items-start justify-between mb-3">
                <button
                  onClick={() => setExpanded(expanded === section.id ? null : section.id)}
                  className="flex items-center gap-2 flex-1 cursor-pointer"
                >
                  {expanded === section.id ? <ChevronDown size={16} className="text-gold-400" /> : <ChevronRight size={16} className="text-gold-400" />}
                  <h3 className="font-semibold text-left">{section.title}</h3>
                </button>
                <button onClick={() => toggleFav(section.id)} className="p-1 hover:bg-white/5 rounded transition-colors cursor-pointer">
                  <Star size={14} className={favourites.includes(section.id) ? 'text-gold-400 fill-gold-400' : 'text-white/30'} />
                </button>
              </div>

              <p className="text-sm text-white/60">{section.content}</p>

              {expanded === section.id && section.subsections && (
                <div className="mt-4 space-y-3 border-t border-white/5 pt-4">
                  {section.subsections.map(sub => (
                    <div key={sub.title} className="glass-light rounded-lg p-3">
                      <h4 className="text-sm font-medium text-gold-400 mb-1">{sub.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed">{sub.content}</p>
                    </div>
                  ))}
                </div>
              )}
            </GlassCard>
          ))}
        </div>

        <div className="mt-8">
          <GlassCard>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Film size={16} className="text-gold-400" />
              Video Tutorials
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['ETC EOS Basics', 'BlenderDMX Setup', 'Cue Programming'].map(video => (
                <div key={video} className="glass-light rounded-xl p-4 text-center cursor-pointer hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-3">
                    <Film size={22} className="text-red-400" />
                  </div>
                  <p className="text-sm font-medium">{video}</p>
                  <p className="text-xs text-white/40 mt-1">Watch tutorial</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
