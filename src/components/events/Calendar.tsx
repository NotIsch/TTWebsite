import { useState } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { calendarEvents } from '../../data/techTeam';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const typeColors: Record<string, string> = {
  production: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  concert: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  rehearsal: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  meeting: 'bg-gold-500/20 text-gold-400 border-gold-500/30',
  training: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  booking: 'bg-rose-500/20 text-rose-400 border-rose-500/30',
};

const typeLabels: Record<string, string> = {
  production: 'Production',
  concert: 'Concert',
  rehearsal: 'Rehearsal',
  meeting: 'Meeting',
  training: 'Training',
  booking: 'Booking',
};

export function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(6); // July
  const [currentYear, setCurrentYear] = useState(2026);

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();
  const monthName = new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });

  const getEventsForDay = (day: number) => {
    const dateStr = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return calendarEvents.filter(e => e.date === dateStr);
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(y => y - 1);
    } else {
      setCurrentMonth(m => m - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(y => y + 1);
    } else {
      setCurrentMonth(m => m + 1);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Events Calendar</h1>
        <p className="text-sm text-white/50 mt-1">Productions, concerts, rehearsals, and training sessions</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
              <ChevronLeft size={18} />
            </button>
            <h2 className="text-lg font-semibold">{monthName} {currentYear}</h2>
            <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer">
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="text-center text-xs text-white/30 py-2">{d}</div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dayEvents = getEventsForDay(day);
              const isToday = day === 1 && currentMonth === 6 && currentYear === 2026;

              return (
                <div
                  key={day}
                  className={`aspect-square rounded-xl p-1 flex flex-col transition-colors ${
                    isToday ? 'bg-gold-500/20 border border-gold-500/30' : 'hover:bg-white/5'
                  } ${dayEvents.length > 0 ? 'cursor-pointer' : ''}`}
                >
                  <span className={`text-xs font-medium ${isToday ? 'text-gold-400' : ''}`}>{day}</span>
                  <div className="flex flex-col gap-0.5 mt-auto">
                    {dayEvents.slice(0, 2).map(e => (
                      <div key={e.id} className={`text-[8px] px-1 py-0.5 rounded ${typeColors[e.type]} truncate`}>
                        {e.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <span className="text-[8px] text-white/40">+{dayEvents.length - 2} more</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </GlassCard>

        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-sm font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {calendarEvents.map(e => (
                <div key={e.id} className="glass-light rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full ${typeColors[e.type]}`}>
                      {typeLabels[e.type]}
                    </span>
                    <span className="text-xs text-white/40">{e.date}</span>
                  </div>
                  <p className="text-sm font-medium mt-1">{e.title}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-semibold mb-3">Legend</h3>
            <div className="space-y-2">
              {Object.entries(typeColors).map(([key, color]) => (
                <div key={key} className="flex items-center gap-2 text-sm">
                  <span className={`w-3 h-3 rounded ${color.split(' ')[0]}`} />
                  <span className="text-white/60">{typeLabels[key]}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
