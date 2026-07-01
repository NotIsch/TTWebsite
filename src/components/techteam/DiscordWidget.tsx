import { GlassCard } from '../ui/GlassCard';
import { MessageSquare, Users, Volume2, Activity } from 'lucide-react';

export function DiscordWidget() {
  const onlineMembers = [
    { name: 'Alex Thompson', role: 'Head of Tech', status: 'online' },
    { name: 'Samira Patel', role: 'Lighting', status: 'online' },
    { name: 'James Wilson', role: 'Sound', status: 'idle' },
    { name: 'Emily Chen', role: 'Stage Manager', status: 'online' },
    { name: 'Marcus Brown', role: 'AV', status: 'offline' },
  ];

  const voiceChannels = ['🎭 Production Chat', '🎵 Music Bot', '🔧 Tech Support'];

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <MessageSquare size={18} className="text-gold-400" />
          Discord
        </h2>
        <span className="flex items-center gap-1 text-xs text-emerald-400">
          <Activity size={12} />
          {onlineMembers.filter(m => m.status !== 'offline').length} Online
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3 flex items-center gap-2">
          <Users size={12} /> Online Members
        </h3>
        <div className="space-y-2">
          {onlineMembers.map(m => (
            <div key={m.name} className="flex items-center gap-3 glass-light rounded-lg p-2">
              <div className={`w-2 h-2 rounded-full ${
                m.status === 'online' ? 'bg-emerald-400' :
                m.status === 'idle' ? 'bg-gold-400' : 'bg-white/20'
              }`} />
              <div className="flex-1">
                <p className="text-sm">{m.name}</p>
                <p className="text-xs text-white/40">{m.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-white/30 mb-3 flex items-center gap-2">
          <Volume2 size={12} /> Voice Channels
        </h3>
        <div className="space-y-1">
          {voiceChannels.map(ch => (
            <div key={ch} className="text-sm text-white/60 py-1.5 px-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
              {ch}
            </div>
          ))}
        </div>
      </div>

      <a
        href="#"
        className="btn-primary w-full flex items-center justify-center gap-2"
        onClick={e => { e.preventDefault(); window.open('https://discord.gg/kingsschool', '_blank'); }}
      >
        <MessageSquare size={16} />
        Join Server
      </a>
    </GlassCard>
  );
}
