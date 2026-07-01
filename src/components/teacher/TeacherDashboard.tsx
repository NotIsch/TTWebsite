import { useState } from 'react';
import { useNotifications } from '../../contexts/NotificationContext';
import { GlassCard } from '../ui/GlassCard';
import { bookings, calendarEvents } from '../../data/techTeam';
import { Calendar, Clock, MapPin, Mic, Lightbulb, Presentation, FileText, Send, CheckCircle, XCircle, Clock3 } from 'lucide-react';

const eventTypes = [
  'Assembly', 'School Production', 'Concert', 'Open Evening',
  'Award Ceremony', 'Guest Speaker', 'Drama Rehearsal',
  'Lighting Programming', 'Sound Support'
];

export function TeacherDashboard() {
  const [form, setForm] = useState({
    eventName: '', date: '', startTime: '', endTime: '',
    location: '', eventType: '', microphones: 0,
    lighting: false, projector: false, specialRequirements: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const { addNotification } = useNotifications();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addNotification(`New booking: ${form.eventName}`);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ eventName: '', date: '', startTime: '', endTime: '', location: '', eventType: '', microphones: 0, lighting: false, projector: false, specialRequirements: '' });
    }, 3000);
  };

  const update = (field: string, value: string | boolean | number) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const isDateBusy = (date: string) => {
    return calendarEvents.some(e => e.date === date);
  };

  const statusIcon = (status: string) => {
    switch (status) {
      case 'approved': return <CheckCircle size={14} className="text-emerald-400" />;
      case 'rejected': return <XCircle size={14} className="text-red-400" />;
      default: return <Clock3 size={14} className="text-gold-400" />;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Teacher Dashboard</h1>
        <p className="text-sm text-white/50 mt-1">Request technical support for your events</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2">
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <Calendar size={18} className="text-gold-400" />
            Book the Tech Team
          </h2>

          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-emerald-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Booking Submitted!</h3>
              <p className="text-sm text-white/50">The Tech Team has been notified. You'll receive a confirmation soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm text-white/60 mb-1.5">Event Name</label>
                  <input className="input-field" placeholder="e.g. Summer Concert" value={form.eventName} onChange={e => update('eventName', e.target.value)} required />
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Date</label>
                  <div className="relative">
                    <input type="date" className="input-field" value={form.date} onChange={e => update('date', e.target.value)} required />
                    {form.date && isDateBusy(form.date) && (
                      <p className="text-xs text-gold-400 mt-1">⚠️ This date has existing events</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Event Type</label>
                  <select className="input-field" value={form.eventType} onChange={e => update('eventType', e.target.value)} required>
                    <option value="" className="bg-navy-800">Select type...</option>
                    {eventTypes.map(t => <option key={t} value={t} className="bg-navy-800">{t}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-1.5">Start Time</label>
                  <input type="time" className="input-field" value={form.startTime} onChange={e => update('startTime', e.target.value)} required />
                </div>
                <div>
                  <label className="block text-sm text-white/60 mb-1.5">End Time</label>
                  <input type="time" className="input-field" value={form.endTime} onChange={e => update('endTime', e.target.value)} required />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-white/60 mb-1.5">Location</label>
                  <input className="input-field" placeholder="e.g. Main Hall, Drama Studio" value={form.location} onChange={e => update('location', e.target.value)} required />
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <h3 className="text-sm font-medium mb-3">Technical Requirements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-1.5 flex items-center gap-2">
                      <Mic size={14} /> Number of Microphones
                    </label>
                    <input type="number" min="0" max="20" className="input-field" value={form.microphones} onChange={e => update('microphones', parseInt(e.target.value) || 0)} />
                  </div>
                  <div className="flex items-end gap-4 pb-2">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.lighting} onChange={e => update('lighting', e.target.checked)} className="accent-gold-500" />
                      <Lightbulb size={14} className="text-gold-400" />
                      <span className="text-sm">Lighting Required</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" checked={form.projector} onChange={e => update('projector', e.target.checked)} className="accent-gold-500" />
                      <Presentation size={14} className="text-gold-400" />
                      <span className="text-sm">Projector Required</span>
                    </label>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-white/60 mb-1.5 flex items-center gap-2">
                      <FileText size={14} /> Special Requirements
                    </label>
                    <textarea className="input-field" rows={3} placeholder="Any additional requirements..." value={form.specialRequirements} onChange={e => update('specialRequirements', e.target.value)} />
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-primary flex items-center gap-2">
                <Send size={16} />
                Submit Booking Request
              </button>
            </form>
          )}
        </GlassCard>

        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <Calendar size={16} className="text-gold-400" />
              Your Bookings
            </h3>
            {bookings.filter(b => b.status !== 'rejected').map(b => (
              <div key={b.id} className="glass-light rounded-lg p-3 mb-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">{b.eventName}</span>
                  {statusIcon(b.status)}
                </div>
                <div className="space-y-1 text-xs text-white/50">
                  <div className="flex items-center gap-1"><Calendar size={12} /> {b.date}</div>
                  <div className="flex items-center gap-1"><Clock size={12} /> {b.startTime} - {b.endTime}</div>
                  <div className="flex items-center gap-1"><MapPin size={12} /> {b.location}</div>
                </div>
              </div>
            ))}
          </GlassCard>

          <GlassCard>
            <h3 className="text-sm font-semibold mb-3">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 rounded-lg glass-light text-sm hover:bg-white/5 transition-colors">
                View Tech Team Availability
              </button>
              <button className="w-full text-left px-3 py-2 rounded-lg glass-light text-sm hover:bg-white/5 transition-colors">
                Contact Tech Team Lead
              </button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
