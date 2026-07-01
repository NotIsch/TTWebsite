import { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { NotificationProvider } from './contexts/NotificationContext';
import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { LoginScreen } from './components/auth/LoginScreen';
import { RoleSelector } from './components/auth/RoleSelector';
import { TeacherDashboard } from './components/teacher/TeacherDashboard';
import { TechTeamDashboard } from './components/techteam/TechTeamDashboard';
import { LightingGuide } from './components/guides/LightingGuide';
import { Calendar } from './components/events/Calendar';
import { Announcements } from './components/announcements/Announcements';
import { MeetTheTeam } from './components/team/MeetTheTeam';
import { Resources } from './components/resources/Resources';
import { Search } from './components/search/Search';
import { DiscordPage, TeamsPage } from './components/techteam/ExtraPages';
import { BookingsList } from './components/techteam/BookingsList';

function AppContent() {
  const { isAuthenticated, role } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  if (!isAuthenticated) return <LoginScreen />;
  if (!role) return <RoleSelector />;

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header onMenuToggle={() => setSidebarOpen(!sidebarOpen)} menuOpen={sidebarOpen} />
        <div className="flex flex-1">
          <Sidebar role={role} open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="flex-1 p-4 lg:p-8 overflow-y-auto" onClick={() => setSidebarOpen(false)}>
            <Routes>
              <Route path="/teacher" element={role === 'teacher' ? <TeacherDashboard /> : <Navigate to="/techteam" />} />
              <Route path="/teacher/book" element={role === 'teacher' ? <TeacherDashboard /> : <Navigate to="/techteam" />} />
              <Route path="/techteam" element={role === 'techteam' ? <TechTeamDashboard /> : <Navigate to="/teacher" />} />
              <Route path="/techteam/bookings" element={role === 'techteam' ? <BookingsList /> : <Navigate to="/teacher" />} />
              <Route path="/guides" element={role === 'techteam' ? <LightingGuide /> : <Navigate to="/teacher" />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/announcements" element={role === 'techteam' ? <Announcements /> : <Navigate to="/teacher" />} />
              <Route path="/team" element={<MeetTheTeam />} />
              <Route path="/resources" element={role === 'techteam' ? <Resources /> : <Navigate to="/teacher" />} />
              <Route path="/search" element={role === 'techteam' ? <Search /> : <Navigate to="/teacher" />} />
              <Route path="/discord" element={role === 'techteam' ? <DiscordPage /> : <Navigate to="/teacher" />} />
              <Route path="/teams" element={role === 'techteam' ? <TeamsPage /> : <Navigate to="/teacher" />} />
              <Route path="*" element={<Navigate to={`/${role}`} />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <NotificationProvider>
          <AppContent />
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
