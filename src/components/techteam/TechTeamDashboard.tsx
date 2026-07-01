import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { bookings } from '../../data/techTeam';
import {
  CalendarCheck, Clock, MapPin, User, CheckCircle, XCircle,
  Clock3, MessageSquare, BookOpen, Users, TrendingUp, Bell
} from 'lucide-react';

export function TechTeamDashboard() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved'>('all');

  const filtered = filter === 'all' ? bookings : bookings.filter(b => b.status === filter);

  const totalUpcoming = bookings.filter(b => b.status === 'approved').length;
  const totalPending = bookings.filter(b => b.status === 'pending').length;

  const stats = [
    { label: 'Upcoming Events', value: totalUpcoming, icon: CalendarCheck, color: 'text-emerald-400' },
    { label: 'Pending Requests', value: totalPending, icon: Clock3, color: 'text-gold-400' },
    { label: 'Team Members', value: 6, icon: Users, color: 'text-blue-400' },
    { label: 'Resources Available', value: 10, icon: BookOpen, color: 'text-purple-400' },
  ];

  const statusBadge = (status: string) => {
    switch (status) {
      case 'approved': return <Badge variant="green">Approved</Badge>;
      case 'rejected': return <Badge variant="red">Rejected</Badge>;
      default: return <Badge variant="gold">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Tech Team Dashboard</h1>
        <p className="text-sm text-white/50 mt-1">Manage bookings, events, and technical operations</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <GlassCard key={i}>
            <div className="flex items-center justify-between mb-3">
              <stat.icon size={20} className={stat.color} />
              <TrendingUp size={16} className="text-emerald-400" />
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-xs text-white/50">{stat.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <CalendarCheck size={18} className="text-gold-400" />
              Booking Requests
            </h2>
            <div className="flex gap-1">
              {(['all', 'pending', 'approved'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                    filter === f ? 'bg-gold-500/20 text-gold-400' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filtered.map(b => (
              <div key={b.id} className="glass-light rounded-xl p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold mb-1">{b.eventName}</h3>
                    <div className="text-xs text-white/50 space-y-1">
                      <div className="flex items-center gap-1"><CalendarCheck size={12} /> {b.date}</div>
                      <div className="flex items-center gap-1"><Clock size={12} /> {b.startTime} - {b.endTime}</div>
                      <div className="flex items-center gap-1"><MapPin size={12} /> {b.location}</div>
                      <div className="flex items-center gap-1"><User size={12} /> {b.teacherName}</div>
                    </div>
                  </div>
                  {statusBadge(b.status)}
                </div>

                <div className="flex flex-wrap gap-2 mb-3">
                  {b.lighting && <Badge variant="blue">Lighting</Badge>}
                  {b.projector && <Badge variant="purple">Projector</Badge>}
                  {b.microphones > 0 && <Badge variant="green">{b.microphones + ' Mics'}</Badge>}
                </div>

                {b.status === 'pending' && (
                  <div className="flex gap-2 pt-3 border-t border-white/5">
                    <button className="btn-primary text-xs py-1.5 px-4 flex items-center gap-1">
                      <CheckCircle size={14} /> Approve
                    </button>
                    <button className="btn-secondary text-xs py-1.5 px-4 flex items-center gap-1">
                      <XCircle size={14} /> Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Bell size={16} className="text-gold-400" />
              Production Countdown
            </h3>
            <div className="text-center py-4">
              <p className="text-3xl font-bold gradient-text">14</p>
              <p className="text-xs text-white/50 mt-1">Days until Summer Concert</p>
              <div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-gold-500 to-gold-600" />
              </div>
              <p className="text-xs text-white/40 mt-2">75% of prep completed</p>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <Users size={16} className="text-gold-400" />
              On Duty Today
            </h3>
            <div className="space-y-3">
              {['Alex Thompson', 'Samira Patel'].map(name => (
                <div key={name} className="flex items-center gap-3 glass-light rounded-lg p-2">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 flex items-center justify-center text-xs font-bold text-gold-400">
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm">{name}</p>
                    <p className="text-xs text-white/40">Available</p>
                  </div>
                  <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
              <MessageSquare size={16} className="text-gold-400" />
              Discord Activity
            </h3>
            <div className="text-xs text-white/50 space-y-2">
              <p className="glass-light rounded-lg p-2">🎭 Summer Concert planning</p>
              <p className="glass-light rounded-lg p-2">💡 EOS programming help needed</p>
              <p className="glass-light rounded-lg p-2">🔧 Main Hall projector issue</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
