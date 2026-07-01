import { GlassCard } from '../ui/GlassCard';
import { bookings } from '../../data/techTeam';
import { Badge } from '../ui/Badge';
import { CalendarCheck, Clock, MapPin, User } from 'lucide-react';

export function BookingsList() {
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
        <h1 className="text-2xl font-bold gradient-text">All Bookings</h1>
        <p className="text-sm text-white/50 mt-1">Manage and review all tech support requests</p>
      </div>

      <div className="space-y-4">
        {bookings.map(b => (
          <GlassCard key={b.id}>
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

            <div className="flex flex-wrap gap-2">
              {b.lighting && <Badge variant="blue">Lighting</Badge>}
              {b.projector && <Badge variant="purple">Projector</Badge>}
              {b.microphones > 0 && <Badge variant="green">{b.microphones + ' Mics'}</Badge>}
            </div>

            {b.specialRequirements && (
              <p className="text-sm text-white/60 mt-3 pt-3 border-t border-white/5">
                {b.specialRequirements}
              </p>
            )}
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
