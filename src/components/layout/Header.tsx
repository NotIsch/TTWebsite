import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Bell, Moon, Sun, LogOut, Menu, X } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useNotifications } from '../../contexts/NotificationContext';


interface HeaderProps {
  onMenuToggle: () => void;
  menuOpen: boolean;
}

export function Header({ onMenuToggle, menuOpen }: HeaderProps) {
  const { user, role, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const { notifications, markRead, unreadCount } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <header className="glass sticky top-0 z-50 px-4 lg:px-8 h-16 flex items-center justify-between border-b border-gold-500/10">
      <div className="flex items-center gap-4">
        <button onClick={onMenuToggle} className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center text-navy-900 font-bold text-xs">
            KS
          </div>
          <div className="hidden sm:block">
            <h1 className="text-sm font-bold gradient-text">King's Tech Portal</h1>
            <p className="text-xs text-white/40 capitalize">{role} Dashboard</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-lg hover:bg-white/5 transition-colors relative"
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-gold-500 text-navy-900 text-[10px] font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setShowNotifications(false)} />
              <div className="glass absolute right-0 top-12 w-80 rounded-xl p-4 z-50 max-h-96 overflow-y-auto">
                <h3 className="text-sm font-semibold mb-3">Notifications</h3>
                {notifications.length === 0 ? (
                  <p className="text-sm text-white/40">No notifications</p>
                ) : (
                  notifications.map(n => (
                    <div
                      key={n.id}
                      onClick={() => markRead(n.id)}
                      className={`p-3 rounded-lg mb-2 cursor-pointer transition-colors ${n.read ? 'opacity-50' : 'bg-gold-500/10'}`}
                    >
                      <p className="text-sm">{n.message}</p>
                      <p className="text-xs text-white/40 mt-1">{new Date(n.timestamp).toLocaleDateString()}</p>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>

        {user && (
          <div className="flex items-center gap-3 ml-2">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">{user.name}</p>
              <p className="text-xs text-white/40">Signed in</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/30 overflow-hidden">
              <img src={user.photo} alt="" className="w-full h-full object-cover" />
            </div>
            <button onClick={logout} className="p-2 rounded-lg hover:bg-white/5 transition-colors" title="Sign out">
              <LogOut size={18} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
