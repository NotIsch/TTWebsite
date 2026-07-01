import { createContext, useContext, useState, type ReactNode } from 'react';

interface BookingNotification {
  id: number;
  message: string;
  read: boolean;
  timestamp: string;
}

interface NotificationContextType {
  notifications: BookingNotification[];
  addNotification: (message: string) => void;
  markRead: (id: number) => void;
  unreadCount: number;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export function NotificationProvider({ children }: { children: ReactNode }) {
  const [notifications, setNotifications] = useState<BookingNotification[]>([
    { id: 1, message: "New booking: Year 7 Assembly by Mr. Davis", read: false, timestamp: new Date().toISOString() }
  ]);

  const addNotification = (message: string) => {
    setNotifications(prev => [{
      id: Date.now(),
      message,
      read: false,
      timestamp: new Date().toISOString()
    }, ...prev]);
  };

  const markRead = (id: number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, markRead, unreadCount }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotifications must be used within NotificationProvider');
  return context;
}
