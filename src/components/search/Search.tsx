import { useState } from 'react';
import { lightingGuides, visualiserGuides } from '../../data/guides';
import { announcements } from '../../data/announcements';
import { teamMembers } from '../../data/techTeam';
import { resources } from '../../data/resources';
import { Search as SearchIcon, BookOpen, Bell, Users, FolderOpen, FileText } from 'lucide-react';

export function Search() {
  const [query, setQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const allGuides = [...lightingGuides, ...visualiserGuides];

  const results = {
    guides: allGuides.filter(g => g.title.toLowerCase().includes(query.toLowerCase()) || g.content.toLowerCase().includes(query.toLowerCase())),
    announcements: announcements.filter(a => a.title.toLowerCase().includes(query.toLowerCase()) || a.content.toLowerCase().includes(query.toLowerCase())),
    team: teamMembers.filter(m => m.name.toLowerCase().includes(query.toLowerCase()) || m.expertise.some(e => e.toLowerCase().includes(query.toLowerCase()))),
    resources: resources.filter(r => r.title.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase())),
  };

  const totalResults = results.guides.length + results.announcements.length + results.team.length + results.resources.length;

  const ResultCard = ({ icon, title, subtitle, onClick }: { icon: React.ReactNode; title: string; subtitle: string; onClick?: () => void }) => (
    <div className="glass-light rounded-xl p-4 flex items-center gap-3 cursor-pointer hover:bg-white/5 transition-colors" onClick={onClick}>
      <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{title}</p>
        <p className="text-xs text-white/50 truncate">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Search</h1>
        <p className="text-sm text-white/50 mt-1">Search guides, resources, announcements, and team</p>
      </div>

      <div className="relative max-w-2xl">
        <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" />
        <input
          className="input-field pl-12 py-3 text-base"
          placeholder="Search everything..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      {query && (
        <>
          <p className="text-sm text-white/40">{totalResults} results for "{query}"</p>

          <div className="flex gap-2 mb-4 overflow-x-auto">
            {['all', 'guides', 'announcements', 'team', 'resources'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-medium capitalize transition-colors cursor-pointer ${
                  activeTab === tab ? 'bg-gold-500/20 text-gold-400' : 'text-white/40 hover:text-white/70'
                }`}
              >
                {tab} ({tab === 'all' ? totalResults : results[tab as keyof typeof results].length})
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {(activeTab === 'all' || activeTab === 'guides') && results.guides.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen size={14} /> Guides ({results.guides.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.guides.map(g => (
                    <ResultCard key={g.id} icon={<BookOpen size={18} className="text-gold-400" />} title={g.title} subtitle={g.content.slice(0, 80) + '...'} />
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'announcements') && results.announcements.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Bell size={14} /> Announcements ({results.announcements.length})
                </h2>
                <div className="space-y-3">
                  {results.announcements.map(a => (
                    <ResultCard key={a.id} icon={<Bell size={18} className="text-gold-400" />} title={a.title} subtitle={a.content.slice(0, 100) + '...'} />
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'team') && results.team.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Users size={14} /> Team Members ({results.team.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.team.map(m => (
                    <ResultCard key={m.id} icon={<Users size={18} className="text-gold-400" />} title={m.name} subtitle={m.role + ' · ' + m.expertise.join(', ')} />
                  ))}
                </div>
              </div>
            )}

            {(activeTab === 'all' || activeTab === 'resources') && results.resources.length > 0 && (
              <div>
                <h2 className="text-sm font-semibold text-white/40 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FolderOpen size={14} /> Resources ({results.resources.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {results.resources.map(r => (
                    <ResultCard key={r.id} icon={<FileText size={18} className="text-gold-400" />} title={r.title} subtitle={r.description} />
                  ))}
                </div>
              </div>
            )}

            {totalResults === 0 && (
              <div className="text-center py-12">
                <SearchIcon size={40} className="mx-auto text-white/20 mb-4" />
                <p className="text-white/40">No results found for "{query}"</p>
              </div>
            )}
          </div>
        </>
      )}

      {!query && (
        <div className="text-center py-12">
          <SearchIcon size={48} className="mx-auto text-white/10 mb-4" />
          <p className="text-white/30">Type to search across all content</p>
        </div>
      )}
    </div>
  );
}
