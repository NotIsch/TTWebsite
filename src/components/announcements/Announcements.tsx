import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { announcements } from '../../data/announcements';
import { Megaphone, Wrench, FolderOpen, GraduationCap } from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  production: <Megaphone size={14} />,
  equipment: <Wrench size={14} />,
  resources: <FolderOpen size={14} />,
  training: <GraduationCap size={14} />,
};

const categoryLabels: Record<string, string> = {
  production: 'Production',
  equipment: 'Equipment',
  resources: 'Resources',
  training: 'Training',
};

const categoryVariants: Record<string, 'purple' | 'blue' | 'green' | 'gold'> = {
  production: 'purple',
  equipment: 'blue',
  resources: 'green',
  training: 'gold',
};

export function Announcements() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Announcements</h1>
        <p className="text-sm text-white/50 mt-1">Production schedules, maintenance updates, and training opportunities</p>
      </div>

      <div className="space-y-4">
        {announcements.map((a, i) => (
          <GlassCard key={a.id} className="animate-fadeIn" style={{ animationDelay: `${i * 100}ms` }}>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                {categoryIcons[a.category]}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <Badge variant={categoryVariants[a.category]}>{categoryLabels[a.category]}</Badge>
                  <span className="text-xs text-white/30">{a.date}</span>
                  <span className="text-xs text-white/30">·</span>
                  <span className="text-xs text-white/30">{a.author}</span>
                </div>
                <h3 className="font-semibold mb-2">{a.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{a.content}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
