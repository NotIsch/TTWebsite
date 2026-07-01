import { useAuth } from '../../contexts/AuthContext';
import { Users, Wrench } from 'lucide-react';

export function RoleSelector() {
  const { setRole } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-navy-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold gradient-text mb-2">Welcome</h1>
          <p className="text-white/50 text-sm">Choose how you'd like to use the portal</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button
            onClick={() => setRole('teacher')}
            className="glass rounded-2xl p-8 text-left transition-all duration-300 cursor-pointer group hover:border-gold-500/40 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Users size={28} className="text-blue-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">👨‍🏫 Teacher</h2>
            <p className="text-sm text-white/50 mb-4">Request technical support for your events, assemblies, and productions</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">Book Tech Team</span>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">View Calendar</span>
            </div>
          </button>

          <button
            onClick={() => setRole('techteam')}
            className="glass rounded-2xl p-8 text-left transition-all duration-300 cursor-pointer group hover:border-gold-500/40 hover:-translate-y-1"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 border border-gold-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Wrench size={28} className="text-gold-400" />
            </div>
            <h2 className="text-xl font-bold mb-2">🎛️ Tech Team</h2>
            <p className="text-sm text-white/50 mb-4">Manage bookings, access guides, and coordinate technical production</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-gold-500/10 text-gold-400">Dashboard</span>
              <span className="text-xs px-2 py-1 rounded-full bg-gold-500/10 text-gold-400">Technical Guides</span>
              <span className="text-xs px-2 py-1 rounded-full bg-gold-500/10 text-gold-400">Resources</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
