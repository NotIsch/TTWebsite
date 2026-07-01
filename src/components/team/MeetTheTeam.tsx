import { GlassCard } from '../ui/GlassCard';
import { Badge } from '../ui/Badge';
import { teamMembers } from '../../data/techTeam';
import { Star, Award, Wrench } from 'lucide-react';

export function MeetTheTeam() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Meet the Team</h1>
        <p className="text-sm text-white/50 mt-1">King's School Tech Team members and their expertise</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamMembers.map(member => (
          <GlassCard key={member.id}>
            <div className="text-center mb-4">
              <div className="w-20 h-20 rounded-full mx-auto mb-3 bg-gradient-to-br from-gold-500/20 to-gold-600/20 border-2 border-gold-500/30 overflow-hidden">
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-gold-400">{member.role}</p>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <div className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5">
                  <Wrench size={12} />
                  Expertise
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.expertise.map(e => (
                    <Badge key={e} variant="navy">{e}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5">
                  <Star size={12} />
                  Favourite Equipment
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.favouriteEquipment.map(eq => (
                    <Badge key={eq} variant="gold">{eq}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-xs text-white/40 mb-1.5">
                  <Award size={12} />
                  Certifications
                </div>
                <div className="flex flex-wrap gap-1">
                  {member.certifications.map(c => (
                    <Badge key={c} variant="green">{c}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
