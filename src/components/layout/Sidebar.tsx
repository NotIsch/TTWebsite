import { useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard, CalendarDays, BookOpen, Bell, Users,
  FolderOpen, Search, MessageSquare, GraduationCap
} from 'lucide-react';

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

export function NavLink({ to, icon, label, onClick }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={onClick} className={`nav-link ${isActive ? 'active' : ''}`}>
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export function Sidebar({ role, open, onClose }: { role: string; open: boolean; onClose?: () => void }) {
  const teacherLinks = [
    { to: '/teacher', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { to: '/teacher/book', icon: <CalendarDays size={18} />, label: 'Book Tech Team' },
    { to: '/calendar', icon: <CalendarDays size={18} />, label: 'Events Calendar' },
    { to: '/team', icon: <Users size={18} />, label: 'Meet the Team' },
  ];

  const techTeamLinks = [
    { to: '/techteam', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { to: '/techteam/bookings', icon: <CalendarDays size={18} />, label: 'Bookings' },
    { to: '/guides', icon: <BookOpen size={18} />, label: 'Technical Guides' },
    { to: '/calendar', icon: <CalendarDays size={18} />, label: 'Calendar' },
    { to: '/announcements', icon: <Bell size={18} />, label: 'Announcements' },
    { to: '/team', icon: <Users size={18} />, label: 'Meet the Team' },
    { to: '/resources', icon: <FolderOpen size={18} />, label: 'Resources' },
    { to: '/search', icon: <Search size={18} />, label: 'Search' },
    { to: '/discord', icon: <MessageSquare size={18} />, label: 'Discord' },
    { to: '/teams', icon: <GraduationCap size={18} />, label: 'Microsoft Teams' },
  ];

  const links = role === 'teacher' ? teacherLinks : techTeamLinks;

  return (
    <>
      {open && <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={onClose} />}
      <aside
        className={`fixed lg:sticky top-16 lg:top-16 left-0 z-40 h-[calc(100vh-4rem)] w-64 glass border-r border-gold-500/10 p-4 overflow-y-auto transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="mb-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-white/30">Navigation</h2>
        </div>
        <nav className="space-y-1">
          {links.map(link => (
            <NavLink key={link.to} to={link.to} icon={link.icon} label={link.label} onClick={onClose} />
          ))}
        </nav>

        <div className="mt-8 pt-6 border-t border-white/5">
          <div className="glass-light rounded-lg p-4">
            <p className="text-xs font-medium text-gold-400 mb-1">Quick Stats</p>
            <p className="text-2xl font-bold gradient-text">12</p>
            <p className="text-xs text-white/40">Upcoming Events</p>
          </div>
        </div>
      </aside>
    </>
  );
}
