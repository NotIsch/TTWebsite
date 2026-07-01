import { GlassCard } from '../ui/GlassCard';
import { GraduationCap, FolderOpen, Calendar, FileText } from 'lucide-react';

export function TeamsWidget() {
  const quickLinks = [
    { icon: FolderOpen, label: 'Shared Files', desc: 'Production documents' },
    { icon: Calendar, label: 'Meeting Schedule', desc: 'Weekly tech meetings' },
    { icon: FileText, label: 'Production Plans', desc: 'Current show docs' },
  ];

  return (
    <GlassCard>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 flex items-center justify-center">
          <GraduationCap size={22} className="text-purple-400" />
        </div>
        <div>
          <h2 className="text-lg font-semibold">Microsoft Teams</h2>
          <p className="text-xs text-white/40">Tech Team Channel</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {quickLinks.map((link, i) => (
          <div key={i} className="glass-light rounded-xl p-3 flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors">
            <link.icon size={18} className="text-gold-400" />
            <div>
              <p className="text-sm font-medium">{link.label}</p>
              <p className="text-xs text-white/40">{link.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <a href="#" className="btn-secondary w-full flex items-center justify-center gap-2" onClick={e => e.preventDefault()}>
        <GraduationCap size={16} />
        Open Tech Team Team
      </a>
    </GlassCard>
  );
}
